import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => (
  <Layout>
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-7xl tracking-display text-ebony">404</h1>
        <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-graphite">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-10 inline-block border-b border-ebony pb-1 text-sm uppercase tracking-eyebrow text-ebony">
          Return home
        </Link>
      </div>
    </div>
  </Layout>
);

export default Index;
