import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <section className="card-image-container">
      <img className="card-image" src="/Assets/images/female-avatar.png" alt="Avatar" />
      <div className="card-text">
        <span className="card-name">Anna S.</span>
        <span className="card-email">annaexample@hotmail.co.uk</span>
        <span className="card-about"> I'm a 2023 School of Code graduate, and enjoy product design and building my own mobile apps</span>
        <span className="card-subjects"> React · SQL · JavaScript </span>
      </div>
    </section>
  );
}


/* Card needs:
    Image / Avatar
    Name
    Email Address
    About
    Subjects 

    - Putting card in container to show image above and text organised below
    - Should be centre of page
    */