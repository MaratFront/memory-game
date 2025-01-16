function handleReload() {
  if (window.location.pathname === "/game") {
    window.location.pathname = "/"; // Перенаправление на другой роут
  }
}
export default handleReload;
