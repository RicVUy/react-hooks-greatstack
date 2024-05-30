
import './App.css';
import HooksUseState from './Component/UseState/hooksUseState';
import Count from './Component/UseState/Count';
import Count1 from './Component/UseEffect/Count1';
import ChangeValue from './Component/UseRef/ChangeValue';
import AccessDomElement from './Component/UseRef/AccessDomElement';
import CubeOfNumber from './Component/UseMemo/CubeOfNumber';
import UseCallback from './Component/UseCallback/UseCallback';
import First from './Component/First';
function App() {
  return (
    <div className="App">
      
     <HooksUseState/>
     <Count/>
     <Count1/>
     <ChangeValue/>
     <AccessDomElement/>
     <CubeOfNumber/>
     <UseCallback/>
     <First/>
    </div>
  );
}

export default App;
