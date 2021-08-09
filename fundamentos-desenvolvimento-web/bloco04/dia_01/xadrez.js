let peca = "Peão";
peca = peca.toLowerCase();


switch (peca) {
  case "rei":
    console.log("Rei : Mover para qualquer direção, uma casa por vez");
    break;

  case "dama":
    console.log("Dama: Mover para qualquer direção, quantas casas quiser(se estiverem livres)");
    break;

  case "torre":
    console.log("Torre: Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;

  case "bispo":
    console.log("Bispo: Move-se na diagonal, quantas casas quiser.");
    break;

  case "cavalo":
    console.log("Cavalo: Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
    break;

  case "peão":
    console.log("Peão: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;

  default:
    console.log("Peça não encontrada");


}