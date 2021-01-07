import './App.css';
import Main from './Main/Main';
import { Provider } from 'react-redux';
import store from './store/store';

import Header from './Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <header className="App-header">
          <Main />
        </header>
      </div>
    </Provider>
  );
}

export default App;
