import signOut from "@/helpers/signout";

export default function SignoutButton() {
  return <button onClick={signOut}>Sign Out</button>;
}
