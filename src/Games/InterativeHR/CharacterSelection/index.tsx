
type CharacterSelectionProps = {
    characterSelectHandler: (character: any) => void
}

export const CharacterSelection = ({ characterSelectHandler }: CharacterSelectionProps) => {

    return (
        <div className="container">
            <section className="container-selection">
                <h1>Selecione seu personagem para jogar:</h1>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler('sprites-morena-branca.png')}>
                    <img src="img/select_screeen/morena-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler('sprites-morena-cabelo-castanho.png')}>
                    <img src="img/select_screeen/morena-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler('sprites-mulher-branca.png')}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler(3)}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler(3)}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler(3)}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler(3)}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler(3)}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
                <div className="characterSelect" data-character="chunli" onClick={() => characterSelectHandler(3)}>
                    <img src="img/select_screeen/mulher-branca-cabelo-castanho.png" alt="personagem" />
                </div>
            </section>
        </div>
    );
}