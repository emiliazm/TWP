// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TakyonWP is ERC721A, Ownable {
    uint256 MAX_SUPPLY = 1;
    string private _customBaseURI;

    constructor() ERC721A("TakyonWP", "TWP") {}

    function mint(address to) public onlyOwner {
        uint256 tokenId = totalSupply();
        require(tokenId < MAX_SUPPLY, "Max amount of mint reached");
        tokenId += 1;
        _safeMint(to, tokenId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _customBaseURI;
    }

    function setCustomBaseURI(string memory customBaseURI_) external onlyOwner {
        _customBaseURI = customBaseURI_;
    }
}
