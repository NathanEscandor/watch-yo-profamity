import mongoose from 'mongoose';
import { MONGOATLASCONNECTIONCODE } from '../../keys/mongo-connect-code.js';
import Lyric from './model/Lyric.js';
const URI = `mongodb+srv://nathanescandor:${MONGOATLASCONNECTIONCODE}@lyricscluster.gxg55rg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

mongoose.connect(URI, {useNewUrlParser: true})
.then(function () {
    console.log("Connected to MongoDB.")
})
.catch(function (e) {
    console.log(e);
})

const lyric = await Lyric.create({
    artist: 'Taking Back Sunday',
    title: 'Slowdance on the Inside',
    lyrics: "Cross my heart and hope to/I'm lying just to keep you here",
    source: "Genius",
    url: "genius.com/tbs/slowdance"
});

lyric.save()

const firstLyric = await Lyric.findOne({});
console.log(firstLyric);