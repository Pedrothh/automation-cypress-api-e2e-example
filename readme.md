
---

# Cypress Cucumber Allure Lighthouse

## Descrição
Este projeto integra os frameworks **Cypress**, **Cucumber**, **Allure Reports** e **Lighthouse**, permitindo a automação de testes com abordagem BDD (Behavior Driven Development). Ele abrange testes de API e E2E (end-to-end), além de gerar relatórios detalhados de forma automatizada.

### Funcionalidades
- **Testes de API:**
    - URL: [GoRest API](https://gorest.co.in)
    - Cenários:
        - **Get All Users**: Validação de status code e contrato JSON (schema).
        - **Get Specific User**: Validação de status code e contrato JSON (schema).

- **Testes E2E:**
    - URL: [Demo NewTours](https://demo.guru99.com/test/newtours/)
    - Cenários:
        - **NewTour Start Application**: Validação de disponibilidade do site.
        - **NewTour Login Successfully**: Validação de login com usuário e senha válidos.
        - **NewTour Login With Wrong Password**: Validação de login com usuário válido e senha inválida.

- **Integração com GitHub Actions:**
    - Execução automatizada dos testes via **cronjob** ou push na branch `main`.
    - Deploy automático dos relatórios gerados pelo **Allure** no GitHub Pages:
        - [Relatórios Allure](https://pedrothh.github.io/automation-cypress-api-e2e-example/)

---

## Instalação
Para instalar todas as dependências, execute:
```bash
npm install
```  

---

## Scripts Disponíveis

- **`test`**: Exibe uma mensagem padrão (personalizável).
- **`smoketest`**: Executa testes de sanidade no Cypress em modo gráfico (Chrome).
- **`smoketest:allure`**: Executa testes de sanidade com geração de relatórios Allure.
- **`cy:run`**: Executa todos os testes com gravação de vídeo e relatórios Allure.
- **`allure:report`**: Gera relatórios Allure com base nos resultados dos testes.
- **`allure:history`**: Move o histórico de relatórios Allure.
- **`allure:open`**: Abre o relatório Allure gerado.
- **`make:everything`**: Executa todos os testes, gera relatórios, atualiza o histórico e abre o relatório Allure.

### Executar Todos os Testes
Para executar todos os testes e gerar relatórios completos:
```bash
npm run make:everything
```  

---

## Automação e Relatórios
- Execução automatizada via **GitHub Actions**.
- Agendamento com **cronjob** para execução periódica.
- Deploy automático dos relatórios Allure no GitHub Pages:
    - [Visualizar Relatórios](https://pedrothh.github.io/automation-cypress-api-e2e-example/)

---

