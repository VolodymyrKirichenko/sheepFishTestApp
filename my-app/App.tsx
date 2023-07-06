import MainStack from './navigate';
import { useFonts } from './hooks/useFonts';
import { Provider } from 'react-redux';
import store from './redux/store/store';

export default function App() {
  const { fontLoaded } = useFonts();

  if (fontLoaded) {
    return (
      <Provider store={store}>
       <MainStack />
      </Provider>
    );
  } else {
    return null;
  }
}
