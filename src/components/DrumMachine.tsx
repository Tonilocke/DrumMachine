import { useEffect, useState } from "react";
import DrumPad from "./DrumPad";
import audioList from "../audioList";
const DrumMachine = ()=>{
    const [description, setDescription] = useState<string>("");
    console.log(audioList);
    function handleKeyDown(e: KeyboardEvent){
        const keypresd = e.key.toUpperCase();
        const audio = document.getElementById(keypresd);
        if(audio){
            audio.play();
        }
    }
    useEffect(()=>{
       onkeydown= (e)=>{
        handleKeyDown(e);
       }
    },[])
    
    return(
        <main id="drum-machine" onKeyDown={(e)=>handleKeyDown(e)}>
            <section id="display">
                {audioList.map((el)=> <DrumPad  idText={el.name} letter={el.key} setDescription={setDescription} key={el.key} /> )}
                { description }
            </section>
        </main>
    );
}

export default DrumMachine;