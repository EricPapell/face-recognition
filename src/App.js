import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const getRequestOptions = function(imgUrl){
  const PAT = '8d15e56b16d541a7b457ffa72240da6c';
  const USER_ID = 'exploreandrelax';       
  const APP_ID = 'face-recognition';
  const MODEL_ID = 'face-detection';  
  const IMAGE_URL = imgUrl;
  const raw = JSON.stringify({
    "user_app_id": {
         "user_id": USER_ID,
         "app_id": APP_ID
     },
     "inputs": [
         {
             "data": {
                 "image": {
                     "url": IMAGE_URL
                 }
             }
         }
     ]
 });

 const requestOptions = {
     method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Authorization': 'Key ' + PAT
     },
     body: raw
 };
 
return {MODEL_ID,requestOptions}
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:''
    }
  }

onInputChange = (event)=>{
  this.setState({input:event.target.value})
console.log(event.target.value)
}

onButtonSubmit=()=>{
  this.setState({imageUrl:this.state.input})
  const x =getRequestOptions(this.state.input)
  fetch("https://api.clarifai.com/v2/models/" + x.MODEL_ID + "/outputs", x.requestOptions )
  .then(response => response.json())
  .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
  .catch(error => console.log('error', error));
}

  render(){
    return(
          <div className="App">
      <Navigation/>
       <Logo/>
       <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imgUrl={this.state.imageUrl}/>
      <ParticlesBg className='particles' bg={true} type="cobweb" num={70}/>
    </div>
    )
  } 

}

export default App;
