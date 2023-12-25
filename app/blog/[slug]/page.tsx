



export default function BlogPage({ params }: { params: { slug: string } }) {
  console.log("Blogpage", params);
  return (
    <>
      <h5>Dynamic Routing</h5>
      <div>This is the Blog date page {params.slug}</div>
    </>
  );
}
