import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const person ={
   name:"hiep",
   age:10,
   status: true,
   childen: [
     {id: "1", name: "toro"},
     {id: "2", name: "vera"},
   ]
}
 // sử dụng hàm trong react
const showAge = (age) => <p>Tuoi cua ban la: {age}</p>
const showName = (name) => <p>Ten cua ban la: {name}</p> 
// sử dụng component trong react
const ShowAge = props => <p>Tuoi cua ban la: {props.age}</p>
const ShowName = propss => <p>ten cua ban la: {propss.name}</p>
ReactDOM.render(<div>
   <p>Ten: {person.name}</p>
   <p>Tuoi: {person.age}</p>
   <p>{person.status ? "da ket hon" : "chua ket hon"}</p>
   <ul>

   </ul>
   function:
    { showAge(person.age)}
    { showName(person.name)}
    <div>component: <ShowAge age={person.age} />
                    <ShowName name={person.name} />
    </div>
 </div>
,
  document.getElementById('root')
)
