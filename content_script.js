var s = document.createElement('script');
s.src = chrome.extension.getURL('hijack.js');
s.onload = function() {
    s.remove();
};
(document.head||document.documentElement).appendChild(s);
