//Variações for in, Ex: um carro, tem marca, modelo e cor, o for in vai procurar essas caracteristicas, e como pesquisar um usuario especifico de uma empresa

let usuario = {
    nome: 'Cassiano',
    idade: 32,
    email: 'cassiano@transformatec.com'
}

console.log(usuario["email"])
console.log(usuario["nome"])
console.log(usuario.idade)

for (propriedade in usuario) {
    console.log("Propriedade do usuário: " + usuario[propriedade])
}