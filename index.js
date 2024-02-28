const MenuPrincipal = document.querySelector(".carrinho")
const main = document.querySelector("main")
const compras = {
    Frutas: [],
    Laticinios: [],
    Congelados: [],
    Doces: [],
    Outros: []
}
const caixaDosSetores = document.querySelector(".setores")
const setores = document.querySelectorAll(".setor")

const criarSetor = (setor) => {

    //Essa parte cria as áreas exclusivas do Compras

    if (setor != "Adicionar Ao Carrinho") {
        const SetorDaCompra = document.createElement("div")
        SetorDaCompra.classList.add("animação")
        SetorDaCompra.classList.add("alinhamentoDoSetor")


        const h2 = document.createElement("h2")
        h2.innerHTML = setor

        const Sair = document.createElement("div")
        Sair.classList.add("sair")
        Sair.innerHTML = "🔚"

        Sair.addEventListener("click", () => {
            SetorDaCompra.style.transform = "translateX(-100%)"

            setTimeout(() => {
                SetorDaCompra.remove()
            }, 1000);
        })


        SetorDaCompra.appendChild(Sair)

        SetorDaCompra.appendChild(h2)
        caixaDosSetores.appendChild(SetorDaCompra)

        compras[setor].forEach(compra => {

            // essa parte cria cada item nos setores

            const Compra = document.createElement("div")
            Compra.classList.add("iten")
            const CompraImagem = document.createElement("div")
            CompraImagem.classList.add("itenImagen")
            const CompraNome = document.createElement("p")
            CompraNome.innerHTML = compra
            const CompraQuantidade = document.createElement("p")
            CompraQuantidade.innerHTML = "1"


            Compra.appendChild(CompraImagem)
            Compra.appendChild(CompraNome)
            Compra.appendChild(CompraQuantidade)
            SetorDaCompra.appendChild(Compra)
        })

    } else {
        // se for selecionado a parte de adicionar ao carrinho cai aqui

        const areaAdicionarCarrinho = () => {

            //essa parte cria o input e o select para enviar as informaçõe à compras 

            const areaAdicionar = document.createElement("div")
            areaAdicionar.classList.add("areaAdicionar")


            const input = document.createElement("input");
            input.type = "text";
            input.id = "categoria";
            input.placeholder = "Digite o produto"
            input.maxLength = "15"


            const select = document.createElement("select");
            select.id = "opcoes";
            const categorias = ["Frutas", "Laticinios", "Congelados", "Doces", "Outros"];
            categorias.forEach((categoria) => {
                const option = document.createElement("option");
                option.value = categoria;
                option.text = categoria;
                select.appendChild(option);
            });



            const button = document.createElement("button");
            button.textContent = "Adicionar ao Carrinho";
            button.addEventListener("click", () => {

                //verifica se o input está preenchido e envia para compras no devedo local escolido pelo select

                if (input.value) {

                    compras[select.value].push(input.value)
                    areaAdicionar.style.animation = "sairEsquerda  ease 1s"

                    setTimeout(() => {
                        areaAdicionar.style.position = "absolute"
                    }, 300);

                    setTimeout(() => {

                        areaAdicionar.remove()
                    }, 800);
                }
            })




            areaAdicionar.appendChild(input);
            areaAdicionar.appendChild(select);
            areaAdicionar.appendChild(button);
            Carrinho.appendChild(areaAdicionar)
        }


        const IrAsCompras = document.createElement("div")
        IrAsCompras.classList.add("compra")

        const ComprasTitulo = document.createElement("h2")
        ComprasTitulo.innerHTML = "Adicione ao carrinho as compras desejadas"

        const Carrinho = document.createElement("div")
        Carrinho.classList.add("CaixaDaCompra")

        const botãoDeAddCompras = document.createElement("div")
        botãoDeAddCompras.innerHTML = "➕"
        botãoDeAddCompras.classList.add("BotãoMais")
        botãoDeAddCompras.addEventListener("click", ()=>{
            areaAdicionarCarrinho()
        })

        Carrinho.appendChild(botãoDeAddCompras)
        IrAsCompras.appendChild(ComprasTitulo)
        IrAsCompras.appendChild(Carrinho)


        areaAdicionarCarrinho()


        MenuPrincipal.appendChild(IrAsCompras)

        const Titulo = document.querySelector(".titulo")

        const Sair = document.createElement("div")
        Sair.classList.add("sair")
        Sair.innerHTML = "🔚"

        Sair.addEventListener("click", ()=>{

            //função para sair da tela do adicionar ao carrinho 

            IrAsCompras.style.transform = 'translateX(100%)'
            setTimeout(() => {
                Titulo.style.transform = ''
                caixaDosSetores.style.transform = ''
                
            }, 10);
            setTimeout(() => {
                IrAsCompras.remove()
            }, 1000);
        })

        IrAsCompras.appendChild(Sair)

        Titulo.style.transform = 'translateX(-102%)'
        caixaDosSetores.style.transform = 'translateX(-102%)'
        setTimeout(() => {
            IrAsCompras.style.transform = 'translateX(0%)'

        }, 10);
    }

}






setores.forEach((setor) => {
    setor.addEventListener("click", () => {
        criarSetor(setor.innerHTML)
    })
})
