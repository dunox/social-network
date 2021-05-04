import { SideBar } from './components/sidebar';
import { Header } from './components/header';
import { Profile } from './components/profile';
import { Dialogs } from './components/dialogs';
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div className="App-content">
        {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  );
}

export default App;
