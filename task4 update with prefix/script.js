window.onload = () => {
  const container = document.getElementById("features");
  const paragraphs = container.getElementsByTagName("p");

  for (let p of paragraphs) {
    p.textContent = `✓ ${p.textContent}`;
  }
};