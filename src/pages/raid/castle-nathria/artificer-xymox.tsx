import React, { ReactElement } from 'react';

import { BossProperties, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as previous } from './hungering-destroyer';
import { name as next } from './sun-kings-salvation';

import { name as raidName } from '.';

export const model = '941701';
export const name = 'Artificer Xy\'Mox';
export const video = '1dytC9kVmFs';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <p>Boss posiada trzy fazy, zmienne w oparciu o poziom życia.</p>

    <ul>
      <li>
        Gracze oznaczeni {}
        <a href="https://shadowlands.wowhead.com/spell=328437/dimensional-tear" data-wowhead="spell=328437">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/creatureportrait_portal_alteracvalleyhorde.gif" />
          Dimensional Tear
        </a> {}
        muszą upuścić debuff w odpowiednim miejscu tworząc przez to teleprot w zależności od fazy.
      </li>
      <li>
        Można się natychmiastowo teleportowac, międzu dwoma dzirami poprzez w nie wchodzenie.
      </li>
      <li>
        <strong>Tankowie</strong> muszą się zmieniać przy każdym {}
        <a href="https://shadowlands.wowhead.com/spell=325361/glyph-of-destruction" data-wowhead="spell=325361">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_mage_incantersabsorbtion.gif" />
          Glyph of Destruction
        </a>.
        Używajcie dziur teleportacji, by odejść jak najdalej od raidu.
      </li>
      <li>
        Unikajcie linii ataku, kiedy boss inktantuje {}
        <a href="https://shadowlands.wowhead.com/spell=329458/rift-blast" data-wowhead="spell=329458">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_animabastion_beam.gif" />
          Rift Blast
        </a>.
      </li>
      <li>
        <a href="https://shadowlands.wowhead.com/spell=325399/hyperlight-spark" data-wowhead="spell=325399">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_shootwand.gif" />
          Hyperlight Spark
        </a> {}
        zadaje duże i nieuniknione obrażenia w rajd...
      </li>
    </ul>

    <h3>
      Faza pierwsza (Relikt {}
      <a href="https://shadowlands.wowhead.com/spell=327887/crystal-of-phantasms" data-wowhead="spell=327887">
        <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_special_maldraxxus_d_03.gif" />
        Crystal of Phantasms
      </a>
      ) <small style={{ display: 'block' }}>100% - 70% zdrowia</small>
    </h3>

    <ul>
      <li>
        Upuśćcie debuff z {}
        <a href="https://shadowlands.wowhead.com/spell=328437/dimensional-tear" data-wowhead="spell=328437">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/creatureportrait_portal_alteracvalleyhorde.gif" />
          Dimensional Tear
        </a> {}
        jak najdalej na wschodzie i zachodzie pomieszczenia.
        Cały rajd powinien się znajdować w okolicy jednego z tych teleportów.
      </li>
      <li>
        Kiedy posiadasz na sobie fixate {}
        <a href="https://shadowlands.wowhead.com/npc=168317/fleeting-spirit" data-wowhead="npc=168317">
          Fleeting Spirit
        </a>,
        ciągaj go używając teleportów by uniknąć zostania przez niego przejętym.
      </li>
      <li>
        Zacznij bić gracza, który zostanie przejęty aby ich uwolnić.
      </li>
    </ul>

    <h3>
      Faza druga (Relikt {}
      <a href="https://shadowlands.wowhead.com/spell=329770/root-of-extinction" data-wowhead="spell=329770">
        <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_wand_1h_ardenweald_d_01.gif" />
        Root of Extinction
      </a>
      ) <small style={{ display: 'block' }}>70% - 40% zdrowia</small>
    </h3>

    <ul>
      <li>
        Upuśćcie debuff z {}
        <a href="https://shadowlands.wowhead.com/spell=328437/dimensional-tear" data-wowhead="spell=328437">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/creatureportrait_portal_alteracvalleyhorde.gif" />
          Dimensional Tear
        </a>
        jak najdalej na wschodzie i zachodzie pomieszczenia.
        Cały rajd powinien się znajdować w okolicy jednego z tych teleportów.
      </li>
      <li>
        Jeden gracz, musi podnieść pobliski {}
        <a href="https://shadowlands.wowhead.com/spell=329090/seed-of-extinction" data-wowhead="spell=329090">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_ardenweald_mage.gif" />
          Seed of Extinction
        </a> {}
        i użyć teleportu, aby to przenieść jak najdalej od rajdu.
      </li>
      <li>
        Dwóch graczy, musi przenieść nasionka ulokowane na północy i południu pomieszczenia.
        Trzeba takie przenieść jak najdalej, po czym wrócić do grupy teleportem.
      </li>
      <li>
        <strong>Healerzy</strong>, zwracajcie uwagę na gracza pod wpływem {}
        <a href="https://shadowlands.wowhead.com/spell=340860/withering-touch" data-wowhead="spell=340860">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_animaardenweald_debuff.gif" />
          Withering Touch
        </a>!
      </li>
    </ul>

    <h3>
      Faza trzecia (Relikt {}
      <a href="https://shadowlands.wowhead.com/spell=328880/edge-of-annihilation" data-wowhead="spell=328880">
        <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_archaeology_80_witch_guillotineaxe.gif" />
        Edge of Annihilation
      </a>
      ) <small style={{ display: 'block' }}>40% - 0% zdrowia</small>
    </h3>

    <ul>
      <li>
        Upuśćcie debuff z {}
        <a href="https://shadowlands.wowhead.com/spell=328437/dimensional-tear" data-wowhead="spell=328437">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/creatureportrait_portal_alteracvalleyhorde.gif" />
          Dimensional Tear
        </a>,
        jedno na środku a drugie na wschodzie lub zachodzie pomieszczenia.
      </li>
      <li>
        Wbiegnij w teleport na środku zanim boss zinkantuje {}
        <a href="https://shadowlands.wowhead.com/spell=328880/edge-of-annihilation" data-wowhead="spell=328880">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_archaeology_80_witch_guillotineaxe.gif" />
          Edge of Annihilation
        </a>
        aby uniknąć śmiertelnych obrażeń na zasięg 25 jardów.
      </li>
      <li>
        Starajcie się być w kupie, aby ułatwić healerom leczenie natychmiastowych obrażeń z {}
        <a href="https://shadowlands.wowhead.com/spell=340870/aura-of-dread" data-wowhead="spell=340870">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_animamaw_orb.gif" />
          Aura of Dread
        </a>.
      </li>
    </ul>

    <Video code={video} />
  </>;
}

export function ArtificerXyMox(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} raid={raidName} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid={raidName} encounter={name} previous={previous} next={next}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
