import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as next } from './hungering-destroyer';
import { name as previous } from './shriekwing';

import { name as raidName } from '.';

export const model = '944277';
export const name = 'Huntsman Altimor';
export const video = '2Zu_igLWBH8';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <p>Boss posiada trzy pet'y.</p>

    <dl>
      <Difficulty title="Poziom Normalny">
        <h3>Sam boss:</h3>

        <ul>

          <li>
            Luźno ustawiamy się w okół boss'a, by zredukować ilość graczy którzy oberwą {}
            <a href="https://shadowlands.wowhead.com/spell=334404/spreadshot" data-wowhead="spell=334404">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_runningshot.gif" />
              Spreadshot
            </a> - nie ignorujemy przy tym, innej mechaniki.
          </li>
          <li>
            Oznaczony gracz podczas inkantacji {}
            <a href="https://shadowlands.wowhead.com/spell=335114/sinseeker" data-wowhead="spell=335114">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_assassinate2.gif" />
              Sinseeker
            </a> powinien ustawić się tak, by nikt inny nie stał między bossem a nim.
          </li>
          <li>
            Bijcie bossa i jego aktywnego peta przy każdej możliwej okazji. Obrażenia są współdzielone.
          </li>
        </ul>

        <h3>Margore:</h3>

        <ul>
          <li>
            <strong>Tankowie</strong>, muszą się zmieniać co 3-4 stacki {}
            <a href="https://shadowlands.wowhead.com/spell=334971/jagged-claws" data-wowhead="spell=334971">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_disembowel.gif" />
              Jagged Claws
            </a>.
          </li>
          <li>
            Stackujcie się na graczu oznaczonym {}
            <a href="https://shadowlands.wowhead.com/spell=334939/vicious-lunge" data-wowhead="spell=334939">
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
              </a> z dala od bossa i używamy przeżywajek na tanku, gdy mierzeni są {}
              <a href="https://shadowlands.wowhead.com/spell=334797/rip-soul" data-wowhead="spell=334797">
                <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_markofursol.gif" />
                Rip Soul
              </a>.
            </li>
          <li>
            <strong>Healerzy</strong> powinni topować adda rzucającego {}
            <a href="https://shadowlands.wowhead.com/spell=334797/rip-soul" data-wowhead="spell=334797">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_markofursol.gif" />
              Rip Soul
            </a> zanim ten dotrze do boss'a.
          </li>
          <li>
            Przesuwamy <a href="https://shadowlands.wowhead.com/npc=169457/bargast">
              Bargast
            </a> z dala od bossa i używamy umiejętności typu crowd control  na addach które on spawni gdy inkantuje {}
            <a href="https://shadowlands.wowhead.com/spell=334757/shades-of-bargast" data-wowhead="spell=334757">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_felhound3_shadow_mount.gif" />
              Shades of Bargast
            </a>.
          </li>
          <li>
            Kiedy addy osiągną przynajmniej 20 stacków {}
            <a href="https://shadowlands.wowhead.com/spell=334695/destabilize" data-wowhead="spell=334695">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_rogue_findweakness.gif" />
              Destabilize
            </a>, zabijamy je, w między czasie używając umiejętności crowd control by przerywać {}
            <a href="https://shadowlands.wowhead.com/spell=334708/deathly-roar" data-wowhead="spell=334708">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_creature_cursed_03.gif" />
              Deathly Roar
            </a>.
          </li>
          <ul>
            <li>
              <strong>Tankowie</strong>, muszą się zmieniać co 3-4 stacki {}
              <a href="https://shadowlands.wowhead.com/spell=334971/jagged-claws" data-wowhead="spell=334971">
                <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_disembowel.gif" />
                Jagged Claws
              </a>.
            </li>
            <li>
              Stackujcie się na graczu oznaczonym {}
              <a href="https://shadowlands.wowhead.com/spell=334939/vicious-lunge" data-wowhead="spell=334939">
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
            <a href="https://shadowlands.wowhead.com/spell=334860/crushing-stone" data-wowhead="spell=334860">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/shaman_pvp_rockshield.gif" />
              Crushing Stone
            </a> pamiętając że to zadaje obrażenia w rajd.
          </li>
          <li>
            <strong>Healerzy</strong> oszczędzają odpałki healerskie, na wypadek kiedy {}
            <a href="https://shadowlands.wowhead.com/npc=169458/hecutis">
              Hecutis
            </a> zacznie zrzucać stacki {}
            <a href="https://shadowlands.wowhead.com/spell=334860/crushing-stone" data-wowhead="spell=334860">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/shaman_pvp_rockshield.gif" />
              Crushing Stone
              </a>.
            </li>
            <li>
              Odsuń się od rajdu kiedy pod efektem {}
              <a href="https://shadowlands.wowhead.com/spell=334852/petrifying-howl" data-wowhead="spell=334852">
                <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_sinstonegolempet.gif" />
                Petrifying Howl
              </a> i upuść Stone Shatter w mało ruchliwym miejscu.
          </li>
        </ul>
      </Difficulty>

      <Difficulty title="Poziom Heroiczny">
        <ul>
          <li>
            <a href="https://shadowlands.wowhead.com/spell=334939/vicious-lunge" data-wowhead="spell=334939">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_druid_bloodythrash.gif" />
              Vicious Lunge
            </a> także nakłada {}
            <a href="https://shadowlands.wowhead.com/spell=334960/vicious-wound" data-wowhead="spell=334960">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_druid_bloodythrash.gif" />
              Vicious Wound
            </a>, które nakłada 6-cio sekundowe krwawienie, nie zadaje tragicznie dużo obrażeń, ale powinno być
            limitowane by nie rozłożyć się na większą ilość graczy.
          </li>
          <li>
            <a href="https://shadowlands.wowhead.com/spell=334797/rip-soul" data-wowhead="spell=334797">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_markofursol.gif" />
              Rip Soul
            </a> co 2 sekundy, zadaje obrażenia w raid poprzez pasywny {}
            <a href="https://shadowlands.wowhead.com/spell=339639/unstable-soul" data-wowhead="spell=339639">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_argus_soulburst.gif" />
              Unstable Soul
            </a>.
            <strong>Healerzy</strong>, nie koniecznie powinni się skupiać na utrzymywaniu rajdu w pełni sił, a dalej
            topować adda.
          </li>
        </ul>
      </Difficulty>
    </dl>

    <Video code={video} />
  </>;
}

export function HuntsmanAltimor(props: BossProperties): ReactElement {
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
