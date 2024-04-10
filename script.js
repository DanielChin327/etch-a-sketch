document.addEventListener('DOMContentLoaded', function() {
  const gridSizeButton = document.querySelector('.grid-size');

  gridSizeButton.addEventListener('click', function() {
      const size = prompt('Enter the grid size (e.g., 50 for a 50x50 grid):'); // Asks user for the proper amount.
      if (size !== null && !isNaN(size) && size >= 16 && size <= 100) { // Ensures user puts in proper input
          createGrid(size);
      } else {
          alert('Please enter a number between 16 and 100.'); // Message if input doesn't work
      }
  });

  function createGrid(size) {
      const container = document.querySelector('.grid-container');
      container.innerHTML = ''; // Clear existing grid
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

      const totalSquares = size * size;
      for (let i = 0; i < totalSquares; i++) {
          const square = document.createElement('div');
          square.classList.add('grid-square');
          container.appendChild(square);
      }
  }
});
