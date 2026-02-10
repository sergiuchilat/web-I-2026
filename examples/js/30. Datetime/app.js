const now = new Date();
console.log("Current date and time:", now);

const specificDate = new Date('2024-01-01T00:00:00');
console.log("Specific date and time:", specificDate);

const timestamp = Date.now();
console.log("Current timestamp (milliseconds since ${now} Jan 1, 1970):", timestamp);

const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-based
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`Current date: ${year}-${month}-${day}`);
console.log(`Current time: ${hours}:${minutes}:${seconds}`);


const isoString = now.toISOString();
console.log("Current date and time in ISO format:", isoString);

const dateString = now.toDateString();
console.log("Current date in human-readable format:", dateString);

const timeString = now.toTimeString();
console.log("Current time in human-readable format:", timeString);

const localeString = now.toLocaleString();
console.log("Current date and time in locale format:", localeString);

const localeDateString = now.toLocaleDateString();
console.log("Current date in locale format:", localeDateString);

const localeTimeString = now.toLocaleTimeString();
console.log("Current time in locale format:", localeTimeString); 


const birthday = new Date('2004-02-23');
console.log("Birthday:", birthday);
const ageInMilliseconds = now - birthday;
const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
console.log(`Age in milliseconds: ${ageInMilliseconds}`);
console.log(`Age in years: ${ageInYears.toFixed(2)}`);

const clockElement = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately