import React from 'react'
import Header from './Header/Header'
import Toppagebackground from './TopPage/Toppagebackground'
import TopPageMenu from './Menu/TopPageMenu'

const Homepage = () => {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 bg-[url('/toppage/bg_characters_mobile.png')] md:bg-[url('/toppage/bg_characters_desktop.png')] bg-cover bg-center bg-no-repeat"> 
    <Header/>
    <Toppagebackground/>
    <TopPageMenu/>
    </div>
  )
}

export default Homepage