
function loggedIn(){
  return localStorage.getItem("panther_session")==="active";
}

function requireLogin(){
  if(!loggedIn()){
    window.location.href="index.html";
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const logout=document.querySelector("[data-logout]");
  if(logout){
    logout.addEventListener("click",(e)=>{
      e.preventDefault();

      // INTENTIONAL BUG 10:
      // The user sees a logout message, but the session is not cleared.
      alert("You have been logged out.");
    });
  }
});
