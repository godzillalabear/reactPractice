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

const makeList = (array) => {
	return array.map(el => <li onClick={makeListHandler(el)} >{el}</li>)
}

const Hello = props => (
  <div>
    <h1 onClick={clickHandler}>Hello {props.name}!</h1>
    <ul>
      {
      	makeList(props.musics)
      }
    </ul>
  </div>
)

function makeListHandler(el){
	return () => console.log(el);													
}
function clickHandler() {
  alert('lalala')
}

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" musics={musics}/>,
    // document.body.appendChild(document.createElement('div')),
    document.getElementById("contianer"),
  )
})
