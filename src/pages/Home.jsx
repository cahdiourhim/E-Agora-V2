import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Categories from "../components/Categories";
import Produits from '../components/Produits';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Announcements/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Produits/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
