import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const lyricSchema = new Schema({
    artist: String,
    title: String,
    lyrics: String,
    source: String,
    url: String,
})

const Lyric = model('Lyric', lyricSchema);
export default Lyric;
