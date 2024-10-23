import {useState} from "react";

import './App.css'
import Header from '../Header/Header';
import Main from '../Main/Main'
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"

function App() {
  const [weatherData, setWeatherData] = useState({ type : "cold"}); //the left of the piece is the v name and the R piece is the fnctn that you can use to change the vrbl

  //Here, the weather data will be an object and it will have a "type" string
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main  weatherData={weatherData} />
        </div>
        <ModalWithForm />
    </div>
  );
}
export default App;
