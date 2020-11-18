import React, { ReactElement } from 'react';

import { RaidPage } from '../../../components/raid';

import { ArtificerXyMox } from './artificer-xymox';
import { HungeringDestroyer } from './hungering-destroyer';
import { HuntsmanAltimor } from './huntsman-altimor';
import { LadyInervaDarkvein } from './lady-inerva-darkvein';
import { Shriekwing } from './shriekwing';
import { SireDenathrius } from './sire-denathrius';
import { Sludgefist } from './sludgefist';
import { StoneLegionGenerals } from './stone-legion-generals';
import { SunKingsSalvation } from './sun-kings-salvation';
import { CouncilOfBlood } from './the-council-of-blood';

export const name = 'Castle Nathria';

export default function CastleNathria(): ReactElement {
  return <RaidPage raid={name}>
    <Shriekwing />
    <HuntsmanAltimor />
    <HungeringDestroyer />
    <ArtificerXyMox />
    <SunKingsSalvation />
    <LadyInervaDarkvein />
    <CouncilOfBlood />
    <Sludgefist />
    <StoneLegionGenerals />
    <SireDenathrius />
  </RaidPage>;
}
