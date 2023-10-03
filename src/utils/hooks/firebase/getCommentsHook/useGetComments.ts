import { useState, useEffect } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { FIREBASE_DB } from "../../../../../FirebaseConfig";
import { Comment } from "../getPostsHook/types";

const useGetComments = (id: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dataBase = FIREBASE_DB;

  const fetchComments = () => {
    const postsRef = collection(dataBase, `posts/${id}/comments`);
    setLoading(true);
    const subscriber = onSnapshot(postsRef, {
      next: (snapshot) => {
        const comments: Comment[] = [];
        snapshot.docs.forEach((doc) => {
          comments.push({
            id: doc.id,
            ...doc.data(),
          } as Comment);
        });
        setComments(comments);
        setLoading(false);
      },
    });
    return () => subscriber();
  };

  useEffect(fetchComments, []);
  return { comments, loading };
};

export default useGetComments;
