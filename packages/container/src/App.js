import React from 'react';
import { mount } from 'marketing/MarketingApp'
import MarketingApp from '../components/MarketingApp'
import { Router, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

console.log(mount)
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})
export default () => {
  return (
    <>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
          <Header />
          <MarketingApp />
        </BrowserRouter>
    </StylesProvider>
    </>
  )
}