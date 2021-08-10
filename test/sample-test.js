const { expect } = require("chai");
const { ethers, web3 } = require("hardhat");


describe('Token contract',()=>{

    let foil;
    let foilSeedContract;
    let lockUp;
    let weth;
    let mockUsdt;
    let owner;
    let addr1;
    let addrs;
    let accounts;

    beforeEach(async function(){
     
      [owner,addr1,addr2,...addrs] = await ethers.getSigners();
       accounts = await web3.eth.getAccounts();
   
      const Foil = await ethers.getContractFactory('Foil');
      foil = await Foil.deploy();
      await foil.deployed();
      await foil.faucet(owner.address,100000000);


      const MockUsdt = await ethers.getContractFactory("MockUsdt");
      mockUsdt = await MockUsdt.deploy();
      await mockUsdt.deployed();
      await mockUsdt.faucet(addr1.address,100);

      const Lockup = await ethers.getContractFactory('Lockup');
      lockUp = await Lockup.deploy(addr2.address,mockUsdt.address);
      await lockUp.deployed();

      const FoilSeedContract = await ethers.getContractFactory('FoilSeedContract');
      foilSeedContract = await FoilSeedContract.deploy(foil.address,lockUp.address);
      await foilSeedContract.deployed();
    });

    describe("Transaction",function(){
  
      it("Should transfer tokens once it's changed",async function(){
         await foil.transfer(foilSeedContract.address,8000000);
         expect(await foil.balanceOf(foilSeedContract.address)).to.equal(8000000);

      })

      it("Should add whitelistited users once it's changed ",async function(){

         await foilSeedContract.addWhiteListUser(addr1.address,2);


      })

     

      


    })
})



