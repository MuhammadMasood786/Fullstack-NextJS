import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPost`);
  if (!res.ok) {
    console.log("Not Ok: ", res);
  }
  return res.json();
}

export default async function Home() {
  const data = await getPosts();
  console.log("Data: ", data);
  return (
    <main className="py-8 px-48">
      <Link
        href={"/auth"}
        className="bg-teal-500 text-black font-medium  py-2 px-4 rounded-md"
      >
        NextJS'13 with Tailwind, Prisma, Postgresql and Typescript
      </Link>
    </main>
  );
}
