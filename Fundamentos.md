# Fundamentos de Teste de Software

## Índice

<ol>
  <li><a href="#quando-testar">Quando Testar?</a></li>
  <li><a href="#como-testar">Como Testar?</a></li>
  <li><a href="#o-que-testar">O que testar?</a></li>
</ol>

# Quando Testar?

<strong>À medida que o desenvolvimento do sistema fica cada vez mais avançado</strong>

## Nivel de Teste

<ol>
  <li><a href="#teste-de-unidade">Teste de Unidade</a></li>
  <li><a href="#teste-de-integração">Teste de Integração</a></li>
  <li><a href="#teste-de-sistema">Teste de Sistema</a></li>
  <li><a href="#teste-de-aceitação">Teste de Aceitação</a></li>
  <li><a href="#teste-de-alfa">Teste de Alfa</a></li>
  <li><a href="#teste-de-beta">Teste de Beta</a></li>
  <li><a href="#teste-de-regressão">Teste de Regressão</a></li>
</ol>

## Teste de Unidade

<strong>Objetivo: </strong> encontrar falhas de funcionamento dentro de uma pequena parte do sistema funcionando idependentemente do todo.

<ul>
  <li>Feito pelo programador</li>
  <li>O alvo são subrotinas, métodos, classes, as menores unidade do sistema</li>
  <li>Geralmente é automatizado, através de ferramentas como:</li>
  <ul>
    <li>Junit</li>
    <li>PHPUnit</li>
    <li>XXXUnit</li>
    <li>etc.</li>
  </ul>
  <li>Precisa entar sempre atualizado, coerente com as regras de negócio atuais do sistema</li>
</ul>

<strong>Teste de Unidade é feito em um baixo nível, são feito em `class` e `function`</strong>

### Exemplo de Teste de unidade em Python

```Python
import unittest

class TestStringMethods(unittest.TestCase):

  def test_upper(self):
    self.assertEqual('foo'.upper(), 'FOO')

  def test_isupper(self):
    self.assertTrue('FOO'.isupper())
    self.assertFalse('Foo'.isupper())

  def test_split(self):
    s = 'hello world'
    self.assertEqual(s.split(), ['hello', 'world'])
    # check that s.split fails when the separator is not a string
    with self.assertRaises(TypeError):
      s.split(2)

if __name__ == '__main__':
  unittest.main()
```

```powershell
test_isupper (__main__.TestStringMethods.test_isupper) ... ok
test_split (__main__.TestStringMethods.test_split) ... ok
test_upper (__main__.TestStringMethods.test_upper) ... ok

----------------------------------------------------------------------
Ran 3 tests in 0.001s

OK
```

## Teste de Integração

<strong>Objetivo: </strong> validar a comunicação entre os componentes de um sistema.

<ul>
  <li>Feito pelo programador</li>
  <li>O alvo são funcinalidade que envolvem a integração de componentes</li>
  <li>Exemplo</li>
  <ul>
    <li>Um componente A invoca um método de um componente B e espera um valor inteiro, porém vem um valor decimal, causando uma falha no componente A.</li>
  </ul>
  <li>Geralmente é automatizado, atráves de feramentas como:</li>
  <ul>
    <li>Junit</li>
    <li>PHPUnit</li>
    <li>XXXUnit</li>
    <li>etc.</li>
  </ul>
  <li>Podem ser feitos antes de o sistema estar concluído, à medida que os componentes vão ficando prontos</li>
</ul>

<strong>Teste de Integração foca na arquitetura, são feitos os `component` e `method`</strong>

## Teste de Sistema

<strong>Objetivo: </strong> executar o sistema sob o ponto de vista de sue usuário final, varrendo as funcionalidades em busca de falhas em relação aos objetivos orinais.

<ul>
  <li>Planejados e executados pela equipe de teste.</li>
  <li>Cenários de teste coerentes com os requisistos especificados para o sistema.</li>
  <ul> 
    <strong>Cenário de testes</strong>
    <li>Deve ter um botão para upload de imagem</li>
    <li>Deve ser possível criar um álbum</li>
  </ul>
  <li>São realizados após a codificação do sistema estar concluída</li>
</ul>

<strong>Teste de Sistema foca na usabilidade</strong>

## Teste de Aceitação

<strong>Objetivo: </strong> executar o sistema sob o ponto de vista de sue usuário final, varrendo as funcionalidades em busca de falhas em relação aos objetivos orinais. <strong>É feito pelo usuário.</strong>

<ul>
  <li>Planejados e executados por grupo restrito de usuário finais do sistema, os quais simularão operações de rotina, de modo a verificar se seu comportamento está de acordo com o solicitado.</li>
  <li>Visa permitir ao cliente determinar se aceita ou não o sistema.</li>
  <li>Pode incluir testes funcionais, de recuperação de falhas, de segurança e de desempenho.</li>
</ul>

<strong>Teste de Aceitação foca na Inteface</strong>

## Teste de Alfa

<strong>Objetivo: </strong> executar o sistema de forma não planejada, sob o ponto de vista de seu usuário final, porém apenas por um grupo <strong>pequeno</strong> de pessoas.

<ul>
  <li>O grupo restrito de usuário que testarão geralmente é composto por membros da própria organização também do cliente.</li>
  <li>Visa identificação de possíveis erros não detectados até o momento, encontrados enquanto mais usuários finais utilizam o sistema de forma natural, não planejada.</li>
  <li><strong>Não há elaboração de cenários de teste.</strong></li>
  <li>Representantes do time de programadores irão acompanhar de perto estes testes para coletar possíveis falhas a serem corrigidas e melhorias serem implementadas.</li>
</ul>

<strong>Teste de Alfa foca na Inteface</strong>

## Teste de Beta

<strong>Objetivo: </strong> executar o sistema de forma não planejada, sob o ponto de vista de seu usuário final, porém apenas por um grupo <strong>grande</strong> de pessoas.

<ul>
  <li>O grupo de usuário que testarão geralmente são usuários reais e desconhecidos sendo de uma determinada localidade, idioma ou que satisfazem determinados critérios definidos pelo fornecedor do sistema</li>
  <ul>
    <li>Versão Beta do sistema ser lançada apenas em países cujo o idioma é inglês</li>
  </ul>
  <li>Um grande número de pessoas <strong>porém</strong> Um subconjundo do público alvo</li>
  <ul>
    <li>Exemplo um sistema para hospital, posso enviar para um grupo de estudantes de medicina, enfermagem e etc</li>
  </ul>
  <li>Visa a indentificação de possíveis erros não detectados até o momento, encontrados enquanto mais usuários finais utilizam o sistema de forma natural, não planejada</li>
  <li>Representates do time de programadores <strong>não</strong> irão fazer acompanhamento e coleta de erros. No teste Beta, os usuários é que reportam os erros encontrados.</li>
</ul>

<strong>Teste de Beta foca na Inteface</strong>

## Teste de Regressão

<strong>Objetivo: </strong> reexecutar testes após alterações serem ralizadas no sistema, para conferir se tudo continua funcionando corretamente (detectar efeitos colaterais). <strong>Verificar se tudo continua funcionando corretamente</strong>

<ul>
  <li>Após mudanças de regras durante o desenvolvimento.</li>
  <ul>
    <li>Exemplo: facebook agora permite a postagem de vídeos 3D na timeline.</li>
  </ul>
  <li>Após a correção de uma falha encontrada.</li>
  <li>Após a implementação de melhorias para lançamento de novas versões.</li>
  <li>Consiste em se aplicar, a cada nova versão do software ou a cada ciclo, todo os testes que já foram aplicados nas versões ou ciclos de teste anteriores do sistema.</li>
  <li>É nessa hora que testes automáticos fazem a maior diferença.</li>
</ul>

<strong>Teste de Regressão pode ser realizado em qualquer nível do sistema, `class`, `component` e interface.</strong>

# Como Testar?

## Técnicas de Teste

<ol>
  <li><a href="#caixa-branca">Caixa Branca</a></li>
  <li><a href="#caixa-preta">Caixa Preta</a></li>
  <li><a href="#testes-manuais-x-testes-automáticos">Testes Manuais x Testes Automáticos</a></li>
  <li><a href="#teste-estático-x-testes-dinâmicos">Teste Estático x Testes Dinâmicos</a></li>
  <ul>
    <li><a href="#teste-estático">Teste Estático</a></li>
    <li><a href="#teste-dinâmico">Teste Dinâmico</a></li>
  </ul>
</ol>

## Caixa Branca

<strong>Na hora de testar você visualiza o código do sistema.</strong>

<ul>
  <li>Teste de Cobertura</li>
  <li>Teste de Caminhos</li>
  <li>Teste de Comandos</li>
  <li>Teste de Condições</li>
</ul>

## Caixa Preta

<strong>Teste baseado em entradas e em saídas. Não olha para o interior do sistema.</strong>

<ul>
  <li>Teste base em Cenários</li>
  <li>Teste base em Casos de Uso</li>
  <li>Análises de Valores Limites</li>
</ul>

## Testes Manuais x Testes Automáticos

<table>
    <thead>
        <tr>
            <th>Teste Manual</th>
            <th>Teste Automático</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Velocidade de execução baixa</td>
            <td>Execução muito rápida</td>
        </tr>
        <tr>
            <td>Repetitivo e Cansativo</td>
            <td>Não cansam e não sentem preguiça</td>
        </tr>
        <tr>    
            <td>Não exige tecnologias</td>
            <td>Exige domínio de tecnologias específicas</td>
        </tr>
        <tr>
            <td>Alto custo a cada execução</td>
            <td>Alto custo apenas na criação</td>
        </tr>
        <tr>
            <td>Possuem limitações quando o teste envolve situações de grande paralelismo</td>
            <td>Permite testar situações impossíveis de testar manualmente</td>
        </tr>
        <tr>
            <td>Podem explorar alem do cenário de teste, quando necessário</td>
            <td>Faz apenas o programado para fazer</td>
        </tr>
        <tr>
            <td>Podem avaliar questões visuais como cores e formas</td>
            <td>Não avaliam questões visuais</td>
        </tr>
        <tr>
            <td>Podem avaliar questões de usabilidade</td>
            <td>Não avaliam questões de usabilidade</td>
        </tr>
    </tbody>
</table>

## Teste Estático x Testes Dinâmicos

### Teste Estático

<strong>Objetivo:</strong> analisar o código sem executá-lo e verificar se as boas práticas adotadas foram obedecidas.

<ul>
    <li>É um teste tipo <strong>Caixa Branca</strong></li>
    <li>Existem Feramentas que fazem este teste automaticamente</li>
    <ul>
        <li>Findbugs</li>
    </ul>
    <li>O que você quer encontar neste tipo de análise?</li>
    <ul>
        <li>Código está documentado?</li>
        <li>Variáveis e constates possuem boa nomenclatura?</li>
        <li>Código está organizado e com boa legibilidade?</li>
        <li>Exixtem possíveis `NullPointers` não tratados pelo programador?</li>
        <li>O programador obedeceu à arquitetura do sistema ao codificar?</li>
        <li>As conexões com o banco de dados estão sendo fechadas corretamente?</li>
    </ul>
</ul>

<strong>Teste Estático Não executa! Você observa o código!</strong>

### Teste Dinâmico

<strong>Objetivo:</strong> validar o sistema através de sua execução.

<ul>
  <li>É o método tradicional: insere uma entrada, executa o sistema e confere a saída.</li>
  <li>As análise estática e dinâmicas se <strong>complementam</strong>.</li>
</ul>

<strong>Executa em vários momentos diferentes. De acordo com o nível de teste.</strong>

# O que testar?

## Tipos de Teste

<ol>
  <li><a href="#teste-de-funcionalidade">Teste de Funcionalidade</a></li>
  <li><a href="#teste-de-desempenho">Teste de Desempenho</a></li>
  <li><a href="#teste-de-usabilidade">Teste de Usabilidade</a></li>
  <li><a href="#teste-de-segurança">Teste de Segurança</a></li>  
  <li><a href="#teste-de-portabilidade">Teste de Portabilidade</a></li>
  <li><a href="#teste-de-stress">Teste de Stress</a></li>
</ol>

## Teste de Funcionalidade

<strong>Objetivo:</strong> validar que as funcionalidades do sistema estão funcionando corretamente.

<ul>
  <li>Envolve</li>
  <ul>
    <li>Unidade</li>
    <li>Integração</li>
    <li>Sistema</li>
    <li>Aceitação</li>
    <li>Alfa</li>
    <li>Beta</li>
    <li>Regressão</li>
  </ul>
</ul>

<strong>Básico e Intuitivo</strong>

## Teste de Desempenho

<strong>Objetivo:</strong> validar o desempenho do sistema no que diz respeito ao seu tempo de resposta para determinadas operações

<ul>
  <li>Exemplo</li>
  <ul>
    <li>Tempo de reesposta de um sistema bancário para processar uma transação</li>
    <li>Tempo de reesposta de um redesocial para postar um video ou imagem</li>
  </ul>
  <li>Ferramenta para teste de carga/desempenho</li>
  <ul>
    <li>JMeter</li>
  </ul>
</ul>

## Teste de Usabilidade

<strong>Objetivo:</strong> validam aspectos que envolvem a experiência de um usuário ao utilizar o sistema.

<ul>
  <li>Exemplo</li>
  <ul>
    <li>Estética de um website</li>
    <li>Definição e disposição de cores da interface do aplicativo</li>
  </ul>
  <li>Tipo de interface a ser utilizada</li>
</ul>

## Teste de Segurança

<strong>Objetivo:</strong> validam a proteção do sistema contra invasões ou acesso não autorizado a informações

<ul>
  <li>Exemplo</li>
  <ul>
    <li>Sites com acesso restrito.</li>
    <li>Tráfego de informações criptografadas.</li>
  </ul>
  <li>De modo que cada pessoa só tenha acesso áquela infomação.</li>
</ul>

## Teste de Portabilidade

<strong>Objetivo:</strong> valida o funcionamento do sistema em diferentes plataformas e dispositivos nas quais o sistema está proposto a funcionar.

<ul>
  <li>Exemplo</li>
  <ul>
    <li>IOS, Android</li>
    <li>Windows, Linux</li>
    <li>Smartphones, Tablets, Notebooks, etc.</li>
  </ul>
  <li>Testar onde os seus usuário iram utilizar.</li>
</ul>

## Teste de Stress

<strong>Objetivo:</strong> validam o comportamento do sistema em condições extremas

<ul>
  <li>
    <strong>O Stress no sistema pode abranger cargas de trabalho extremas, memória insuficiente, hardware e serviços indisponíveis ou recursos compartilhados limitados</strong>
  </li>
  <ul>
    <li>Simular o acesso de muitos usuários ao mesmo tempo.</li>
    <li>Se suporta uma grande carga de trabalho.</li>
  </ul>
  <li>Executados o quanto antes para se ter o tempo necessário para corrigir ou melhorar o desempenho do sistema conforme necessário.</li>
  <li>Exemplo</li>
  <ul>
    <li>Sobrecarga de acesso a um website.</li>
    <li>Sobrecarga de processamento em um sistema de gestão de clientes.</li>
  </ul>
</ul>
