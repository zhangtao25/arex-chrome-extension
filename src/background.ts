import axios from 'redaxios';
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    const payload = req.payload
    axios(payload).then(r=> {
        sendResponse(r)
    }).catch(err=>{
        if (err.message && err.name){
            sendResponse({
                type:'error',
                cause:err.cause,
                message:err.message,
                name:err.name,
                stack:err.stack
            })
        } else {
            sendResponse(err)
        }
    })
    return true
})
