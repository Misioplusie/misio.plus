import { readdir } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import { DateTime, Settings } from 'luxon';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import { Footer, Header } from '../partials';

import styles from './gallery.module.scss';

Settings.defaultLocale = 'pl';

const readDir = promisify(readdir);

interface GalleryElement {
  readonly filename: string;
  readonly timestamp: number;
}

interface GalleryProperties {
  readonly gallery: readonly GalleryElement[];
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<GalleryProperties>> => {
  const filenames = await readDir(resolve('public', 'gallery'));
  const elements = filenames.map(filename => {
    const parseName = filename.match('[0-9]{4}-[0-9]{2}-[0-9]{2}');
    const timestamp = parseName ? DateTime.fromISO(parseName[0]) : DateTime.local();

    return {
      filename,
      timestamp: timestamp.toMillis(),
    };
  });

  return {
    props: {
      gallery: elements.sort((itemA, itemB) => itemB.timestamp - itemA.timestamp),
    },
  };
};

export default function Gallery(props: GalleryProperties): ReactElement {
  return <>
    <Head>
      {props.gallery.map(item => <link
        key={item.filename}
        rel="preload"
        href={`/gallery/${item.filename}`}
        as="image" />)}
    </Head>

    <Header subtitle="Galeria" page='gallery' />

    <main className={styles.gallery}>
      {props.gallery.map(item => <div key={item.filename}>
        <a href={`/gallery/${item.filename}`} target="_blank">
          <img
            src={`/gallery/${item.filename}`}
            alt={`Zrobione ${DateTime.fromMillis(item.timestamp).toLocaleString(DateTime.DATE_FULL)}`} />
        </a>
      </div>)}
    </main>

    <Footer />
  </>;
}
