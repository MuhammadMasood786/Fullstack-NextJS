
import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPost`);
  if (!res.ok) {
    console.log("Not Ok: ", res);
  }
  return res.json();
}
async function createPost() {
  const data = await fetch(`${process.env.BASE_URL}/api/createPost`, {
    method: "POST",
    body: JSON.stringify({
      title: "Second Entry",
      content: "",
      published: true,
    }),
  });
  const res = await data.json();
  console.log("Create Post Response: ", res);
}

export default async function Home() {
  const getData = await getPosts();
  console.log("getData: ", getData);
  // const postData = await createPost();
  // console.log("postData: ", postData);

  
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
