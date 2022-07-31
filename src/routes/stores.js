import { writable } from "svelte/store";

import { browser } from "$app/env";

export const gameIDFromBrowser = writable(
    browser && (sessionStorage.getItem("gameIDFromBrowser") || "")
);

// jsdsjand

// gameIDFromBrowser.subscribe((val) => browser && (sessionStorage.gameIDFromBrowser = val));

export const guestNameFromBrowser = writable(
    browser && (sessionStorage.getItem("guestNameFromBrowser") || "")
);

guestNameFromBrowser.subscribe((val) => browser && (sessionStorage.guestNameFromBrowser = val));