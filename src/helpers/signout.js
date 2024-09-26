import supabase from "@/helpers/supabaseClient";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}

export default signOut;
