import React, { useState, useEffect } from "react";
import "./Message.css";

const Message = () => {
	

	const [data, setData] = useState();

    useEffect(() => {

		async function fetchMyAPI() {
        fetch('http://127.0.0.1:5000/data')
			.then(response => response.json())
        	.then(data => {
				setData(data)
			}
				//console.log(data)
			);
		}

		fetchMyAPI()
    }, [data]);
  
	return (
		<div className="message-container">

			{/* Calling a data from setBlock for showing */}
			{data && <div className="message">
                {data.text}
            </div>}
		</div>
    );
}

export default Message;