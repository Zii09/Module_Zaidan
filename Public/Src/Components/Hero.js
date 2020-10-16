//import APP.js
import App from "../App.js";

//Buat component Hero dengan <section></section>
const Hero = () => {
  return `
        <section class='hero' style="
            width : 100vw;
            height : 80vh;
            display : flex;
            align-items : center;
            justify-content : space-between;
            padding : 0 10%;
            background-image : url(https://picsum.photos/seed/${Hero.state.imgNo}/900);
            background-size : cover;
            color : red;
            font-size : 2rem;
        ">
        <span class="material-icons" style="
            font-size : 5rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
            cursor : pointer;
        " onclick="prev()">
         keyboard_arrow_left
        </span>

        <div>
            <h1 onclick="showModal()">${Hero.state.text}</h1>
            ${Hero.state.showModal === true ? ( 

                "<input placeholder='Masukin Cuy' onchane='ubahText(event)' />" 
            
                ): '' }
        </div>
        

        <span class="material-icons" style="
            font-size : 5rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
            cursor : pointer;
        " onclick="next()">
            keyboard_arrow_right
        </span>
        </section>
    `
}

Hero.state = {
    text : "UBAH ..",
    setText : (event)=>{
        Hero.state.text = event
        App()
    },
    
      
    

    imgNo : 90,
    imgPrev:()=>{
        Hero.state.imgNo -= 1
        App()
    },
    imgNext:()=>{
        Hero.state.imgNo += 1
        App()
    },
    showModal : false,
    setShowModal  :()=>{
        Hero.state.showModal = !Hero.state.showModal
        App()
    }
}
window.prev = ()=>{
    Hero.state.imgPrev()
    console.log(Hero.state.imgNo)
}

window.next = ()=>{
    Hero.state.imgNext()
    console.log(Hero.state.imgNo)
}

window.showModal = ()=>{
    Hero.state.setShowModal()
    console.log(Hero.state.showModal)
}

window.ubahText = (event)=>{
    Hero.state.setText(event.target.value)
}

//export Hero agar bisa digunakan di file lain
export default Hero;