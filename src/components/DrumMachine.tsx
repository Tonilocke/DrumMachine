import { useState } from "react";
import DrumPad from "./DrumPad";
const DrumMachine = ()=>{
    const [description, setDescription] = useState("");
    return(
        <main id="drum-machine">
            <section id="display">
                <DrumPad  idText= "Clap"      letter={"Q"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Closed_HH" letter={"W"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-1"  letter={"E"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-2"  letter={"A"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-3"  letter={"S"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Heater-4"  letter={"D"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Kick_n_Hat"letter={"Z"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Kick"      letter={"X"} setDescription = { setDescription }></DrumPad>
                <DrumPad  idText= "Open_HH"   letter={"C"} setDescription = { setDescription }></DrumPad>
                { description }
            </section>
        </main>
    );
}

export default DrumMachine;