import type { UnspentOutput, UnspentOutputBase } from "./OrdTransaction.js";
import type { Network, Psbt } from "bitcoinjs-lib";

interface CreateSendBase {
  utxos: UnspentOutput[];
  toAddress: string;
  enableRBF?: boolean;
  signTransaction: (psbt: Psbt) => Promise<void>;
  changeAddress: string;
  feeRate?: number;
  network: Network;
  pubkey: string;
  calculateFee?: (tx: string, feeRate: number) => Promise<number>;
}

export interface CreateSendBel extends CreateSendBase {
  toAmount: number;
  receiverToPayFee?: boolean;
}

export interface CreateSendOrd extends CreateSendBase {
  outputValue: number;
}

export interface CreateMultiSendOrd {
  utxos: UnspentOutputBase[];
  toAddress: string;
  signPsbtHex: (psbtHex: string) => Promise<string>;
  changeAddress: string;
  feeRate?: number;
  network?: Network;
  publicKey: string;
}

export interface AddInputProps {
  psbt: Psbt;
  utxo: UnspentOutputBase;
  publicKey: string;
  network: Network;
  sighashType?: number;
}
