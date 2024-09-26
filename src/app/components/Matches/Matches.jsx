import Image from "next/image";
import "./Matches.css";

// import { useState } from 'react';
// /* import { supabase } from '..utils/supabaseClient'; // import your Supabase client */

// function UserList() {
//     // state to hold list of users
//     const [users, SetUsers] = useState([]);
//     const [loading, setLoading] = useState(false);
// }

// // function to fetch data
// const fetchUsers = async () => {
//     setloading(true); // show loading indicator while fetching data

//     const { data, error } = await supabase
//     .from('users') // the users table in database
//     .select('name, avatar_url, about me, subjects');

//     if (error) {
//         console.error('Error fetching user data:', error.message);
//     } else {
//         setUsers(data); // store the fetched data in state
//     }

//     setLoading(false); // Hide loading indicator
// };

// return  (
//     <div>
//         {/* Button to trigger data fetch - change this! */}
//         <button onClick={fetchUsers}>Show my Matches</button>

//         {/* Loading indicator */}
//         {loading && <p>Loading matches...</p>}

// {/* Render the list of users from the db */}
// <div className="image-text-box">
//     {matches.map((match) => (
//         <div className="image-container">
//             <div key={match.name}>
//                 <Image
//                 className="card-small"
//                 src={match.avatar_url}
//                 alt={match.name}
//                 width={50}
//                 height={50}
//                 />
//             </div>
//             <div className="text-container">
//                 <h3>{match.name}</h3>
//                 <p> {match.aboutme}</p>
//                 <p>Subjects: {match.subjects}</p>
//             </div>
//         </div>
//     ))}
// </div>

// Test function for hard-coded data
export default function MatchList() {
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
        <h3> Sophie H.</h3>
        <p>
          I am interested in data engineering and DevOps. I am currently
          interviewing for junior roles in these areas.
        </p>
        <p>Subjects: React.js, SQL, Python</p>
      </div>
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
