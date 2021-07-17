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

const button = document.createElement('button')
button.innerText='懒加载'
button.onclick = ()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('加载错误')
    })
}
document.body.appendChild(button)