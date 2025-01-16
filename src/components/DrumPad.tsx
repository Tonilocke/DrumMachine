import { useState, useRef } from "react";
type Props = {
    idText:string,
    letter:string,
    path: string,
    setDescription: Function,
}

function DrumPad({ idText, letter, path, setDescription }: Props){
    const [playing, setPlaying] = useState<boolean>(false);
    const ref = useRef<HTMLAudioElement | null>(null);
    function playSound(){
        const isPlaying = true; 
        setPlaying(isPlaying);
        setDescription(idText);
        if(isPlaying){
            ref.current!.play();
        }else{
            ref.current!.pause();
        }
        console.log(playing)
    }
    
    return(
        <section id={ idText } className="drum-pad"  >
            <button onClick={()=>playSound()}>{ letter }</button>
            <audio src={ path } className="clip" id={ letter } onEnded={()=>setPlaying(false)} onPlay={()=>setPlaying(true)} ref ={ ref } ></audio>
        </section>
        
    );
}

export default DrumPad;