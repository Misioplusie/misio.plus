import React, { ReactElement } from 'react';

import { Page } from '../elements';

import { HuntsmanAltimor } from './huntsman-altimor';
import { Shriekwing } from './shriekwing';

export default function CastleNathria(): ReactElement {
  return <Page>
    <Shriekwing />
    <HuntsmanAltimor />
  </Page>;
}
