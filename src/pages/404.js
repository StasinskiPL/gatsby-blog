import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <section className="error">
        <div>
          <h2>Page not Found</h2>
          <Link to="/">Go home</Link>.
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
