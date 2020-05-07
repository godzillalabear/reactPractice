// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let musicsDB = [
  'Jazz',
  'KPop',
  'Tango'
]

// const makeList = (array) => {
// 	return array.map(el => <li onClick={makeListHandler(el)} >{el}</li>)
// }
const ItemInput = props => {
	let [music, setMusic] = useState("");
	console.log(props)
	// useState returns an array with getter and setter
	return (
		<div>
			<input type="text" 
				   value={music} 
				   onChange={(evt) => { setMusic(evt.target.value); }}/>
			<button onClick={()=>{
									props.addMusic(music);
									setMusic("");
								}}> Add music </button>
		</div>
	);
}

const Item = (props) => {
  let m = props.music;
  return <li onClick={() => {console.log(m)}}>{m}</li>
}

const ItemList = (props) => {
	return props.musics.map(m => <Item music={m}/>)
}

let appStyle = {
	color: 'red',
	fontSize: 20
}

const App = (props) => {
	const [musics, setMusic] = useState(musicsDB);

  	const appendMusic = (newMusic) => {
    	setMusic([...musics, newMusic])
 	}
	 return(
	 	  <div>
		    <h1 onClick={clickHandler} style={appStyle}>Hello {props.name}!</h1>
		    <h2 className="title">{props.hehehe}</h2>
		    <ul>
		      <ItemList musics={musics}/>
		      <ItemInput addMusic={appendMusic}/>
		    </ul>
		  </div>
	 	)

}

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
    <App name="React" hehehe="hehehe"/>,
    // document.body.appendChild(document.createElement('div')),
    document.getElementById("contianer"),
  )
})
