"use client";

import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSignup = () => {
    const signup = async () => {
      await createUserWithEmailAndPassword(auth, email, password);
    };
    signup()
      .then(() => {
        console.log("成功しました");
        setEmail("");
        setPassword("");
      })
      .catch((e) => {
        console.error(e);
        console.error("失敗しました");
      });
  };

  return (
    <div>
      <div className="text-black">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} className="border" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            className="border"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handlerSignup}>signup</button>
    </div>
  );
}
