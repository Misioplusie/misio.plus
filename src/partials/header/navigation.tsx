import Link from 'next/link';
import React, { ReactElement } from 'react';

import styles from './header.module.scss';

interface NavigationProperties {
  readonly page?: string;
}

export function Navigation(props: NavigationProperties): ReactElement {
  return <nav className={styles.main}>
    <ul>
      <li className={props.page === 'home' ? styles.active : ''}>
        <Link href="/">
          Strona główna
        </Link>
      </li>
      <li className={props.page === 'raid' ? styles.active : ''}>
        <Link href="/raid">
          Rajdy
        </Link>
      </li>
      <li className={props.page === 'gallery' ? styles.active : ''}>
        <Link href="/gallery">
          Galeria
        </Link>
      </li>
    </ul>
  </nav>;
}
