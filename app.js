nota1 = 10
nota2 = 6

media = (nota1 + nota2) /2

conceito = ""

if (media <= 4) {
    conceito = "ruim"
}
else if (media <= 6) {
    conceito = "regular"
}
else if (media <= 7.9) {
    conceito = "bom"
}
else if (media >=8) {
    conceito = "otimo"
}

if (media >= 7) {
    console.log ("Passou com média", media)
    console.log ("Seu conceito é", conceito)
}

else {
    console.log ("Reprovado com média", media)
    console.log ("Seu conceito é", conceito)
}

switch (conceito) {
    case "ruim":
        console.log("Estude mais");
    break;

    case "regular":
        console.log("Legal, mas precisa estudar mais");
    break;

    case "regular":
        console.log("Foi por pouco, não desista");
    break;

    case "otimo":
        console.log("Parabéns!");
    break;
}