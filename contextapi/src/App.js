
import './App.css';
import { Comsumer } from './ContextTheme/Comsumer';
import Provider from './ContextTheme/Provider';
//import ComA from './Components/ComA';


function App() {
  return (
    <div className="App">
  <Provider>
  <Comsumer/>

  </Provider>
     
      
      {/* <ComA/> */}
    </div>
  );
}

export default App;
