function decrypt(byte){
    var pitch = "";
    for(i = 0; i < 8; i++){
        if(i<4){
            pitch = byte[i];
        } else if (i === 0){

    }
    var finalNote = ""
        if (pitch === "0000"){
            return "A"
        } else if(pitch === "0001"){
            return "A#"
        } else if(pitch === "0010"){
            return "B"
        } else if(pitch === "0011"){
            return "C"
        } else if(pitch === "0100"){
            return "C#"
        } else if(pitch === "0101"){
            return "D"
        } else if(pitch === "0110"){
            return "D#"
        } else if(pitch === "0111"){
            return "E"
        } else if(pitch === "1000"){
            return "F"
        } else if(pitch === "1001"){
            return "F#"
        } else if(pitch === "1010"){
            return "G"
        } else if(pitch === "1011"){
            return "G#"
        } else {
            return "please upgrade to prenium version"
        }
}
decrypt("00000000")