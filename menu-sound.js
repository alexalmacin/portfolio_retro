// Function to play the menu navigation sound
function playMenuNavigationSound() {
    const menuNavigationSound = document.getElementById("menuNavigationSound");
    menuNavigationSound.currentTime = 0; // Rewind to the start to allow rapid triggering
    menuNavigationSound.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById("menu");
    const menuItems = document.querySelectorAll("#menuItems li a");

    // Handle keydown events on the menu for navigation
    menu.addEventListener('keydown', function(event) {
        let selectedIndex = -1;

        // Find the index of the currently selected item
        menuItems.forEach(function(item, index) {
            if (item === document.activeElement) {
                selectedIndex = index;
            }
        });

        // Handle arrow key navigation
        if (event.key === "ArrowDown") {
            selectedIndex = Math.min(selectedIndex + 1, menuItems.length - 1);
            playMenuNavigationSound();
        } else if (event.key === "ArrowUp") {
            selectedIndex = Math.max(selectedIndex - 1, 0);
            playMenuNavigationSound();
        } else if (event.key === "Enter") {
            // Handle selection on Enter key press
            menuItems[selectedIndex].click(); // Simulate click on the selected item
        }

        // Set focus to the newly selected item
        menuItems[selectedIndex].focus();
        event.preventDefault(); // Prevent default scrolling behavior
    });
});
