import React from 'react'
import Footer from "./Footer"
import MyForm from './MyForm';
import Home from './Home';
import Cards from './Cards';

export default function FrontPage() {
  return (
      <div>
           <Home/>
                <MyForm />
                <Cards/>
                <Footer />
      </div>
  )
}
