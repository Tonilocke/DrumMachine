import { useEffect, useState } from "react";
import DrumPad from "./DrumPad";
import audioList from "../audioList";
const DrumMachine = ()=>{
    const [description, setDescription] = useState<string>("");
    function handleKeyDown(e: any){
        const keypresd = e.key.toUpperCase();
        const audio:any = document.getElementById(keypresd);
        const d = audioList.filter((el)=>el.key == keypresd);
        if(audio){
            audio.play();
            setDescription(d[0].name);
        }
    }
    //without useEffect the keyboard input won't start until after at least a click on one any button
    useEffect(()=>{
       onkeydown= (e)=>{
        handleKeyDown(e);
       }
    },[])
    
    return(
        <main id="drum-machine" onKeyDown={(e)=>handleKeyDown(e)}>
            <section id="display" >
                {audioList.map((el)=> <DrumPad  idText={el.name} letter={el.key} path = {el.path} setDescription={setDescription} key={el.key} /> )}
                <p> { description } </p>
            </section>
        </main>
    );
}

export default DrumMachine;