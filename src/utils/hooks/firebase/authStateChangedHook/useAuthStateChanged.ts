import { useEffect, useState } from "react";

import { User, onAuthStateChanged } from "firebase/auth";

import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";

const useAuthStateChanged = () => {
  const [user, setUser] = useState<User | null>(null);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user };
};

export default useAuthStateChanged;
