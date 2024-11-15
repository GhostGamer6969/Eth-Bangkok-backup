
import { NextFunction, Request, Response } from 'express';
import { circleUserSdk } from '../services';

export const dripFaucet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await circleUserSdk.requestTestnetTokens({
            address: req.body.address,
            blockchain: req.body.blockchain,
            usdc: true
        });

        res.status(200).send();
    } catch (error: unknown) {
        next(error);
    }
};
