# Projeto de Automação com Cypress

## :clipboard: Visão Geral do Projeto
Este projeto é uma suíte de testes automatizados desenvolvida com [Cypress](https://www.cypress.io/). Ele foi criado para garantir a qualidade e confiabilidade de aplicações web por meio de testes de ponta a ponta, integração e unidade.

## :star2: Funcionalidades
- Testes automatizados para aplicações web
- Depuração facilitada com a interface gráfica do Cypress
- Suporte a múltiplos ambientes de teste
- Relatórios detalhados em HTML utilizando Mochawesome

---

## :gear: Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- Node.js (>= 14.x)
- npm ou yarn
- Cypress

---

## :rocket: Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/renanpacheco21/automationExercise_Cypress
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   Ou, se estiver usando yarn:
   ```bash
   yarn install
   ```

3. Instale o Cypress:
   ```bash
   npm install cypress --save-dev
   ```
   Ou, se estiver usando yarn:
   ```bash
   yarn add cypress --dev
   ```

4. Inicialize o Cypress no projeto:
   ```bash
   npx cypress open
   ```

---

## :file_folder: Estrutura do Projeto
```
.
.
├── cypress
│   ├── e2e                 # Testes end-to-end
│   ├── fixtures            # Dados estáticos, como arquivos JSON usados nos testes
│   ├── plugins             # Arquivos de configuração de plugins
|   ├── reports             # Relatórios gerados (HTML, JSON, etc.)
│   └── support             # Custom commands e configurações globais
│       ├── commands.js     # Definições de comandos personalizados do Cypress
│       ├── e2e.js          # Configuração global para testes e2e
│       └── index.js        # Arquivo de inicialização para suporte
├── cypress.config.js       # Configuração principal do Cypress
├── package.json            # Gerenciador de dependências e scripts do projeto
├── package-lock.json       # Controle de versões das dependências instaladas
├── node_modules            # Dependências instaladas (ignorar no controle de versão)
├── README.md               # Documentação do projeto
├── .gitignore              # Arquivo para ignorar pastas/arquivos no Git


```

---

## :runner: Executando os Testes

### Modo Interativo
Para executar os testes interativamente com o Test Runner do Cypress:
```bash
npx cypress open
```

### Modo Headless
Para executar os testes no modo headless:
```bash
npx cypress run
```

---

## :bar_chart: Gerando Relatórios HTML
Este projeto utiliza o **Mochawesome** para geração de relatórios em HTML.

1. Execute os testes no modo headless:
   ```bash
   npx cypress run
   ```

2. Una os resultados em JSON (se necessário):
   ```bash
   npx mochawesome-merge cypress/reports/*.json > cypress/reports/combined.json
   ```

3. Gere o relatório em HTML:
   ```bash
   npx marge cypress/reports/combined.json -f report -o cypress/reports
   ```

O relatório estará disponível na pasta `cypress/reports`.

---

## :handshake: Contribuindo
Sinta-se à vontade para fazer um fork deste repositório, criar um branch para sua funcionalidade e enviar um pull request. Contribuições são bem-vindas!

---

## :page_facing_up: Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## :books: Referências
- [Documentação do Cypress](https://docs.cypress.io/)
- [Documentação do Mochawesome](https://www.npmjs.com/package/mochawesome)
- [Casos de Teste do Automation Exercise](https://automationexercise.com/test_cases)

