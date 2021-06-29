// Core
import { Route } from 'react-router-dom';

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
        <div className="App">
            <Header/>
            <SideBar/>
            <div className="AppContent">
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.messagePage} addMessage={props.addMessage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
