# TGE seed round Smart-contract

Smart contract for the TGE seed round. FOIL is governance token in FoilNetwork. 8 million FOIL will be distributed among private investors on the terms specified in the smart contract.

1 ETH = 50,000 FOIL
1 USDT = 20 FOIL

First, 8 million FOIL will be sent to FoilSeedContract to distribute tokens from Foil contract.
20% will be released for two months first and release 10% each month. 

ETH and USDT will be locked in Lockup contract to guarantee the appointment solution with whitelist users . 
20% of ETH or USDT will be sent for two months and receive 10% of them each month from Lockup contract to admin wallet.


# Smart contract

1.	FoilSeedContract.sol
-	Main contract
1)	FoilSeedContribution contract
2)	Lockup contract (import this contract inside FoilSeedContract)

-	Main functions
1)	addWhiteListUsers function
2)	addWhiteListUser function
3)	buyToken function

2.	Lockup.sol
-	Main funtions
1)	Deposite function
2)	Withdraw function
3)	getBalance function



