import { View } from "react-native";
import WebView from "react-native-webview";
import { useRoute } from "@react-navigation/native";

type RouteProps = {
  url: string;
}

export const DetailsScreen = () => {
  const route = useRoute().params as RouteProps;
  return (
    <View style={{flex: 1}}>
      <WebView 
        style={{flex: 1}}
        source={{
          uri: "https://www.reddit.com"+route.url
        }}
      />
    </View>
  );
}