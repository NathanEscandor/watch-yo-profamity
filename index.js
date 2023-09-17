#!/usr/bin/env node
import { testLink } from 'genius-lyrics-api';
import { geniusApiSample } from './src/lyrics-fetcher.js';
//TODO: if keys/genius.js does not exist, fail

console.log('in index');
console.log('test link: ', testLink);
await geniusApiSample()