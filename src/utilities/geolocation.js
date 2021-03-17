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
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(callback);
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(callback, errors, options);
                } else if (result.state === "denied") {
                    //If denied then you have to show instructions to enable location
                }
                result.onchange = function () {
                    console.log(result.state);
                };
            });
    } else {
        alert("Geolocation is not available on this browser.");
    }
}