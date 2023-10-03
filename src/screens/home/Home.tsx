import React from "react";
import { View, FlatList, RefreshControl } from "react-native";

import useGetPosts from "../../utils/hooks/firebase/getPostsHook/useGetPosts";
import { Post } from "../../utils/hooks/firebase/getPostsHook/types";

import PostsList from "../../components/postsList/PostsList";
import CustomActivityIndicator from "../../components/customActivityIndicator/CustomActivityIndicator";

const Home: React.FC = () => {
  const { loading, posts, fetchPosts } = useGetPosts();

  return (
    <>
      {loading && <CustomActivityIndicator />}
      {posts.length > 0 && (
        <View>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={fetchPosts} />
            }
            data={posts}
            renderItem={({ item }) => <PostsList {...item} />}
            keyExtractor={(post: Post) => post.id}
          />
        </View>
      )}
    </>
  );
};

export default Home;
