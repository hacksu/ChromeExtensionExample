function save(message) {
    console.log(message);
    chrome.storage.sync.set({"greeting": message}, function (message) {
        console.log("saved")
    })
}
$(function() {
    $("input").change(function(input){
        save(input.target.value)
    });
    chrome.storage.sync.get("greeting", function (message) {
        console.log(message);
        console.log(message["greeting"]);
        $("input").val(message["greeting"]);
    });
});