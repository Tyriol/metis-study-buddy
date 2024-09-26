import supabase from "@/helpers/supabaseClient";

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

export default signOut;
