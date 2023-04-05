import React, { useEffect, useState } from "react";
import axios from "axios";

export const Rewards = ({ contract, account, userId }) => {
  const [nfts, setNfts] = useState([]);
  const fetchNftData = async () => {
    const data_reward = {
      id: userId,
    };
    console.log(data_reward);
    const rewardData = await axios.post(
      "http://localhost:8080/user/getRewards",
      data_reward
    );
    console.log("this is the reward data");
    console.log(rewardData);
    console.log(rewardData.data.data.rewards[0].imgLink);
    try {
      for (var i = 0; i < rewardData?.data?.data?.rewards?.length; i++) {
        var string = "";
        if (rewardData.data.data.rewards[i].type == "first_post") {
          string = "Congratulations on your first post";
        } else if (rewardData.data.data.rewards[i].type == "first_comment") {
          string = "Congratulations on your first Comment";
        }
        const data = await contract.createNFT(
          rewardData.data.data.rewards[i].imgLink,
          "Trophy",
          string,
          "rare"
        );
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
    const ids = [];
    for (var j = 0; j < rewardData?.data?.data?.rewards?.length; j++) {
      ids.push(rewardData.data.data.rewards[j]._id);
    }
    console.log(ids);
    const data = {
      rewardId: ids,
      id: userId,
    };
    // const data_name = {
    //   rewardId: ["64288c81f4f7ae64b704ebe5"],
    //   id: "6428d021de817b0a5151fd80",
    // };
    // const rewardData = await axios.post(
    //   "http://localhost:8080/user/addReward",
    //   data_name
    // );

    const deletedData = await axios.post(
      "http://localhost:8080/user/deleteReward",
      data
    );
    console.log(deletedData.data);

    // console.log("The rewards were fetched");
    // console.log(rewardData.data);
    // const data = await contract.getNftByAddress(account);
    // const nfts = [];
    // for (var i = 0; i < data.lengthl; i++) {
    //   nfts.push(await contract.getNftByToken());
    // }
    // setNfts(nfts);
  };
  useEffect(() => {
    // fetchNftData();
  }, []);
  return (
    <div className="ml-64 min-h-screen bg-white dark:bg-gray-900 ">
      <button
        type="button"
        onClick={fetchNftData}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Reedem reward
      </button>
    </div>
  );
};
