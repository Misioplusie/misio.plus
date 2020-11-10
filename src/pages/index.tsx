import React, { ReactElement } from 'react';

import { Navigation } from '../components/header/navigation';

import styles from './styles.module.scss';

export default function Home(): ReactElement {
  return <>
    <main className={styles.home}>
      <section>
        <figure>
          <img src="/img/misioplusie.webp" alt="Gildia Misioplusie" />

          <figcaption>
            <h1>
              Misioplusie
              <small className="block">Burning Legion (EU) - Horde</small>
            </h1>
          </figcaption>
        </figure>
        <Navigation hideHomepage={true} />
      </section>
    </main>
  </>;
}
