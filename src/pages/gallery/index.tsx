import { readdir } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import { DateTime, Settings } from 'luxon';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import { Page } from '../../components/page';

import styles from './styles.module.scss';

Settings.defaultLocale = 'pl';

const readDir = promisify(readdir);

interface GalleryElement {
  readonly filename: string;
  readonly thumbnail: string;
  readonly timestamp: number;
}

interface GalleryProperties {
  readonly gallery: readonly GalleryElement[];
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<GalleryProperties>> => {
  const filenames = await readDir(resolve('public', 'gallery'));

  const elements = await Promise.all(filenames.filter(name => name !== 'min').map(async filename => {
    const parseName = filename.match('[0-9]{4}-[0-9]{2}-[0-9]{2}');
    const timestamp = parseName ? DateTime.fromISO(parseName[0]) : DateTime.local();

    return await Promise.resolve({
      filename: `/gallery/${filename}`,
      timestamp: timestamp.toMillis(),
    });
  }));

  return {
    props: {
      gallery: elements.sort((itemA, itemB) => itemB.timestamp - itemA.timestamp),
    },
  };
};

export default function Gallery(props: GalleryProperties): ReactElement {
  return <Page subtitle="Galeria" slug='gallery'>
    <Head>
      {props.gallery.map(item => <link
        key={item.filename}
        rel="preload"
        href={item.filename}
        as="image" />)}
    </Head>

    <main className={styles.gallery}>
      {props.gallery.map(item => <div key={item.filename}>
        <a href={item.filename} target="_blank">
          <Image
            alt={`Zrobione ${DateTime.fromMillis(item.timestamp).toLocaleString(DateTime.DATE_FULL)}`}
            height={405}
            src={item.filename}
            width={720}
          />
        </a>
      </div>)}
    </main>
  </Page>;
}
