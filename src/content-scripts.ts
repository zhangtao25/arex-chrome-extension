console.log('arex-chrome-extension加载成功')

const executeJS = function (code, shouldRemove=false) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.className = 'content_scripts';
    script.appendChild(document.createTextNode(code));
    const parent = document.head || document.documentElement;
    parent.appendChild(script);

    if (shouldRemove) {
        parent.removeChild(script);
    }
};

// 注入的page的js脚本
const interceptAJAXRequests = function (namespace) {
    // @ts-ignore
    window.__AREX_EXTENSION_INSTALLED__ = true
};

// 启动
// 找到标志位，把从bg拿到的rules替换掉
const setup = function () {
    executeJS(
        `(${interceptAJAXRequests.toString().replace("'complex_flag_bits'",JSON.stringify({name:'123'}))})('sendMessageresponse')`
    );
};
setup()







window.addEventListener("message", (ev) => {
    if (ev.data.type === "__AREX_EXTENSION_REQUEST__"){
        chrome.runtime.sendMessage(ev.data, res => {
            window.postMessage(
                {
                    type: "__AREX_EXTENSION_RES__",
                    res,
                },
                "*"
            )
        })
    }
})
