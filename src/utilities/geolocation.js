const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function errors(err) {
    // (Roy) improve error coding to be more transparent to a user
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function requestGeolocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback, errors, options);
    } else {
        alert("Geolocation is not available on this browser.");
    }
}