import express from 'express';
import { getTokenDetailsSchema, validate } from '../middleware';
import { getTokenDetails } from '../controllers';

const tokens = express.Router();

tokens.get('/:id', validate(getTokenDetailsSchema), getTokenDetails);

export { tokens };
