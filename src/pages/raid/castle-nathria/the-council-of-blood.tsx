import React, { ReactElement } from 'react';

import { BossProperties, Difficulty, Encounter, Model, RaidPage, Video } from '../../../components/raid';

import { name as previous } from './lady-inerva-darkvein';
import { name as next } from './sludgefist';

import { name as raidName } from '.';

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
  return <Encounter name={name} model="941715" raid={raidName} {...props}>
    <Data />
  </Encounter>;
}

export default function Details(): ReactElement {
  return <RaidPage raid={raidName} encounter={name} previous={previous} next={next}>
    <h2>{name}</h2>

    <Data />
  </RaidPage>;
}
