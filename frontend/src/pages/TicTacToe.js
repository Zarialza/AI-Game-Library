import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "../app.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Tictactoe(){
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
    loaderUrl: "/tictactoe/tictactoe.loader.js",
    dataUrl: "/tictactoe/tictactoe.data",
    frameworkUrl: "/tictactoe/tictactoe.framework.js",
    codeUrl: "/tictactoe/tictactoe.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  const handleClickFullscreen = () => {
    if (isLoaded === false) {
      return;
    }
    requestFullscreen(true);
  };

  return (
    <div className="flex flex-col h-screen fixed-bg h-[850px] relative">
    <Navbar/>
    <div className="p-24">
    <div className={styles.container}>
      <div className={styles.unityWrapper}>
        {isLoaded === false && (
          <div className="content-center object-cover">
          <div className={styles.loadingBar}>
            <div
              className={styles.loadingBarFill}
              style={{ width: loadingProgression * 100 }}
            />
          </div>
          </div>
        )}
        <Unity
          style={{
            width: "80%",
            justifySelf: "center",
            alignSelf: "center"
          }}
          unityProvider ={unityProvider}
        />
      </div>
      <div className="buttons">
        <button className=" px-4 py-2 font-semibold text-sm rounded-full bg-cyan-500 text-white " onClick={handleClickFullscreen}>Fullscreen</button>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default  Tictactoe;
