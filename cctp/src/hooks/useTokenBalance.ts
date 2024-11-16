import { useMemo } from 'react'

import { BigNumber } from 'ethers'

import useContractFetcher from './useContractFetcher'
const useTokenBalance = (
    tokenAddress: string,
    ownerAddress: string
): BigNumber => {
    const inputs = ['balanceOf', ownerAddress]
    const balance = useContractFetcher(tokenAddress, inputs).data
    return useMemo(() => balance ?? BigNumber.from(0), [balance])
}

export default useTokenBalance
