import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '@routes';
import { store, persistor } from '@store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes />
        <StatusBar style="light" />
      </PersistGate>
    </Provider>
  );
}
