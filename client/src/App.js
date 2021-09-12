import './App.css';

// import Home from './chat/Home'


import {DataProvider} from './GlobalState'
import Routes from './Routes';

function App() {
 
  return (

    <DataProvider>
      <Routes/>
    </DataProvider>
  );
}

export default App;
