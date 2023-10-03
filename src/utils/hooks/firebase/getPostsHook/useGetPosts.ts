import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { FIREBASE_DB } from "../../../../../FirebaseConfig";
import { Post } from "./types";

const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dataBase = FIREBASE_DB;

  const fetchPosts = () => {
    const postsRef = collection(dataBase, "posts");
    setLoading(true);
    const subscriber = onSnapshot(postsRef, {
      next: (snapshot) => {
        const posts: Post[] = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          } as Post);
        });
        setPosts(posts);
        setLoading(false);
      },
    });
    return () => subscriber();
  };

  useEffect(fetchPosts, []);

  return {
    posts,
    loading,
    fetchPosts,
  };
};

export default useGetPosts;
