import 'reflect-metadata';

import '@shared/infra/database';
//import './shared/container';

import express, { Request, Response } from 'express';

import 'express-async-errors';

//import { router } from './routes';

import { AppError } from '@shared/errors/AppError';

const APP_PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(express.json());

//app.use(router);

app.use((err: Error, request: Request, response: Response) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			message: err.message,
		});
	}

	return response.status(500).json({
		status: 'error',
		message: `Internal server error - ${err.message}`,
	});
});

app.listen(APP_PORT, () => console.log('▶️ Server is running!'));
