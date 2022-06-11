import React from 'react';
import { mount } from 'marketing/MarketingApp'
import MarketingApp from '../components/MarketingApp'
import { Router, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

console.log(mount)
export default () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </>
  )
}