import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.css';
import './common.scss';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
