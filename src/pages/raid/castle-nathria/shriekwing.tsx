import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as next } from './huntsman-altimor';

import { name as raidName } from '.';

export const model = '941695';
export const name = 'Shriekwing';
export const video = 'o48DcaBkTnI';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <p>Boss posiada dwie fazy.</p>

    <h3>Faza pierwsza:</h3>

    <dl>
      <Difficulty title="Poziom Normalny">
        <ul>
          <li>
            Wszyscy chowają się za tym samym filarem, podczas {}
            <a href="https://www.wowhead.com/spell=330711/bloodcurdling-shriek" data-wowhead="spell=330711">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_deathscream.gif" />
              Bloodcurdling Shriek
            </a>.
          </li>
          <li>
            Gdy Twoja postać zostanie oznaczona {}
            <a href="https://www.wowhead.com/spell=342074/echolocation" data-wowhead="spell=342074">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_creature_cursed_05.gif" />
              Echolocation
            </a>, udaj się do krawędzi pomieszczenia by upuścić tam plamę. Ochroni to grupę przed dodatkowymi
            obrażeniami.
          </li>
          <li>
            <strong>Tankowie</strong> rzucają przeżywajki zanim otrzymają {}
            <a href="https://www.wowhead.com/spell=328857/exsanguinating-bite" data-wowhead="spell=328857">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_racial_cannibalize.gif" />
              Exsanguinating Bite
            </a> i powinni się zmieniać po każdej inkantacji.
          </li>
          <li>
            <strong>Healerzy</strong> muszą utrzymać raid w pełni zdrowia, gdy boss rzuca {}
            <a href="https://www.wowhead.com/spell=344111/reverberating-scream" data-wowhead="spell=344111">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_arcane_mindmastery.gif" />
              Reverberating Scream
            </a> - trwa to 16 sekund.
          </li>
        </ul>
      </Difficulty>

      <Difficulty title="Poziom Heroiczny">
        <ul>
          <li>
            Prowadź {}
            <a href="https://www.wowhead.com/spell=342863/echoing-screech" data-wowhead="spell=342863">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_nature_wispsplode.gif" />
              Echoing Screech
            </a> do otwartej przestrzeni, i unikaj pierścieni sonicznych które emituje boss.
          </li>
        </ul>
      </Difficulty>
    </dl>

    <h3>Faza druga:</h3>

    <dl>
      <Difficulty title="Poziom Normalny">
        <ul>
          <li>Nieustannie trzymaj się 13+ jardów od bossa.</li>
          <li>Unikaj pierścieni sonicznych które się odbijają po pomieszczeniu.</li>
          <li>
            Używaj filarów, aby utrzymywać kontakt wzrokowy z bossem kiedy inkantuje {}
            <a href="https://www.wowhead.com/spell=340047/sonar-shriek" data-wowhead="spell=340047">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_coneofsilence.gif" />
              Sonar Shriek
            </a>.
          </li>
        </ul>
      </Difficulty>
    </dl>

    <Video code={video} />
  </>;
}

export function Shriekwing(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} raid={raidName} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid={raidName} encounter={name} next={next}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
