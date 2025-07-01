window.onload = () => {
  const names = ["Grace", "Arpit", "Lokendra", "Satyam"];
  const leaderboard = document.getElementById("leaderboard");

  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    leaderboard.appendChild(li);
  });
};