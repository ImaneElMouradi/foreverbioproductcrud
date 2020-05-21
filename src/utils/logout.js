export function logout(e) {
  e.preventDefault();
  console.log("logout");
  localStorage.setItem("user", null);
  window.location.reload();
}
