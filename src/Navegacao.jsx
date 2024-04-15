export function Navegacao(props){
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="pagina-0"  defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
        <label htmlFor="pagina-0" className="botao-navegacao">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)} />
        <label htmlFor="pagina-1" className="botao-navegacao">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
        <label htmlFor="pagina-2" className="botao-navegacao">Bebidas</label>
    </div>
}