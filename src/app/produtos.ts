export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number; 
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse comum", preco: 439.00, descricaoPreco: "À vista ou cartão", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 15 },
    { id: 2, descricao: "Monitor AOC Hero 27'", preco: 1200.50, descricaoPreco: "À vista ou cartão", imagem: "./assets/monitor-gamer.png", quantidadeEstoque: 10 },
    { id: 3, descricao: "Teclado Redragon", preco: 749.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/teclado-gamer.png", quantidadeEstoque: 10 },
    { id: 4, descricao: "Headset Gamer", preco: 599.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/headset.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "AirPods Apple", preco: 699.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 10 },
    { id: 6, descricao:"Fone de ouvido", preco: 399.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Placa de vídeo Asus Cerberus", preco: 18449.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/placav-gamer.png", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista ou cartão", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Notebook casual", preco: 2500, descricaoPreco: "À vista ou cartão", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Notebook Gamer I5", preco: 4500, descricaoPreco: "À vista ou cartão", imagem: "./assets/notebook-gamer.png", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista ou cartão", imagem: "./assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse HyperX", preco: 200, descricaoPreco: "À vista ou cartão", imagem: "./assets/mouse-gamer.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mouse Mecânico", preco: 150, descricaoPreco: "À vista ou cartão", imagem: "./assets/mouseMecanico.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado comum", preco: 159.99, descricaoPreco: "À vista ou cartão", imagem: "./assets/tecladoComum.jpg", quantidadeEstoque: 10 },
]