const hexGrid = document.getElementById("hexGrid");
const hexPattern = [3, 4, 5, 4, 3];

hexPattern.forEach((count) => {
  const row = document.createElement("div");
  row.classList.add("hex-row");
  for (let i = 0; i < count; i++) {
    const hex = document.createElement("div");
    hex.classList.add("hex-cell");
    hex.innerText = "50";
    hex.addEventListener("click", () => {
      if (
        !hex.classList.contains("orange") &&
        !hex.classList.contains("green")
      ) {
        hex.classList.add("orange");
      } else if (hex.classList.contains("orange")) {
        hex.classList.remove("orange");
        hex.classList.add("green");
      } else if (hex.classList.contains("green")) {
        hex.classList.remove("green");
      }
    });
    row.appendChild(hex);
  }
  hexGrid.appendChild(row);
});
