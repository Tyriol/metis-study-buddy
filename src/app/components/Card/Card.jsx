import React from "react";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ firstName, lastName, aboutMe, subjects }) {
  return (
    <section className="card-image-container">
      <Image
        className="card-image"
        src="/assets/images/red-avatar.png"
        width={500}
        height={500}
        alt="Avatar"
      />
      <div className="card-text">
        <div className="card-name">
          {firstName} {lastName}
        </div>
        <div className="card-email">annaexample@hotmail.co.uk</div>
        <div className="card-about">{aboutMe}</div>
        <div className="card-subjects">{subjects}</div>
      </div>
      <div>
        <Link href="/matches">
          <button className="matchButton"> Go to My Matches</button>
        </Link>
      </div>
      <div>
      <Link href="/profile-update">
        <button className="updateButton"> Update my Profile</button>
      </Link>
      </div>
    </section>
  );
}

/* Card needs:
    Image / Avatar ✅
    Name ✅
    Email Address ✅
    About ✅
    Subjects ✅
    - Buttons for matching, discarding card 

    - Putting card in container to show image above and text organised below
    - Should be centre of page
    */
