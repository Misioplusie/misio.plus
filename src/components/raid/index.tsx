import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';

import { slugify } from '../../helpers/slugify';
import { Page } from '../page';

import styles from './styles.module.scss';

interface PaginationProperties {
  readonly next?: string;
  readonly previous?: string;
  readonly raid: string;
}

interface RaidPageProperties extends PaginationProperties {
  readonly children: ReactNode;
  readonly encounter?: string;
}

interface DifficultyProperties {
  readonly children: ReactNode;
  readonly title: string;
}

interface ModelProperties {
  readonly model: string;
  readonly name: string;
}

interface EncounterProperties extends ModelProperties {
  readonly children: ReactNode;
  readonly open?: boolean;
  readonly raid: string;
}

export interface BossProperties {
  readonly open?: boolean;
}

export function Difficulty({ children, title }: DifficultyProperties): ReactElement {
  return <>
    <dt>
      {title}
    </dt>
    <dd>
      {children}
    </dd>
  </>;
}

export function Model(props: ModelProperties): ReactElement {
  return <div className={styles.model}>
    <img
      src={`https://wow.zamimg.com/uploads/screenshots/normal/${props.model}.jpg?maxWidth=768`}
      alt={`Model Bossa: ${props.name}`} />
  </div>;
}

export function Encounter(props: EncounterProperties): ReactElement {
  const slug = slugify(props.name);

  return <details id={slug} open={props.open}>
    <summary>
      <h3>
        {props.name} {}
        <small>
          <Link
            href={{
              pathname: `/raid/${slugify(props.raid)}/[slug]`,
              query: { slug },
            }}
            // title={`Bezpośredni link do bossa: ${props.name}`}
          >
            [bezpośrednik]
          </Link>
        </small>
      </h3>
    </summary>

    {props.children}
  </details>;
}

function Announcement(): ReactElement {
  return <div className="information">
    <h3>Rekrutacja na rajdy trwa!</h3>

    <p>Jeśli interesuje Cię rajdowanie z nami, napisz śmiało a na pewno, dojdziemy do porozumienia!</p>

    <p className="collapsed">Dni Rajdowe:</p>

    <p className="collapsed">
      <span className="visually-hidden">Dni rajdowe:</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      Poniedziałek, Środa - <strong>Dulamari</strong>
    </p>

    <p className="collapsed">
      <span className="visually-hidden">Dni rajdowe:</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      Sobota, Niedziela - <strong>Aurumya</strong>
    </p>

    <p>
      Rajd dla {}
      <abbr title={'osób jeszcze zapoznających się z mechaniką, samą grą, bądź też cierpliwych i chętnych '
        + 'nadgonić z poziomem itemów'}>
        Gałganów
      </abbr> - <strong>Matronalis</strong>
    </p>

    <p className="collapsed">
      Kontakt dodatkowy: {}
      <strong>Liferie</strong>, {}
      <strong>Cefeon</strong>, {}
      <strong>Melonek</strong>, {}
      <strong>Narkoromek</strong>
    </p>

    <p>
      <em>
        Każdy z nas ma alty bądź może nie być dostępny w danej chwili w grze.
        Pytajcie na czacie lub Discordzie a zapewniam, że nikt nie zostanie umyślnie zignorowany.
      </em>
    </p>
  </div>;
}

function Pagination(props: PaginationProperties): ReactElement {
  if (!props.next && !props.previous) {
    return <></>;
  }

  return  <nav className={styles.pagination}>
    <ul>
      <li className={styles.previous}>
        {props.previous
          ? <Link href={`/raid/${slugify(props.raid)}/${slugify(props.previous)}`}>
              {`Poprzedni boss: ${props.previous}`}
            </Link>
        : null}
      </li>
      <li className={styles.next}>
        {props.next
          ? <Link href={`/raid/${slugify(props.raid)}/${slugify(props.next)}`}>
              {`Następny boss: ${props.next}`}
            </Link>
        : null}
      </li>
    </ul>
  </nav>;
}

export function RaidPage(props: RaidPageProperties): ReactElement {
  return <Page subtitle={`Rajd - ${props.raid}`} slug='raid'>
    <main className={styles.raid}>
      <Announcement />

      <nav className={styles.submenu}>
        <ul>
          <li>
            <Link href="/raid/rules">Zasady i oczekiwania</Link>
          </li>
          <li>
            <Link href="/raid/castle-nathria">Castle Nathria</Link>
          </li>
        </ul>
      </nav>

      <h1>
        <span className="visually-hidden">Rajd: </span>
        {props.raid}
      </h1>

      <Pagination {...props} />

      {props.children}

      <Pagination {...props} />
    </main>
  </Page>;
}

export function Video({ code }: { readonly code: string }): ReactElement {
  return <section className={styles.video}>
    <h3>Wideo tutorial</h3>
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${code}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  </section>;
}
