import Link from "next/link";

export default async function Home() {
  return (
    <main className="py-8 px-48">
      {/* <div
        className="bg-teal-500 text-black font-medium  py-2 px-4 rounded-md"
      >
      NextJS'13 with Tailwind, Prisma, Postgresql and Typescript
      </div> */}

      <h1>Hello, Home page!</h1>
      <Link href='/dashboard'>Route to Dashboard </Link><br/>
      <Link href='/parellal-routing'>Route to Parallel Routing </Link>
    </main>
  );
}



import React from 'react';



