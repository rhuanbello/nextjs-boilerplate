# Documentação

- Next.js
    - Aplicação foi gerada com o Framework Next.js em sua versão `12.1.1`.
- TypeScript
    - Configuração
        - O superset TypeScript está integrado ao projeto, e sua configuração se encontra no arquivo `tsconfig.json`
    - Extensão
        - Todo código que possuir Componentes Funcionais deverá estar no formato `.TSX`
        - Caso o código seja de puramente métodos e funções (sem possuir `JSX`) deverá estar no formato `.TS`
- Storybook
    - Ferramenta que será utilizada pra testar, organizar e documentar os componentes de interface da aplicação.
- Material UI
    
    
- EditorConfig
    - O arquivo `.editorconfig` servirá para padronizar o estilo de código de todo novo arquivo criado
- React Icons
- ESLint
    - Ferramenta que servirá para forçar regras de código e nos alertar sobre problemas de formatação e inconsistência
    - Sua configuração se encontra no arquivo `.eslintrc.json`
- Prettier
    - O prettier será a ferramenta responsável por formatar **automaticamente** nosso código nos padrões visuais determinados pelo ESLint
    - Sua configuração se encontra no arquivo `.prettierrc`
- Scripts
    - O comando `yarn dev` executa a aplicação em modo de desenvolvimento na porta **3000**
    - O comando `yarn build` simula a criação e otimização dos arquivos para o ambiente de  produção
    - O comando `yarn start` executa a aplicação em modo de produção na porta **3000**
    - O comando `yarn lint` fará com que o ESLint busque por erros na pasta `src`
    - O comando `yarn storybook` fará com que o servidor do storybook seja iniciado na porta **6006**

---

- App
    - O componente `_app.tsx` é o arquivo principal da aplicação. Ele será utilizado pelo **Next.js** para renderizar todas as páginas do projeto.
- Contéudo de Desenvolvimento
    - Todo o código desenvolvido no projeto estará localizado na pasta `src`, assim poderemos diferenciar os arquivos de configuração/produção do nosso código.
    - Todas **imagens** deverão estar localizadas nas pasta `public`
    - A **BaseURL** para qualquer importação será feita a partir da pasta **`src`**
    - Todo componente funcional deverá ser criado como um arquivo `index` em uma pasta nomeada com o **mesmo nome** de sua função
- Global Style
    - O font-size global da aplicação foi reduzida para **62.5%** para que seja possível utilizar a unidade de medida `rem` em unidade **decimal**
    - Toda **cor** definida no protótipo deverá ser declarada como uma **variável** para ser facilmente redefinida quando necessário