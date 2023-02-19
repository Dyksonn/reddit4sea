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
import { useReduxSelector } from "@hooks";
import { selectFilter } from "@slices/subreddits/selectores";

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
  const filter = useReduxSelector(selectFilter)

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
    ],
  }

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={() => {
        onFire()
        toggleMenu()
      }}>
        <Animated.View style={[
          styles.button, 
          styles.submenu, 
          fireStyle, 
          filter === "hot" && styles.buttonSelected
        ]}>
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
        <Animated.View style={[
          styles.button, 
          styles.submenu, 
          trophyStyle,
          filter === "controversial" && styles.buttonSelected
        ]}>
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
        <Animated.View style={[
          styles.button, 
          styles.submenu, 
          starStyle,
          filter === "top" && styles.buttonSelected
        ]}>
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
        <Animated.View style={[
          styles.button, 
          styles.submenu, 
          newStyle,
          filter === "new" && styles.buttonSelected
        ]}>
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