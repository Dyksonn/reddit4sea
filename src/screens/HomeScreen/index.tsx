import { useEffect } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import api from "@service";
import { FabButton } from "@components/FabButton";
import { Posts } from "@components/Posts";
import { Separator } from "@components/Separator";
import { useReduxDispatch, useReduxSelector } from "@hooks";
import { 
  selectRefreshing, 
  selectFilter, 
  selectListSubreddits 
} from "@slices/subreddits/selectores";
import { 
  onRefreshing, 
  onSubredditslist,
  onFilter
} from "@slices/subreddits";

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  const refreshing = useReduxSelector(selectRefreshing);
  const filter = useReduxSelector(selectFilter);
  const listSubreddits = useReduxSelector(selectListSubreddits);

  const dispatch = useReduxDispatch();

  async function Apisubreddits() {
    const response = await api.get<PropsSubReddits>(filter+".json");
    const { children } = response.data.data;

    dispatch(onSubredditslist({data: { children }}));
  }

  const onRefresh = async () => {
    dispatch(onRefreshing({refreshing: true}));

    await Apisubreddits();

    dispatch(onRefreshing({refreshing: false}));
  }

  const handleSelectedFilter = (filter: PropsSelectFilter) => {
    dispatch(onFilter(filter));
  }

  useEffect(() => {
    Apisubreddits();
  }, [filter]);


  return (
    <View style={styles.container}>
      <FlatList 
        refreshControl={<RefreshControl 
          onRefresh={onRefresh}
          refreshing={refreshing}
          colors={["#FFFF"]}
          tintColor="#FFFF"
        />}
        style={styles.flatlist}
        initialNumToRender={7}
        contentContainerStyle={styles.contentflatlist}
        data={listSubreddits}
        keyExtractor={item => String(item.data.id)}
        renderItem={({ item: { data } }) => 
        <Posts 
          post={data} 
          onPress={() => navigate("DetailsScreen", 
          {url: data.permalink})}
        />}
        ItemSeparatorComponent={Separator}
      />
      
      <FabButton 
        style={styles.fabbuton}
        onFire={() => handleSelectedFilter("hot")}
        onStart={() => handleSelectedFilter("top")}
        onTrophy={() => handleSelectedFilter("controversial")}
        onNew={() => handleSelectedFilter("new")}
      />
    </View>
  );
}