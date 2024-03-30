// Function to get current date
export function getDate() {
    return new Promise((resolve, reject) => {
        resolve(new Date().getDate());
    });
}
// Function to get current time
export function getTime() {
    return new Promise((resolve, reject) => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        resolve(`${hours}:${minutes}`);
    });
}
export function getDay() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return new Promise((resolve, reject) => {
        resolve(dayNames[new Date().getDay()]);
    });
}
// Function to get current month
export function getMonth() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    return new Promise((resolve, reject) => {
        resolve(monthNames[new Date().getMonth()]); // Month is zero-based, so adding 1
    });
}

// Function to get current year
export function getYear() {
    return new Promise((resolve, reject) => {
        resolve(new Date().getFullYear());
    });
}

