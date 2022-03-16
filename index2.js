const nomeEmpresa = "Omma";

console.log(nomeEmpresa);

let receitas = [];

let risoto = {
  identificador: 823743,
  titulo: "risoto",
  nivelDificuldade: "simples",
  ingredientes: ["sal", "queijo", "arroz"],
  instruções: "misturar tudo e levar ao fogo",
  link: "www.youtube.com",
  vegan: false,
};

receitas.push(risoto);

let feijao = {
  identificador: 351839,
  titulo: "feijao",
  nivelDificuldade: "simples",
  ingredientes: ["sal", "feijao", "carne"],
  instruções: "jddsndmms",
  link: "www.youtube.com",
  vegan: false,
};

receitas.push(feijao);

console.log(receitas);

const cadastrarReceita = (
  identificador,
  titulo,
  nivelDificuldade,
  ingredientes,
  instruções,
  link,
  vegan
) => {
  const receita = {
    identificador: identificador,
    titulo: titulo,
    nivelDificuldade: nivelDificuldade,
    ingredientes: ingredientes,
    instruções: instruções,
    link: link,
    vegan: vegan,
  };

  receitas.push(receita);

  console.log("cadastro feito com sucesso");
};

cadastrarReceita(
  546720,
  "batata frita",
  "simples",
  ["batata", "oleo"],
  "fritar tudo",
  "youtube.com",
  true
);

console.log(receitas);

function exibirReceitas() {
  receitas.forEach((receita) => {
    console.log(
      `${receita.titulo}\n${receita.ingredientes.join(", ")}\n${receita.vegan}`
    );
    console.log("-------------------");
  });
}

exibirReceitas();

function deletarReceita(identificador) {
  const novaListaReceitas = receitas.filter(
    (receita) => receita.identificador != identificador
  );
  if (novaListaReceitas.length == receitas.length) {
    return console.log("Receita não encontrada");
  }
  receitas = novaListaReceitas;
  console.log("Receita deletada com sucesso");
}

deletarReceita(546720);
console.log(receitas);

function buscarReceita(termo) {
  const busca = receitas.filter((receita) => receita.titulo.includes(termo));
  if (busca.length != 0) {
    console.log(busca);
  } else {
    console.log("Receita não encontrada");
  }
}
buscarReceita("ris");

function atualizarReceita(
  identificador,
  titulo,
  nivelDificuldade,
  ingredientes,
  instruções,
  link,
  vegan
) {
  let i = 0;
  receitas.forEach((receita) => {
    if (receita.identificador == identificador) {
      receita.titulo = titulo;
      receita.nivelDificuldade = nivelDificuldade;
      receita.ingredientes = ingredientes;
      receita.instruções = instruções;
      receita.link = link;
      receita.vegan = vegan;
      i++;
    }
  });
  if (i == 0) {
    return console.log("Receita não encontrada");
  }
  console.log("Receita atualizada com sucesso");
}

atualizarReceita(
  823743,
  "lasanha",
  "dificil",
  "[macarrão, carne, queijo]",
  "kkddsdksdk",
  "youtube.com",
  false
);

console.log(receitas);
