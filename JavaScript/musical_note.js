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


function encrypt(note){
    var parts = note.split(" ")
    var pitch = parts[0]
    var duration = parts[1]
    var octave = parts[2]

    return "0" + encryptPitch(pitch) + encryptDuration(duration) + encryptOctave(octave)
}

function encryptPitch(pitch){
    if (pitch === "A") { return "0000" }
    else if (pitch === "A#") { return "0001" }
    else if (pitch === "B") { return "0010" }
    else if (pitch === "C") { return "0011" }
    else if (pitch === "C#") { return "0100" }
    else if (pitch === "D") { return "0101" }
    else if (pitch === "D#") { return "0110" }
    else if (pitch === "E") { return "0111" }
    else if (pitch === "F") { return "1000" }
    else if (pitch === "F#") { return "1001" }
    else if (pitch === "G") { return "1010" }
    else if (pitch === "G#") { return "1011"}
    else { return "please upgrade to premium version" }

}

function encryptDuration(duration){
    if (duration === "1/1"){ return "00"}
    else if (duration === "1/2"){ return "01" }
    else if (duration === "1/4"){ return "10"}
    else if (duration === "1/8"){ return "11"}
    else{ return "please upgrade to premium version" }
}
function encryptOctave(octave){
    if (octave === "1") { return "00" }
    else if (octave === "2"){ return "01" }
    else if (octave === "3"){ return "10" }
    else if (octave === "4"){ return "11" }
    else { return "please upgrade to premium version" }
}


console.log(encrypt("G# 1/8 1"));
console.log(decrypt("010111001"));

console.log(encrypt("A 1/2 3"));0
console.log(decrypt("000000110"));