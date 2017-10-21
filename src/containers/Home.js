import React from 'react'
import { getSiteProps } from 'react-static'
import H1 from 'components/H1';
//
export default getSiteProps(({ title }) => <H1 primary>Welcome to {title}!</H1>)
