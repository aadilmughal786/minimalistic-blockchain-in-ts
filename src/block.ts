import { SHA256, lib } from 'crypto-js';

import { GenericObject } from './types';

export default class Block {
  data: GenericObject;
  hash: lib.WordArray;
  index: number;
  previousHash: string;
  timestamp: number;

  constructor(
    data: GenericObject,
    index: number,
    previousHash: string,
    timestamp: number,
  ) {
    this.data = data;
    this.hash = this.calculateHash();
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
  }

  calculateHash(): lib.WordArray {
    const dataString = JSON.stringify(this.data).toString();
    const inputString = `${this.index}${this.previousHash}${this.timestamp}${dataString}`;
    return SHA256(inputString);
  }
}
