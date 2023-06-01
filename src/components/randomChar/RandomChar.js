import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelServices = new MarvelService();

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 3000)

        // return () => {
        //     clearInterval(timerId)
        // }
    }, [])


    // componentWillUnmount() {
    //     clearInterval(this.timerId)
    // }


    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false)
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        onCharLoading();
        marvelServices.getCharacter(id)
        .then(onCharLoaded)
        .catch(onError)
        // marvelServices.getAllCharacters().then(res => console.log(res));
    }

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;


        return (
            <div className="randomchar">
                {spinner}
                {errorMessage}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button onClick={updateChar} className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
}

const View = ({char}) => {
        const {name, description, thumbnail, homepage, wiki} = char;
        const descriptionValidation = description && description.length > 80 ? description.slice(0, 80) + '...' : 'Could not load description! :(';
        // console.log(thumbnail)
        const thumbnailValid = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit: 'contain'} : {objectFit: 'cover'};
    return (
        <div className="randomchar__block">
            <img src={thumbnail} style={thumbnailValid} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {descriptionValidation}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;