// definindo classe em javascript
class Aviso {
    constructor(titulo, data, descricao, links) {
        this.titulo = titulo;
        this.data = data;
        this.descricao = descricao;
        this.links = links;
    }

    mostrarAviso() {
        return `Título do aviso: ${this.titulo}\nData de postagem: ${this.data}\nDescrição: ${this.descricao}`;
    }
}

// inicializando um objeto a partir da classe definida
const aviso1 = new Aviso("Jogos escolares 2025", new Date(), 
"Os jogos escolares de 2025 já tem data definida. Ocorrerão em abril de 2025", 
            ["ifce.edu.br", "google.com"]);

console.log(aviso1.mostrarAviso());