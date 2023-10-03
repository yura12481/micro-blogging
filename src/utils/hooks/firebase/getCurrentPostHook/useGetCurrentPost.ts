import { useEffect, useState } from "react";

import { DocumentData, doc, getDoc } from "firebase/firestore";

import { FIREBASE_DB } from "../../../../../FirebaseConfig";

const useGetCurrentPost = (id: string) => {
  const [post, setPost] = useState<undefined | DocumentData>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const dataBase = FIREBASE_DB;

  useEffect(() => {
    const fetchDocument = async () => {
      setLoading(true);
      try {
        const docRef = doc(dataBase, "posts", id);
        const documentSnapshot = await getDoc(docRef);
        if (documentSnapshot.exists()) {
          setPost(documentSnapshot.data() as DocumentData);
          setLoading(false);
        } else {
          console.log("The post does not exist");
        }
      } catch (error) {
        console.error("Error receiving post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, []);

  return { post, loading };
};

export default useGetCurrentPost;
