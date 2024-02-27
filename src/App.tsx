import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

const Section = styled.section`
  display: block;
  width: 100%;
`

export const App = () => (
  <main>
    <Helmet>
      <title>PlaceHolder Page</title>
      <meta name="description" content="PlaceHolder Page" />
    </Helmet>
    <Section>
      <span>Hello World!</span>
    </Section>
  </main>
)
