import useSWR from 'swr'

import useContract from './useContract'

import type { BigNumber } from 'ethers'
import type { Erc20 } from 'typechain'

const fetcher =
    (contract: Erc20 | null) =>
        (...args: string[]): Promise<BigNumber> | null => {
            if (contract === null) return null

            const [method, ...params] = args
            if (method === 'allowance') {
                const [ownerAddress, spenderAddress] = params
                return contract.allowance(ownerAddress, spenderAddress)
            } else if (method === 'balanceOf') {
                const [ownerAddress] = params
                return contract.balanceOf(ownerAddress)
            }

            return null
        }
const useContractFetcher = (
    address: string,
    args?: Array<string | undefined | null>
) => {
    const contract = useContract(address, false) as Erc20

    return useSWR(args, {
        fetcher: fetcher(contract),
    })
}

export default useContractFetcher
