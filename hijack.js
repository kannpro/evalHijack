__origin_eval = eval
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
__origin_log = i.contentWindow.console.log
evalHijack = (s) => {
    __origin_log('EVAL ', s);
}
eval = (s) => {
    evalHijack(s);
    return __origin_eval(s);
}
__origin_log('evalHijack script loaded: ', document.URL)
