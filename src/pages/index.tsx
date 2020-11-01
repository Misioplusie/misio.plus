import Image from 'next/image';
import React, { ReactElement } from 'react';

import styles from './index.module.scss';

export default function Home(): ReactElement {
  return <main className={styles.home}>
    <figure>
      <Image src="/img/misioplusie.webp" alt="Gildia Misioplusie" height={128} width={128} />

      <figcaption>
        <h1>
          Misioplusie
          <small className="block">Burning Legion (EU) - Horde</small>
        </h1>
      </figcaption>
    </figure>
  </main>;
}
