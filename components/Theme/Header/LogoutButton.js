export default function LogoutButton() {
  function logOutTheUser() {
    localStorage.removeItem("token");
    window.location.replace("/");
  }
  return <button onClick={logOutTheUser}>Log out</button>;
}
