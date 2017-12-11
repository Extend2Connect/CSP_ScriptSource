"use strict";

browser.runtime.onMessageExternal.addListener( (message, sender, sendResponse)=>{
    console.error( `onMessageExternal handler invoked: ${message}, ${sender}, ${sendResponse}`);
    sendResponse( browser.runtime.getURL('') );
});

console.error( `CSP_ScriptSource loaded from URL ${window.document.currentScript.src}`);

