import Link from "next/link";
import SignInAnonymouslyButton from "@/components/SignInAnonymouslyButton";
import SignOutButton from "@/components/SignOutButton";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/">
          <a>FormBuilder</a>
        </Link>

        <SignInAnonymouslyButton />
        <SignOutButton />
      </header>
    </div>
  );
}
