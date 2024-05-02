import Image from 'next/image'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Rating from './components/Rating'
import HomeImageComponent from './components/HomeImageComponent'
import OurProducts from './components/OurProducts'
import ContactUs from './components/ContactUs'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

export default function App() {
  return (
    <main className="bg-secondaryBackground h-auto  w-[100%] flex flex-col justify-center ">
      {/* <div className="fixed top-0 z-[100] w-full"> */}
      <Navbar />
      {/* </div> */}
      <section id="home">
        <Home />
      </section>
      <Rating />
      <section id="about">
        <AboutUs />
      </section>
      <div className="px-[6px] md:px-[10px] lg:px-[26px] xl:px-[47px] mx-auto z-50 h-fit">
        <Banner />
      </div>
      <section id="products">
        <OurProducts />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <div className="w-full h-[100px] bg-primaryBackground flex justify-center text-center items-center text-[16px]">
        © 2024 Alamkritha. Designed by Arshal Ameen.
      </div>
    </main>
  )
}
