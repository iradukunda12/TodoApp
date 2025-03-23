"use client"

import { Button } from "@/components/ui/button";




export default function Home() {
  const triggerButton = () => {
    console.log("You clicked shadcn ui button components");
  }

  return (
<>
  <div className="w-screen min-h-screen bg-black flex flex-col justify-between items-center px-2">
    <main className="flex flex-col justify-center items-center flex-1">
      <div className="w-full max-w-[413px] h-[200px] px-3 flex flex-col justify-center items-center gap-4 text-black">
        <h1 className="text-2xl text-white font-extralight text-center">
          Stay Organized with Your To-Do List
        </h1>
        <p className="text-muted-foreground text-white font-extralight text-center leading-6">
          Manage your tasks efficiently and boost productivity. Add, edit, and complete tasks with ease.
        </p>
      </div>
      <Button className="bg-white hover:bg-white text-black font-extralight mt-4" onClick={triggerButton}>
        Get Started Todo App 🚀
      </Button>
    </main>
    <footer className="text-center text-white py-4 ">
       Copyright © By Nextjs {new Date().getFullYear()}
    </footer>
  </div>
</>

  );
}
