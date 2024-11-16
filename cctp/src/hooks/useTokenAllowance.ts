import { useMemo } from 'react'

import { BigNumber } from 'ethers'

import useContractFetcher from './useContractFetcher'
const useTokenAllowance = (
  tokenAddress: string,
  ownerAddress: string,
  spenderAddress: string
): BigNumber => {
  const inputs = ['allowance', ownerAddress, spenderAddress]
  const allowance = useContractFetcher(tokenAddress, inputs).data
  return useMemo(() => allowance ?? BigNumber.from(0), [allowance])
}

export default useTokenAllowance
