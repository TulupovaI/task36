import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import store from './store';
import Contacts from './components/Contacts';
import Form from './components/Form';
import EditContact from './components/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/form" element={<Form />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
