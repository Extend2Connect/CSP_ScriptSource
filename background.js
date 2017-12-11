"use strict";

chrome.runtime.onMessageExternal.addListener( (message, sender, sendResponse)=>{
    console.error( `onMessageExternal handler invoked: ${message}, ${sender}, ${sendResponse}`);
    sendResponse( chrome.runtime.getURL('') );
});

console.error( `CSP_ScriptSource loaded from URL ${window.document.currentScript.src}`);

