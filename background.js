function click(e){
	chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
		console.log("background.js : click()");
		chrome.tabs.executeScript({
    	code: 'document.getElementById("snow_canvas").height="0"'
  		});
	});
}

chrome.browserAction.onClicked.addListener(click);
