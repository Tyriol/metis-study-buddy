"use client";

import { useEffect, useState } from "react";
import supabase from "@/helpers/supabaseClient";

import Main from "@/app/components/Main/Main";
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
    <Main>
      <h1 className={styles.title}>Your Profile</h1>
      <Card
        firstName={profile.first_name}
        lastName={profile.last_name}
        aboutMe={profile.about_me}
        subjects={profile.subjects}
        email={profile.email}
      />
    </Main>
  );
};

export default UserProfile;
