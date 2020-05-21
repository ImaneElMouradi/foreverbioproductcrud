export function isLoginAdmin() {
  const account = JSON.parse(localStorage.getItem("user"));

  if (account !== null && account.role === "Administrateur") {
    return true;
  }
  return false;
}

export function isLoginLivreur() {
  const account = JSON.parse(localStorage.getItem("user"));

  if (account !== null && account.role === "Livreur") {
    return true;
  }
  return false;
}
