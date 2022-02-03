// const BigNumber = web3.BigNumber;
const BigNumber = require('bignumber.js');

const MyToken = artifacts.require("MyToken");

var chai = require('chai')
chai
.use(require('chai-bignumber')(BigNumber))
.should();

contract('MyToken', accounts => {

    const _name = "Adi Oz Token";
    const _symbol = "ADIOZ";
    const _decimals = 10;
    const _initialSupply = 1000000;
    beforeEach(async function () {
        this.token = await MyToken.new(_name, _symbol, _initialSupply);
    });

    describe('token attributes', function(){
        
        it('has the correct name', async function(){
           const name = await this.token.name();
           name.should.equal(_name);
        });

        it('has the correct symbol', async function(){
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);
        });

        it('has the correct decimals', async function(){
            const decimals = (await this.token.decimals()).toNumber();
            decimals.should.be.bignumber.equal(_decimals);
        });

        it('has the correct supply', async function(){
            const initialSupply = await this.token.totalSupply();
            assert.equal(initialSupply.toString(), (_initialSupply*Math.pow(10,10)).toString());
            // initialSupply.should.be.bignumber.equal(_initialSupply);
        });

    })
});