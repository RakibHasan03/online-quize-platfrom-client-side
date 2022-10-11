
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes';

function App() {
  return (
    <div className='body '>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
