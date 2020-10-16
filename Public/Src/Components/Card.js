import App from '../App.js'


const Card = ( img, title, content )=>{
    return `

        <div class='Card'>
            <img src='${img}'alt='${title}'/>
            <h3> ${title} </h3>
            <p>
                ${content}
            </p>
        </div>
    `

}

export default Card