/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FaucetRubyEuropa,
  FaucetRubyEuropaInterface,
} from "../../contracts/FaucetRubyEuropa";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MINT_AMOUNT_ETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405261002061001561002560201b60201c565b61002d60201b60201c565b6100f1565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61071f806101006000396000f3fe6080604052600436106100595760003560e01c806323336cc0146100625780633ccfd60b1461008d5780636a627842146100a4578063715018a6146100cd5780638da5cb5b146100e4578063f2fde38b1461010f57610060565b3661006057005b005b34801561006e57600080fd5b50610077610138565b6040516100849190610566565b60405180910390f35b34801561009957600080fd5b506100a2610144565b005b3480156100b057600080fd5b506100cb60048036038101906100c6919061047e565b610195565b005b3480156100d957600080fd5b506100e2610220565b005b3480156100f057600080fd5b506100f9610234565b604051610106919061050b565b60405180910390f35b34801561011b57600080fd5b5061013660048036038101906101319190610455565b61025d565b005b67016345785d8a000081565b61014c6102e1565b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610192573d6000803e3d6000fd5b50565b60008173ffffffffffffffffffffffffffffffffffffffff1631905067016345785d8a000081101561021c578173ffffffffffffffffffffffffffffffffffffffff166108fc8267016345785d8a00006101ef9190610592565b9081150290604051600060405180830381858888f1935050505015801561021a573d6000803e3d6000fd5b505b5050565b6102286102e1565b610232600061035f565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102656102e1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc90610526565b60405180910390fd5b6102de8161035f565b50565b6102e9610423565b73ffffffffffffffffffffffffffffffffffffffff16610307610234565b73ffffffffffffffffffffffffffffffffffffffff161461035d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035490610546565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60008135905061043a816106bb565b92915050565b60008135905061044f816106d2565b92915050565b60006020828403121561046757600080fd5b60006104758482850161042b565b91505092915050565b60006020828403121561049057600080fd5b600061049e84828501610440565b91505092915050565b6104b0816105c6565b82525050565b60006104c3602683610581565b91506104ce82610643565b604082019050919050565b60006104e6602083610581565b91506104f182610692565b602082019050919050565b6105058161060a565b82525050565b600060208201905061052060008301846104a7565b92915050565b6000602082019050818103600083015261053f816104b6565b9050919050565b6000602082019050818103600083015261055f816104d9565b9050919050565b600060208201905061057b60008301846104fc565b92915050565b600082825260208201905092915050565b600061059d8261060a565b91506105a88361060a565b9250828210156105bb576105ba610614565b5b828203905092915050565b60006105d1826105ea565b9050919050565b60006105e3826105ea565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6106c4816105c6565b81146106cf57600080fd5b50565b6106db816105d8565b81146106e657600080fd5b5056fea2646970667358221220835bfa79ad75baf85811da5aef46f9e1ae95f25a2a3df1684cfda4e279b32d1364736f6c63430008040033";

type FaucetRubyEuropaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FaucetRubyEuropaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FaucetRubyEuropa__factory extends ContractFactory {
  constructor(...args: FaucetRubyEuropaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<FaucetRubyEuropa> {
    return super.deploy(overrides || {}) as Promise<FaucetRubyEuropa>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FaucetRubyEuropa {
    return super.attach(address) as FaucetRubyEuropa;
  }
  override connect(signer: Signer): FaucetRubyEuropa__factory {
    return super.connect(signer) as FaucetRubyEuropa__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetRubyEuropaInterface {
    return new utils.Interface(_abi) as FaucetRubyEuropaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FaucetRubyEuropa {
    return new Contract(address, _abi, signerOrProvider) as FaucetRubyEuropa;
  }
}