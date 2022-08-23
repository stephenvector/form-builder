import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { AuthContext } from "@/contexts";
import { auth } from "@/firebase";
import Header from "@/components/Header";
import Main from "@/components/Main";

// Global Stylesheet
import "../css/global.css";

export default function FormBuilderApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setCheckedAuth(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, checkedAuth }}>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </AuthContext.Provider>
  );
}
