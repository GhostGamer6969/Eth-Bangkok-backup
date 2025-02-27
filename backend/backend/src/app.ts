import cors from 'cors';
import { Express, Request, Response } from 'express';
import express from 'express';
import { signUp, signIn } from './controllers';
import {
    validate,
    authenticationSchema,
    authMiddleware,
    errorHandler
} from './middleware';
import {
    users as usersRouter,
    authUserRouter,
    tokens as tokensRouter,
    wallets as walletsRouter,
    transactions as transactionsRouter,
    authTransRouter,
    faucet as faucetRouter
} from './routers';

export const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Sample Server');
});

/**
 * Health check endpoint.
 */
app.get('/ping', (_req: Request, res: Response) => {
    res.status(200).send('pong');
});

/**
 * POST - /signup
 * Convenience endpoint to creates user, userToken, encryptionKey, and challengeId to
 * setup PIN and wallet
 *
 *
 * Returns:
 *  userId: UUID          - the UUID of the newly created user
 *  userToken: string     - unique system generated JWT session token.
 *                          The token will expire after 60 minutes. Passed in through header.
 *  encryptionKey: string - encryption key to use to execute challengeIds
 *  challengeId: string   - used to initiate a challenge flow to setup PIN + Wallet
 */
app.post('/signup', validate(authenticationSchema), signUp);

/**
 * POST - /signIn
 * Endpoint to authenticate email + password. If authenticated, return a new session of
 * userId, userToken, encryptionKey
 *
 * Params:
 *  email: string - the email of user
 *  password: string - password of user
 *
 * Returns:
 *  userId: UUID          - the UUID of the signed in user
 *  userToken: string     - unique system generated JWT session token.
 *                          The token will expire after 60 minutes. Passed in through header.
 *  encryptionKey: string - encryption key to use to execute challengeIds
 *
 * If user credentials wrong or don't exist:
 *  returns 404
 */
app.post('/signin', validate(authenticationSchema), signIn);

/*
 * Add all sub paths
 */
app.use('/users', usersRouter, authUserRouter);
app.use('/tokens', tokensRouter);
app.use('/wallets', authMiddleware, walletsRouter);
app.use('/transactions', transactionsRouter, authTransRouter);
app.use('/faucet', authMiddleware, faucetRouter);

// Error handling
app.use(errorHandler);
