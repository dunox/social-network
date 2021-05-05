// Core
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import {SideBar} from './components/sidebar';
import {Header} from './components/header';
import {Profile} from './components/profile';
import {Dialogs} from './components/dialogs';
import {Music} from "./components/music";
import {News} from "./components/news";
import {Settings} from "./components/settings";

// Other
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SideBar/>
                <div className="App-content">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
