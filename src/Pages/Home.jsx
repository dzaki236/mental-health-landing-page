import Hero from "@/Components/Hero"
import About from '@/Components/About'
import Cta from "@/Components/Cta"
import Contact from "@/Components/Contact"
import ForeWord from "@/Components/ForeWord"
import Links from "@/Components/Links"
import Footer from "@/Components/Footer"
import Menu from "@/Components/Menu"
const Home = () => {
    return (
        <>
            <Menu/>
            <Hero/>
            <About/>
            <Cta/>
            <ForeWord/>
            <Contact/>
            <Links/>
            <Footer/>
        </>
    )
}
export default Home