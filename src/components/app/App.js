import { ComicsPage, MainPage } from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    

    return (
        <Router>
            <div className="app">
            <AppHeader/>
                <Switch>
                <main>
                    <Route exact path='/'>
                        <MainPage/>
                    </Route>
                    <Route exact path='/comics'>
                        <ComicsPage/>
                    </Route>                    
                </main>
                </Switch>
            </div>
        </Router>
    )
}

export default App;