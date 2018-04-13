//console.log("Hello world2");
var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    //console.log('Page load time is '+ loadTime);
chrome.runtime.sendMessage({type:"setLoadTime",loadtime: loadTime});
