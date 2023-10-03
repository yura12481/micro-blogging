import { deleteDoc, doc } from "firebase/firestore";

import { FIREBASE_DB } from "../../../../../FirebaseConfig";

const useDeleteComment = (id: string, commentId: string) => {
  const dataBase = FIREBASE_DB;

  const ref = doc(dataBase, `posts/${id}/comments/${commentId}`);
  const deleteComment = async () => {
    deleteDoc(ref);
  };

  return { deleteComment };
};

export default useDeleteComment;
