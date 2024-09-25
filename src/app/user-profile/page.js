"use client";

import { useEffect, useState } from "react";
import supabase from "@/helpers/supabaseClient";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  const clickyClick = async () => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .update({
        first_name: "Dexter",
        last_name: "Smith",
        about_me: "I snore",
      })
      .eq("id", user.id)
      .select();

    if (error) {
      console.error("Error updating profile:", error);
    } else {
      console.log("Profile updated successfully:", data);
    }
  };

  return <button onClick={clickyClick}>Test</button>;
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
