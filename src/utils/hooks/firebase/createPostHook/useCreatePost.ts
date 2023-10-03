import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_DB } from "../../../../../FirebaseConfig";

const useCreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [addInfo, setAddInfo] = useState<string>("");

  const auth = FIREBASE_AUTH;
  const dataBase = FIREBASE_DB;
  const email = auth.currentUser?.email;

  const addPost = async () => {
    if (title && details) {
      try {
        await addDoc(collection(dataBase, "posts"), {
          email,
          title,
          details,
        });
        setTitle("");
        setDetails("");
        setAddInfo("Post created successfuly");

        setTimeout(() => {
          setAddInfo("");
        }, 5000);
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  };

  return {
    title,
    setTitle,
    details,
    setDetails,
    addPost,
    addInfo,
  };
};

export default useCreatePost;
