import { signOut } from "firebase/auth";
import Button from "@/components/Button";
import { auth } from "@/firebase";
import { useAuth } from "@/hooks";

export default function SignOutButton() {
  const { user } = useAuth();
  if (user === null) {
    return null;
  }
  return (
    <Button
      onClick={() => {
        signOut(auth);
      }}
      type="button"
    >
      Sign Out
    </Button>
  );
}
