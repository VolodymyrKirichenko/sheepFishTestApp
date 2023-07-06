import Main from './components/Main';
import FullInfo from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={ Main }
          options={{
            title: 'MainPage',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
            },
          }}
        />

        <Stack.Screen
          name="FullInfo"
          component={ FullInfo }
          options={{
            title: 'FullInfo',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
