
import express from 'express';
import {
    getWalletSchema,
    listWalletsSchema,
    validate,
    walletTokenBalanceSchema
} from '../middleware';
import { getWallet, getWalletTokenBalance, listWallets } from '../controllers';

const wallets = express.Router();
wallets.get('/', validate(listWalletsSchema), listWallets);
wallets.get(
    '/:id/balances',
    validate(walletTokenBalanceSchema),
    getWalletTokenBalance
);
wallets.get('/:id', validate(getWalletSchema), getWallet);

export { wallets };
