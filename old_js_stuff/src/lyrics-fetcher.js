import { getLyrics, getSong, searchSong } from './lyrics-fetcher/genius-lyrics-api.js';
import { GENIUS_API_KEY } from '../keys/genius.js';



export async function geniusApiSample() {
    const options = {
        apiKey: GENIUS_API_KEY,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        optimizeQuery: true
    };

    await getLyrics(options).then((lyrics) => console.log(lyrics));

    await getSong(options).then((song) =>
        console.log(`
        ${song.id}
        ${song.title}
        ${song.url}
        ${song.albumArt}
        ${song.lyrics}`)
    );
}

export async function songSearch({title, artist}) {
    const options = {
        apiKey: GENIUS_API_KEY,
        title,
        artist,
        optimizeQuery: true
    };
    console.log(options)
    await searchSong(options).then((song) => {
        console.log(`
        ${song.id}
        ${song.title}
        ${song.url}
        ${song.albumArt}
        ${song.lyrics}`)
    });
}
