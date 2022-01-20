const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

function contarOvejas(ovejas) {
    // aquí tu magia
    const ovejasfilter = ovejas.filter(oveja => oveja.color === 'rojo' && oveja.name.toUpperCase().includes('N') && oveja.name.toUpperCase().includes('A'))
    return ovejasfilter
}

console.log(contarOvejas(ovejas))