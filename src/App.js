import React,{useState} from "react";


const users=[
  { id:1,
  name:"nithish"},{
    id:2,
    name:"meghana"
  },
  {
    id:3,
    name:"React"
  }
]

export default function App() {
const[data,setData]=useState('')

// const Updata=()=>{

//   setData( users.find((person) => person.name === "React"))
// }

  const Bruno = users.find((person) => person.name === "React")
  // const updata=(Bruno)=>{
  //   setData(Bruno)
  // }
  console.log(Bruno )
// const h=()=>{
//   setData(Bruno)
// }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      
      <p>Start editing to see some magic happen :),{data}</p>
    </div>
  );
}
