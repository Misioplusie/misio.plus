import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

export const name = 'The Council of Blood';
export const video = '0mmVT1vwGW4';

function Data(): ReactElement {
  return <>
    <Model model="941715" name="Castellan Niklaus" />
    <Model model="941716" name="Lord Stavros" />
    <Model model="941717" name="Baroness Frieda" />



    <Video code={video} />
  </>;
}

export function CouncilOfBlood(props: BossProperties): ReactElement {
  return <Encounter name={name} model="941715" {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid="Castle Nathria" encounter={name}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
