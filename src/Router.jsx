import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

const Home = React.lazy( () => import('./views/home') )
const Cars = React.lazy( () => import('./views/cars') )
const About = React.lazy( () => import('./views/about-us') )
const Faqs = React.lazy( () => import('./views/faqs') )
const Policy = React.lazy( () => import('./views/policy') )
const Shipping = React.lazy( () => import('./views/shipping') )

const Router = () => {
  return (
    <Suspense fallback={<p>Cargando</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />}/>
        <Route path="/policy" element={<Policy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </Suspense>
  )
}

export default Router