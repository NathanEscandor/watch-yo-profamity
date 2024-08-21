import { getAlbumArt, getLyrics, getSong, getSongById, searchSong } from "genius-lyrics-api";

//thinking that this file is redundant. I could just import directly from genius-lyrics-api when I need these functions.
//but then again, doing this means there's only one entry point of that code into my system so I can kinda control it better.

export {
    getAlbumArt,
    getLyrics,
    getSong,
    getSongById,
    searchSong
};