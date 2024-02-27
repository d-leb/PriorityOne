import React from 'react'
import { Helmet } from 'react-helmet-async'

export const App = () => (
  <main>
    <Helmet>
      <title>PlaceHolder Page</title>
      <meta name="description" content="PlaceHolder Page" />
    </Helmet>
    <section>
      <span>Hello World!</span>
    </section>
  </main>
)
