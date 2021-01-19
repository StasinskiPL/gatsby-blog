import  React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"



// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h2>Page not Found</h2>
      <Link to="/">Go home</Link>.
    </Layout>
  )
}

export default NotFoundPage
