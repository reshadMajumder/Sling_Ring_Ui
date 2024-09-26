// Chat.js
import React, { useState } from 'react';
import './Chat.css';

// Import the GoogleGenerativeAI class
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey ="AIzaSyDcZYwuIkQ2ymvedHIt157N4WgTZkHN5IA"; // Ensure to set your API key in environment variables
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const Chat = ({ planet }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    const handleSend = async () => {
        if (!input.trim()) return; // Prevent sending empty messages

        // Add user's message
        setMessages(prev => [...prev, { sender: 'user', text: input }]);
        setLoading(true); // Start loading when sending a message
        // Construct the context for the chat session based on the planet data
        const context = `You are a chatbot knowledgeable about exoplanets. The selected exoplanet is ${planet.kepler_name}. 
        Here are some details: 
        - Kepler ID: ${planet.kepid}
        - Koi Name: ${planet.kepoi_name}
        - Koi Disposition: ${planet.koi_disposition}
        - Koi Period: ${planet.koi_period} days
        - Radius: ${planet.koi_prad} Earth radii
        - Temperature (Teq): ${planet.koi_teq} Kelvin
        - Insolation: ${planet.koi_insol} Earth units
        - Stellar Temperature: ${planet.koi_steff} Kelvin
        - Stellar Radius: ${planet.koi_srad} Solar radii
        - Right Ascension: ${planet.ra_str}
        - Declination: ${planet.dec_str}
        Answer questions based on these details. keep the answer show and precise`;

        // Send the message to Gemini API
        try {
            const chatSession = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            }).startChat({
                generationConfig,
                history: [

                    { role: "user", parts: [{ text: context+input }] },
                ],
            });

            const result = await chatSession.sendMessage(input);
            const botResponse = result.response.text(); // Get the bot's response text

            // Add bot's response
            setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
        } catch (error) {
            console.error("Error fetching response from Gemini API:", error);
            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I couldn't fetch a response. Please try again." }]);
        } finally {
            setLoading(false); // End loading
        }

        // Clear input
        setInput('');
    };

    return (
        <div className="chat-container p-3 m-4">
            <h2>Chat with the Bot</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                {loading && <div className="loading">Bot is typing...</div>} {/* Show loading indicator */}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSend(); // Allow sending with Enter key
                    }}
                />
                <button onClick={handleSend} disabled={loading}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
