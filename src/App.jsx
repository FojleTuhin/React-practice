
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'
import Books from './Books'
import Counter from './Counter'
import Team from './Team'

function App() {
  // const [count, setCount] = useState(0)

  const books = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "Chemistry", price: 200 },
    { id: 3, name: "Biology", price: 300 }
  ]
  const actors = ["sakib", "salamn", "sumi", "rumi"];

  const singers = [
    { name: "fojle", age: 23 },
    { name: "rabbi", age: 24 },
    { name: "tuhin", age: 22 }

  ]

  function handleClick(){
    alert('button click')
  }

  function addToFive(num){
    alert(num+3);
  }


  return (
    <>

    <Team></Team>
    <Counter></Counter>
    <button onClick={()=>addToFive(5)}>Add 5</button>
      <button onClick={handleClick}>Click me</button>

      <h1>Vite + React</h1>

      {
        books.map(book => <Books book={book}></Books>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {
        actors.map(actor => <Actor name={actor} ></Actor>)
      }

      {/* <Person></Person>
    <Student grade='77' score='99' name='tuhin' age='23'></Student>
    <Student grade='34' score='45'></Student>
    <Student></Student>
    <Developer></Developer> */}
    </>
  )
}

// function Person(){
//   const age=23;
//   const nameis='tuhin';
//   return(
//     <h3>my name is {nameis} age:{age}</h3>
//   )
// }

// const {grade, score}={grade:'4', score:'34'};

// function Student({grade=1,score=0}){
//   console.log(grade, score);
//   return(
//     <div className='student'>
//       <h3>I am a student</h3>
//       <p>Class: {grade}</p>
//       <p>Score: {score}</p>
//     </div>
//   )
// }


// function Developer(){

//   const developerStyle={
//     margin:'20px',
//     padding:'20px',
//     border:'2px solid green',
//     borderRadius:'10px'
//   }
//   return (
//     <div style={developerStyle}>
//       <h5>devo </h5>
//       <h6>coding</h6>
//     </div>
//   )
// }

export default App
