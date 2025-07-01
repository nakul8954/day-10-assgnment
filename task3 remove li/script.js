window.onload = () => {
  const list = document.getElementById("my-list");
  if (list.children.length >= 2) {
    list.removeChild(list.children[1]);
  }
};