import { FC, useState } from "react";
import { 
  View, 
  TouchableWithoutFeedback, 
  Animated, 
  StyleSheetProperties
} from "react-native";
import { 
  Fontisto, 
  Ionicons,
  Foundation,
  EvilIcons
} from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  style: StyleSheetProperties | {};
  open?: boolean;
  onFire: () => void;
  onStart: () => void;
  onTrophy: () => void;
  onNew: () => void;
}

export const FabButton:FC<Props> = ({
  style,
  open,
  onFire,
  onStart,
  onTrophy,
  onNew
}) => {
  const [animation] = useState(new Animated.Value(0))

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: true
    }).start();

    open = !open;
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "180deg"]
        })
      }
    ]
  }

  const fireStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -260]
        })
      }
    ]
  }

  const trophyStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200]
        })
      }
    ]
  }

  const starStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -135]
        })
      }
    ]
  }
  
  const newStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70]
        })
      }
    ]
  }

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={() => {
        onFire()
        toggleMenu()
      }}>
        <Animated.View style={[styles.button, styles.submenu, fireStyle]}>
          <Fontisto 
            name="fire"
            size={20}
            color="#FFFFFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        onTrophy()
        toggleMenu()
      }}>
        <Animated.View style={[styles.button, styles.submenu, trophyStyle]}>
          <EvilIcons 
            name="trophy"
            size={20}
            color="#FFFFFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        onStart()
        toggleMenu()
      }}>
        <Animated.View style={[styles.button, styles.submenu, starStyle]}>
          <EvilIcons 
            name="star"
            size={20}
            color="#FFFFFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        onNew()
        toggleMenu()
      }}>
        <Animated.View style={[styles.button, styles.submenu, newStyle]}>
          <Foundation 
            name="burst-new"
            size={20}
            color="#FFFFFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Ionicons 
            name="filter-outline"
            size={20}
            color="#FFFFFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}