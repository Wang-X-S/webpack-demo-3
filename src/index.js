import x from './test.js'
import './x.css'
import myimage from './test.png'
console.log('123')
console.log(x)

function component(){
    const element = document.createElement('div')
    const image = new Image()
    image.src = myimage;
    element.appendChild(image)
    return element
}
document.body.appendChild(component())