// Simple function to load header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', 'components/header.html', true);
    headerRequest.onload = function() {
        if (headerRequest.status >= 200 && headerRequest.status < 400) {
            document.querySelector('header').outerHTML = headerRequest.responseText;
        } else {
            console.error('Error loading header:', headerRequest.statusText);
        }
    };
    headerRequest.onerror = function() {
        console.error('Error loading header: Network error');
    };
    headerRequest.send();

    // Load footer
    const footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', 'components/footer.html', true);
    footerRequest.onload = function() {
        if (footerRequest.status >= 200 && footerRequest.status < 400) {
            const footer = document.querySelector('footer');
            if (footer) {
                footer.outerHTML = footerRequest.responseText;
            } else {
                document.body.insertAdjacentHTML('beforeend', footerRequest.responseText);
            }
        } else {
            console.error('Error loading footer:', footerRequest.statusText);
        }
    };
    footerRequest.onerror = function() {
        console.error('Error loading footer: Network error');
    };
    footerRequest.send();
});
