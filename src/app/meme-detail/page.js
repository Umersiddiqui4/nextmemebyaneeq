"use client";
import { useSearchParams } from "next/navigation";
import { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import Draggable from "react-draggable";
// import Image from "next/image"

function MemeDetail() {
  const searchParams = useSearchParams();
  const memeURL = searchParams.get("url");
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");

  const memeRef = createRef();

  const exportMemeAsJPEG = () => {
    exportComponentAsJPEG(memeRef, {
      filename: "memeGenerate",
    });
  };

  return (
    <div>
      <div>
        <div
          className="flex justify-center items-center flex-col"
          ref={memeRef}
        >
          <img className="h-80   border-solid border-black " src={memeURL} />
          <br />
          <Draggable>
            <div>{displayText1}</div>
          </Draggable>
          <Draggable>
            <div>{displayText2}</div>
          </Draggable>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-1">
        <input
          type="text"
          placeholder="Text1"
          onChange={(e) => setDisplayText1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Text2"
          onChange={(e) => setDisplayText2(e.target.value)}
        />
        <button
          className="bg-red-500 p-2 rounded-sm text-yellow-300 font-extrabold"
          onClick={exportMemeAsJPEG}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default MemeDetail;
