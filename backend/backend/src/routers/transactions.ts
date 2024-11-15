
import express from 'express';
import {
    authMiddleware,
    estimateTransferTokensSchema,
    getTransactionSchema,
    listTransactionsSchema,
    transferTokensSchema,
    validate,
    validateAddressSchema
} from '../middleware';
import {
    createTransaction,
    estimateTransferFee,
    getTransaction,
    listTransactions,
    validateAddress
} from '../controllers';

const transactions = express.Router();

const authTransRouter = express.Router();
authTransRouter.use(authMiddleware);

authTransRouter.get('/', validate(listTransactionsSchema), listTransactions);
authTransRouter.get('/:id', validate(getTransactionSchema), getTransaction);
authTransRouter.post(
    '/transfer',
    validate(transferTokensSchema),
    createTransaction
);
authTransRouter.post(
    '/transfer/estimateFee',
    validate(estimateTransferTokensSchema),
    estimateTransferFee
);
transactions.post(
    '/validateAddress',
    validate(validateAddressSchema),
    validateAddress
);

export { transactions, authTransRouter };
