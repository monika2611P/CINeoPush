document.addEventListener("DOMContentLoaded", () => {

    // --- Element-Selektoren ---
    const fullText = document.querySelector(".full-text");
    const shortText = document.querySelector(".short-text");
    const button = document.querySelector(".inhalt-button");
  
  
    const movieTable = document.querySelector(".movie-time tbody");
    const wholeTable = document.querySelectorAll(".movie-time");
    const firstTable = document.querySelector(".movie-time");
    const extraTable = document.getElementById("extra-table");
    const tableButton = document.querySelector(".table-button");
  
  
    // --- Funktionen ---
  
    function hideEmptyCells() {
  
      const rows = Array.from(movieTable.rows);
      Array.from(rows[0].cells).forEach((_, colIndex) => {
        let emptyFromRow = -1;
  
        // Überprüfe jede Zelle in der Spalte auf Inhalt
        rows.forEach((row, rowIndex) => {
          const cell = row.cells[colIndex];
          const hasContent = cell.querySelector(".room").textContent.trim() || cell.querySelector(".time").textContent.trim();
  
          if (!hasContent && emptyFromRow === -1) {
            emptyFromRow = rowIndex;
          }
        });
  
        // Wenn ab einer Reihe keine Inhalte folgen, füge Klasse hinzu
        if (emptyFromRow > -1) {
          for (let i = emptyFromRow; i < rows.length; i++) {
            const cell = rows[i].cells[colIndex];
            const divRoom = cell.querySelector(".room");
            const divTime = cell.querySelector(".time");
  
            // Klasse nur auf die inneren div-Elemente anwenden
            if (divRoom) divRoom.classList.add("empty-column");
            if (divTime) divTime.classList.add("empty-column");
          }
        }
      });
    }
  
  
    // Switch zwischen vollständigem und kurzem Text
    function textSwitch() {
  
      const isFullTextHidden = fullText.classList.contains("hidden");
  
      if (isFullTextHidden) {
  
        // Volltext anzeigen
        wholeTable.forEach((table) => table.classList.add("hidden"));
        tableButton.classList.add("hidden");
  
        shortText.classList.add("hidden");
        fullText.classList.remove("hidden");
        button.textContent = "weniger";
        tableButton.textContent = "+ mehr";
  
      } else {
        // Kurzer Text anzeigen
        firstTable.classList.remove("hidden");
        tableButton.classList.remove("hidden");
  
        fullText.classList.add("hidden");
        shortText.classList.remove("hidden");
        button.textContent = "mehr lesen";
      }
  
    }
  
  
    // Zusätzliche Tabelle verstecken oder zeigen
  
    function toggleExtraTable() {
  
      extraTable.classList.toggle("hidden");
      if (extraTable.classList.contains("hidden")) {
        tableButton.textContent = "+ mehr";
      } else {
        tableButton.textContent = "- weniger";
      }
  
    }
  
  
    // --- Event Listener ---
  
    // Event-Listener, um zwischen short- und full-text zu wechseln
    button.addEventListener("click", textSwitch);
  
    // Event-Listener für die zusätzliche Tabelle
    tableButton.addEventListener("click", toggleExtraTable);
  
    // Initiale Ausführung
    hideEmptyCells();
  
  }) 