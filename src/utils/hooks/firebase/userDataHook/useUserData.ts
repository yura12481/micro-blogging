import { useEffect, useState } from "react";

import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";

const useUserData = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const currentEmail = user.email;
      const name = user.displayName;
      setUserEmail(currentEmail);
      setDisplayName(name);
    }
  }, []);

  return {
    userEmail,
    displayName,
  };
};

export default useUserData;
