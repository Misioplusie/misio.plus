import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

export const model = '941699';
export const name = 'Hungering Destroyer';
export const video = 'iRLHWTJTtN4';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />

    <dl>
      <Difficulty title="Poziom Normalny">
        <ul>
          <li>
            <strong>Tankowie</strong> zmieniają się po każdym {}
            <a href="https://shadowlands.wowhead.com/spell=329774/overwhelm" data-wowhead="spell=329774">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_manaburn.gif" />
              Overwhelm
            </a>, jako iż to także pomaga w utrzymaniu stacków {}
            <a href="https://shadowlands.wowhead.com/spell=332295/growing-hunger" data-wowhead="spell=332295">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/spell_deathknight_iceboundfortitude.gif" />
              Growing Hunger
            </a> w małej ilości.
          </li>
          <li>
            Gracze z {}
            <a href="https://shadowlands.wowhead.com/spell=329298/gluttonous-miasma" data-wowhead="spell=329298">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_deathknight_frozencenter.gif" />
              Gluttonous Miasma
            </a> nie będą otrzymywali leczenia. Dalej, mogą mieć bańkę.
          </li>
          <li>
            Przynajmniej 2-3 graczy, musi pomóc przy wchłanianiu {}
            <a href="https://shadowlands.wowhead.com/spell=329298/gluttonous-miasma" data-wowhead="spell=329298">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_deathknight_frozencenter.gif" />
              Gluttonous Miasma
            </a> z gracza na którego jest to nałożone.
            Więcej osób jest wymagania do wchłaniania, jeśli gracz ma znaczne ubytki w zdrowiu.
          </li>
          <li>
            <strong>Healerzy</strong> powinni utrzymywać raid przy życiu, kiedy {}
            <a href="https://shadowlands.wowhead.com/spell=329455/desolate" data-wowhead="spell=329455">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_argus_soulburst.gif" />
              Desolate
            </a> i {}
            <a href="https://shadowlands.wowhead.com/spell=334522/consume" data-wowhead="spell=334522">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_argus_deathfog.gif" />
              Consume
            </a> zostaną zinkantowane.
          </li>
          <li>
            Gracze oznaczeni przez linie {}
            <a href="https://shadowlands.wowhead.com/spell=334266/volatile-ejection" data-wowhead="spell=334266">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/achievement_boss_lordmarrowgar.gif" />
              Volatile Ejection
            </a> powinni się rozejść by uniknąć uderzenia innych graczy z więcej jak jedną linią, idealnie nie
            uderzając kogokolwiek.
          </li>
          <li>
            Rozejdźcie się od innych, kiedy raid ma na sobie {}
            <a href="https://shadowlands.wowhead.com/spell=329742/expunge" data-wowhead="spell=329742">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_argus_soulbombdebufflarge.gif" />
              Expunge
            </a>.
          </li>
          <li>
            Przesuwamy bossa na krawędź pomieszczenia po czym od niego odbiegamy kiedy inkantuje {}
            <a href="https://shadowlands.wowhead.com/spell=334522/consume" data-wowhead="spell=334522">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_argus_deathfog.gif" />
              Consume
            </a>.
          </li>
        </ul>
      </Difficulty>

      <Difficulty title="Poziom Heroiczny">
        <ul>
          <li>
            Pod koniec  {}
            <a href="https://shadowlands.wowhead.com/spell=329742/expunge" data-wowhead="spell=329742">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/ability_argus_soulbombdebufflarge.gif" />
              Expunge
            </a>
            udaj się na krawędź pomieszczenia, pozostawiając tam {}
            <a href="https://shadowlands.wowhead.com/spell=332375/obliterating-rift" data-wowhead="spell=332375">
              <img src="https://wow.zamimg.com/images/wow/icons/tiny/inv_elemental_primal_mana.gif" />
              Obliterating Rift
            </a> w schludny sposób.
          </li>
        </ul>
      </Difficulty>
    </dl>

    <Video code={video} />
  </>;
}

export function HungeringDestroyer(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid="Castle Nathria" encounter={name}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
