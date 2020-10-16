import App from '../App.js'
import Card from './Card.js'

const Slider = ()=>{
    return`
        <section class='slider'>
            
            <div class='cardContainer'>
                ${Card('https://picsum.photos/seed/91/200', 'Card 1', 'Its first Card')}
                ${Card('https://picsum.photos/seed/92/200', 'Card 2', 'Its second Card')}
                ${Card('https://picsum.photos/seed/93/200', 'Card 3', 'Its third Card')}
                ${Card('https://picsum.photos/seed/94/200', 'Card 4', 'Its fourth Card')}
                ${Card('https://picsum.photos/seed/95/200', 'Card 5', 'Its fifth Card')}
                ${Card('https://picsum.photos/seed/96/200', 'Card 6', 'Its sixth Card')}
                ${Card('https://picsum.photos/seed/97/200', 'Card 7', 'Its seventh Card')}

            </div>
         
        </section>
    `
}

export default Slider