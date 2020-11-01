import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import styles from './header.module.scss';

interface HeaderProperties {
  readonly page?: string;
  readonly subtitle?: string;
}

export function Header(props: HeaderProperties): ReactElement {
  return <header className={styles.main}>
    <Image src="/img/misioplusie.webp" alt="Gildia Misioplusie" height={128} width={128} />

    <section>
      <h1>
        Misioplusie {props.subtitle ? `- ${props.subtitle}` : ''}
        <small className="visually-hidden">Burning Legion (EU) - Horde</small>
      </h1>

      <nav>
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
        </ul>
      </nav>
    </section>
  </header>;
}
