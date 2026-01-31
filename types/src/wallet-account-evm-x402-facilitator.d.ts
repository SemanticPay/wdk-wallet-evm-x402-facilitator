/** @typedef {import('@tetherto/wdk-wallet-evm').default} WalletAccountEvm */
/** @typedef {import('@x402/evm').FacilitatorEvmSigner} FacilitatorEvmSigner */
/**
 * Object adapter that wraps a WalletAccountEvm instance to conform to the
 * FacilitatorEvmSigner interface required by x402 facilitators.
 *
 * Translates the WalletAccountEvm API (ethers.js based) into the
 * FacilitatorEvmSigner interface used by x402 for verifying and settling payments.
 *
 * @implements {FacilitatorEvmSigner}
 */
export default class WalletAccountEvmX402Facilitator implements FacilitatorEvmSigner {
    /**
     * Creates a new facilitator EVM signer adapter.
     *
     * @param {WalletAccountEvm} walletAccount - The WalletAccountEvm instance to adapt.
     */
    constructor(walletAccount: WalletAccountEvm);
    /** @type {WalletAccountEvm} */
    _adaptee: WalletAccountEvm;
    /**
     * Get all addresses this facilitator can use for signing.
     *
     * @returns {string[]}
     */
    getAddresses(): string[];
    /**
     * Get the bytecode at a given address.
     *
     * @param {GetCodeArgs} args - The address arguments.
     * @returns {Promise<string | undefined>}
     */
    getCode({ address }: GetCodeArgs): Promise<string | undefined>;
    /**
     * Read contract state.
     *
     * @param {ReadContractArgs} args - The contract read arguments.
     * @returns {Promise<unknown>}
     */
    readContract({ address, abi, functionName, args }: ReadContractArgs): Promise<unknown>;
    /**
     * Verify an EIP-712 typed data signature.
     *
     * @param {VerifyTypedDataArgs} args - The verification arguments.
     * @returns {Promise<boolean>}
     */
    verifyTypedData({ domain, types, message, signature }: VerifyTypedDataArgs): Promise<boolean>;
    /**
     * Write to a contract (send a state-changing transaction).
     *
     * @param {WriteContractArgs} args - The contract write arguments.
     * @returns {Promise<string>} The transaction hash.
     */
    writeContract({ address, abi, functionName, args }: WriteContractArgs): Promise<string>;
    /**
     * Send a raw transaction.
     *
     * @param {SendTransactionArgs} args - The transaction arguments.
     * @returns {Promise<string>} The transaction hash.
     */
    sendTransaction({ to, data }: SendTransactionArgs): Promise<string>;
    /**
     * Wait for a transaction to be mined and return its receipt.
     *
     * @param {WaitForTransactionReceiptArgs} args - The receipt arguments.
     * @returns {Promise<TransactionReceiptResult>}
     */
    waitForTransactionReceipt({ hash }: WaitForTransactionReceiptArgs): Promise<TransactionReceiptResult>;
}
export type WalletAccountEvm = import("@tetherto/wdk-wallet-evm").default;
export type FacilitatorEvmSigner = import("@x402/evm").FacilitatorEvmSigner;
