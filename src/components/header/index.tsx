import React, { ReactElement } from 'react';

import styles from './header.module.scss';
import { Navigation } from './navigation';

interface HeaderProperties {
  readonly page?: string;
  readonly subtitle?: string;
}

export function Header(props: HeaderProperties): ReactElement {
  return <header className={styles.main}>
    <img src="/img/misioplusie.webp" alt="Gildia Misioplusie" />

    <section>
      <h1>
        Misioplusie {props.subtitle ? `- ${props.subtitle}` : ''}
        <small className="visually-hidden">Burning Legion (EU) - Horde</small>
      </h1>

      <Navigation page={props.page} />
    </section>
  </header>;
}
