export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"addingTokenA","type":"bool"},{"internalType":"uint256[9]","name":"params","type":"uint256[9]"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"string","name":"allowlistIpfsCid","type":"string"}],"name":"addLiquidity","outputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"_offerIndex","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"bool","name":"addingTokenA","type":"bool"},{"internalType":"uint256[9]","name":"params","type":"uint256[9]"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"string","name":"allowlistIpfsCid","type":"string"}],"name":"addLiquidityETH","outputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"_offerIndex","type":"uint256"}],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"configStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"govToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeAllLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeAllLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"removingTokenA","type":"bool"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"receivingOut","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"bool","name":"removingTokenA","type":"bool"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"pairIndex","type":"uint256"},{"internalType":"uint256","name":"offerIndex","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"receivingOut","type":"uint256"},{"internalType":"uint256","name":"feeOut","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"stateMutability":"payable","type":"receive"}
],
"bytecode":"6101006040523480156200001257600080fd5b50604051620028fc380380620028fc833981810160405260408110156200003857600080fd5b5080516020918201516001600160601b0319606083811b821660805282901b1660a05260408051635aa6e67560e01b81529051929391926001600160a01b03851692635aa6e6759260048082019391829003018186803b1580156200009c57600080fd5b505afa158015620000b1573d6000803e3d6000fd5b505050506040513d6020811015620000c857600080fd5b50516040805163b716d46360e01b815290516001600160a01b039092169163b716d46391600480820192602092909190829003018186803b1580156200010d57600080fd5b505afa15801562000122573d6000803e3d6000fd5b505050506040513d60208110156200013957600080fd5b505160601b6001600160601b03191660c05260408051634eb4ee2760e11b815290516001600160a01b03841691639d69dc4e9160048083019260209291908290030181600087803b1580156200018e57600080fd5b505af1158015620001a3573d6000803e3d6000fd5b505050506040513d6020811015620001ba57600080fd5b50516001600160601b031960609190911b1660e052505060805160601c60a05160601c60c05160601c60e05160601c6126726200028a600039806108355280610e9652806114df52508061053952806106f052806108f75280610ce05280610f58528061116652806114a852806116af528061198252508060d252806107a452806107f35280610b165280610b9752806112c652806113c8528061141052806116e8528061178252806117ad52806118e45250806119ba5280611a745280611cd55280611e3352506126726000f3fe6080604052600436106100b55760003560e01c80639d69dc4e11610069578063ad5c46481161004e578063ad5c464814610497578063bacd1c24146104ac578063c45a01551461052257610160565b80639d69dc4e14610401578063a233d84f1461041657610160565b8063851f59441161009a578063851f59441461021d5780638bc32bfc146102f057806398d201a4146103ab57610160565b806305268cff146101655780636d025d22146101a357610160565b36610160573373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461015e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b34801561017157600080fd5b5061017a610537565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156101af57600080fd5b506101ff600480360360a08110156101c657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135821691604082013516906060810135906080013561055b565b60408051938452602084019290925282820152519081900360600190f35b6102c060048036036101a081101561023457600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101351515916040820191610160810135918101906101a0810161018082013564010000000081111561028157600080fd5b82018360208201111561029357600080fd5b803590602001918460018302840111640100000000831117156102b557600080fd5b509092509050610726565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835260208301919091528051918290030190f35b3480156102fc57600080fd5b506102c060048036036101c081101561031457600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116916040820135151591606081019161018082013591908101906101c081016101a082013564010000000081111561036c57600080fd5b82018360208201111561037e57600080fd5b803590602001918460018302840111640100000000831117156103a057600080fd5b509092509050610dcd565b3480156103b757600080fd5b506101ff600480360360808110156103ce57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060600135611249565b34801561040d57600080fd5b5061017a6114dd565b34801561042257600080fd5b5061015e600480360361014081101561043a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135821691604082013515159160608101359091169060808101359060a08101359060c08101359060e081013590610100810135906101200135611501565b3480156104a357600080fd5b5061017a6116e6565b3480156104b857600080fd5b5061015e60048036036101208110156104d057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101351515916040820135169060608101359060808101359060a08101359060c08101359060e081013590610100013561170a565b34801561052e57600080fd5b5061017a6119b8565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600083428110156105d057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006105dd8a8a896119dc565b905060008060008373ffffffffffffffffffffffffffffffffffffffff16637a6a5e1b336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050606060405180830381600087803b15801561066357600080fd5b505af1158015610677573d6000803e3d6000fd5b505050506040513d606081101561068d57600080fd5b5080516020820151604090920151909450909250905073ffffffffffffffffffffffffffffffffffffffff808d16908e16106106ca5781836106cd565b82825b90985096509450846106e08d8c8a611af3565b6106eb8c8c89611af3565b6107167f00000000000000000000000000000000000000000000000000000000000000008c88611af3565b5050505050955095509592505050565b6000806101008601354281101561079e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6107d1897f00000000000000000000000000000000000000000000000000000000000000008960005b6020020135611cd0565b925060208701359150600073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116908b16106108225788610825565b88155b905060e088013583610a055760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e6665655065724f726465720000000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156108c457600080fd5b505afa1580156108d8573d6000803e3d6000fd5b505050506040513d60208110156108ee57600080fd5b5051905061091e7f0000000000000000000000000000000000000000000000000000000000000000338884611f36565b61092e828263ffffffff61210616565b604080517f5fd5e2fc000000000000000000000000000000000000000000000000000000008152336004820152851515602482015260608d01351515604482015260808d0135606482015260a08d0135608482015260c08d013560a4820152905191935073ffffffffffffffffffffffffffffffffffffffff88169250635fd5e2fc9160c48083019260209291908290030181600087803b1580156109d257600080fd5b505af11580156109e6573d6000803e3d6000fd5b505050506040513d60208110156109fc57600080fd5b50519350610a33565b610a338583868c60035b602002013515158d600460200201358e600560200201358f6006602002013561214f565b8473ffffffffffffffffffffffffffffffffffffffff1663a1d6fdf583868b8b8b6040518663ffffffff1660e01b81526004018086151515158152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610ace57600080fd5b505af1158015610ae2573d6000803e3d6000fd5b505050508915610b0f57604089013515610b0a57610b0a8b33878c60025b6020020135611f36565b610cd5565b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610b7c57600080fd5b505af1158015610b90573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610c3c57600080fd5b505af1158015610c50573d6000803e3d6000fd5b505050506040513d6020811015610c6657600080fd5b5051610cd357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015290519081900360640190fd5b505b8015610d0757610d077f0000000000000000000000000000000000000000000000000000000000000000338784611f36565b6040890135151580610d195750600034115b80610d245750600081115b15610dbf57604080517f33f175fc00000000000000000000000000000000000000000000000000000000815283151560048201526024810186905260448101839052905173ffffffffffffffffffffffffffffffffffffffff8716916333f175fc91606480830192600092919082900301818387803b158015610da657600080fd5b505af1158015610dba573d6000803e3d6000fd5b505050505b505050965096945050505050565b60008061010086013542811015610e4557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610e528a8a8960006107c7565b925060208701359150600073ffffffffffffffffffffffffffffffffffffffff808b16908c1610610e835788610e86565b88155b905060e0880135836110665760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e6665655065724f726465720000000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610f2557600080fd5b505afa158015610f39573d6000803e3d6000fd5b505050506040513d6020811015610f4f57600080fd5b50519050610f7f7f0000000000000000000000000000000000000000000000000000000000000000338884611f36565b610f8f828263ffffffff61210616565b604080517f5fd5e2fc000000000000000000000000000000000000000000000000000000008152336004820152851515602482015260608d01351515604482015260808d0135606482015260a08d0135608482015260c08d013560a4820152905191935073ffffffffffffffffffffffffffffffffffffffff88169250635fd5e2fc9160c48083019260209291908290030181600087803b15801561103357600080fd5b505af1158015611047573d6000803e3d6000fd5b505050506040513d602081101561105d57600080fd5b50519350611074565b6110748583868c6003610a0f565b8473ffffffffffffffffffffffffffffffffffffffff1663a1d6fdf583868b8b8b6040518663ffffffff1660e01b81526004018086151515158152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561110f57600080fd5b505af1158015611123573d6000803e3d6000fd5b5050505060008960026009811061113657fe5b6020020135111561115b5761115b8a61114f578b611151565b8c5b33878c6002610b00565b801561118d5761118d7f0000000000000000000000000000000000000000000000000000000000000000338784611f36565b604089013515158061119f5750600081115b1561123a57604080517f33f175fc00000000000000000000000000000000000000000000000000000000815283151560048201526024810186905260448101839052905173ffffffffffffffffffffffffffffffffffffffff8716916333f175fc91606480830192600092919082900301818387803b15801561122157600080fd5b505af1158015611235573d6000803e3d6000fd5b505050505b50505097509795505050505050565b600080600083428110156112be57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006112eb897f0000000000000000000000000000000000000000000000000000000000000000896119dc565b905060008060008373ffffffffffffffffffffffffffffffffffffffff16637a6a5e1b336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050606060405180830381600087803b15801561137157600080fd5b505af1158015611385573d6000803e3d6000fd5b505050506040513d606081101561139b57600080fd5b5080516020820151604090920151909450909250905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116908d16106113f85781836113fb565b82825b909850965094508461140e8c8c8a611af3565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d886040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561148157600080fd5b505af1158015611495573d6000803e3d6000fd5b505050506114a38b8861229e565b6114ce7f00000000000000000000000000000000000000000000000000000000000000008c88611af3565b50505050509450945094915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b804281101561157157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061157e8c8c8a6119dc565b905060008b73ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff16106115bb578a6115be565b8a155b604080517f5592bb530000000000000000000000000000000000000000000000000000000081523360048201528215156024820152604481018b9052606481018a90526084810189905260a48101889052905191925073ffffffffffffffffffffffffffffffffffffffff841691635592bb539160c48082019260009290919082900301818387803b15801561165357600080fd5b505af1158015611667573d6000803e3d6000fd5b505050506000808c61167a57878961167d565b88885b90925090508115611693576116938f8d84611af3565b80156116a4576116a48e8d83611af3565b86156116d5576116d57f00000000000000000000000000000000000000000000000000000000000000008d89611af3565b505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b804281101561177a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4558504952454400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006117a78b7f00000000000000000000000000000000000000000000000000000000000000008a6119dc565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff1610611804578a611807565b8a155b604080517f5592bb530000000000000000000000000000000000000000000000000000000081523360048201528215156024820152604481018b9052606481018a90526084810189905260a48101889052905191925073ffffffffffffffffffffffffffffffffffffffff841691635592bb539160c48082019260009290919082900301818387803b15801561189c57600080fd5b505af11580156118b0573d6000803e3d6000fd5b505050506000808c6118c35787896118c6565b88885b909250905081156118dc576118dc8e8d84611af3565b8015611977577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561195557600080fd5b505af1158015611969573d6000803e3d6000fd5b505050506119778c8261229e565b86156119a8576119a87f00000000000000000000000000000000000000000000000000000000000000008d89611af3565b5050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006119eb86866123db565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152604880830199909952825180830390990189526068820183528851988401989098207fff0000000000000000000000000000000000000000000000000000000000000060888301527f000000000000000000000000000000000000000000000000000000000000000090941b9097166089880152609d8701929092527fb327e3a980c558efc86f97b28d41c7a2929418be2a34a24e1696ec3b20dfa23c60bd808801919091528251808803909101815260dd909601909152845194019390932095945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b60208310611bc957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611b8c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611c2b576040519150601f19603f3d011682016040523d82523d6000602084013e611c30565b606091505b5091509150818015611c5e575080511580611c5e5750808060200190516020811015611c5b57600080fd5b50515b611cc957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fd3206d286866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611da457600080fd5b505afa158015611db8573d6000803e3d6000fd5b505050506040513d6020811015611dce57600080fd5b5051905082158015611dde575080155b15611eb157604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152868116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b158015611e7e57600080fd5b505af1158015611e92573d6000803e3d6000fd5b505050506040513d6020811015611ea857600080fd5b50519150611f2e565b80831115611f2057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c6964207061697220696e6465780000000000000000000000000000604482015290519081900360640190fd5b611f2b8585856119dc565b91505b509392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061201457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611fd7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612076576040519150601f19603f3d011682016040523d82523d6000602084013e61207b565b606091505b50915091508180156120a95750805115806120a957508080602001905160208110156120a657600080fd5b50515b6120fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806126196024913960400191505060405180910390fd5b505050505050565b600061214883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612544565b9392505050565b6000806000808a73ffffffffffffffffffffffffffffffffffffffff1663db13653c8b8b6040518363ffffffff1660e01b81526004018083151515158152602001828152602001925050506101006040518083038186803b1580156121b357600080fd5b505afa1580156121c7573d6000803e3d6000fd5b505050506040513d6101008110156121de57600080fd5b50604081015160a082015160c083015160e0909301519196509450909250905087151584151514801561221057508287145b801561221b57508186145b801561222657508085145b61229157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f7264657220706172616d73206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b5050505050505050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b6020831061231557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016122d8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612377576040519150601f19603f3d011682016040523d82523d6000602084013e61237c565b606091505b50509050806123d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806125f66023913960400191505060405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561247957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106124b35782846124b6565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff821661253d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b9250929050565b600081848411156125ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125b257818101518382015260200161259a565b50505050905090810190601f1680156125df5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe5472616e7366657248656c7065723a204554485f5452414e534645525f4641494c45445472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544a2646970667358221220ad2da451cca8b46cd0a6d67d2b1c4e499d90b4d29e54e16730c2cbb85819789e64736f6c634300060b0033"
}