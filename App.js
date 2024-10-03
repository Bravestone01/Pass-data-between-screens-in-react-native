import { NavigationContainer } from "@react-navigation/native";

import AppNavigators from "./navigators/AppNavigators";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigators />
    </NavigationContainer>
  );
}
