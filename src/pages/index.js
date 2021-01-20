import React from "react"
import GoToTopBtn from "../components/GoToTopBtn"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import SEO from "../components/SEO"



const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home | Dawid Stasiński" />
      <Posts/>
      <GoToTopBtn/>
    </Layout>
  )
}

export default IndexPage
