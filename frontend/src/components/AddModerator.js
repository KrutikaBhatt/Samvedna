import axios from "axios";
import React, { useState } from "react";

const AddModerator = ({userName}) => {

    const [address, setAddress] = useState('')

    const addModerator = async () => {
        const res = await axios.post("http://localhost:8080/user/addModerator", {
            username: userName,
            wallet_address: address
        })
        console.log(res.data);
        if(res.data.success){
            alert(address + " added as moderator")
            setAddress('')
        } else {
            alert(res.data.message)
        }
    }
	return (
		<div className="ml-64">
			<div className="background-top-login">
				<div>
					<input
						className="!w-80 !m-0 rounded-lg "
						type="text"
						placeholder="Enter wallet address"
						name="title"
						id="title"
                        value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</div>
				<button className="button-login !text-2xl border-2 p-2 rounded-lg" onClick={addModerator}>
					Add as Moderator
				</button>
			</div>
		</div>
	);
};

export default AddModerator;
