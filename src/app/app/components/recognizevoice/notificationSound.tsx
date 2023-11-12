import React from 'react';
import useSound from 'use-sound';
// import compliteSound from "../../../public/itemget4.mp3"

const SoundComponent = () => {
  const [play, { stop }] = useSound("../../../public/itemget4.mp3");

  return (
    <div>
      <button onClick={play}>Play Sound</button>
      <button onClick={stop}>Stop Sound</button>
    </div>
  );
};

export default SoundComponent;
