import React from 'react'
import { Router, Head } from 'react-static'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import TopBar from 'components/TopBar';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Content from 'components/Content';
import ContentFooter from 'components/ContentFooter';
import Routes from 'react-static-routes'
import colors from './colors'
import theme from './theme'
//

injectGlobal`
  body {
    min-height: 100%;
    min-width: 320px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    line-height: 16px;
    font-family: Roboto, sans-serif;
    margin: 0;
    padding: 0;
    color: #ffffff;
    background-color: #F0F3F4;
    position: fixed;
    background: url(/img/blur-bg.jpg) center center no-repeat;
    background-size: cover;
  }
`

const AppStyles = styled.div`
  a {
    color: ${theme.main};
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    text-decoration: none!important;
  }

  a:hover {
    color: ${theme.main.darken(0.3)};
  }
`

export default (props) => (
  <ThemeProvider theme={colors}>
    <Router>
      <AppStyles>
        <Head>
          <meta charSet="UTF-8" />
          <title>This is my page title!</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
        </Head>
        <TopBar/>
        <Main>
          <Sidebar />
          <Routes />
          <ContentFooter />
        </Main>
      </AppStyles>
    </Router>
  </ThemeProvider>
)
