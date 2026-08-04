"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/firebase";

export default function GetInTouchButton() {
  const [whatsapp, setWhatsapp] = useState<string>("");

  useEffect(() => {
    const contactRef = ref(db, "contact");
    const unsubscribe = onValue(contactRef, (snap) => {
      if (snap.val()?.whatsapp) {
        setWhatsapp(snap.val().whatsapp);
      }
    });
    return () => unsubscribe();
  }, []);

  const href = whatsapp
    ? `https://wa.me/${whatsapp.replace(/[^0-9+]/g, "")}`
    : "https://wa.me/94XXXXXXXXX";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold text-sm rounded-full hover:opacity-90 transition-all duration-200"
    >
      Get In Touch
    </a>
  );
}
