import './App.css';
import './Responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './GlobalState'
import Routes from './Routes';
import { toast } from 'react-toastify';

toast.configure()
function App() {
  var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var screenWidth = window.screen.width
  var viewportScale = screenWidth / viewportWidth
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}

export default App;
