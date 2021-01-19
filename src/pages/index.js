import React from "react"
import GoToTopBtn from "../components/GoToTopBtn"
import Layout from "../components/Layout"
import Posts from "../components/Posts"



const IndexPage = () => {
  return (
    <Layout>
      <Posts/>
      <GoToTopBtn/>
    </Layout>
  )
}

export default IndexPage
