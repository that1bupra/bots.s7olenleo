"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
        Login
      </h1>

      <button
        onClick={() => signIn("discord")}
        style={{
          padding: "12px 24px",
          backgroundColor: "#5865F2",
          color: "white",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Login with Discord
      </button>
    </div>
  );
}
