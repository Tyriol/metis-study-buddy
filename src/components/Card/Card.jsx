import React from "react";
import "./Card.css";
import Image from "next/image";

export default function Card() {
  return (
    <section className="card-image-container">
      <Image className="card-image" src="/assets/images/female-avatar.png" width={500} height={500} alt="Avatar" />
      <div className="card-text">
        <div className="card-name">Anna S.</div>
        <div className="card-email">annaexample@hotmail.co.uk</div>
        <div className="card-about">
          I am a 2023 School of Code graduate, and enjoy product design and
          building my own mobile apps
        </div>
        <div className="card-subjects"> React · SQL · JavaScript </div>
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
    Buttons for matching, discarding card 

    - Putting card in container to show image above and text organised below
    - Should be centre of page
    */
