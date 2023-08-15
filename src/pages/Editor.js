import React, { useState } from "react";
import Client from "../Components/Client";
import CodeEditor from "../Components/CodeEditor";

const Editor = () => {
  const [clients, setClients] = useState([
    { clientId: 1, username: "Slayerr12" },
    { clientId: 2, username: "harsh" },
  ]);

  return (
    <div className="relative">
      <nav class="bg-white sticky	 w-full border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            StreamScript
          </span>
        </div>
      </nav>

      <div class=" relative flex flex-row">
        <div class="basis-1/4 h-screen bg-green-950 text-sky-400/100 text-center">
          Users Inside Your Room
          <div class=" relative flex flex-row">
            <div>
              {clients.map((client) => (
                <Client
                  className="mt-5"
                  key={client.clientId}
                  username={client.username}
                />
              ))}
              <div></div>
            </div>
          </div>
          <button
            type="button"
            class=" absolute bottom-32 left-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Leave Room
          </button>
          <button
            type="button"
            class=" absolute bottom-20 left-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Copy Room ID
          </button>
        </div>

        <div class=" w-full  bg-orange-800 text-blue-400/100 text-center">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default Editor;
