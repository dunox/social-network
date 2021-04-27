import { SideBar } from './components/sidebar';
import { Header } from './components/header';
import { Profile } from './components/profile';

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Profile />
    </div>
  );
}

export default App;
