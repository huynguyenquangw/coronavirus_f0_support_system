import './App.css';
<<<<<<< HEAD
import Test from './test';
=======
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './GlobalState'
import Routes from './Routes';
import { toast } from 'react-toastify';
>>>>>>> frontend

toast.configure()
function App() {





  return (
<<<<<<< HEAD
    <div className="App">
      <Test />
    </div>
=======
    <DataProvider>
      <Routes />
    </DataProvider>
>>>>>>> frontend
  );
}

export default App;
