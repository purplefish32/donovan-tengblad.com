import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import PageTop from 'components/PageTop';
//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    position: fixed;
    background: url(/img/blur-bg.jpg) center center no-repeat;
    background-size: cover;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    font-weight: bold;
  }

  .content {
    padding: 1rem;
  }
`

export default () => (
  <Router>
    <AppStyles>
      <PageTop>
      </PageTop>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)
