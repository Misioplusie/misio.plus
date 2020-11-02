import { DateTime, Settings } from 'luxon';
import React, { ReactElement } from 'react';

import galleryFilenames from '../../public/gallery.json';
import { Footer, Header } from '../partials';

import styles from './gallery.module.scss';

Settings.defaultLocale = 'pl';

export default function Gallery(): ReactElement {
  const galleryObjects = galleryFilenames.map(filename => {
    const parseName = filename.match('[0-9]{4}-[0-9]{2}-[0-9]{2}');

    return {
      filename,
      timestamp: parseName ? DateTime.fromISO(parseName[0]) : DateTime.local(),
    };
  })
    .sort((itemA, itemB) => itemB.timestamp.toMillis() - itemA.timestamp.toMillis());

  return <>
    <Header subtitle="Galeria" page='gallery' />

    <main className={styles.gallery}>
      {galleryObjects.map(item => <div key={item.filename}>
        <a href={`/gallery/${item.filename}`} target="_blank">
          <img
            src={`/gallery/${item.filename}`}
            alt={`Zrobione ${item.timestamp.toLocaleString(DateTime.DATE_FULL)}`} />
        </a>
      </div>)}
    </main>

    <Footer />
  </>;
}
