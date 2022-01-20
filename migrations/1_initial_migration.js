// const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };
const MyToken = artifacts.require("MyToken");

module.exports = function(deployer){
  var tokenSupply = 1000000;
  deployer.deploy(MyToken, "Adi Oz Token", "ADIOZ", tokenSupply);
};