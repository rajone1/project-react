import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todolist from "./Todolist";
import Actorinfo from "./Actorinfo";
import Singerinfo from "./singerinfo";
import Bookstore from "./bookstore";

function App() {
  const actors = ["Sakib", "Shoriful Raj", "Jasim", "Rubel", "Salman Shah"];

  const singerlist = [
    { id: 1, name: "Dr. Mahfuzur", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Shuvro Dev", age: 58 },
    { id: 4, name: "Pritom", age: 28 },
  ];

  const booksall = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "Math", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Biology", price: 150 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <Bookstore name={booksall}></Bookstore>

      {/* {singerlist.map((data) => (
        <Singerinfo name={data}></Singerinfo>
      ))}

      {actors.map((info) => (
        <Actorinfo name={info}></Actorinfo>
      ))}
      <Actorinfo name="sharuk khan"></Actorinfo> */}
      {/* <Todolist naem1="react js" naem2="next js" isdone={true}></Todolist>
      <Todolist naem1="react js" isdone={false}></Todolist>
      <Todolist naem1="react js" isdone={true}></Todolist> */}
      {/* <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Addnew name="shaon" age="30" job="Web-developer"></Addnew>
      <Addnew name="Rezwan" age="31"></Addnew>
      <Addnew name="Rezwan"></Addnew>
      <Student2 grade="11" age="18"></Student2>
      <Student2 grade="12" age="20"></Student2> */}
    </>
  );
}

function Person() {
  const name = "Rezwan";
  const age = 30;
  const skill = { first1: "html", second: "css", third: "js" };
  return (
    <h2>
      i am {name} my age {age} my skill is {skill.third}
    </h2>
  );
}

function Student() {
  return (
    <div className="student">
      <h2>i am a developer</h2>
      <p>i work in bd as </p>
    </div>
  );
}

function Developer() {
  const mystyle = {
    margin: "5px",
    border: "5px solid red",
  };
  return (
    <div style={mystyle}>
      <h2>react developer</h2>
      <h3>create project</h3>
    </div>
  );
}

function Addnew(props) {
  console.log(props);
  // const jobholder = {name: }
  return (
    <div>
      <h2>
        name: {props.name} profession:{props.job}
      </h2>
      <h2>age:{props.age}</h2>
      <h2>degignation:</h2>
    </div>
  );
}

// use destructuring

// const { grade, score } = { grade: "11", age: "18" };

// function Student2({ grade, age }) {
//   console.log(grade, age);
//   return (
//     <div>
//       (
//       <h1>
//         my class:{grade} my age is:{age}
//       </h1>
//       );
//     </div>
//   );
// }

export default App;
