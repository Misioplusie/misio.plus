import React, { ReactElement } from 'react';

import styles from './footer.module.scss';

export function Footer(): ReactElement {
  return <footer className={styles.main}>
    <nav>
      <ul>
        <li>
          <a href="/">Strona główna</a>
        </li>
      </ul>
    </nav>
  </footer>;
}
