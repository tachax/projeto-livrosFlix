let listaLivros = [
    "https://images-na.ssl-images-amazon.com/images/I/81UuGTd7RuL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71oUFoGDhnL.jpg",
    "https://m.media-amazon.com/images/I/51y-bUK0QML.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81AFV9waKfL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71VOtbn5GgL.jpg",
    "https://m.media-amazon.com/images/I/51HfbtgZb7L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71kBkLM2mZS.jpg",
    "https://ler-livros.com/wp-content/uploads/capas/enquanto-houver-musica-marina-porteclis-pdf-B01N02CWL5.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91LldWCllgS.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91M9xPIf10L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91yEPgRcELL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91SDZ2eUj+L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91P8op-yYsL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61hOp6UFvCL.jpg"
];

//mostra as imagens da array na tela
for (let i = 0; i < listaLivros.length; i++) {
    document.write("<img src=" + listaLivros[i] + ">");
}

function adicionarLivro() {
    let livroNovo = (document.getElementById("novoLivro")).value;

    if (listaLivros.includes(livroNovo)) {
        //verifica se o livro inserido no input já está na lista
        document.getElementById("erro").innerHTML = "Esse livro já está na lista!";
        document.getElementById("novoLivro").value = "";
    } else {
        //adiciona o livro novo na llista
        listaLivros.push(livroNovo);
        let naTela = listaLivros[listaLivros.length - 1];
        livroNovo.value = "";

        document.getElementById("indicacao").innerHTML =
            document.getElementById("indicacao").innerHTML +
            "<img src=" + naTela + ">" + " ";

        document.getElementById("novoLivro").value = ""
        document.getElementById("erro").innerHTML = "Seus livros aparecerão logo abaixo :)";
    }
}