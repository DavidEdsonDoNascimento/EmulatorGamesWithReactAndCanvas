import './css/interativehr.css'
import { CharacterSelection } from './CharacterSelection'
import { useState } from 'react'
import { GameMap } from './GameMap'
import { Sprite } from './types/Sprite';

export const InterativeHR = () => {
    const characters = [
        {
            imgScreen: 'america_mini.png',
            sprites: 'tiles-compretos.png'
        },
        {
            imgScreen: 'chunli_mini.png',
            sprites: 'tiles-compretos.png'
        },
        {
            imgScreen: 'hulk_mini.png',
            sprites: 'tiles-compretos.png'
        }
    ]

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