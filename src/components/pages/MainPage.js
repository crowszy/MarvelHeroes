import { useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);


    const onCharSelected = (id) => {
          setChar(id);
      }

    return (
        
        <HelmetProvider>
        <>
            <Helmet>
        <meta
            name="description"
            content="Marvel information portal"
            />
        <title>Marvel information</title>
                </Helmet>
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
        </HelmetProvider>
    )
}

export default MainPage;