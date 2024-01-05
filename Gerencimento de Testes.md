# Gerenciamento de Teste de Sofware

## Índice

<ol>
    <li><a href="#ferramenta">Ferramenta</a></li>
    <li><a href="#panilha">Planilhas</a></li>
    <li><a href="#boas-práticas">Boas Práticas</a></li>
</ol>

## Ferramenta

É uma prática recomendada utilizar ferramentas de documentação, como planilhas, para facilitar a compreensão e organização dos testes.

### Objetivo das planilhas

Planilhas para dinamizar o controle dos testes de software, visando documentar de forma precisa o desenvolvimento dos testes e, consequentemente, aprimorar a qualidade do software em desenvolvimento.

## Panilha

<ol>
    <li><a href="#gerenciando-de-testes-de-sistema-1-planilha_teste_softwarexlsx">Teste de Sistema</a></li>
    <li><a href="#gerenciando-de-testes-de-aceitação-2-planilha_teste_softwarexlsx">Teste de Aceitação</a></li>
    <li><a href="#gerenciando-de-testes-de-alfa-e-beta-3-planilha_teste_softwarexlsx">Teste Alfa e Beta</a></li>
</ol>

### Gerenciando de Testes de Sistema (1° Planilha_Teste_Software.xlsx)

<table style="text-align: center">
    <thead style="background-color: gray">
    <tr>
        <th style="border: 1px solid black">ID</th>
        <th style="border: 1px solid black">Funcionamento/Componentes</th>
        <th style="border: 1px solid black">Título</th>
        <th style="border: 1px solid black">Passo-a-passo para execução</th>
        <th style="border: 1px solid black">Resultado esperado</th>
        <th style="border: 1px solid black">Status</th>
        <th style="border: 1px solid black">Observação</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td style="border: 1px solid black">1</td>
        <td style="border: 1px solid black">Cadastro de Produto</td>
        <td style="border: 1px solid black">Cadastro de produto sem nome</td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Efetuar login.</li>
            <li>
            Na home do usuário clicar no menu "Cadastro -> Cadastro de Novo
            produto"
            </li>
            <li>
            Preencher dados validos para o novo produto, mas deixar o campo
            "Nome do Produto" em branco.
            </li>
        </ol>
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Usuário logar com sucesso e visualizar a sua home.</li>
            <li>
            Deve ser aberta uma pop-up contendo um formulário para cadastro
            de um novo produto.
            </li>
            <li>
            O sistema não deve permitir o cadastro do produto. Deve ser
            exibida uma mensagem de erro informando que este compo é
            obrigatório.
            </li>
        </ol>
        </td>
        <td style="background-color: green; border: 1px solid black">Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">2</td>
        <td style="border: 1px solid black">Cadastro de Produto</td>
        <td style="border: 1px solid black">Cadastro de produto sem preço</td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Efetuar login.</li>
            <li>
            Na home do usuário clicar no menu "Cadastro -> Cadastro de Novo
            produto"
            </li>
            <li>
            Preencher dados validos para o novo produto, mas deixar o campo
            "Preço do Produto" em branco.
            </li>
        </ol>
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Usuário logar com sucesso e visualizar a sua home.</li>
            <li>
            Deve ser aberta uma pop-up contendo um formulário para cadastro
            de um novo produto.
            </li>
            <li>
            O sistema não deve permitir o cadastro do produto. Deve ser
            exibida uma mensagem de erro informando que este compo é
            obrigatório.
            </li>
        </ol>
        </td>
        <td style="background-color: red; border: 1px solid black">Não Ok</td>
        <td style="border: 1px solid black">
        Teste falhou, consegui realizar o cadastro sem adicionar o preço.
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black">3</td>
        <td style="border: 1px solid black">Homepage</td>
        <td style="border: 1px solid black">Validação de Menu</td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Acessar home do site: http://www.site.com/menu</li>
            <li>Acessar o menu "Sobre a HF"</li>
            <li>Acessar o menu "incorporação"</li>
            <li>...</li>
        </ol>
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>
            Deve ser exibido um submenu com os seguintes itens:
            <ul>
                <li>Missão</li>
                <li>Visão</li>
                <li>Valores</li>
            </ul>
            </li>
        </ol>
        </td>
        <td style="background-color: green; border: 1px solid black">Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">4</td>
        <td style="border: 1px solid black">Cálculo de Frete</td>
        <td style="border: 1px solid black">
        Validar Frete quando temos vários produtos diferentes
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>prod: um celular com 350g</li>
            <li>prod: 2 capas p/ celular com 20g/cada</li>
        </ol>
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Verificar que o frete deu R$ 35,00</li>
        </ol>
        </td>
        <td style="background-color: green; border: 1px solid black">Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">5</td>
        <td style="border: 1px solid black">Cálculo de Preço</td>
        <td style="border: 1px solid black">
        Cálcular de Preço com mais de 5 produtos no carrinho.
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>Efetuar Login</li>
            <li>Adicionar ao carrinho 5 produtos com preços diferentes</li>
            <li>Clicar no ícone do carrinho de compras.</li>
            <li>Inserir o CEP e clicar no botão "Calcular Frete".</li>
        </ol>
        </td>
        <td style="text-align: start; border: 1px solid black">
        <ol>
            <li>
            Verificar que, no canto superior direito da tela, ao lado do
            ícone do carrinho de compras, o contador de itens estará sendo
            atualizado até chegar em 5.
            </li>
            <li>
            O usúario visualizará uma tela que exibirá os 5 itens
            adicionados ao carrinho e seus devidos preços.
            </li>
            <li>
            O valor do frete deverá aparecer no compo "Valor do Frete" e
            também deverá ser considerado no valor total da compra.
            </li>
            <li>
            Verificar que o preço total calculado pelo sistema está correto.
            </li>
        </ol>
        </td>
        <td style="background-color: yellow; border: 1px solid black">
        Testar
        </td>
        <td style="border: 1px solid black">Em andamento!</td>
    </tr>
    </tbody>
</table>

### Gerenciando de Testes de Aceitação (2° Planilha_Teste_Software.xlsx)

<table style="text-align: center">
    <thead style="background-color: gray">
    <tr>
        <th style="border: 1px solid black">ID</th>
        <th style="border: 1px solid black">Requisito</th>
        <th style="border: 1px solid black">Operação a Ser Realizada</th>
        <th style="border: 1px solid black">Resultado esperado</th>
        <th style="border: 1px solid black">Comentário do Cliente</th>
        <th style="border: 1px solid black">Status</th>
        <th style="border: 1px solid black">Testador (Cliente)</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td style="border: 1px solid black">1</td>
        <td style="border: 1px solid black">Cadastro de Produto</td>
        <td style="border: 1px solid black">
        Como gestor do website, quero poder cadastrar novos produtos (sem
        publicá-los ainda).
        <br />
        Cada produto deverá tter um titulo, descrição, categoria, preço e
        forma de pagamento associados.
        </td>
        <td style="border: 1px solid black">
        O produto deve ser cadastrado no sistema e estar disponível para
        consulta por mim (gestor), porém, não publicado.
        </td>
        <td style="border: 1px solid black">
        Funcionou e achei a interface legal, mas achei o sistema meio lendo
        </td>
        <td style="background-color: green; border: 1px solid black">Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">2</td>
        <td style="border: 1px solid black">Cadastro de Produto</td>
        <td style="border: 1px solid black">
        Como gestor do website, após cadastrar um produto o qual ficará
        inicialmente como não publicado quero poder publicá-lo.
        </td>
        <td style="border: 1px solid black">
        O produto deve ser publicado imendiatamente.
        </td>
        <td style="border: 1px solid black">Legal, funciou!</td>
        <td style="background-color: green; border: 1px solid black">Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">3</td>
        <td style="border: 1px solid black">
        Definição de imagem da empresa
        </td>
        <td style="border: 1px solid black">
        Como dono do website, quero poder alterar a imagem principal do
        mesmo sempre que desejar, considerando o que nos representará melhor
        em cada momento.
        <br />
        A nova imagem deverá ser publicado imediatamente.
        </td>
        <td style="border: 1px solid black">
        Após entrar no sistema Admin e modificar a imagem principal da
        homepage, a antiga imagem deverá ser substituida de imediato.
        </td>
        <td style="border: 1px solid black">Sem comentário</td>
        <td style="background-color: red; border: 1px solid black">Não Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">4</td>
        <td style="border: 1px solid black">Cadastro de cliente</td>
        <td style="border: 1px solid black">...</td>
        <td style="border: 1px solid black">...</td>
        <td style="border: 1px solid black">...</td>
        <td style="background-color: yellow; border: 1px solid black">
        Testando
        </td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">5</td>
        <td style="border: 1px solid black">Atualização de preços</td>
        <td style="border: 1px solid black">...</td>
        <td style="border: 1px solid black">...</td>
        <td style="border: 1px solid black">...</td>
        <td style="background-color: red; border: 1px solid black">Não Ok</td>
        <td style="border: 1px solid black">.</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">6</td>
        <td style="border: 1px solid black">
        Atualização de formas de pagamento
        </td>
        <td style="border: 1px solid black">...</td>
        <td style="border: 1px solid black">...</td>
        <td style="border: 1px solid black">...</td>
        <td style="background-color: yellow; border: 1px solid black">
        Testando
        </td>
        <td style="border: 1px solid black">.</td>
    </tr>
    </tbody>
</table>

### Gerenciando de Testes de Alfa e Beta (3° Planilha_Teste_Software.xlsx)

<table style="text-align: center">
    <thead style="background-color: gray">
    <tr>
        <th style="border: 1px solid black">ID</th>
        <th style="border: 1px solid black">Título do item</th>
        <th style="border: 1px solid black">Status</th>
        <th style="border: 1px solid black">Descrição</th>
        <th style="border: 1px solid black">Quem Reportou</th>
        <th style="border: 1px solid black">Observação</th>
        <th style="border: 1px solid black">Resolvido?</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td style="border: 1px solid black">1</td>
        <td style="border: 1px solid black">Substituir imagem da homepage</td>
        <td style="background-color: green; border: 1px solid black">
        Melhoria
        </td>
        <td style="border: 1px solid black">
        Substituir a imagem da homepage por uma imagem em alta resolução.
        </td>
        <td style="border: 1px solid black">Adriana</td>
        <td style="border: 1px solid black">.</td>
        <td style="background-color: green; border: 1px solid black">Sim</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">2</td>
        <td style="border: 1px solid black">
        Cadastro de produto importado não funciona
        </td>
        <td style="background-color: red; border: 1px solid black">Falha</td>
        <td style="border: 1px solid black">
        Quando tento cadastra um produto marcando a opção "produto
        importado", o sistema vai para a tela de erro.
        </td>
        <td style="border: 1px solid black">Marcela</td>
        <td style="border: 1px solid black">
        [Gustavo] Tratar com prioridade!
        </td>
        <td style="background-color: red; border: 1px solid black">Não</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">3</td>
        <td style="border: 1px solid black">
        Permitir cadastro de números telefônicos internacionais
        </td>
        <td style="background-color: green; border: 1px solid black">
        Melhoria
        </td>
        <td style="border: 1px solid black">
        Permitir que os usuários cadastrem números telefônicos de fora do
        país, exibindo a lista de todos os países existentes e solicitando
        ao usuário que selecione o seu antes de informar o número de
        telefone.
        </td>
        <td style="border: 1px solid black">Marcela</td>
        <td style="border: 1px solid black">.</td>
        <td style="background-color: red; border: 1px solid black">Não</td>
    </tr>
    <tr>
        <td style="border: 1px solid black">4</td>
        <td style="border: 1px solid black">
        Melhorar velocidade do sistema.
        </td>
        <td style="background-color: yellow; border: 1px solid black">N/A</td>
        <td style="border: 1px solid black">
        Na hora de cadastrar novos usuários, produtos e outros itens, o
        sistema está demorando pelo menos 5 segundos e me deixando
        impaciente quando tenho muitos produtos para cadastrar.
        </td>
        <td style="border: 1px solid black">Adriana</td>
        <td style="border: 1px solid black">
        [Gustavo] O problema não era com o sistema e sim com a velocidade da
        conexão de internet utilizada pelo usuário.
        </td>
        <td style="background-color: green; border: 1px solid black">Sim</td>
    </tr>
    </tbody>
</table>

## Boas Práticas

### Boas práticas (Não Técnicas)

<ul>
    <li>A pessoa que especifica os cenários de teste de sistema não deve estar participando da codificação do sistema.
        <ul>
            <li>De preferência, que seja um testador especialista e não um programador.</li>
            <li>A especificação é a base para os cenário de teste.
                <ul>
                    <li>"O que não está especificado, não será validado."</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Faça uma base seleção de cenários, considerando:
        <ul>
            <li>O tempo disponível para execução dos testes.</li>
            <li>A maturidade do(s) testador(es).</li>
            <li>A relevância das funcionalidades a serem testadas.</li>
            <li>Lembra-se: os cenário são infinitos. Nunca haverá tempo para testar todos.</li>
        </ul>
    </li>
    <li>Cuidado para não ignorar cenários aparentemente inocentes.</li>
    <li>Registre todas as falhas encontradas e acontradas até que seja corrigidas.</li>
</ul>

### Boas práticas (técnicas)

<ul>
    <li>Não execute cenários roboticamente. Explore quando necessário.</li>
    <li>Achou uma falha? Detalhe ao máximo!
        <ul>
            <li>Erro: "Após não preencher um dos campos obrigatórios no formulário de cadastro de usuário, a caixa de mensagem apresentada está em um formato diferente das demais caixas de mensagens de erro de sistema"</li>
            <li>Navegador: Chrome v10.2</li>
            <li>Dispositivo: Android 11</li>
            <li>(--print do erro--)</li>
        </ul>
    </li>
    <li>Afalha foi corrigida? Reteste! (teste de regressão)</li>
    <li>Busque padrões ao reportar um falha.
        <ul>
            <li>Ex: verifica se o erro ocorrido com um produto está associado apenas a tal produto ou se envolve todos os produtos de mesma categoria, cor, faixa de preço, etc.</li>
        </ul>
    </li>
</ul>
