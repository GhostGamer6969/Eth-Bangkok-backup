 
export enum TokenStandardEnum {
  ERC20 = "ERC20",
  ERC721 = "ERC721",
  ERC115 = "ERC115",
}

export enum AccountType {
  SCA = "SCA",
  EOA = "EOA",
}

export enum WalletState {
  LIVE = "LIVE",
  FROZEN = "FROZEN",
}

export type TokenBalance = {
  amount: string;
  token: Token;
  updateDate: Date;
};

export type Token = {
  id: string;
  name?: string;
  standard?: TokenStandardEnum;
  blockchain: string;
  decimals?: number;
  isNative: boolean;
  symbol?: string;
  tokenAddress?: string;
  updateDate: Date;
  createDate: Date;
};

export type WalletBalancesInput = {
  tokenAddresses?: string[];
  name?: string;
};

export type WalletsInput = {
  userId?: string;
  address: string;
  blockchain?: string;
  walletSetId?: string;
  refId?: string;
  from?: Date;
  to?: Date;
  pageBefore?: string;
  pageAfter?: string;
  pageSize?: number;
};

export type Wallet = {
  id: string;
  address: string;
  blockchain: BlockchainEnum | string;
  createDate: Date;
  custodyType: string;
  accountType?: AccountType;
  name?: string;
  refId?: string;
  state: WalletState;
  updateDate: Date;
  userId?: string;
  walletSetId: string;
};

export type Wallets = {
  wallets: [Wallet];
};

export type Transaction = {
  id: string;
  abiFunctionSignature?: string;
  abiParameters?: string[];
  amounts?: string[];
  amountInUSD?: string;
  blockHash?: string;
  blockHeight?: number;
  blockchain: BlockchainEnum;
  contractAddress?: string;
  createDate: Date;
  custodyType?: CustodyTypeEnum;
  destinationAddress?: string;
  errorReason?: string;
  estimatedFee: EstimatedFee;
  feeLevel?: FeeLevelEnum;
  firstConfirmDate?: Date;
  networkFee?: string;
  networkFeeInUSD?: string;
  nfts?: string[];
  operation?: TransactionOperationEnum;
  refId?: string;
  sourceAddress?: string;
  state: TransactionStateEnum;
  tokenId?: string;
  transactionType: TransactionTypeEnum;
  txHash?: string;
  updateDate: Date;
  userId?: string;
  walletId?: string;
};

export type EstimatedFee = {
  baseFee?: string;
  gasLimit?: string;
  gasPrice?: string;
  maxFee?: string;
  priorityFee?: string;
};

export enum TransactionTypeEnum {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export enum TransactionStateEnum {
  INITIATED = "INITIATED",
  PENDING_RISK_SCREENING = "PENDING_RISK_SCREENING",
  DENIED = "DENIED",
  QUEUED = "QUEUED",
  SENT = "SENT",
  CONFIRMED = "CONFIRMED",
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}

export enum TransactionOperationEnum {
  TRANSFER = "TRANSFER",
  CONTRACT_EXECUTION = "CONTRACT_EXECUTION",
  CONTRACT_DEPLOYMENT = "CONTRACT_DEPLOYMENT",
}

export enum FeeLevelEnum {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum CustodyTypeEnum {
  DEVELOPER = "DEVELOPER",
  ENDUSER = "ENDUSER",
}

export enum BlockchainEnum {
  ETH_SEPOLIA = "ETH-SEPOLIA",
  ETH = "ETH",
  AVAX_FUJI = "AVAX-FUJI",
  AVAX = "AVAX",
  MATIC_AMOY = "MATIC-AMOY",
  MATIC = "MATIC",
  SOL_DEVNET = "SOL-DEVNET",
  SOL = "SOL",
}

export const blockchainNames: Record<BlockchainEnum | string, string> = {
  [BlockchainEnum.ETH_SEPOLIA]: "Ethereum Sepolia",
  [BlockchainEnum.ETH]: "Ethereum",
  [BlockchainEnum.AVAX_FUJI]: "Avalanche Fuji",
  [BlockchainEnum.AVAX]: "Avalanche",
  [BlockchainEnum.MATIC_AMOY]: "Polygon Amoy",
  [BlockchainEnum.MATIC]: "Polygon",
  [BlockchainEnum.SOL]: "Solana",
  [BlockchainEnum.SOL_DEVNET]: "Solana Devnet",
  "": "Unknown blockchain",
};

export type EstimateFeeInput = {
  amount: string[];
  walletId: string;
  destinationAddress: string;
  tokenId: string;
};

export type GasFeeObject = {
  gasLimit: string;
  gasPrice: string;
  maxFee?: string;
  priorityFee: string;
};

export type EstimateFeeResponse = {
  high: GasFeeObject;
  medium: GasFeeObject;
  low: GasFeeObject;
  callGasLimit: string;
  verificationGasLimit: string;
  preVerificationGas: string;
};

export type FaucetDripInput = {
  address: string;
  blockchain: string;
};
