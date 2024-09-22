(function() {
    'use strict';

    // Set the desired number
    var desiredNumber = "197M subscribers"; // Change this to your desired number

    // Function to change the value of the element displaying the subscriber count
    function changeSubscriberCount() {
        var elements = document.querySelectorAll('.yt-core-attributed-string');
        elements.forEach(function(element) {
            if (element.textContent.includes('subscribers')) {
                element.textContent = desiredNumber;
                console.log('Subscriber count changed to: ' + desiredNumber);
            } else {
                console.log('Element does not contain the text "Subscribers".');
            }
        });
    }

    // Call the function to change the subscriber count when the page is loaded
    changeSubscriberCount();

    // Use a MutationObserver to detect changes in the DOM and trigger the script
    var observer = new MutationObserver(function(mutations) {
        changeSubscriberCount();
    });

    // Configure the observer to watch for changes in the subtree of the body
    var observerConfig = { childList: true, subtree: true };

    // Start observing the DOM
    observer.observe(document.body, observerConfig);
})();
(function() {
    'use strict';
 
    // Set the desired number
    var desiredNumber = "1M+"; // Change this to your desired number
 
    // Function to change the value of the element with id "nav-robux-amount"
    function changeRobuxAmount() {
        var robuxAmountElement = document.getElementById('nav-robux-amount');
        if (robuxAmountElement) {
            robuxAmountElement.textContent = desiredNumber;
        }
    }
 
    // Call the function to change the Robux amount when the page is loaded
    changeRobuxAmount();
 
    // Use a MutationObserver to detect changes in the DOM and trigger the script
    var observer = new MutationObserver(function(mutations) {
        changeRobuxAmount();
    });
 
    // Configure the observer to watch for changes in the subtree of the body
    var observerConfig = { childList: true, subtree: true };
 
    // Start observing the DOM
    observer.observe(document.body, observerConfig);
})();
