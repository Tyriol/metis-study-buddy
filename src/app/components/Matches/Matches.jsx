import Image from "next/image";
import styles from "./Matches.module.css";

export default function MatchList({ profile }) {
  return (
    <div className={styles.imageTextBox}>
      <div className={styles.imageContainer}>
        <Image
          class={styles.cardSmall}
          src="/assets/images/female-avatar.png"
          width={300}
          height={300}
          alt="Avatar"
        />
      </div>
      <div className={styles.textContainer}>
        <h3>
          {profile.first_name} {profile.last_name}
        </h3>
        <p>{profile.about_me}</p>
        <p>I want to learn about:</p>
        <ul className={styles.subjects}>
          {profile.subjects.map((subject) => {
            return <li key={subject}>{subject}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
