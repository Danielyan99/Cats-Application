import {useState} from 'react';
import './styles/main.scss';
import CatsContent from './components/CatsContent';
import Sidebar from './components/Sidebar';

function App() {
  const [loadCount, setLoadCount] = useState(10);

  return (
    <div className='app'>
      <Sidebar setLoadCount={setLoadCount} loadCount={loadCount} />
      <div className='content'>
        <CatsContent setLoadCount={setLoadCount} loadCount={loadCount} />
      </div>
    </div>
  );
}

export default App;
