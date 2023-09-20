import mongoose from 'mongoose';
import { MONGOATLASCONNECTIONCODE } from '../../keys/mongo-connect-code';
const uri = `mongodb+srv://nathanescandor:${MONGOATLASCONNECTIONCODE}@lyricscluster.gxg55rg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

mongoose.connect(uri, {useNewUrlParser: true});