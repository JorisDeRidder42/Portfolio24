import React from "react";
import anime from 'animejs';

const Home = () => {
  return (
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 md:w-1/2 px-4">
                <div className="container">
                    <h1 className="text-white text-6xl font-bold mb-6">Ik ontwerp applicaties voor het web</h1>
                    <p className="text-white text-2xl">Ik ben een front-end ontwikkelaar met een passie voor het creëren van visueel aantrekkelijke websites en gebruiksvriendelijke interfaces.</p>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent py-4 px-8 text-xl rounded mt-6">
                        Lees meer
                    </button>
                </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 px-4">
                <DotGrid/>
            </div>
        </div>
    </div>
  );
};
const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;
let toggled = false;

const DotGrid = () => {
    anime({
      targets: '.tile',
      opacity: toggled ? 0 :  1,
      easing: 'easeInOutCubic',
      delay: anime.stagger(100,{
        grid: [GRID_WIDTH,GRID_HEIGHT],
      }),
    })
    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
       for(let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(<div
            className="group cursor-crosshair p-2 transition-colors hover:bg-slate-600" 
            data-index={index}
            key={`${i}-${j}`}
            >
                <div className="tile bg-blue-500 w-8 h-8 opacity-50" 
                data-index={index}>
                </div>
            </div>
            );
            index++;
       }
    }
    return (
    <div style={{gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`}}
     className="grid w-fit"
     >
        {dots}
    </div>)
}

export default Home;
