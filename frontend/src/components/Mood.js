import React from "react";
import "../css/mood.css";

export const Mood = () => {
  const y = [1, 4, 5, 3, 1, 2, 3, 1, 4, 5, 1, 1, 1]
  y.length = Math.min(y.length, 9)
  const moodValues = ['😄','😃','😐','🙁','😔']

  const maxHeight = 200
  const distance = 20
  const height = 25

  function mid() {
    var output = ""
    var x = 1
    for (var i = 0; i < y.length; i++) {
        output += `${x*distance}, ${maxHeight} ${x*distance}, ${maxHeight - y[i]*height} ${(x+1)*distance}, ${maxHeight - y[i]*height} ${(x+1)*distance}, ${maxHeight} `
        x+=2
    }

    return output;
  }

  function emoji(mood){
    return moodValues[5-mood]
  }

  return (
    <div className="ml-64">
      <div class="wrapper">
      {y.map((x,index)=> {
        if(y.length==index-1) return <div/>
        console.log(y)
          return <div className={`emoji`} style={{paddingLeft: `${index*distance*2 + 18}px`, paddingTop: `${maxHeight - x*height - 35}px`}} key={x.id}>{emoji(x)}</div>;
      })}
        <svg xmlns="http://www.w3.org/2000/svg" style={{position : "absolute"}} width="400px" height="220px">

          <polyline
            height="500px"
            width="800px"
            class="bar-graph"
            points={mid()}
          />
        </svg>
      </div>
    </div>
  );
};
