"use client";

import { useEffect, useState } from "react";
import supabase from "@/helpers/supabaseClient";
import Card from "@/app/components/Card/Card";
import styles from "./UserProfile.module.css"; // Importing the CSS module

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = await supabase.auth.getUser();
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
    return <div className={styles.loading}>Loading profile...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <Card
        firstName={profile.first_name}
        lastName={profile.last_name}
        aboutMe={profile.about_me}
        subjects={profile.subjects}
      />
    </div>
  );
};

export default UserProfile;
