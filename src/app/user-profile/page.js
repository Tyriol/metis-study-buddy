"use client";

import { useEffect, useState } from "react";
import supabase from "@/helpers/supabaseClient";

const UserProfile = () => {
  //   const [profile, setProfile] = useState(null);
  //   // Fetch user profile from Supabase
  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       const user = supabase.auth.user(); // Get the logged-in user
  //       if (user) {
  //         const { data, error } = await supabase
  //           .from("user_data")
  //           .select("*")
  //           .eq("id", user.id)
  //           .single();
  //         if (error) {
  //           console.log("Error fetching profile:", error);
  //         } else {
  //           setProfile(data);
  //         }
  //       }
  //     };
  //     fetchProfile();
  //   }, []);
  //   if (!profile) {
  //     return <div>Loading profile...</div>;
  //   }
  //   return (
  //     <div>
  //       <h1>User Profile</h1>
  //       <p>Name: {profile.name}</p>
  //       <p>Email: {profile.email}</p>
  //       <p>About Me: {profile.about}</p>
  //       <p>Subjects: {profile.subjects.join(", ")}</p>
  //     </div>
  //   );
};

export default UserProfile;
