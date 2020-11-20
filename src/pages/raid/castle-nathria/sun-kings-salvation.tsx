import React, { ReactElement } from 'react';

import { BossProperties, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as previous } from './artificer-xymox';
import { name as next } from './lady-inerva-darkvein';

import { name as raidName } from '.';

export const model = '920183';
export const name = 'Sun King\'s Salvation';
export const video = 'VWkG7yGyuRs';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <p>Boss posiada dwie fazy.</p>

    <ul>
      <li>
        <strong>Healerzy</strong> skupiają się w dużej mierze na {}
        <a href="https://www.wowhead.com/npc=165759/kaelthas-sunstrider">
          Kael'thas Sunstrider
        </a> {}
        nie szalejąc z maną
      </li>
      <li>
        Gracze mogą używać {}
        <a href="https://www.wowhead.com/npc=173382/soul-pedestal">
          Soul Pedestal
        </a> {}
        aby poświęcić własne życie dla {}
        <a href="https://www.wowhead.com/npc=165759/kaelthas-sunstrider">
          Kael'thas Sunstrider
        </a>!
      </li>
    </ul>

    <h3>Faza pierwsza</h3>

    <ul>
      <li>
        <a href="https://www.wowhead.com/npc=165764/rockbound-vanquisher">
          Rockbound Vanquisher
        </a> {}
        - zabijcie je, zanim zinkantują zbyt wiele {}
        <a href="https://www.wowhead.com/spell=325506/concussive-smash">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_earthen_pillar.gif" />
          Concussive Smash
        </a>.
        <strong>Tankowie</strong>  zmieniają się jak tylko zejdą im stacki {}
        <a href="https://www.wowhead.com/spell=325442/vanquished">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_gouge.gif" />
          Vanquished
        </a>.
      </li>
      <li>
        <a href="https://www.wowhead.com/npc=167566/bleakwing-assassin">
          Bleakwing Assassin
        </a> {}
        - oddalcie się na 8+ jardów kiedy jesteście oznaczeni przez {}
        <a href="https://www.wowhead.com/spell=341473/crimson-flurry">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_revendreth_rogue.gif" />
          Crimson Flurry
        </a> {}
        i spalcie je zanim zdążą zinkantować {}
        <a href="https://www.wowhead.com/spell=333145/return-to-stone">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_04.gif" />
          Return to Stone
        </a>.
      </li>
      <li>
        <a href="https://www.wowhead.com/npc=165763/vile-occultist">
          Vile Occultist
        </a> {}
        - przerywajcie {}
        <a href="https://www.wowhead.com/spell=333002/vulgar-brand">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_animarevendreth_nova.gif" />
          Vulgar Brand
        </a> {}
        albo zdejmujcie debuffki które pozostawia.
        Leczcie {}
        <a href="https://www.wowhead.com/npc=165778/essence-font">
          Essence Font
        </a> {}
        które zostają upuszczane, aby healować {}
        <a href="https://www.wowhead.com/npc=165759/kaelthas-sunstrider">
          Kael'thas Sunstrider
        </a>.
      </li>
      <li>
        <a href="https://www.wowhead.com/npc=168700/pestering-fiend">
          Pestering Fiend
        </a> {}
        - są zapychaczami. Może to zejść na cleave, ale należy pamiętać by przy tym nie stać na heroicznym raidzie, gdyż
        wybucha pod wpływem {}
        <a href="https://www.wowhead.com/spell=336398/fragmentation">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/archaeology_5_0_crackedmogurunestone.gif" />
          Fragmentation
        </a>!
      </li>
      <li>
        <a href="https://www.wowhead.com/npc=165762/soul-infuser">
          Soul Infuser
        </a> {}
        - spowalniajcie, uziemiajcie i zabijcie, zanim te dotrą do {}
        <a href="https://www.wowhead.com/npc=165759/kaelthas-sunstrider">
          Kael'thas Sunstrider
        </a> {}
        i zinkantują {}
        <a href="https://www.wowhead.com/spell=325665/soul-infusion">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_warlock_soullink.gif" />
          Soul Infusion
        </a>.
        Jeden <strong>Healer</strong> powinien zebrać Infuser's Orb by dostać buff {}
        <a href="https://www.wowhead.com/spell=326078/infusers-boon">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_animarevendreth_buff.gif" />
          Infuser's Boon
        </a>!
      </li>
    </ul>

    <h3>Faza druga</h3>

    <ul>
      <li>
        Występuje kiedy {}
        <a href="https://www.wowhead.com/npc=165759/kaelthas-sunstrider">
          Kael'thas Sunstrider
        </a> jest na 40% i 90% zdrowia.
      </li>
      <li>
        <a href="https://www.wowhead.com/npc=165759/kaelthas-sunstrider">
          Kael'thas Sunstrider
        </a> {}
        nie może być leczony pod czas tej fazy.
      </li>
      <li>
        <strong>Tanki</strong> odzielają {}
        <a href="https://www.wowhead.com/npc=165805/shade-of-kaelthas">
          Shade of Kael'thas
        </a> {}
        przenosząc go na krawędź pomieszczenia zdala od {}
        <a href="https://www.wowhead.com/npc=168962/reborn-phoenix">
          Reborn Phoenix
        </a>.
      </li>
      <li>
        Dystansowcy, powinni spowalniać, unieruchamiać i zabijać {}
        <a href="https://www.wowhead.com/npc=168962/reborn-phoenix">
          Reborn Phoenix
        </a>.
        Jeśli się wskrzeszą, należy to robić jeszcze raz.
      </li>
      <li>
        Raid powinien się zgrupować cały czas przebywając za bossem.
      </li>
      <li>
        <strong>Tankowie</strong> powinni się zmieniać kiedy zejdą im stacki {}
        <a href="https://www.wowhead.com/spell=326456/burning-remnants">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_fire_immolation.gif" />
          Burning Remnants
        </a> {}
        nakładane przez {}
        <a href="https://www.wowhead.com/spell=326455/fiery-strike">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_fire_burnout.gif" />
          Fiery Strike
        </a>.
      </li>
      <li>
        Gracze powinni się zestakować na jednym oznaczonym przez {}
        <a href="https://www.wowhead.com/spell=325877/ember-blast">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_fire_selfdestruct.gif" />
          Ember Blast
        </a> {}
        aby rozdzielić obrażenia.
      </li>
      <li>
        Gracz oznaczony {}
        <a href="https://www.wowhead.com/spell=325877/ember-blast">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_fire_selfdestruct.gif" />
          Ember Blast
        </a> {}
        powinien się odsunąć 10 jardów od rajdu, gdyż pod nimi pojawi się ogień.
      </li>
      <li>
        Spalcie {}
        <a href="https://www.wowhead.com/npc=165805/shade-of-kaelthas">
          Shade of Kael'thas
        </a> {}
        50% życia aby zakończyć fazę. Zabijamy go dopiero za drugim razem.
      </li>
    </ul>

    <Video code={video} />
  </>;
}

export function SunKingsSalvation(props: BossProperties): ReactElement {
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
