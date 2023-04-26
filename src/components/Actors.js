import React from "react";
import { actors } from "../data";

function Actors() {

  return (
    <div>{/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h2>Name: {actor.name}</h2>
          Movies: {actor.movies.map((movie, index) =>
            <li key={index}>{movie}</li>
          )}
        </div>
      ))}
    </div>
  )
}

export default Actors;
