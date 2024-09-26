import React, { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import supabase from "../../../helpers/supabaseClient";

export default function Authentication() {
  const [session, setSession] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth event:", _event); //check
      setSession(session);

      const testEvent = _event;
      console.log(testEvent);

      if (_event === "SIGNED_UP") {
        console.log("User signed up"); //check
        setIsSignUp(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    console.log("Session:", session); // log session
    console.log("Is Sign Up:", isSignUp); //log sign up
    if (session) {
      if (isSignUp) {
        router.push("/profile-update"); // Redirect to profile form after sign-up
      } else {
        router.push("/user-profile"); // Redirect to user profile page after sign-in
      }
    }
  }, [session, isSignUp, router]);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }

  return <div>Loading...</div>;
}
