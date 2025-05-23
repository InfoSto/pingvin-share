// pages/index.tsx
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://transfert.ville-saint-omer.fr/auth/signIn";
  }, []);

  return null; // Ou un message de chargement si tu préfères
}
