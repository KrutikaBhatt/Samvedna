import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateSpace } from "./components/CreateSpace";
import { Space } from "./components/Space";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MyLogs } from "./components/MyLogs";
import { Progress } from "./components/Progress";
import { useEffect, useState } from "react";
import axios from "axios";
import { Mood } from "./components/Mood";

function App() {

	const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
	const [walletAddress, setWalletAddress] = useState();
	const [contract, setContract] = useState(null);
	const [signer, setSigner] = useState(null);
	
	useEffect(() => {
    console.log("userid",userId);
	}, [userId]);

  useEffect(() => {
    console.log("wallet", walletAddress);
    if(!walletAddress){
      setUserId(null)
    }
  }, [walletAddress])

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home userId={userId} userName={userName} />} />
					<Route exact path="/create-space" element={<CreateSpace />} />
					<Route exact path="/space" element={<Space />} />
          			<Route exact path="/mood" element={<Mood />} />
					<Route exact path="/sign-up" element={<Register setUserId={setUserId} setWalletAddress={setWalletAddress} setUserName={setUserName} />} />
					<Route exact path="/my-logs" element={<MyLogs setUserId={setUserId} setWalletAddress={setWalletAddress} setUserName={setUserName} />} />
					<Route exact path="/progress" element={<Progress setUserId={setUserId} setUserName={setUserName} />} />
				</Routes>
			</BrowserRouter>
			<Navbar userId={userId} setUserId={setUserId} setWalletAddress={setWalletAddress} setUserName={setUserName} />
		</div>
	);
}

export default App;
