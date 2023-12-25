import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="py-8 px-48">
      <nav>Layout section</nav>
      {children}
    </section>
  );
}



