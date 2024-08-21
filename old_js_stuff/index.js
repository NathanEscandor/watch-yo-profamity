#!/usr/bin/env node
import { searchSong } from "./src/lyrics-fetcher/lyrics-fetcher.js";
// import { geniusApiSample, songSearch } from './src/lyrics-fetcher.js';

// //TODO: if keys/genius.js does not exist, fail

// console.log('in index');
// console.log('test link: ', testLink);
// // await geniusApiSample()

// const title = process.argv[2];
// const artist = process.argv[3];
// console.log('title: ', title, ' artist: ', artist);
// await songSearch({title, artist});

console.log(searchSong);
