// Get all the main pages
const mainPages = document.querySelectorAll('.main_pages');

// Set the initial page index
let currentPageIndex = 0;

// Function to scroll to the next page
function scrollToNextPage() {
  // Scroll to the next page
  mainPages[currentPageIndex].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  // Update the current page index
  currentPageIndex++;

  // Check if we've reached the last page
  if (currentPageIndex >= mainPages.length) {
    currentPageIndex = 0;
  }
}

// Add scroll event listener
window.addEventListener('wheel', (event) => {
  // Check if the user scrolled down
  if (event.deltaY > 0) {
    scrollToNextPage();
  }
});

// Add keyboard event listener
window.addEventListener('keydown', (event) => {
  // Check if the user pressed the down arrow key
  if (event.key === 'ArrowDown') {
    scrollToNextPage();
  }
});