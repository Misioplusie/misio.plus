import React, { ReactElement } from 'react';

import { BossProperties, Difficulity, Encounter, Model, Page } from '../elements';

export const model = '941695';
export const name = 'Shriekwing';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <p>Boss posiada dwie fazy.</p>

    <h3>Faza pierwsza:</h3>

    <dl>
      <Difficulity title="Poziom Normalny">
        <ul>
          <li>
            Wszyscy chowają się za tym samym pilarem, podczas {}
            <a href="https://www.wowhead.com/spell=330711/bloodcurdling-shriek">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_deathscream.gif" />
              Bloodcurdling Shriek
            </a>.
          </li>
          <li>
            Gdy Twoja postać zostanie oznaczona {}
            <a href="https://www.wowhead.com/spell=342074/echolocation">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_creature_cursed_05.gif" />
              Echolocation
            </a>, udaj się do krawędzi pomieszczenia.
          </li>
          <li>
            <strong>Tankowie</strong> rzucają przeżywajki zanim otrzymają {}
            <a href="https://www.wowhead.com/spell=328857/exsanguinating-bite">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_racial_cannibalize.gif" />
              Exsanguinating Bite
            </a> i powinni się zmieniać po każdej inkantacji.
          </li>
          <li>
            <strong>Healerzy</strong> muszą utrzymać raid w pełni zdrowia, gdy boss rzuca {}
            <a href="https://www.wowhead.com/spell=344111/reverberating-scream">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_arcane_mindmastery.gif" />
              Reverberating Scream
            </a>.
          </li>
        </ul>
      </Difficulity>

      <Difficulity title="Poziom Heroiczny">
        <ul>
          <li>
            Prowadź {}
            <a href="https://www.wowhead.com/spell=342863/echoing-screech">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_nature_wispsplode.gif" />
              Echoing Screech
            </a> do otwartej przestrzeni, i unikaj pierścieni sonicznych które emituje boss.
          </li>
        </ul>
      </Difficulity>
    </dl>

    <h3>Faza druga:</h3>

    <dl>
      <Difficulity title="Poziom Normalny">
        <ul>
          <li>Nieustannie trzymaj się 13+ jardów od bossa.</li>
          <li>Unikaj pierścieni sonicznych które się odbijają po pomieszczeniu.</li>
          <li>
            Użuwaj pilarów, aby utrzymywać kontakt wzrokowy z bossem kiedy inkantuje {}
            <a href="https://www.wowhead.com/spell=340047/sonar-shriek">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_coneofsilence.gif" />
              Sonar Shriek
            </a>.
          </li>
        </ul>
      </Difficulity>
    </dl>
  </>;
}

export function Shriekwing(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <Page>
    <h2>{name}</h2>

    <Data />
  </Page>;
}
