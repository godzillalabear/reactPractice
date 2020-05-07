// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let musics = [
  'Jazz',
  'KPop',
  'Tango'
]

// const makeList = (array) => {
// 	return array.map(el => <li onClick={makeListHandler(el)} >{el}</li>)
// }

const Item = (props) => {
  let m = props.music
  return <li onClick={() => {console.log(m)}}>{m}</li>
}

const Hello = (props) => (
  <div>
    <h1 onClick={clickHandler}>Hello {props.name}!</h1>
    <h2>{props.hehehe}</h2>
    <ul>
      { props.musics.map((m) => <Item music={m} />) }
    </ul>
  </div>
)

// function makeListHandler(el){
// 	return () => console.log(el);
// 	// return function(){
// 	// 	console.log(el);
// 	// }													
// }
// const makeListHandler = (el) => {
//   return () => console.log(el)
// }

function clickHandler() {
  alert('lalala')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" musics={musics}/>,
    // document.body.appendChild(document.createElement('div')),
    document.getElementById("contianer"),
  )
})
