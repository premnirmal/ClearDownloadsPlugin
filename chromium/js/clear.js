var clear = function() {
  chrome.browsingData.removeDownloads({
    "originTypes" : {
      "protectedWeb" : true,
      "unprotectedWeb" : true,
      "extension" : true
    }
  }, function() {
  })
};
clear();
