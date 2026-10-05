"use client";
import { useEffect } from "react";
import axios from "axios";

// Sends a notification email when someone opens the portfolio.
export default function VisitorNotifier() {
  useEffect(() => {
    axios.post("/api/mailer", {
      subject: "New Portfolio Visitor",
      text: `Someone visited your portfolio on ${new Date().toLocaleString()}`,
    }).catch(err => console.error("Error sending visitor notification:", err));
  }, []);

  return null;
}
