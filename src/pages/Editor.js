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
      <nav class="bg-white sticky top-0 z-50	 w-full border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              StreamScript
            </span>
          </a>
        </div>
      </nav>

      <div className="mainWrap">
        <div className="aside">
          <div className="asideInner">
            <h3>Users In This Room</h3>
            <div className="clientsList mt-5">
              {clients.map((client) => (
                <Client key={client.socketId} username={client.username} />
              ))}
            </div>
          </div>
          <button>Copy Room ID</button>
          <button>Leave Room</button>
        </div>
        <div className="editorWrap">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default Editor;
