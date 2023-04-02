// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract samvedna is ERC721URIStorage {
    uint256 tokenId = 1;
    address payable public owner;

    mapping(uint256 => NFT) public nfts;
    mapping(address => uint256[]) public ownerMappings;

    constructor() ERC721("Samvedna", "SMVD") {
        owner = payable(msg.sender);
    }

    struct NFT {
        uint256 tokenId;
        address payable owner;
        bool isSoulbound;
    }

    function createNFT(
        string memory _tokenURI,
        string memory name,
        string memory description,
        string memory _rarity
    ) public payable returns (uint256) {
        nfts[tokenId] = NFT(tokenId, payable(msg.sender), true);
        _safeMint(msg.sender, tokenId);
        ownerMappings[owner].push(tokenId);
        _setTokenURI(
            tokenId,
            formatTokenURI(_tokenURI, description, name, tokenId, _rarity)
        );

        owner.transfer(msg.value);
        tokenId++;
        // emit CreateNFT(tokenId - 1, _tokenURI, msg.sender, _transfers,_issuer,_serialNo,_issueTime,_duration,description,name,_rarity);
        return tokenId - 1;
    }

    function getNftByAddress() public view returns (uint256[] memory) {
        return ownerMappings[owner];
    }

    function getNftByToken(uint256 tokenId) public view returns (NFT memory) {
        return nfts[tokenId];
    }

    function getNFTCount() public view returns (uint256) {
        return tokenId - 1;
    }

    // function _beforeTokenTransfer(
    //     address from,
    //     address to,
    //     uint256 tokenId
    // ) internal virtual {
    //     if (nfts[tokenId].isSoulbound) {
    //         require(
    //             from == address(0) || to == address(0),
    //             "It cannot be transfered"
    //         );
    //     }
    // }

    function formatTokenURI(
        string memory _tokenURI,
        string memory description,
        string memory name,
        uint256 _serialNo,
        string memory _rarity
    ) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "data:application/json,",
                    bytes(
                        abi.encodePacked(
                            '{"name":"',
                            name,
                            '", "description":"',
                            description,
                            '", "attributes":[{"trait_type": "serial_no","value":"',
                            Strings.toString(_serialNo),
                            '"},{"trait_type": "Rarity","value":"',
                            _rarity,
                            '"}], "image":"',
                            _tokenURI,
                            '"}'
                        )
                    )
                )
            );
    }
}
