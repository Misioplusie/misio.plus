import React, { ReactElement } from 'react';

import { RaidPage } from '../../../components/raid';

import { HuntsmanAltimor } from './huntsman-altimor';
import { Shriekwing } from './shriekwing';

export default function CastleNathria(): ReactElement {
  return <RaidPage>
    <Shriekwing />
    <HuntsmanAltimor />
  </RaidPage>;
}
