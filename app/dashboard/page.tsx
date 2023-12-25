
import ComponentOne from "@/component/componentOne";
import { Suspense}  from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <main>
      <h1>Hello, Dashboard page!</h1>
        <Suspense fallback={<Loading />}>
          <ComponentOne />
        </Suspense>
    </main>
  );
}
