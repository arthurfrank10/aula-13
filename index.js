// this is a js file
//  arthur
const professor = {
nome: "vitor",
idade: 27,
email: 'vitor@gmail.com'
}

professor.nome = 'mika'
professor['email'] = 'profmika@gmail.com'

const suzume = {
    nomeFilme: "suzume",
    direçao: "makoto shinkai",
    lançamento: 2022,
    elenco: ["Nanoka Hara", "Hokuto Matsumura"],
    jaViu: Boolean(true)
}

console.log(suzume.nomeFilme);
console.log(suzume.direçao);
console.log(suzume.lançamento);
console.log(suzume['elenco']);
console.log(suzume['jaViu']);

const pessoa = {
   nomePessoa: "arthur",
   idadePessoa: 16,
   generoMusical: "trap, geek e funk"
}

console.log(" o nome da pessoa é " + pessoa.nomePessoa + ", ela tem " + pessoa.idadePessoa + " e gosta muito de " + pessoa.generoMusical);

const donoDoPet = {
    nome: "arthur",
    pet: {
        nomePet: "shallow",
        raça: "vira-lata",
        idadePet: 2
    }
}
console.log(donoDoPet.pet.nomePet);

const curso = {
    nome: "Noturno Fronted",
    linguagens: ["js", "css", "html"]
}
console.log(curso.linguagens[0]);

const professores = [
{nome: "andrei", modulo: 1},
{nome: "vitor", modulo: 2},
{nome: "mina", modulo: 3}
]
console.log(professores[1].nome);

curso.numeroDeEstudantes = 50;

suzume.personagens = ["suzume", "souta"];
console.log("o personagem " + suzume.personagens[0] + " é interpretado por " + suzume.elenco[0] + ", ja " + suzume.personagens[1] + " ganha vida com " + suzume.elenco[1]);

suzume.elenco[0] = "xuxa";
console.log(suzume);
console.log(suzume.elenco[0]);

const usuario = {
    nome: 'prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'sao paulo'
}

const novoUsuario = {
    ...usuario,
    nome: 'joao',
    idade: 28
}
console.log(usuario);
console.log(novoUsuario);

const listaDeNomes = ["mika", "paula", "vitor"];
const copiaListaDeNomes = [...listaDeNomes];
copiaListaDeNomes[0] = "arthur"
console.log(copiaListaDeNomes);

const copiaPessoa = {
    ...pessoa,
    comidasFav: ["strogonoff", "pastel", "pizza", "panquecas"],
    melhorAmigo: {
        nome: "matheus",
        idadeAmigo: 15,
    }
}
console.log("o nome da pessoa é " + pessoa.nomePessoa + " e suas comidas preferidas sao: " + copiaPessoa.comidasFav + ". seu melhor amigo se chama " + copiaPessoa.melhorAmigo.nome + " e tem " + copiaPessoa.melhorAmigo.idadeAmigo + " anos");
