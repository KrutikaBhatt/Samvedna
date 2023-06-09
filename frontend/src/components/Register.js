import React from "react";
import "../css/login.css";
import { useState } from "react";
import axios from "axios";
import MarketplaceAbi from "../artifacts/contracts/samvedna.sol/samvedna.json";
import MarketplaceAddress from "../contractAddress.json";
import { ethers } from "ethers";
export const Register = ({
  setWalletAddress,
  setUserName,
  setUserId,
  setContract,
}) => {
  const [userNameInput, setUserNameInput] = useState();

  const register = async () => {
    if (userNameInput.length >= 3) {
      if (window.ethereum) {
        var accounts;
        try {
          accounts = await Promise.race([
            window.ethereum.request({
              method: "eth_requestAccounts",
            }), // the original promise
            new Promise(
              (_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), 5000) // timeout after 5 seconds
            ),
          ]);
          console.log("rec");
        } catch (e) {
          console.log(e);
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        await loadContract(signer);
        console.log(accounts[0], typeof accounts[0]);
        setWalletAddress(accounts[0]);

        window.ethereum.on("chainChanged", (chainId) => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", async function (accounts) {
          setWalletAddress(accounts[0]);
          // await initWeb3();
        });
        window.ethereum.on("disconnect", async function (accounts) {
          setWalletAddress(null);
        });

        const data = await axios.post("http://localhost:8080/user/signup", {
          wallet_address: accounts[0],
          username: userNameInput,
        });

        console.log(data);

        if (data.data.success) {
          setUserName(data.data.savedUser.username);
          setUserId(data.data.savedUser._id);
        }
      }
    }
  };

  const loadContract = async (signer) => {
    console.log(MarketplaceAbi);
    console.log(MarketplaceAddress);
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    console.log("this is the contract");
    console.log(marketplace);
    setContract(marketplace);
  };

  return (
    <div className="ml-64">
      <div className="background-top-login">
        <div>
          <input
            className="input-login"
            type="text"
            placeholder="Enter a unique username"
            name="title"
            id="title"
            onChange={(e) => setUserNameInput(e.target.value)}
            required
          />
        </div>
        <button className="button-login !text-3xl" onClick={register}>
          {" "}
          SIGN UP
        </button>
      </div>
    </div>
  );
};
