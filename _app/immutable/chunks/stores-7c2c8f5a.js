import{w as s}from"./index-8dccaea8.js";const r=s(sessionStorage.getItem("gameIDFromBrowser")||"");r.subscribe(e=>sessionStorage.gameIDFromBrowser=e);const o=s(sessionStorage.getItem("guestNameFromBrowser")||"");o.subscribe(e=>sessionStorage.guestNameFromBrowser=e);export{o as a,r as g};