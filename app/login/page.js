"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn("credentials", { email, password, redirect: false }).then( async(e)=>{
        if(e.error){
            setError("Invalid email/password")
        } else{
            router.push("/");
        }
    })
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <p className={error === "" ? styles.hide : styles.show}>{error}</p>
        <form className={styles.loginForm} onSubmit={handleSignIn}>
          <div>
            <label className={styles.Label}>Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.Input}
              placeholder="John@example.com"
            />
          </div>
          <div>
            <label className={styles.Label}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.Input}
              placeholder="******"
            />
          </div>
          <button type="submit" className={`${styles.btn} ${styles.loginBtn}`}>
            Log in
          </button>
          <p className={styles.paragraph}>
            Don`t have an account?{" "}
            <Link href="/signup" className={styles.link}>
              Sign up
            </Link>
          </p>
        </form>

        <div className={styles.orContainer}>
          <hr className={styles.divider} />
          <span className={styles.orText}>or</span>
          <hr className={styles.divider} />
        </div>

        <button
          className={`${styles.socialButton} ${styles.btn}`}
          onClick={() => signIn("google")}
        >
          <span>
            <FcGoogle className="size-6"/>
          </span>
          <span>Sign in with Google</span>
        </button>

        <button
          className={`${styles.socialButton} ${styles.btn}`}
          onClick={() => signIn("github")}
        >
          <span>
           <ImGithub className="size-6"/>
          </span>
          <span>Sign in with Github</span>
        </button>
      </div>
    </div>
  );
}