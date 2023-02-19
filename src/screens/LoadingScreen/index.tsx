import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import loading from "@assets/loading.json";
import { styles } from "./styles";

export const LoadingScreen = () => {
  const { reset } = useNavigation();

  const handleToScreenHome  = () => {
    setTimeout(() =>
      reset({
        routes: [{
          name: "HomeScreen"
        }]
      }),
      3000
    )
  }

  return (
    <View style={styles.container}>
      <LottieView 
        source={loading}
        style={styles.animation}
        loop={true}
        duration={2000}
        autoPlay
        onAnimationFinish={handleToScreenHome}
      />
    </View>
  );
}