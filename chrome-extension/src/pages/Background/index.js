console.log("This is the background page.");
console.log("Put the background scripts here.");
chrome.runtime.onMessageExternal.addListener(function (
	request,
	sender,
	sendResponse
) {
	console.log(request);
	console.log("yes");
});
