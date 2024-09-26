import Image from "next/image";
import "./Matches.css";

export default function MatchList({ profile }) {
  return (
    <div className="image-text-box">
      <div className="image-container">
        <Image
          className="card-small"
          src="/assets/images/female-avatar.png"
          width={300}
          height={300}
          alt="Avatar"
        />
      </div>
      <div className="text-container">
        <h3>
          Name: {profile.first_name} {profile.last_name}
        </h3>
        <p>A little about me: {profile.about_me}</p>
        <p>I want to learn about:</p>
        <ul>
          {profile.subjects.map((subject) => {
            return <li key={subject}>{subject}</li>;
          })}
        </ul>
      </div>
      <p></p>
    </div>
  );
}

// export default MatchList;

/* Component: List of matches that will pull data from the database and show you the name, avatar, and interests of the other users 
Having the matches page still accessible from the homepage? Eg not just accessible after clicking on your own profile card. Page would need to reload to update with any new users
#1 Create React state variable to hold list of matches - useState to manage the state for storing fetched data 
#2 Make the API request and store the data - data should be fetched after button click of previous page - 'show matches' 
#3 Render the returned data in a list 

*/
