function decrypt(byte) {
    var pitch = byte[1] + byte[2] + byte[3] + byte[4];
    var duration = byte[4] + byte[5];
    var octave = byte[6] + byte[7];

    return getPitch(pitch) + " " + getDuration(duration) + " " + getOctave(octave);
}
    function getPitch(code) {
        if (code === "0000") { return "A"}
        else if (code === "0001") { return "A#" }
        else if (code === "0010") { return "B" }
        else if (code === "0011") { return "C" }
        else if (code === "0100") { return "C#" }
        else if (code === "0101") { return "D" }
        else if (code === "0110") { return "D#" }
        else if (code === "0111") { return "E" }
        else if (code === "1000") { return "F" }
        else if (code === "1001") { return "F#" }
        else if (code === "1010") { return "G" }
        else if (code === "1011") { return "G#"}
        else { return "please upgrade to premium version" }
    }
    function getDuration(code){
        if (code === "00"){ return "1/1"}
        else if (code === "01"){ return "1/2" }
        else if (code === "10"){ return "1/4"}
        else if (code === "11"){ return "1/8"}
        else{ return "please upgrade to premium version" }
    }

    function getOctave(code){
        if (code === "00") { return "1" }
        else if (code === "01"){ return "2" }
        else if (code === "10"){ return "3" }
        else if (code === "11"){ return "4" }
        else { return "please upgrade to premium version" }
    }
console.log(decrypt("00000000"));

function encrypt(note){
    var parts = note.split(" ")
}