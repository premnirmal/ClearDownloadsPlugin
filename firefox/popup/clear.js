/*
Clear the downloads. This doesn't delete them, just clears them from the browser's downloads list.
*/
function onErased(ids) {
    console.log(`Erased: ${ids}`);
}

function onError(error) {
    console.log(`Error erasing item: ${error}`);
}
var erasing = browser.downloads.erase({});
erasing.then(onErased, onError);