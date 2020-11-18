import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

export const model = '941701';
export const name = 'Artificer Xy\'Mox';
export const video = '1dytC9kVmFs';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />



    <Video code={video} />
  </>;
}

export function ArtificerXyMox(props: BossProperties): ReactElement {
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
