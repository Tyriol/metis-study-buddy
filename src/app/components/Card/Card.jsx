import React from "react";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  firstName,
  lastName,
  aboutMe,
  subjects,
  email,
}) {
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
        <div className="card-email">{email}</div>
        <div className="card-about">{aboutMe}</div>
        <p>I want to learn about:</p>
        {subjects !== null
          ? subjects.map((subject) => {
              return (
                <div key={subject} className="card-subjects">
                  {subject}
                </div>
              );
            })
          : null}
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
