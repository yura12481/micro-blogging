import { deleteDoc, doc } from "firebase/firestore";

import { FIREBASE_DB } from "../../../../../FirebaseConfig";

const useDeletePost = (id: string) => {
  const dataBase = FIREBASE_DB;

  const ref = doc(dataBase, `posts/${id}`);
  const deletePost = async () => {
    deleteDoc(ref);
  };

  return { deletePost };
};

export default useDeletePost;
