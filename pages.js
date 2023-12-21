function loadPage(url) {
    // change iframe content
    window.parent.document.getElementById('content').src = url;

    // update url
    var newUrl = window.parent.location.protocol + '//' + window.parent.location.host + window.parent.location.pathname + '?page=' + url;
    window.parent.history.pushState({path: url}, '', newUrl);
}

// browser navigation
window.onpopstate = function(event) {
    if(event.state) {
        loadPage(event.state.path);
    }
};
