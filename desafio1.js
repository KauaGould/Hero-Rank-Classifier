const nomeHeroi = "Arthur"
const xp = 7500

const niveis = [
  { limite: 1000, nome: "Ferro" },
  { limite: 2000, nome: "Bronze" },
  { limite: 5000, nome: "Prata" },
  { limite: 7000, nome: "Ouro" },
  { limite: 8000, nome: "Platina" },
  { limite: 9000, nome: "Ascendente" },
  { limite: 10000, nome: "Imortal" },
]

function calcularNivel(xpValor) {
  if (typeof xpValor !== "number" || Number.isNaN(xpValor)) {
    throw new TypeError("XP deve ser um número válido")
  }

  if (xpValor < 0) {
    throw new RangeError("XP não pode ser negativo")
  }

  const nivelEncontrado = niveis.find((item) => xpValor <= item.limite)
  return nivelEncontrado?.nome ?? "Radiante"
}

const nivel = calcularNivel(xp)

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
