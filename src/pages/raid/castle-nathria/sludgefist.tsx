import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as next } from './stone-legion-generals';
import { name as previous } from './the-council-of-blood';

import { name as raidName } from '.';

export const model = '993050';
export const name = 'Sludgefist';
export const video = 'XeML_uxq91g';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />



    <Video code={video} />
  </>;
}

export function Sludgefist(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} raid={raidName} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid={raidName} encounter={name} previous={previous} next={next}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
