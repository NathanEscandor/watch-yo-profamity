import { geniusLyricsAPI } from "./genius-lyrics-api";
import { GENIUS_API_KEY } from "../../keys/genius";

const options = {
    apiKey: GENIUS_API_KEY,
    title: '',
    artist: '',
    optimizeQuery: '',
}

function getAlbumArt(title, artist) {
    
}

function getLyrics(title, artist) {

}

function getLyricsByUrl(geniusUrl) {

}

function getSong() {

}

function getSongById() {

}

function searchSong({title, artist}) {
    //this might be its own module. cli interface to do the song select back and forth
    return geniusLyricsAPI.searchSong({
        ...options,
        title,
        artist
    });
}

export const lyricsFetcher = {
    getAlbumArt,
    getLyrics,
    getLyricsByUrl,
    getSong,
    getSongById,
    searchSong,
};
