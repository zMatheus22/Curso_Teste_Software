# Automação de teste de software

# O que é teste automáticos?

Após uma pessoa testar manualmente uma funcionalidade, ela pode criar um script que rode aquele teste de forma automática.

<ul>
    <li>São executados sem necessidade da interferência humana.</li>
    <li>Você cria os seus testes e aperta em um botão e eles são executados.</li>
</ul>

# Tecnologias

<ul>
  <li><a href="#visual-studio-code">Visual Studio Code</a></li>
  <li><a href="#nodejs">NodeJS</a></li>
  <li><a href="#jest">Jest</a></li>
</ul>

## Visual Studio Code

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.

Para instalar por <a href="https://code.visualstudio.com/download" target="_blank">aqui</a>.

## NodeJS

Node.js é uma plataforma JavaScript assíncrona para criar aplicações de rede escaláveis.

Para instalar por <a href="https://nodejs.org/en/download" target="_blank">aqui</a>.

### Iniciar um projeto com NodeJS

```bash
npm init -y
```

## Jest

Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

#### Instalar o Jest no projeto.

```bash
npm install --save-dev jest
```

#### Adicione a seguinte seção ao seu `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

<hr/>

# Projeto

Sistema Bancário desenvolvido em Java, mas transformado em JavaScript.

Click <a href="./Sistema_Bancario">aqui</a> para ver o código JavaScript.

<ul>
  <li><a href="#estrutura-dos-arquivos">Arquivos do projeto</a></li>
  <li><a href="#executar-o-sistema-bancário">Executar o projeto</a></li>
  <li><a href="#criação-de-teste-com-jest">Cria teste</a></li>
  <li><a href="#executar-o-teste">Executar os testes</a></li>
</ul>

## Estrutura dos arquivos.

Segue como está estruturado o desenvolvimento para a criação do projeto.

```bash
📦 root
 ┣ 📂 node_modeules
 ┣ 📂 src
 ┃ ┣ 📂 negocio
 ┃ ┃ ┣ 📜 {TODAS_AS_CLASSES}.js
 ┃ ┃ ┣ 📜 main.js
 ┃ ┣ 📂 tests
 ┃ ┃ ┣ 📂 negocio_tests
 ┃ ┃ ┃ ┣ 📜 {TODOS_TESTES_DE_CADA_CLASSES}.test.js
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
```

## Sistema Bancário.

### Entrando no diretório do projeto.

```bash
cd ./Sistema_Bancario
```

### Instalar as dependências do projeto.

```bash
npm install
```

### Executar o Sistema Bancário.

```bash
npm run dev
```

## Criação de teste com jest.

### Passo 1°

Cria o arquivo com `.test.js`

```bash
📦 root
 ┣ 📂 src
 ┃ ┣ 📂 negocio
 ┃ ┃ ┣  {Classes}.js
 ┃ ┣ 📂 tests
 ┃ ┃ ┣ 📂 negocio_tests
 ┃ ┃ ┃ ┣ 📜 {NOME_CLASSE}.test.js
```

### Passo 2°

Estrutura do teste utilizando o `jest`.

```javascript
// Importa a classe ou função que será testada.
const NomeClasse = require("CAMINHO DO ARQUIVO");

// Criando de fato o teste.
test("NOME DO TESTE", () => {
  const recebe = new NomeClasse(); // Crie uma instância da classe.
  const espera = "Aqui é o que você espera"; // Deve ser hardcoded, escrito manualmente, sem valores dinâmicos, sem a posibilidade de causar falsos positivos.

  // expect("O'QUE VOCÊ VAI RECEBER!").toBe("O'QUE VOCÊ ESPERA RECEBER!")
  expect(recebe).toBe(espera);
});
```

## Executar o teste.

Depois de configurar o arquivo `package.json`, basta executar o script abaixo.

### Roda a bateria de teste apenas uma vez.

```bash
npm run test
```

### Execute os testes no modo de observação, executando indefinidamente até ser interrompido.

```bash
npm run test:watch
```

<hr />

# Estrutura de um bom teste

Separa o teste de maneira clara, acompanhado por comentários que servem como uma pequena documentação.

```javascript
test("{Nome do teste}", () => {
  /* ===================== Montagem do cenário ===================== */

  // Inicializa as variáveis, instância as classes, estabelece a conexão
  // com o banco de dados, entre outras tarefas.
  {
    codigo;
  }

  /* ========================== Execução =========================== */

  // Realiza uma operações, focando nas funcionalidades (classe ou função)
  // específicas que serão testadas.
  {
    codigo; // resposta
  }

  /* ========================= Verificação ========================= */

  // O teste real, abordando o que é obtido e as expectativas.
  expect(resposta).toBe(esperado);
});
```

## Documentação de Teste

A documentação é realizada por meio de comentários, tanto no topo do teste quanto no código, mantendo a clareza do código e adotando boas práticas de nomenclatura (clean code).

```javascript
/* Teste:
 * {Descrição clara e objetiva do que está sendo realizado e das
 * expectativas, eliminando dúvidas}
 *
 * @author Matheus Strada
 * @date 08/02/2024
 */

test("{Nome do teste}", () => {
  /* ===================== Montagem do cenário ===================== */

  {
    codigo;
  }

  /* ========================== Execução =========================== */

  {
    codigo;
  }

  /* ========================= Verificação ========================= */

  expect(resposta).toBe(esperado);
});
```

## Criação de variáveis

A criação de variáveis em testes automatizados contribui para a robustez, legibilidade e manutenção eficiente dos testes, promovendo boas práticas de desenvolvimento de software.

<a href="./Sistema_Bancario/src/tests/negocio_tests/GerenciamentoCliente.v5.test.js">Um exemplo para a criação de variáveis</a>

# Otimização para testes

A otimização de testes busca aprimorar a eficiência, a confiabilidade e a manutenibilidade dos testes automatizados. Esse processo é especialmente benéfico para testes semelhantes que compartilham o mesmo "Montagem do cenário", otimizando a manutenção e proporcionando um setup consolidado. A ideia é preparar uma base sólida que sirva de fundação para os testes subsequentes. Essa abordagem eficiente não apenas reduz a redundância na criação de cenários iniciais, mas também estabelece um ambiente consistente e reutilizável, contribuindo para a eficácia global do processo de teste.

```javascript
// Configuração antes de todos os testes
beforeAll(() => {
  // Alguma inicialização específica para todos os testes
});

// Configuração antes de cada teste
beforeEach(() => {
  // Alguma inicialização específica para cada teste
});

// Testes vão aqui
test("Exemplo de teste", () => {
  // O código do teste
});

// Configuração após cada teste
afterEach(() => {
  // Alguma limpeza após cada teste
});

// Configuração após todos os testes
afterAll(() => {
  // Alguma limpeza após todos os testes
});
```

## Boa prática

Uma boa prática ao utilizar o `Before` é adotar também o `After`, estabelecendo uma abordagem simétrica para garantir a limpeza ou reversão adequada das configurações realizadas.

```javascript
beforeEach(() => {
  // a) Abriu conexão com o banco de dados?
  // b) Adicionou algo no sistema?
  // c) Deletou um usuário do sistema?
});

afterEach(() => {
  // a) Fecha a conexão com o banco!
  // b) Remove o que foi adiconado!
  // c) Adiciona o que foi deletado!
});
```
