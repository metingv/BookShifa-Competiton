
import './styles/App.scss';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';

import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <div className='content1'>
      <Component1 />
      <Component2 />
      <Component3 />
      </div>
      <div className='content2'>
      <Component4 />
      <Component5 />
      <Component6 />
    
      </div>
    </div>
    </>
  );
}

export default App;
