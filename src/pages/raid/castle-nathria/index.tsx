import React, { ReactElement } from 'react';

import { RaidPage } from '../../../components/raid';

import { HungeringDestroyer } from './hungering-destroyer';
import { HuntsmanAltimor } from './huntsman-altimor';
import { Shriekwing } from './shriekwing';

export default function CastleNathria(): ReactElement {
  return <RaidPage raid="Castle Nathria">
    <Shriekwing />
    <HuntsmanAltimor />
    <HungeringDestroyer />
  </RaidPage>;
}
