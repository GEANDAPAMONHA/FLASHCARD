function criaCartao(categoria, pergunda, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('aticle')
    cartao.className = 'cartao'


    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3 class="programacao">Geografia</h3>
    <div class="cartao__conteudo__pergunta">
       <p> Qual o país que possue o maior IDH do mundo?</p>
    </div>
    <div class="cartao__conteudo__resposta">
       <p> Suíça</p>
    </div>
</div>
  
    `
    container.appendChild(cartao)
    
} 