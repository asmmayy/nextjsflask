import React, { useState } from 'react';

import axios from 'axios';


function ChatBotIcon() {
  // Set the initial state to false the chatbox
  const [chatVisible, setChatVisible] = useState(true);
  const [userMessage, setUserMessage] = useState('');

  const [chatHistory, setChatHistory] = useState([]);


  const toggleChat = (e) => {
    e.preventDefault();
    setChatVisible(!chatVisible);
  };
  const handleUserMessageChange = (event) => {
    const { value } = event.target;
    setUserMessage(value);
  }
  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Make a request to OpenAI using fetch
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo', // Specify GPT-3 model identifier
            messages: [{ role: 'user', content: userMessage }],
            max_tokens: 150,
          }),
        }
      );



      const data = await response.json();

      // Add the user's message to the chat history
      setChatHistory((prevHistory) => [...prevHistory, { role: 'user', content: userMessage }]);

      // Add the AI's response to the chat history
      const aiResponse = data.choices[0].message.content;
      console.log("object", aiResponse);
      setChatHistory((prevHistory) => [...prevHistory, { role: 'ai', content: aiResponse }]);

      console.log("chatHistory", chatHistory);


    } catch (error) {
      console.error('Error sending message to OpenAI:', error);
    }

    // Clear the user input
    setUserMessage('');
  };


  return (
    <div>
      <div
        className='fixed right-3 bottom-5 rounded-full py-4 px-4 text-white bg-black'
        style={{ cursor: 'pointer', width: '65px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={toggleChat}
      >
        {
          chatVisible ? <i className="fa fa-times"
            style={{ fontSize: "15px" }}
            aria-hidden="true" ></i> : <i className="fa fa-comments-o" aria-hidden="true" style={{ fontSize: "30px" }}></i>
        }
      </div>

      {
        chatVisible && (
          <div

            className="chatbot-container fixed 
            bottom-[calc(4rem+1.5rem)] right-0 
            overflow-auto
            mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">


            {/* <!-- Heading --> */}
            <div className="flex flex-col space-y-1.5 pb-6"

            >
              <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
              <p className="text-sm text-[#6b7280] leading-3">Powered by FastSchool</p>
            </div>




            {/* <!-- Chat Container --> */}
            {/* style="min-width: 100%; display: table;" */}
            <div className="pr-4 h-[455px] 
            overflow-auto"

            >
              {/* <!-- Chat Message AI --> */}
              <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
                className="relative

                flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" strokeWidth="1.5"
                  viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                  </path>
                </svg></div>
              </span>
                <p className={`leading-relaxed text-gray-700`}>
                  <span className="block font-bold text-gray-700">AI</span>
                  Hello! How can I assist you today?
                </p>
              </div>

              {chatHistory.map((message, index) => (
                <div key={index} className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 `}>
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                    <div className={`rounded-full bg-gray-100 border p-1 `}>
                      <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                      </svg>
                    </div>
                  </span>
                  <p className={`leading-relaxed text-gray-700 ${message.role == 'ai' ? '' : ''}`}>
                    <span className="block font-bold text-gray-700">{message.role == 'ai' ? 'AI' : 'You'}</span>
                    {message.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center pt-0">

              <form className="flex items-center justify-center w-full space-x-2" onSubmit={handleSendMessage}>
                <input
                  onChange={handleUserMessageChange}
                  value={userMessage}

                  type="name"
                  placeholder="Nome"
                  className="flex h-10 w-full rounded-md 
                      border border-[#e5e7eb] px-3 
                      py-2 text-sm 
                      focus:outline-none focus:ring-2
                      text-[#030712] focus-visible:ring-offset-2"
                />
                <button
                  className="inline-flex items-center justify-center
                  rounded-md text-sm 
                  font-medium text-[#f9fafb]
                  bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                  disabled={!userMessage.trim()} // Disable if userMessage is empty or only contains whitespace
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
    </div>
  );
}

export default ChatBotIcon;
