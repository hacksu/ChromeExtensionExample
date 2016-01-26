
console.log("Hello World");

$(function() {
    chrome.storage.sync.get("greeting", function (greeting) {
        $("body").append(greeting["greeting"]);
        console.log(greeting);
    });
});