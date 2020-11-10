import React, { ReactElement } from 'react';

import { BossProperties, Encounter, Model, RaidPage } from '../../../components/raid';

export const model = '944277';
export const name = 'Huntsman Altimor';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <p>Boss posiada trzy pet'y.</p>

    <h3>Sam boss:</h3>

    <ul>

      <li>
        Luźno ustawiamy się w okół boss'a, by zredukować ilość graczy którzy oberwą {}
        <a href="https://shadowlands.wowhead.com/spell=334404/spreadshot">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_runningshot.gif" />
          Spreadshot
        </a> - nie ignorujemy przy tym, innej mechaniki.
      </li>
      <li>
        Oznaczony gracz podczas inkantacji {}
        <a href="https://shadowlands.wowhead.com/spell=335114/sinseeker">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_assassinate2.gif" />
          Sinseeker
        </a> powinien ustawić się tak, by nikt inny niestał między bossem a nim.
      </li>
      <li>
        Bijcie bossa i jego aktywnego peta przy każdej możliwej okazji. Obrażenia są współdzielone.
      </li>
    </ul>

    <h3>Margore:</h3>

    <ul>
      <li>
        Tankowie, muszą się zmieniać co 3-4 stacki {}
        <a href="https://shadowlands.wowhead.com/spell=334971/jagged-claws">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_disembowel.gif" />
          Jagged Claws
        </a>.
      </li>
      <li>
        Stackujcie się na graczu oznaczonym {}
        <a href="https://shadowlands.wowhead.com/spell=334939/vicious-lunge">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_druid_bloodythrash.gif" />
          Vicious Lunge
        </a>.
      </li>
    </ul>

    <h3>Bargast:</h3>

    <ul>
      <li>
        Przesuwamy {}
          <a href="https://shadowlands.wowhead.com/npc=169457/bargast">
            Bargast
          </a> zdala od bossa i używamy przeżywajek na tanku, gdy mierzeni są {}
          <a href="https://shadowlands.wowhead.com/spell=334797/rip-soul">
            <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_markofursol.gif" />
            Rip Soul
          </a>.
        </li>
      <li>
        Healerzy powinni topowac adda rzucającego {}
        <a href="https://shadowlands.wowhead.com/spell=334797/rip-soul">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_markofursol.gif" />
          Rip Soul
        </a> zanim ten dotrze do boss'a.
      </li>
      <li>
        Przesuwamy <a href="https://shadowlands.wowhead.com/npc=169457/bargast">
          Bargast
        </a> zdala od bossa i używamy umiejętności typu crowd control  na addach które on spawnii gdy inkantuje {}
        <a href="https://shadowlands.wowhead.com/spell=334757/shades-of-bargast">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_felhound3_shadow_mount.gif" />
          Shades of Bargast
        </a>.
      </li>
      <li>
        Kiedy addy osiągną przynajmniej 20 stacków {}
        <a href="https://shadowlands.wowhead.com/spell=334695/destabilize">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_rogue_findweakness.gif" />
          Destabilize
        </a>, zabijamy je, w między czasie używając umiejętności crowd control by przerywać {}
        <a href="https://shadowlands.wowhead.com/spell=334708/deathly-roar">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_creature_cursed_03.gif" />
          Deathly Roar
        </a>.
      </li>
      <ul>
        <li>
          Tankowie, muszą się zmieniać co 3-4 stacki {}
          <a href="https://shadowlands.wowhead.com/spell=334971/jagged-claws">
            <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_disembowel.gif" />
            Jagged Claws
          </a>.
        </li>
        <li>
          Stackujcie się na graczu oznaczonym {}
          <a href="https://shadowlands.wowhead.com/spell=334939/vicious-lunge">
            <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_druid_bloodythrash.gif" />
            Vicious Lunge
          </a>.
        </li>
      </ul>
    </ul>

    <h3>Hecutis:</h3>

    <ul>
      <li>
        Przesuwamy <a href="https://shadowlands.wowhead.com/npc=169458/hecutis">
          Hecutis
        </a> aby upuścić stacki {}
        <a href="https://shadowlands.wowhead.com/spell=334860/crushing-stone">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/shaman_pvp_rockshield.gif" />
          Crushing Stone
        </a> pamiętając że to zadaje obrażenia w rajd.
      </li>
      <li>
        Healerzy oszczędzają odpałki healerskie, na wypadek kiedy {}
        <a href="https://shadowlands.wowhead.com/npc=169458/hecutis">
          Hecutis
        </a> zacznie zrzucać stacki {}
        <a href="https://shadowlands.wowhead.com/spell=334860/crushing-stone">
          <img src="https://wow.zamimg.com/images/wow/icons/tiny/shaman_pvp_rockshield.gif" />
          Crushing Stone
          </a>.
        </li>
        <li>
          Odsuń się od rajdu kiedy pod efektem {}
          <a href="https://shadowlands.wowhead.com/spell=334852/petrifying-howl">
            <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_sinstonegolempet.gif" />
            Petrifying Howl
          </a> i upuść Stone Shatter w mało ruchliwym miejscu.
      </li>
    </ul>
  </>;
}

export function HuntsmanAltimor(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
