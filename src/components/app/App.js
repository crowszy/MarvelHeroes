import { ComicsPage, MainPage, Page404 } from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    

    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main>
                <Switch>               
                    <Route exact path='/'>
                        <MainPage/>
                    </Route>
                    <Route exact path='/comics'>
                        <ComicsPage/>
                    </Route>                    
                    <Route path='*'>
                        <Page404/>
                    </Route>
                </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;