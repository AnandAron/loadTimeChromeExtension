chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
	
    chrome.runtime.sendMessage({type: "getLoadTime", id: tabs[0].id}, function(loadTime) {
//console.log("loadTime  "+loadTime);
       document.getElementById("demo").innerHTML=loadTime;
		
    });
});
