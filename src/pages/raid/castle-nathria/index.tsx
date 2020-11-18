import React, { ReactElement } from 'react';

import { RaidPage } from '../../../components/raid';
import { ArtificerXyMox } from './artificer-xymox';
import { CouncilOfBlood } from './council-of-blood';

import { HungeringDestroyer } from './hungering-destroyer';
import { HuntsmanAltimor } from './huntsman-altimor';
import { LadyInervaDarkvein } from './lady-inerva-darkvein';
import { Shriekwing } from './shriekwing';
import { Sludgefist } from './sludgefist';
import { StoneLegionGenerals } from './stone-legion-generals';
import { SunKingsSalvation } from './sun-kings-salvation';
import { SireDenathrius } from './sire-denathrius';

export default function CastleNathria(): ReactElement {
  return <RaidPage raid="Castle Nathria">
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
