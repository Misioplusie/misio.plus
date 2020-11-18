import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

export const model = '';
export const name = 'Stone Legion Generals';
export const video = '0pRVhPkl3D0';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />



    <Video code={video} />
  </>;
}

export function StoneLegionGenerals(props: BossProperties): ReactElement {
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
