import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as previous } from './stone-legion-generals';

import { name as raidName } from '.';

export const model = '921052';
export const name = 'Sire Denathrius';
export const video = '_3y9D0lrzKk';

function Data(): ReactElement {
  return <>
    <Model model={model} name={name} />



    <Video code={video} />
  </>;
}

export function SireDenathrius(props: BossProperties): ReactElement {
  return <Encounter name={name} model={model} raid={raidName} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid={raidName} encounter={name} previous={previous}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
