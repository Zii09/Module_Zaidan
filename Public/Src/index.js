//import App.js
import App from './App.js'
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Headline from './Components/Headline.js'
import Slider from './Components/Slider.js'
import Menu from './Components/Menu.js'
import Footer from './Components/Footer.js'

//Buat function index yang berisi syntax HTML
const index = ()=>{
    return `
        ${Navbar()}
        ${Menu()}
        ${Hero()}
        ${Headline()}
        ${Slider()}
        ${Footer()}
    `
}

//export index() agar bisa digunakan di file JS lainnya
export default index