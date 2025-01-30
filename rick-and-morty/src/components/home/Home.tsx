import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import './home-styles.css'
import { HomeSection } from "./stateless/HomeSection"

export const Home = () => {
  return (
    <>
        <Header/>
        <HomeSection/>
        <Footer/>
    </>
  )
}
