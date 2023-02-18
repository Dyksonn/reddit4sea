import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "@screens/LoadingScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { DetailsScreen } from "@screens/DetailsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName="LoadingScreen"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#081c3e",
          },
          headerTintColor: "#FFFFFF"
        }}
      >
        <Screen name="LoadingScreen" component={LoadingScreen} />

        <Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            headerShown: true,
            title: "Reddit programing",
          }}
        />

        <Screen 
          name="DetailsScreen" 
          component={DetailsScreen}
          options={{
            headerShown: true,
            title: "Detalhes"
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
