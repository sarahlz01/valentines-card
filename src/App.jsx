import React from 'react';

import Boyfriend from './assets/boyfriend.png';
import Heart from './assets/heart.svg';


export default function App() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Big div for everything */}
      <img src={Heart} alt="Heart" className="z-20 translate-y-[8vh] -translate-x-[15vh] md:-translate-x-[30vh] transition ease-in-out hover:rotate-[10deg]" />

      {/*  Message */}
      <div className="flex flex-col bg-[#FFF3E6] w-[400px] md:w-[525px] h-[320px] z-0">
        <h1 className="flex items-center justify-center text-center text-4xl w-full h-full">You are so lovely <br></br>today!</h1>
        <h1 className="absolute translate-y-[34vh] translate-x-[2vh] text-3xl">Sarah</h1>
      </div>

      {/* Boyfriend */}
      <div className="bg-white p-[2vh] rotate-[8deg] z-30 -translate-y-[5vh] md:translate-y-[-8vh] translate-x-[10vh] md:translate-x-[30vh] transition ease-in-out hover:-rotate-[4deg]">
        <img src={Boyfriend} alt="Boyfriend" className="w-[243px] h-auto mb-[2vh]" />
        <h1 className="text-2xl flex text-center w-full justify-center">boyfriend!</h1>
      </div>
    </div>
  );
}

