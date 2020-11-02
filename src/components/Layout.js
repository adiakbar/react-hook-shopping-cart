import React from 'react'
import {Helmet} from 'react-helmet-async'

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
        <meta name = "description" content={ description || "React.js Boilerplate" } />
      </Helmet>
      <main className="container">
        {children}
      </main>
    </>
  )
}

export default Layout
