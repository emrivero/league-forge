import { AuthProvider } from "@refinedev/core";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "../../firebase-config";
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        success: false,
        error: (error as any)?.message || "An error occurred",
      };
    }
  },
  register: async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed up
      return {
        success: true,
        redirectTo: "/login",
      };
      // ...
    } catch (error: any) {
      const errorMessage = error?.message || "An error occurred";
      return {
        success: false,
        error: {
          name: "Error de registro",
          message: errorMessage,
        },
      };
    }
    // ..
  },
  logout: async () => {
    try {
      await signOut(auth);
      return {
        success: true,
        redirectTo: "/",
        message: "User logged out successfully",
      };
    } catch (error) {
      return {
        success: false,
        error: (error as any)?.message || "An error occurred",
      };
    }
  },
  check: async (params) => {
    if (!params) {
      return { authenticated: false };
    }

    return { authenticated: true };
  },
  getIdentity: async () => {
    const user = auth.currentUser;
    if (user) {
      return {
        id: user.uid,
        fullName: user.displayName || "Anonymous",
        email: user.email,
      };
    }
    return null;
  },
  onError: async (error) => {
    return {};
  },
};

export default authProvider;
