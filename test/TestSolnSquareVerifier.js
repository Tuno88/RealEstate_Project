var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Verifier = artifacts.require("Verifier");

contract("SolnSquareVerifier", (accounts) => {
  let owner = accounts[0];
  let account_one = accounts[1];
  let proof = require("../zokrates/code/square/proof.json");
  //   console.log("proof", proof);
  let a = proof.proof.a;
  let b = proof.proof.b;
  let c = proof.proof.c;
  //   console.log("a=========>", a);
  let input = proof.inputs;
  beforeEach(async function () {
    verifier = await Verifier.new({ from: owner });
    contract = await SolnSquareVerifier.new(verifier.address, { from: owner });
  });

  // Test if a new solution can be added for contract - SolnSquareVerifier
  it("Test if a new solution can be added for contract - SolnSquareVerifier", async function () {
    let key = "";
    // try {
    //   console.log("a1=====>", input);
    //   console.log("type of a", typeof input);
    key = await contract.generateKey(a, b, c, input);
    //   console.log("key=====>", key);
    // } catch (e) {
    //   console.log("1,error", e);
    // }
    // try {
    // console.log("key2--->", key);
    let result = await contract.addSolutions(1, account_one, key);
    // console.log("result=====>", result);
    // console.log("type of result=====>", typeof result);
    // } catch (e) {
    //   console.log("2,error", e);
    // }

    assert.equal(
      result.logs[0].event,
      "AddSolution",
      "ERROR: Test if a new solution can be added for contract"
    );
  });
  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it("Test if an ERC721 token can be minted for contract - SolnSquareVerifier", async function () {
    let tokenId = 1;
    let result = await contract.mintNewNFT(tokenId, a, b, c, input);
    // console.log("result2=====>", result);

    assert.equal(
      result.logs[1].event,
      "Transfer",
      "ERROR: Test if an ERC721 token can be minted for contract"
    );
  });
});
