import logo from './logo.svg';
import './App.css';
import IDCard from './components/IDCard';
import Data from "./Data.json";

function App() {
  console.log(Data.data);
  return (
    <div className="App">
          <h1> Welcome to IDCards App! </h1>  


          {/* <div className='d-flex'>
          <IDCard iname="Jane" idesc="Likes coding. likes travelling"/>  
          <IDCard iname="John" idesc="Likes analyzing. likes swimming"/>  
          <IDCard iname="Mike" idesc="Likes cooking. likes hiking"/>        
          </div>
           */}


        <div className='d-flex'>
          {
            Data.data.map( (elem)=> {
               return <IDCard iname= {elem.name} idesc={elem.des} />
            }
            )
          }
        </div>










    </div>
  );
}


export default App;

