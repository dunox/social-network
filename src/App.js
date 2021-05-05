// Core
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import { SideBar } from './components/sidebar';
import { Header } from './components/header';
import { Profile } from './components/profile';
import { Dialogs } from './components/dialogs';
import { Music } from "./components/music";
import { News } from "./components/news";
import { Settings } from "./components/settings";

// Other
import "./App.scss";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SideBar/>
                <div className="AppContent">
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialog={props.dialog} message={props.message}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
