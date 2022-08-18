import { writable } from "svelte/store";

export const resetHand = writable()
export const playerHand = writable()
export const contractReady = writable(false)
export const gameR = writable(false)
export const aWager = writable()
export const bobAcceptWager = writable()
export const wHTG = writable()