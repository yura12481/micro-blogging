import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_DB } from "../../../../../FirebaseConfig";

const useAddComment = (id: string) => {
  const [text, setText] = useState<string>("");
  const [commentId, setCommentId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;
  const dataBase = FIREBASE_DB;
  const email = auth.currentUser?.email;

  const addComment = async () => {
    try {
      setLoading(true);
      const commentRef = await addDoc(
        collection(dataBase, `posts/${id}/comments`),
        {
          email,
          text,
        }
      );
      setCommentId(commentRef.id);
      setText("");
      setLoading(false);
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return { addComment, setText, text, commentId, loading };
};

export default useAddComment;
