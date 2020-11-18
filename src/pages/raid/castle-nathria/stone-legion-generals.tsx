import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as next } from './sire-denathrius';
import { name as previous } from './sludgefist';

import { name as raidName } from '.';

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
