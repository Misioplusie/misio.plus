import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

export const model = '920183';
export const name = 'Sun King\'s Salvation';
export const video = 'VWkG7yGyuRs';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />



    <Video code={video} />
  </>;
}

export function SunKingsSalvation(props: BossProperties): ReactElement {
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
