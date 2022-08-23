import { useCallback, useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/hooks";
import Button from "@/components/Button";

export default function SignInAnonymouslyButton() {
  const { user, checkedAuth } = useAuth();
  const [signingIn, setSigningIn] = useState(false);

  const handleSignIn = useCallback(() => {
    setSigningIn(true);
    signInAnonymously(auth).finally(() => {
      setSigningIn(false);
    });
  }, []);

  if (!checkedAuth) {
    return null;
  }

  if (checkedAuth && user) {
    return null;
  }

  return (
    <Button disabled={signingIn} type="button" onClick={handleSignIn}>
      {signingIn ? "Signing In Anonymously" : "Sign In Anonymously"}
    </Button>
  );
}
