







export default function ShopPage({ params }: { params: { slug: string[]  } }) {
    console.log("ShopPage", params);
    return (
      <>
        <h5>Dynamic Nested Routing</h5><p>(Shop page will not available)</p>
        <div>This is the shop page {params.slug.join('/')}</div>
      </>
    );
  }
  