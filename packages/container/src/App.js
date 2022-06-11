import React from 'react';
import { mount } from 'marketing/MarketingApp'
import MarketingApp from '../components/MarketingApp'

console.log(mount)
export default () => {
  return <div>
      <h2>Hi storre!</h2>
      <hr />
      <MarketingApp />
    </div>
}