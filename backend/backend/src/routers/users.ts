import express from 'express';
import {
    createUser,
    createUserToken,
    getUser,
    initializeUser,
    restorePin
} from '../controllers';
import {
    createUserTokenSchema,
    initializeUserSchema,
    getUserSchema,
    validate,
    authMiddleware
} from '../middleware';

const users = express.Router();
const authUserRouter = express.Router();
authUserRouter.use(authMiddleware);
users.post('/', createUser);
users.get('/:id', validate(getUserSchema), getUser);
users.post('/token', validate(createUserTokenSchema), createUserToken);
users.post('/initialize', validate(initializeUserSchema), initializeUser);
authUserRouter.post('/pin/restore', restorePin);

export { users, authUserRouter };
