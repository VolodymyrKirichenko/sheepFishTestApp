import MainStack from './navigate';
import { useFonts } from './hooks/useFonts';

export default function App() {
  const { fontLoaded } = useFonts();

  if (fontLoaded) {
    return (
      <MainStack />
    );
  } else {
    return null;
  }
}
