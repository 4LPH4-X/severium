# Test Automation


## Introdução
Os scripts de teste desenvolvidos estão organizados na pasta Cypress/SCRIPT_TESTES. Já o relatório detalhado pode ser encontrado na pasta Cypress/RELATORIO.

Caso encontre dificuldades para acessar o arquivo relatorio.pdf, é possível visualizá-lo através do link: [Relatorio google doc](https://docs.google.com/document/d/1K9bJRKygB_ltaOErEnewcpAh3aKhYUXeY9_f7MzZ7b8/edit?tab=t.0)



## Descrição do Projeto
Este projeto consiste em um conjunto de scripts de testes automatizados desenvolvido para garantir a qualidade de software. Ele utiliza **JMeter e Cypress** para executar testes de ponta a ponta e medir o desempenho do sistema, garantindo que as funcionalidades principais do sistema funcionem como esperado.

O objetivo é validar as principais funcionalidades do sistema e realizar testes de performance.


---

## Tecnologias Utilizadas
- **Linguagem:** Node.js, Java
- **Frameworks de Teste:** Cypress, JMeter
- **Relatórios:** Google Docs (ou outra ferramenta para documentar resultados)
- **Versionamento:** GitHub

---

## Pré-requisitos
Antes de executar o projeto, verifique se o ambiente possui:
1. **Node.js:** Versão 16 ou superior.
2. **Java:** Versão 8 ou superior (necessária para executar o JMeter).
3. **Ferramentas Instaladas:**
   - Cypress (instalado via npm ou npx).
   - JMeter (baixe em [https://jmeter.apache.org](https://jmeter.apache.org)).
4. **Navegador Compatível:** Chrome, Edge (ou outro compatível com o Cypress).

---

## Instalação e execução
Siga os passos abaixo para configurar o ambiente de testes:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/test-automation-framework.git
   cd Severium

2. Instale as dependencias do cypress
   ```bash
   npx Cypress install
   
4. Abra o Cypress
   ```bash
   npx Cypress open
 5. Selecione o navegador de sua preferência.
 6. Escolha um dos arquivos de teste para execução.

---

## Desafios do Projeto
Durante o desenvolvimento e execução dos testes, a equipe enfrentou alguns desafios importantes:

1. **Dificuldade na Escrita dos Scripts:**
   - Inicialmente, houve dificuldade na estruturação dos scripts de teste devido à complexidade de alguns cenários. No entanto, com a revisão de conceitos aprendidos em aulas anteriores, foi possível superar esse obstáculo e finalizar o desenvolvimento do código.

2. **Problema com o "Window Alert" no Cypress:**
   - No teste **CT03: Verificar Carrinho por Conta**, o alerta do tipo `window.alert` não era exibido corretamente ao ser executado pelo Cypress. Como solução temporária, tivemos que comentar essa parte do código para que os demais testes pudessem ser concluídos com sucesso. Este problema será investigado futuramente para uma solução definitiva.

---

## Sobre o Relatório
O repositório contém um relatório detalhado na pasta `RELATORIO`, elaborado pela equipe para documentar os testes realizados. 

### O que você encontrará no relatório:
- **Casos de Teste Detalhados:**  
  Descrições completas dos casos de teste, incluindo passos, resultados esperados e observados.  
- **Planilha de Análise:**  
  Uma tabela abrangente especificando mais cenários de teste, incluindo métricas como tempo médio de execução e status.  
- **Imagens Ilustrativas:**  
  Capturas de tela que mostram os resultados dos testes e evidências do funcionamento das funcionalidades testadas.  
---

## Melhorias Futuras
  Integração com ferramentas de monitoramento de logs.
  Expansão dos testes de performance.

## ALUNOS
  Bruno Camillo
  João Victor
  Cauã Leão

   

