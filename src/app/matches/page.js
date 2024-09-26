"use client";

import MatchList from "../components/Matches/Matches";
import { useEffect, useState } from "react";
import supabase from "@/helpers/supabaseClient";

const YourMatchesPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const user = await supabase.auth.getUser();
      console.log(user.data.user.id);
      if (user) {
        let { data, error } = await supabase
          .from("profiles")
          .select("*")
          .neq("id", user.data.user.id)
          .not("subjects", "is", null);
        if (error) {
          console.log("Error fetching profiles:", error);
        } else {
          setProfiles(data);
          console.log(data);
        }
      }
    };
    fetchProfiles();
  }, []);

  return (
    <div>
      <h1>Your Matches</h1>
      {profiles.map((profile) => (
        <MatchList key={profile.id} profile={profile} />
      ))}
      ;
    </div>
  );
};

export default YourMatchesPage;
