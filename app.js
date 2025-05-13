function login() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
      alert("Please enter your name.");
      return;
    }
    localStorage.setItem("username", username);
    showApp();
  }
  
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("notes");
    location.reload();
  }
  
  function showApp() {
    const username = localStorage.getItem("username");
    if (!username) return;
  
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("app-container").classList.remove("hidden");
    document.getElementById("display-name").textContent = username;
    loadNotes();
  }
  
  function saveNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
    if (noteText === "") return;
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
  
    noteInput.value = "";
    loadNotes();
  }
  
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.textContent = note;
      notesList.appendChild(li);
    });
  }
  
  window.onload = showApp;
  