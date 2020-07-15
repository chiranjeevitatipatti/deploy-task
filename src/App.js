import React  from 'react';
import Logo from './download.jpg';
import './App.css';
//import hooks from './hooks';
import data from "./data.json";
import Resume from "./components/Resume"
import Homepage from "./components/Homepage"
import { BrowserRouter, Route,Link} from "react-router-dom";

// import Welcome from './Welcome'
// import { render } from '@testing-library/react';
// import States from './States';                                            function =>no render class->render
// function App(){
//   class App extends Component {

//   // return (
//     render() {
//       return (
//     <div className="App">
            
//             <Home />
//       </div>
//     );
//   }



// let =()=>{
//   let profile=data.profile;
//   console.log(profile);

//   return(
//     <div className="row justify-concent-center">
//       {profile.map((value,index)=>(
//           <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
//             <div className="card">
//               <div className="card-body">
//                 <h1>{value.basic.name}</h1>
//                 <h2 className="btn btn-primary">profile</h2>
//               </div>
//             </div>
//             </div>
//       ))
      
  
// }
// </div>
//   );
// }




// export default App;





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" data={Home} />
      <Route path="/resume" data={Resume}/>
      <Route path="/homepage" data={Homepage}/>
      </BrowserRouter>
      <Home />
      
    </div>
  );
}



let Home =()=>{    
  let profile= data.profiles;
  console.log(profile); 

  return(
      <div className="row justify-content-center">
          {
              profile.map((value,index)=>(
                  <div className="col-sm-10 col-md-4 col-lg-4" key={index}>
                  <div className="card">
                      <div className="card-body">
                        <img src={Logo} alt="chiru"/>
                      <h1>{value.basic.name}</h1>
                      <h2>{value.basic.role}</h2>
                      <h3 onClick={() => window.location.href="tel:+919676578125"}>{value.basic.phone}</h3>
                      <h3 onClick={() => window.location.href="mailto:chiranjeevitati3@gmail.com"} className="email link1">{value.basic.email}</h3>

                    
                        
                      {/* <button className="btn btn-primary">Profile</button> */}
                      {/* <Link onClick={event =>  window.location.href=''} className="btn btn-primary">View Profile</Link> */}
                      <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">View Profile</Link>
                     
            

                      </div>
                      

                  </div>
                  
                  </div>

              ))
          }

      </div>                     
  );
}


export default App;



