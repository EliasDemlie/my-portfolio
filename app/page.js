"use client"; 
import { useEffect } from "react";
import axios from "axios";
import Hero from "./hero/page";

export default function Home() {
  useEffect(() => {
    axios.post("/api/mailer", {
      subject: "New Portfolio Visitor",
      text: `Someone visited your portfolio on ${new Date().toLocaleString()}`,
    }).catch(err => console.error("Error sending visitor notification:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
