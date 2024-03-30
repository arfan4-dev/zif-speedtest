function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    resolve(userLocation);
                },
                (error) => {
                    reject(error.message);
                }
            );
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

// Example usage with async/await:
export async function getLocation() {
    try {
        const location = await getUserLocation();
        console.log(location)
        return location;
    } catch (error) {
        console.error("Error getting user location:", error);
        // Handle the error
    }
}