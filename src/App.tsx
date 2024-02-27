import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

const Section = styled.section`
  display: block;
  width: 100%;
`

export const App = () => {
  const { formatMessage } = useIntl()
  return (
    <main>
      <Helmet>
        <title>PlaceHolder Page</title>
        <meta name="description" content="PlaceHolder Page" />
      </Helmet>
      <Section>
        <span>{formatMessage({ id: 'greeting' })}</span>
      </Section>
    </main>
  )
}
