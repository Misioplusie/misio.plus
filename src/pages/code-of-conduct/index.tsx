import React, { ReactElement } from 'react';

import { Footer, Header } from '../../partials';

import styles from './styles.module.scss';

export default function CoC(): ReactElement {
  return <>
    <Header subtitle="Regulamin" page='coc' />

    <main className={styles.main}>
      <h2>
        Rangi gildijne {}
        <img src="/img/bear.svg" alt="Tuli Miś" />
      </h2>

      <ul>
        <li><strong>Orzeszek</strong> - GuildMaster</li>
        <li><strong>Nugat</strong> - Oficer</li>
        <li><strong>Karmelek</strong> - Oficer odpowiedzialny za zebranie i poprowadzenie rajdu</li>
        <li><strong>Chrupek</strong> - Osoba z długim stażem w gildii z zasługami uznanymi przez oficerów</li>
        <li><strong>Czekoladka</strong> - Osoba często pojawiająca się na rajdach</li>
        <li><strong>Ciastek</strong> - Osoba uczestnicząca w gildyjnym pvp</li>
        <li><strong>Pierniczek</strong> - Osoba angażująca się w życie gildii</li>
        <li><strong>Chips</strong> - Członek gildii</li>
        <li><strong>Pianka</strong> - Alt</li>
        <li><strong>Cukier</strong> - Domyślna ranga po zaproszeniu</li>
      </ul>

      <h2>Regulamin gildii</h2>

      <ol>
        <li>Szanuj innych członków gildii.</li>
        <li>Nie wyzywaj, nie obrażaj, nie wyśmiewaj nikogo na czacie gildii.</li>
        <li>Nie nadużywaj przekleństw.</li>
        <li>Nie spamuj, nie nadużywaj CapsLocka.</li>
        <li>Nie wstawiaj linków do porno, screamerów i innych tego typu rzeczy.</li>
        <li>Traktuj czat i osoby na nim tak jak sam chciałbyś być traktowany.</li>
        <li>Reprezentuj gildię godnie.</li>
      </ol>
    </main>

    <Footer />
  </>;
}
