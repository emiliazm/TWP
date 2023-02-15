const Contract = artifacts.require("TakyonWP");
const BurnContract = artifacts.require("TakyonWP");
const { afterEach } = require("node:test");
const truffleAssert = require("truffle-assertions");

// truffle test

contract("test", async (accounts) => {
  printAccounts = {};
  accounts.forEach((a) => {
    printAccounts[accounts.indexOf(a)] = a;
  });
  console.log(printAccounts);

  it("should deploy", async () => {
    contract = await Contract.new({
      from: accounts[0],
    });
    console.log("contract", contract.address);
  });

  it("should mint", async () => {
    const initialSupply = await contract["totalSupply"]();

    await contract["mint"](accounts[0]);

    const newSupply = await contract["totalSupply"]();
    assert.equal(newSupply, initialSupply.toNumber() + 1);
  });

  it("should set tokenURI", async () => {
    await contract["setCustomBaseURI"]("www.test.com/");
  })

  it("tokenURI should work", async () => {
    const uri = await contract["tokenURI"](0);
    assert.equal(uri, "www.test.com/0");
  });

  it("does not allow anyone but the owner to change the base URI", async () => {
    await truffleAssert.reverts(contract["setCustomBaseURI"](0, {
      from: accounts[2]
    }), "Ownable: caller is not the owner")
  });

  it("should not be able to mint more than MAX_SUPPLY", async () => {
    await truffleAssert.reverts(contract["mint"](accounts[0]), "Max amount of mint reached")
  });
});
