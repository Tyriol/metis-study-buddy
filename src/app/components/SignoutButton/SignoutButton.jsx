import signOut from "@/helpers/signout";
import './SignoutButton.css';

export default function SignoutButton() {
  return <button className="signout-button" onClick={signOut}>Sign Out</button>;
}
