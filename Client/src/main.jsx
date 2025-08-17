import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthContext from './authcontext/authcontext.jsx';
import EmployeeProvider from './authcontext/employeefetchcontext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
    <EmployeeProvider>
    <App />
    </EmployeeProvider>
  </AuthContext>
  </BrowserRouter>
);
