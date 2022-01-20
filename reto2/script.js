const carta = 'bici  coche balón  _playstation bici    coche peluche   '

function listGifts(letter) {
 // ¡Tú puedes!
 const listaderegalos = {}
 const newLetter = letter.split(' ').filter(n => n).join(' ')
 newLetter.split(" ").filter(tachados => !tachados.includes("_")).map(regalo => 
    regalo in listaderegalos ? (listaderegalos[regalo] = listaderegalos[regalo]+ 1) : listaderegalos[regalo] = 1)
 return listaderegalos
}
const regalos = listGifts(carta)
console.log(regalos)