import { FC } from "react";
import { 
  View, 
  Text, 
  Image,
  TouchableWithoutFeedback, 
  TouchableNativeFeedbackProps 
} from "react-native";
import moment from "moment";

import { styles } from "./styles";

type PropsPosts  = TouchableNativeFeedbackProps & {
  post: {
    id: string;
    subreddit_id: string;
    score: number;
    author: string;
    title: string;
    num_comments: number;
    created_utc: number;
    url: string;
  }
}

export const Posts:FC<PropsPosts> = ({
  post,
  ...rest
}) => {
  let data = moment.unix(post.created_utc)
  return (
    <TouchableWithoutFeedback {...rest}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image 
            source={{
              uri: post.url
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.containerTimer}>
            <Text style={styles.timer}>
              {moment.utc(data).local().startOf('seconds').fromNow()}
            </Text>
          </View>
          <Text style={styles.title}>{post.title}</Text>

          <View style={styles.subContent}>
            <Text style={styles.infos}>
              <Text style={styles.bold}>Author:</Text> {post.author}
            </Text>
            <Text style={styles.infos}>
              <Text style={styles.bold}>Score:</Text> {post.score}
            </Text>
            <Text style={styles.infos}>
              <Text style={styles.bold}>Comments:</Text> {post.num_comments}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}