import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
/*
function Sahui(){
  return(
    <>
      <h1>wwe with sahil and reacts{AnotherUser}</h1>
      <h2>ki haal h soniye</h2></>
    )
}*/
//React containing this type //
/*
const wwe=(
  <a href="https://www.google.com" target='_blank'>Click on this link</a>
  
  
)*/

const AnotherUser="lihas khan";
/*React own methodto create element
const Sahil=React.createElement(
  "a",
{href:"https://www.wwe.com",target:"_blank"},
"clicl me to visit wwe/",

AnotherUser
)
*/


createRoot(document.getElementById('root')).render(
  <App/>


  
)
