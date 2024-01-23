import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from '../components/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
