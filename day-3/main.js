// main.js

// top of the DOM tree window object

// console.log('hello world')

// console.log(window)
// console.dir(document)
// console.log(window.document.body)

// HTMLcollections -> array like objects
// Nodelists -> array like objects

// parent/child relationships
// node
// root node = no parent node
// child node is of its parent
// sibling nodes share a parent
// ancestors have parents 
// who are siblings
// leaf/internal



// DOM interactions are computational
// expensive

// MVC
// unidirectional language


// html element.addEventLister('onClick', cb)
// eventTarget.addEventListener('eventName', callbackFx)

// // event handler (onClick) vanilla js
// const onClick = (e) => {
//      e.stopPropagation()
//      console.log('this is being printed from our deeply nested child')
// }

// const targetParent = document.getElementById('parent')
// const targetDiv = document.getElementById('deeplyNestedChild')
// targetDiv.addEventListener('click', onClick)
// targetParent.addEventListener('click', (e) => {
//      console.log('this is from our parent')
// })






// general syntax for an event listener
// target.addEventListener('eventName', callbackFx)


// if a Cb fx is a fx that gets passed to another fx as ana rgument
// higher order fucntion


window.addEventListener('click', function (e) {
     console.log(e)
})
























