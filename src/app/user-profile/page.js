"use client";

import { useEffect, useState } from "react";
import supabase from "@/helpers/supabaseClient";
import Card from "@/app/components/Card/Card";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  // Fetch user profile from Supabase
  useEffect(() => {
    const fetchProfile = async () => {
      const user = await supabase.auth.getUser(); // Get the logged-in user
      if (user) {
        let { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.data.user.id)
          .single();
        if (error) {
          console.log("Error fetching profile:", error);
        } else {
          setProfile(data);
        }
      }
    };
    fetchProfile();
  }, []);
  if (!profile) {
    return <div>Loading profile...</div>;
  }
  return (
    <div>
      <h1>User Profile</h1>
      <Card
        firstName={profile.first_name}
        lastName={profile.last_name}
        aboutMe={profile.about_me}
      />
    </div>
  );
};

export default UserProfile;
