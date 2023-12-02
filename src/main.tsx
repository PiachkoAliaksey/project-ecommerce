import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.ts';
import appFirebase from './firebase.config.js'

appFirebase;



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
