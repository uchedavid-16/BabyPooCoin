const Migrations = artifacts.require("BabyPooCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
