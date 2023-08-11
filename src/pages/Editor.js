import React, { useState } from "react";

const Editor = () => {
  const [client, setClient] = useState([
    { clientId: 1, username: "Slayerr12" },
    { client: 2, username: "harsh" },
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

      <div class="  flex flex-row">
        <div class="basis-1/4 h-screen bg-green-950 text-sky-400/100 text-center">
          Users Inside Your Room

          <div class="grid grid-cols-4 gap-4">
            <div>01</div>

            <div>09</div>
          </div>


        </div>


        <div class=" w-full  bg-orange-800 text-blue-400/100 text-center">
          Editor
        </div>
      </div>
    </div>
  );
};

export default Editor;
