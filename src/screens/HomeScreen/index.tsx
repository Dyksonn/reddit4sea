import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FabButton } from "@components/FabButton";
import { styles } from "./styles";
import api from "@service";
import { Posts } from "@components/Posts";
import { Separator } from "@components/Separator";

type PropsSubReddits = {
  data: {
    children: {
      data: {
        id: string;
        subreddit_id: string;
        score: number;
        author: string;
        title: string;
        num_comments: number;
        created_utc: string;
        url: string;
        url_overridden_by_dest: string;
      }
    }[]
  }
}

type PropsReddits = {
  data: {
    id: string;
    subreddit_id: string;
    score: number;
    author: string;
    title: string;
    num_comments: number;
    created_utc: string;
    url: string;
    url_overridden_by_dest: string;
  }
}[]

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [subreddits, setSubreddits] = useState<PropsReddits>();
  const [filter, setFilter] = useState<"new"|"top"|"popular"|"hot">("new")

  useEffect(() => {
    async function subreddits() {
      const response = await api.get<PropsSubReddits>(filter+".json"+"?count=1&after=true");
      // console.log("aqui ",response.data.data.children[1].data.body_html)
      const { children } = response.data.data;
      setSubreddits(children);
    }

    subreddits();
  }, [filter]);


  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.flatlist}
        contentContainerStyle={styles.contentflatlist}
        data={subreddits}
        keyExtractor={item => String(item.data.id)}
        renderItem={({ item: { data } }) => 
        <Posts 
          post={data} 
          onPress={() => navigate("DetailsScreen", 
          {url: data.url_overridden_by_dest})}
        />}
        ItemSeparatorComponent={Separator}
      />
      
      <FabButton 
        style={styles.fabbuton}
        onFire={() => setFilter("hot")}
        onStart={() => setFilter("top")}
        onTrophy={() => setFilter("popular")}
        onNew={() => setFilter("new")}
      />
    </View>
  );
}