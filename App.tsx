import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details'
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

const Stack = createNativeStackNavigator();

const insideStack = createNativeStackNavigator();

function insideLayout() {
  return (
    <insideStack.Navigator>
      <insideStack.Screen name='Mis cositas' component={List} />
      <insideStack.Screen name='Detalles' component={Details} />
    </insideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Home' component={insideLayout} options={{ headerShown: true }} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}