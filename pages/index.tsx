import Head from 'next/head'
import Layout from "./layout"
import React from "react"
import Image from "react-bootstrap/Image"

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Coucou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div id="home-container">
          <h1>Bienvenue sur le site cosmique</h1>
          <h3>Lire les articles, tu te dois</h3>
          <p>Bon chance</p>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Home;
