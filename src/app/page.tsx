"use client"

import { Button } from "@/components/ui/button"

export default function Home() {
  const triggerButton = () => {
    console.log("You clicked shadcn ui button components");
  }
  return (
    <main className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-center">
      <Button onClick={triggerButton}>Next.js & Docker Todo App 🚀</Button>
    </main>
  );
}
