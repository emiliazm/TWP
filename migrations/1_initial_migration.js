const TakyonDocuments = artifacts.require("TakyonDocuments");

module.exports = function (deployer) {
  deployer.deploy(TakyonDocuments);
};
