var ERC721MintableComplete = artifacts.require("CustomERC721Token");

contract("TestERC721Mintable", (accounts) => {
  let owner = accounts[0];
  const account_one = accounts[1];
  const account_two = accounts[2];
  const account_three = accounts[3];

  describe("match erc721 spec", function () {
    console.log("before");
    beforeEach(async function () {
      console.log(
        "----------------------------------------------------------------------- before start"
      );
      this.contract = await ERC721MintableComplete.new({ from: owner });
      console.log("after");
      // TODO: mint multiple tokens
      try {
        await this.contract.mint(account_one, 122, { from: owner });
        await this.contract.mint(owner, 123, { from: owner });
        await this.contract.mint(account_two, 124, { from: owner });
        await this.contract.mint(account_three, 125, { from: owner });
        await this.contract.mint(account_three, 126, { from: owner });
      } catch (e) {
        console.log("error: ", e);
      }
      console.log(
        "----------------------------------------------------------------------- before end"
      );
    });

    it("should return total supply", async function () {
      console.log(
        "should return total supply--------------------start-----------------------------------------------"
      );
      let allTokens = await this.contract.totalSupply.call();
      console.log("allTokens", allTokens);
      assert.equal(allTokens, 5, "Do not match total Supplies");
      console.log(
        "should return total supply--------------------end----------------"
      );
    });

    it("should get token balance", async function () {
      let tokenBalance = await this.contract.balanceOf.call(account_two);
      console.log("tokenBalance", tokenBalance);
      assert.equal(tokenBalance, 1, "Do not match token balance");
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      let tokenURI = await this.contract.tokenURI.call(122);
      assert.equal(
        tokenURI,
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/122",
        "NOT match token URI"
      );
    });

    it("should transfer token from one owner to another", async function () {
      await this.contract.transferFrom(owner, account_three, 123);
      let newOwner = await this.contract.ownerOf.call(123);
      console.log("new owner=====>", newOwner);
      assert.equal(
        newOwner,
        account_three,
        "NOT match token owner after transfer"
      );
    });
  });

  describe("have ownership properties", function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new({ from: account_one });
    });

    it("should fail when minting when address is not contract owner", async function () {
      let result = false;
      try {
        await this.contract.mint.call(account_three, 123, {
          from: account_two,
        });
      } catch (e) {
        result = true;
      }
      assert.equal(
        result,
        true,
        "should fail when minting when address is NOT contract owner"
      );
    });

    it("should return contract owner", async function () {
      let owner = await this.contract.getOwner.call();
      assert.equal(owner, account_one, "should return contract owner");
    });
  });
});
