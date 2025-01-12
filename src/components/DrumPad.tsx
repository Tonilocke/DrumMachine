import { useState, useRef, KeyboardEvent  } from "react";
type Props = {
    idText:string,
    letter:string,
    setDescription: Function
}

function DrumPad({ idText, letter, setDescription }: Props){
    const [playing, setPlaying] = useState<boolean>(false);
    const ref = useRef(null);
    function playSound(){
        const isPlaying = true; 
        setPlaying(isPlaying);
        setDescription(idText );
        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    
    return(
        <section id={ idText } className="drum-pad"  >
            <button onClick={()=>playSound()}>{ letter }</button>
            <audio src={`src/assets/${idText}.mp3`} className="clip" id={ letter } onEnded={()=>setPlaying(false)} onPlay={()=>setPlaying(true)} ref ={ ref } ></audio>
        </section>
        
    );
}

export default DrumPad;