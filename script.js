
/* Show a welcome message in the browser console */
console.log("Welcome to Abhishek Murapala's Networking Portfolio!");

// Display the current year in the footer
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Abhishek Murapala | Networking Portfolio</p>
    `;
}
