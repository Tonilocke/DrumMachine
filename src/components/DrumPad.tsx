import { useState } from "react";
type Props = {
    idText:string,
    letter:string,
    setDescription: Function
}

function DrumPad({ idText, letter,  setDescription}: Props){
    const [playing, setPlaying] = useState<boolean>(false);
    function playSound(){
        setPlaying(true);
        setDescription(idText );
    }
    return(
        <section id={ idText } className="drum-pad">
            <button onClick={()=>playSound()}>{ letter}</button>
            <audio src={`src/assets/${idText}.mp3`} className="clip" id={ letter } onEnded={()=>setPlaying(false)} ></audio>
        </section>
        
    );
}

export default DrumPad;