# Cypress Cucumber Allure Lighthouse

## Descrição
Este projeto é uma integração dos frameworks de automação de testes Cypress, Cucumber, Allure Reports e Lighthouse para permitir a escrita de testes em um formato BDD (Behavior Driven Development). 

Este projeto facilita a criação, execução e geração de relatórios de testes automatizados.

## Instalação

Para instalar todas as dependências necessárias, execute:
```bash
npm i
```

Scripts Disponíveis

    test: Exibe uma mensagem de erro padrão (pode ser personalizado para rodar testes unitários ou outros tipos de testes).
    smoketest: Executa testes de sanidade no Cypress usando o navegador Chrome em modo gráfico.
    smoketest:allure: Executa testes de sanidade no Cypress com o Allure para relatórios, usando o navegador Chrome em modo gráfico.
    cy:run: Executa todos os testes no Cypress com gravação de vídeo e relatórios Allure habilitados.
    allure:report: Gera um relatório Allure a partir dos resultados dos testes.
    allure:history: Move o histórico de relatórios Allure.
    allure:open: Abre o relatório Allure gerado.
    make:everything: Executa todos os testes, gera relatórios Allure, move o histórico e abre o relatório Allure.

Como Executar os Testes
Executar Testes de Sanidade

Para executar os testes de sanidade, use:

```bash
npm run smoketest
```
Executar Testes de Sanidade com Relatórios Allure

Para executar os testes de sanidade com geração de relatórios Allure, use:

```bash
npm run smoketest:allure
```
Executar Todos os Testes

Para executar todos os testes com gravação de vídeo e relatórios Allure, use:

```bash
npm run cy:run
```

Gerar e Abrir Relatórios Allure

Para gerar um relatório Allure e abrir o relatório gerado, use:

```bash
npm run make:everything
```