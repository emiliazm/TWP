// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TakyonDocuments is ERC721A, Ownable {
    string private _customBaseURI;

    constructor() ERC721A("TakyonDocuments", "TDCS") {}

    function mint(address to_) public onlyOwner {
        _safeMint(to_, 1);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _customBaseURI;
    }

    function setCustomBaseURI(string memory customBaseURI_) external onlyOwner {
        _customBaseURI = customBaseURI_;
    }
}
