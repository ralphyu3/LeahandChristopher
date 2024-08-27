function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    let fieldValue = getQueryParam('id') || 'Replace with your name(s)';  // 'name' is the query string parameter you expect
    if (fieldValue) {
        let formSrc = "https://docs.google.com/forms/d/e/1FAIpQLSdCbq6jbrjaUOLp8rkV2sqX4dNUPuXDHgqluZ6JbwZSpdFqpg/viewform?usp=pp_url&entry.2066762660=" + encodeURIComponent(fieldValue);
        document.getElementById('googleFormIframe').src = formSrc;
    }
};