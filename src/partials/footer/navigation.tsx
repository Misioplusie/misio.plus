import Link from 'next/link';
import React, { ReactElement } from 'react';

import styles from './footer.module.scss';

export function Navigation(): ReactElement {
  return <nav className={styles.main}>
    <ul>
      <li>
        <Link href="/">
          Strona główna
        </Link>
      </li>
      <li>
        <Link href="/raid">
          Rajdy
        </Link>
      </li>
      <li>
        <a
          href="https://worldofwarcraft.com/en-gb/guild/EU/burning-legion/misioplusie"
          target="_blank"
        >
          Armory
        </a>
      </li>
      <li>
        <a
          href="https://www.warcraftlogs.com/guild/calendar/463609/"
          target="_blank"
        >
          Warcraft Logs
        </a>
      </li>
      <li>
        <a
          href="https://raider.io/guilds/eu/burning-legion/Misioplusie"
          target="_blank"
        >
          RadierIO
        </a>
      </li>
    </ul>
  </nav>;
}
