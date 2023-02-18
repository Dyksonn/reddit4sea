import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

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
  }
}[]

export const HomeScreen = () => {
  const [subreddits, setSubreddits] = useState<PropsReddits>();
  const [filter, setFilter] = useState<"new"|"top"|"popular"|"hot">("new")

  useEffect(() => {
    async function subreddits() {
      const response = await api.get<PropsSubReddits>(filter+".json"+"?count=1");
      console.log(response.data.data.children[0])
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
          onPress={() => alert(data.subreddit_id)}
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