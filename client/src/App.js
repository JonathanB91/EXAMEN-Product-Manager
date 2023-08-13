import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewProject from './pages/NewProject';



function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="newProject" element={<NewProject />} />
    </Routes>
  );
}

export default App;
