import { getLyrics, getSong } from 'genius-lyrics-api';
import { GENIUS_API_KEY } from '../keys/genius.js';

const options = {
	apiKey: GENIUS_API_KEY,
	title: 'Blinding Lights',
	artist: 'The Weeknd',
	optimizeQuery: true
};

export function geniusApiSample() {
    getLyrics(options).then((lyrics) => console.log(lyrics));

    getSong(options).then((song) =>
        console.log(`
        ${song.id}
        ${song.title}
        ${song.url}
        ${song.albumArt}
        ${song.lyrics}`)
    );
}
