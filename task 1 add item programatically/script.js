window.onload = () => {
  const list = document.getElementById("shopping-list");

  const items = ["Item A", "Item B", "Item C"];
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  });
};