import React, { useState } from "react";
import './TextBox.css';


const Text = () => {

    const [inputText, setInputText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://127.0.0.1:5000/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ input: inputText }),
            });
        } 

        catch (error) {
            console.error('Error:', error);
        }

        setInputText('');

    }

    const handleKeyDown = (event) => {
        // Check if Enter key is pressed
        if (event.key === 'Enter' && !event.shiftKey) {
          handleSubmit(event);
        }
    }

    return (

        <form onSubmit={handleSubmit} className="textbox-container">
            
            <textarea

            className="form-control" 
            placeholder ="Talk to Doodle!" 
            rows='3'
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required
            onKeyDown={handleKeyDown} />

        </form>
    )
}

export default Text;