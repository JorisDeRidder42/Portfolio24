import React from "react";
import anime from 'animejs';

const Home = () => {
  return (
    <div className="container px-0">
            <div className="relative grid h-screen place-content-center bg-slate-900 px-8">
              {/* <h5 className="mt-3 text-white">Hallo, mijn naam is Joris</h5>
              <h1>
                Ik <span>ontwerp</span> applicaties voor het web
              </h1>
              <p className="mt-4 text-white">
                Ik ben gespecialiseerd in het bouwen van een uitzonderlijke digitale
                ervaringen.
              </p> */}
                 <DotGrid />
            </div>
    </div>
  );
};


const GRID_WIDTH = 50;
const GRID_HEIGHT = 25;


const DotGrid = () => {
    const handleDotClick = (e) => {
        anime({
            targets:'.dot-point',
            scale:[
                {value:1.35, easing: 'easeOutSine', duration: 250},
                {value:1, easing: 'easeInOutQuad', duration: 500},
            ],
            translateY: [
            {value: -15, easing: 'easeOutSine', duration: 250},
            {value: 0, easing: 'easeInOutQuad', duration: 500}
            ],
            opacity: [
                {value: 1, easing: 'easeOutSine', duration: 250},
                {value: 0.5, easing: 'easeInOutQuad', duration: 500}
            ],
            delay: anime.stagger(100, { 
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index, 
            }),
        })
    }
    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
       for(let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(<div
            onClick={handleDotClick}
            className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600" 
            data-index={index}
            key={`${i}-${j}`}
            >
                <div className="dot-point h-2 w-2 rounded-full bg-slate-700 opacity-100 group-hover:from-indigo-600 group-hover:to-white"
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
