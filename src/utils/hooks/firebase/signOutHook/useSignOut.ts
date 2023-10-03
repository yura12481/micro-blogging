import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";

const useSignOut = () => {
  const auth = FIREBASE_AUTH;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { handleSignOut };
};

export default useSignOut;
