







export default function ServicePage({ params }: { params: { slug: string[] } }) {
    console.log("ServicePage", params);
    return (
      <>
        <h5>Dynamic Nested Routing</h5><p>(Service page will available)</p>
        <div>This is the service page {params.slug && params.slug.join('/')}</div>
      </>
    );
  }
  