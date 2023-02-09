import dotenv from 'dotenv';
import express from 'express';
import { DEFAULT_PORT } from './constants';

dotenv.config();

const app = express();

app.disable('x-powered-by');

const listeningPort = process.env.PORT ?? DEFAULT_PORT;
app.listen(listeningPort, () => {
	console.log(`Listening on 0.0.0.0:${listeningPort}`);
});
