export default function Logout() {
  function onClick() {
    localStorage.setItem("userID", null);
    window.location.href = "/";
  }
  return;
}
