import { useEffect, useState } from "react";
//import DrumPad from "./DrumPad";
const DrumMachine = ()=>{
    const [description, setDescription] = useState<string>("");
    const [keyp, setKeyp] = useState<string>("");
    function handleKeyDown(e:any){
        const keydown = e.key.toUpperCase();
        setKeyp(keydown);
        switch(keydown){
            case "Q":
                console.log(keydown);
                break;
            case "W":
                console.log(keydown);
                break;
            case "E":
                console.log(keydown);
                break;
            case "A":
                console.log(keydown);
                break;
            case "S":
                console.log(keydown);
                break;
            case "D":
                console.log(keydown);
                break;
            case "Z":
                console.log(keydown);
                break;
            case "X":
                console.log(keydown);
                break;
            case "C":
                console.log(keydown);
                break;                
        }
    }
    useEffect(()=>{
        
    },[keyp]);
    return(
        <main id="drum-machine" onKeyDown={(e)=>handleKeyDown(e)}>
           {/* <section id="display">
                <DrumPad  idText= "Clap"      letter={ "Q" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Closed_HH" letter={ "W" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-1"  letter={ "E" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-2"  letter={ "A" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-3"  letter={ "S" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-4"  letter={ "D" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Kick_n_Hat"letter={ "Z" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Kick"      letter={ "X" }  setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Open_HH"   letter={ "C" }  setDescription = { setDescription }></DrumPad>
                { description }
            </section>*/}
            { keyp }
        </main>
    );
}

export default DrumMachine;