import React from 'react'
import Blog from '../components/Blog'
import BlogDetails from '../components/BlogDetails'
import Contact from '../components/Contact'
import Features from '../components/Features'
import Hero from '../components/Hero'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Blog/>
        <BlogDetails/>
        <Contact/>
    </div>
  )
}

export default Homepage