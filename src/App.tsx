import { BrowserRouter } from 'react-router-dom';
import Approuter from './router/Approuter';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  );
}
