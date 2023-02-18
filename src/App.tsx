import Home from './Home';
import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-72 flex flex-col flex-1">
        <TopBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
