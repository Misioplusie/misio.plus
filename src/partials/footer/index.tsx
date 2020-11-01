import React, { ReactElement } from 'react';

import styles from './footer.module.scss';
import { Navigation } from './navigation';

export function Footer(): ReactElement {
  return <footer className={styles.main}>
    <Navigation />
    <p>
      <small>Copyright &copy; {(new Date).getFullYear()} Misioplusie</small>
    </p>
  </footer>;
}
