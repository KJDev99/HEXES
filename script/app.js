const hexGrid = document.getElementById("hexGrid");
const hexPattern = [3, 4, 5, 4, 3];

hexPattern.forEach((count, rowIndex) => {
  const row = document.createElement("div");
  row.classList.add("hex-row");

  for (let colIndex = 0; colIndex < count; colIndex++) {
    const hex = document.createElement("div");
    hex.classList.add("hex-cell");

    hex.addEventListener("click", () => {
      hex.innerText = "50";

      if (
        !hex.classList.contains("orange") &&
        !hex.classList.contains("green")
      ) {
        hex.classList.add("orange");
      } else if (hex.classList.contains("orange")) {
        hex.classList.remove("orange");
        hex.classList.add("green");
      } else if (hex.classList.contains("green")) {
        hex.innerText = "";
        hex.classList.remove("green");

        // 🔴 Если удаляется "green", то убираем "gray" у соседей
        const rows = Array.from(document.querySelectorAll(".hex-row"));
        const currentRow = rows[rowIndex];
        const prevRow = rows[rowIndex - 1];
        const nextRow = rows[rowIndex + 1];

        const neighbors = [];

        if (currentRow) {
          if (colIndex > 0) neighbors.push(currentRow.children[colIndex - 1]); // Слева
          if (colIndex < currentRow.children.length - 1)
            neighbors.push(currentRow.children[colIndex + 1]); // Справа
        }
        if (prevRow) {
          const prevOffset =
            prevRow.children.length < currentRow.children.length ? 1 : 0;
          if (colIndex - prevOffset >= 0)
            neighbors.push(prevRow.children[colIndex - prevOffset]); // Верхний-левый
          if (colIndex - prevOffset + 1 < prevRow.children.length)
            neighbors.push(prevRow.children[colIndex - prevOffset + 1]); // Верхний-правый
        }
        if (nextRow) {
          const nextOffset =
            nextRow.children.length < currentRow.children.length ? 1 : 0;
          if (colIndex - nextOffset >= 0)
            neighbors.push(nextRow.children[colIndex - nextOffset]); // Нижний-левый
          if (colIndex - nextOffset + 1 < nextRow.children.length)
            neighbors.push(nextRow.children[colIndex - nextOffset + 1]); // Нижний-правый
        }

        // ❌ Удаляем "gray" у всех соседей
        neighbors.forEach((neighbor) => {
          if (neighbor) neighbor.classList.remove("gray");
        });
      }

      // 🟠 Определяем соседей и добавляем "gray", если есть "orange" или "green"
      if (hex.classList.contains("orange") || hex.classList.contains("green")) {
        const rows = Array.from(document.querySelectorAll(".hex-row"));
        const currentRow = rows[rowIndex];
        const prevRow = rows[rowIndex - 1];
        const nextRow = rows[rowIndex + 1];

        const neighbors = [];

        if (currentRow) {
          if (colIndex > 0) neighbors.push(currentRow.children[colIndex - 1]); // Слева
          if (colIndex < currentRow.children.length - 1)
            neighbors.push(currentRow.children[colIndex + 1]); // Справа
        }
        if (prevRow) {
          const prevOffset =
            prevRow.children.length < currentRow.children.length ? 1 : 0;
          if (colIndex - prevOffset >= 0)
            neighbors.push(prevRow.children[colIndex - prevOffset]); // Верхний-левый
          if (colIndex - prevOffset + 1 < prevRow.children.length)
            neighbors.push(prevRow.children[colIndex - prevOffset + 1]); // Верхний-правый
        }
        if (nextRow) {
          const nextOffset =
            nextRow.children.length < currentRow.children.length ? 1 : 0;
          if (colIndex - nextOffset >= 0)
            neighbors.push(nextRow.children[colIndex - nextOffset]); // Нижний-левый
          if (colIndex - nextOffset + 1 < nextRow.children.length)
            neighbors.push(nextRow.children[colIndex - nextOffset + 1]); // Нижний-правый
        }

        // ✅ Добавляем "gray" только если есть "orange" или "green"
        neighbors.forEach((neighbor) => {
          if (neighbor) neighbor.classList.add("gray");
        });
      }
    });

    row.appendChild(hex);
  }

  hexGrid.appendChild(row);
});
