# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
  0x6dd56BB3f5870eCf39b4e2fe9c9C12F402C441c8

### Project's TEST CASE

- truffle develop
- compile
- migrate --reset
- test test/TestERC721Mintable.js
- test test/TestSolnSquareVerifier.js
- test test/TestSquareVerifier.js

### Contract Addresses, Contract Abi's, OpenSea MarketPlace Storefront link's.

- Contract Address: 0xe71D67D8D447f16aa08c5E653738ae143F564541
- Contract Abi's: [
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "verifierAddress",
  "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "index",
  "type": "uint256"
  },
  {
  "indexed": false,
  "internalType": "address",
  "name": "to",
  "type": "address"
  }
  ],
  "name": "AddSolution",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "owner",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "approved",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "Approval",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "owner",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "operator",
  "type": "address"
  },
  {
  "indexed": false,
  "internalType": "bool",
  "name": "approved",
  "type": "bool"
  }
  ],
  "name": "ApprovalForAll",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "address",
  "name": "_address",
  "type": "address"
  }
  ],
  "name": "Paused",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "from",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "Transfer",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "address",
  "name": "newOwner",
  "type": "address"
  }
  ],
  "name": "TransferingOwnership",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "address",
  "name": "_address",
  "type": "address"
  }
  ],
  "name": "UnPaused",
  "type": "event"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "bytes32",
  "name": "_myid",
  "type": "bytes32"
  },
  {
  "internalType": "string",
  "name": "_result",
  "type": "string"
  }
  ],
  "name": "**callback",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "bytes32",
  "name": "_myid",
  "type": "bytes32"
  },
  {
  "internalType": "string",
  "name": "_result",
  "type": "string"
  },
  {
  "internalType": "bytes",
  "name": "_proof",
  "type": "bytes"
  }
  ],
  "name": "**callback",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [],
  "name": "\_squareVerifier",
  "outputs": [
  {
  "internalType": "contract SquareVerifier",
  "name": "",
  "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "approve",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "address",
  "name": "owner",
  "type": "address"
  }
  ],
  "name": "balanceOf",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "getApproved",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [],
  "name": "getBaseTokenURI",
  "outputs": [
  {
  "internalType": "string",
  "name": "",
  "type": "string"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [],
  "name": "getName",
  "outputs": [
  {
  "internalType": "string",
  "name": "",
  "type": "string"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [],
  "name": "getOwner",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [],
  "name": "getSymbol",
  "outputs": [
  {
  "internalType": "string",
  "name": "",
  "type": "string"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "address",
  "name": "owner",
  "type": "address"
  },
  {
  "internalType": "address",
  "name": "operator",
  "type": "address"
  }
  ],
  "name": "isApprovedForAll",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "_address",
  "type": "address"
  }
  ],
  "name": "isValidAddress",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "mint",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "ownerOf",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "from",
  "type": "address"
  },
  {
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "from",
  "type": "address"
  },
  {
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  },
  {
  "internalType": "bytes",
  "name": "_data",
  "type": "bytes"
  }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "internalType": "bool",
  "name": "approved",
  "type": "bool"
  }
  ],
  "name": "setApprovalForAll",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "bool",
  "name": "paused",
  "type": "bool"
  }
  ],
  "name": "setPaused",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "bytes4",
  "name": "interfaceId",
  "type": "bytes4"
  }
  ],
  "name": "supportsInterface",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "uint256",
  "name": "index",
  "type": "uint256"
  }
  ],
  "name": "tokenByIndex",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "address",
  "name": "owner",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "index",
  "type": "uint256"
  }
  ],
  "name": "tokenOfOwnerByIndex",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "tokenURI",
  "outputs": [
  {
  "internalType": "string",
  "name": "",
  "type": "string"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "from",
  "type": "address"
  },
  {
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "tokenId",
  "type": "uint256"
  }
  ],
  "name": "transferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "address",
  "name": "newOwner",
  "type": "address"
  }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "uint256",
  "name": "_index",
  "type": "uint256"
  },
  {
  "internalType": "address",
  "name": "_to",
  "type": "address"
  },
  {
  "internalType": "bytes32",
  "name": "_key",
  "type": "bytes32"
  }
  ],
  "name": "addSolutions",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "constant": true,
  "inputs": [
  {
  "internalType": "uint256[2]",
  "name": "a",
  "type": "uint256[2]"
  },
  {
  "internalType": "uint256[2][2]",
  "name": "b",
  "type": "uint256[2][2]"
  },
  {
  "internalType": "uint256[2]",
  "name": "c",
  "type": "uint256[2]"
  },
  {
  "internalType": "uint256[2]",
  "name": "input",
  "type": "uint256[2]"
  }
  ],
  "name": "generateKey",
  "outputs": [
  {
  "internalType": "bytes32",
  "name": "",
  "type": "bytes32"
  }
  ],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
  },
  {
  "constant": false,
  "inputs": [
  {
  "internalType": "uint256",
  "name": "id",
  "type": "uint256"
  },
  {
  "internalType": "uint256[2]",
  "name": "a",
  "type": "uint256[2]"
  },
  {
  "internalType": "uint256[2][2]",
  "name": "b",
  "type": "uint256[2][2]"
  },
  {
  "internalType": "uint256[2]",
  "name": "c",
  "type": "uint256[2]"
  },
  {
  "internalType": "uint256[2]",
  "name": "input",
  "type": "uint256[2]"
  }
  ],
  "name": "mintNewNFT",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
  }
  ]

- OpenSea MarketPlace Storefront link's

* https://testnets.opensea.io/assets/rinkeby/0xe71d67d8d447f16aa08c5e653738ae143f564541/4/
* https://testnets.opensea.io/assets/rinkeby/0xe71d67d8d447f16aa08c5e653738ae143f564541/5/
* https://testnets.opensea.io/assets/rinkeby/0xe71d67d8d447f16aa08c5e653738ae143f564541/1/
* https://testnets.opensea.io/assets/rinkeby/0xe71d67d8d447f16aa08c5e653738ae143f564541/2/
* https://testnets.opensea.io/assets/rinkeby/0xe71d67d8d447f16aa08c5e653738ae143f564541/3/

- Seller Address: 0x1f1f0464B96005F67633A65AFa678960eA908EB5
- Buyer Address: 0x6dd56BB3f5870eCf39b4e2fe9c9C12F402C441c8
