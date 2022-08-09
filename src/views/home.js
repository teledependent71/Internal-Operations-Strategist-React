import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Operations Strategist</title>
        <meta property="og:title" content="Internal Operations Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
