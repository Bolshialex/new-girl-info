import React from "react";

function Character(props) {
  props.props.favorite_things.forEach((thing) => {
    console.log(thing);
  });

  return (
    <div id={props.props.id}>
      <hr />
      <img src={props.props.img} alt={"image of " + props.props.name}></img>
      <h1>{props.props.name}</h1>
      <h3>About them</h3>
      <p>{props.props.bio}</p>
      <h3>Favorite things</h3>
      <ol>
        {props.props.favorite_things.map((thing, index) => (
          <li key={index}>{thing}</li>
        ))}
      </ol>
    </div>
  );
}

export default Character;
