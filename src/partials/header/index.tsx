import Image from 'next/image';
import React, { ReactElement } from 'react';

import styles from './header.module.scss';

interface HeaderProperties {
  readonly subtitle?: string;
}

export function Header(props: HeaderProperties): ReactElement {
  return <header className={styles.main}>
    <figure>
      <Image src="/img/misioplusie.webp" alt="Gildia Misioplusie" height={128} width={128} />
      <figcaption>
        <h1>
          Misioplusie {props.subtitle ? `- ${props.subtitle}` : ''}
          <small className="block">Burning Legion (EU) - Horde</small>
        </h1>
      </figcaption>
    </figure>
  </header>;
}
