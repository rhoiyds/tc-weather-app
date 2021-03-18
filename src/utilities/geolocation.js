const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function errors(err) {
    // (Roy) In a real application scenario a nice notification bar would be more appealing
    alert(`ERROR(${err.code}): ${err.message}, Please enable 'Location services' on your device and try again.`)
}

export function requestGeolocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback, errors, options);
    } else {
        alert("Geolocation is not available on this browser.");
    }
}