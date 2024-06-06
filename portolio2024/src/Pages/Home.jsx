import React from "react";
import anime from 'animejs';

const Home = () => {
  return (
    <div className="container px-0">
            <div className="relative grid place-content-center h-[100dvh] bg-black p-4">
                 <DotGrid />
            </div>
    </div>
  );
};
const GRID_WIDTH = 50;
const GRID_HEIGHT = 25;
let toggled = false;

const DotGrid = () => {
    const handleDotClick = (e) => {
        anime({
          targets: '.tile',
          opacity: toggled ? 0 : 1,
          delay: anime.stagger(100, { 
              grid: [GRID_WIDTH, GRID_HEIGHT],
              from: e.target.dataset.index,
        })
    })
  }
    const dots = [];
    let index = 0;
    for (let i = 0; i < GRID_WIDTH; i++) {
       for(let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(<div
            onClick={handleDotClick}
            className="group" 
            data-index={index}
            key={`${i}-${j}`}
            >
                <div className="tile bg-blue-500 w-5 h-5 opacity-0 group-hover:opacity-100" 
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
