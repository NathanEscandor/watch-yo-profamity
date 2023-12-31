import { geniusLyricsAPI } from "./genius-lyrics-api";
import { GENIUS_API_KEY } from "../../keys/genius";

const options = {
    apiKey: GENIUS_API_KEY,
    title: '',
    artist: '',
    optimizeQuery: '',
}

async function getAlbumArt(title, artist) {
    
}

async function getLyrics(title, artist) {

}

async function getLyricsByUrl(geniusUrl) {

}

async function getSong() {

}

async function getSongById() {

}

export async function searchSong({title, artist}) {
    //this might be its own module. cli interface to do the song select back and forth
    const returnObject =  await geniusLyricsAPI.searchSong({
        ...options,
        title,
        artist
    });

    console.log(returnObject)

    return returnObject
}

// export const LyricsFetcher = {
//     getAlbumArt,
//     getLyrics,
//     getLyricsByUrl,
//     getSong,
//     getSongById,
//     searchSong,
// };
