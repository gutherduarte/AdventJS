function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let asteriscos = 1
    let alturamaxima = 0
    let guionbajo = 0
    let guiontronco = 0
    let arbol = ""
    let tronco = ""

        for (let index = 0; index < height; index++) {
            alturamaxima = (height * 2) -1
            guionbajo = (alturamaxima - asteriscos) / 2    
            arbol += "_".repeat(guionbajo) + "*".repeat(asteriscos) + "_".repeat(guionbajo) + "\n"
            asteriscos = asteriscos+2;
        }

        guiontronco = ((height * 2) -1)/2
        tronco = "_".repeat(guiontronco) + "#" + "_".repeat(guiontronco)
        arbol += tronco + "\n" + tronco

        return arbol
    }

  console.log(createXmasTree(10))