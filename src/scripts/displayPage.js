import {gsap} from 'gsap'

const display = (ele) => {
    let divs = document.querySelectorAll(".App>div")
    divs.forEach(div => {
        if (div.classList[0] === ele) {
            div.style.display = "block"
            gsap.from(div, {
                width: 0,
                duration: 1,
            })

        } else {
            div.style.display = "none"
        }
    });

}


export default display