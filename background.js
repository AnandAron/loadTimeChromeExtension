var temp=[];
//console.log("Background started....");
chrome.runtime.onMessage.addListener(function (msg, sender,sendResponse) {
 switch(msg.type) {
            case "setLoadTime":
			//console.log(sender.tab.id);
                temp[sender.tab.id]= msg.loadtime;
                break;
            case "getLoadTime":
			console.log(temp[msg.id]);
                sendResponse(temp[msg.id]);
				
                break;
            default:
               // console.error("Unrecognised message: ", message);
        }
	//console.log("Message Received!!"+msg.loadtime)
  
});
