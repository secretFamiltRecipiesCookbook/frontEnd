//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import image from './images/backgroundImage.jpg'
import NavBar from './components/NavBar/NavBar'
import {Login} from './components/login';


const LandingPage = styled.div`
color : #e1e2e0;
background-image:url(${image});
background-size : cover
text-align : center;
background :cover;
Height :50vh;



`;
const Paragraph =styled.p`
color : gold;
font-size : 170%;
font-family :Italic;
text-align : center;
margin-top : 20%;
index

`;
const Logins =styled.div`
color : yellow;

`;

function App(){

return(

  <div className ="App">
  <NavBar/>
  <Login />
  <LandingPage>
  
  <h1>Welcome to Our Recipes</h1>

 <div className ='mid'>
 <Paragraph>Welcome All. Our Family Legacy is sharing, we would love to keep our Traditions, Welcome Family<br></br>
 --Uncle Russell</Paragraph></div>
  </LandingPage>
  
  
  </div>
 

 
)
  



}

export default App;
