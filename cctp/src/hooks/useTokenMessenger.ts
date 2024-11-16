import { useCallback } from 'react'

import { useWeb3React } from '@web3-react/core'

import { TokenMessenger__factory } from 'typechain/index'
import { addressToBytes32 } from 'utils'
import { getTokenMessengerContractAddress } from 'utils/addresses'

import type {
  TransactionResponse,
  Web3Provider,
} from '@ethersproject/providers'
import type { DestinationDomain, SupportedChainId } from 'constants/chains'
import type { BigNumber } from 'ethers'

const useTokenMessenger = (chainId: SupportedChainId | undefined) => {
  const { library } = useWeb3React<Web3Provider>()

  const TOKEN_MESSENGER_CONTRACT_ADDRESS =
    getTokenMessengerContractAddress(chainId)

  const depositForBurn = useCallback(
    async (
      amount: BigNumber,
      destinationDomain: DestinationDomain,
      mintRecipient: string,
      burnToken: string
    ) => {
      if (!library) return
      const contract = TokenMessenger__factory.connect(
        TOKEN_MESSENGER_CONTRACT_ADDRESS,
        library.getSigner()
      )

      return await contract
        .depositForBurn(
          amount,
          destinationDomain,
          addressToBytes32(mintRecipient),
          burnToken
        )
        .then((response: TransactionResponse) => {
          return response
        })
        .catch((error: Error) => {
          throw new Error(error.message)
        })
    },
    [TOKEN_MESSENGER_CONTRACT_ADDRESS, library]
  )

  return {
    depositForBurn,
  }
}

export default useTokenMessenger
