import './css/interativehr.css'
import { CharacterSelection } from './CharacterSelection'
import { useState } from 'react'
import { GameMap } from './GameMap'
import { Sprite } from './types/Sprite';

export const InterativeHR = () => {

    const [characterSelected, setCharacterSelected] = useState<any>(null)

    const characterSelectHandler = (character: string) => {
        setCharacterSelected(new Sprite((`/${character}`)))
    }

    return (
        <>
            {!characterSelected && <CharacterSelection characterSelectHandler={characterSelectHandler} />}
            {characterSelected && <GameMap sprite={characterSelected} />}
        </>
    );
}