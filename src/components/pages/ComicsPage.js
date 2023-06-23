import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import { HelmetProvider, Helmet } from "react-helmet-async";


const ComicsPage = () => {
    return (
        <HelmetProvider>
        <>
            <Helmet>
            <meta
                name="description"
                content="A page with comics"
                />
            <title>Comics</title>
            </Helmet>
            
            <AppBanner/>
            <ComicsList/>
        </>
        </HelmetProvider>
        
    )
}

export default ComicsPage;