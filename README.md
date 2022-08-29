# desafio_accenture

### Passo a passo para o teste automático:

* Entrar no site http://sampleapp.tricentis.com/101/app.php
* Preencher o formulário, aba “Enter Vehicle Data” e pressione next
* Preencher o formulário, aba “Enter Insurant Data” e pressione next
* Preencher o formulário, aba “Enter Product Data” e pressione next
* Preencher o formulário, aba “Select Price Option” e pressione next
* Preencher o formulário, aba “Send Quote” e pressione Send
* Verificar a mensagem “Sending e-mail success!” na tela

## Cypress

* Para iniciar um projeto cypress só é necessário ter o node.js e o visual studio code instalado.
* Já dentro da pasta selecionada, segue o seguintes comandos: 

```
git init 
npm init 
npm install cypress --save-dev  
```

Para abrir a interface do Cypress:

```
npx cypress open
```

Para rodar os testes pelo terminal:
````
npm test
````

### Clonagem
Ao clonar esse repositório, é necessário que você rode o seguinte comando para baixar as dependências node: 
````
npm install
````
Após, é só escolher a forma que deseja rodar os testes, pela interface ou pelo terminal.
Pra escolher qual navegador será utilizado é só acrescentar o seguinte código: 
````
npm test --browser chrome
````
### Sobre os testes
Os arquivos de teste foram criados na pasta cypress/e2e, neste projeto não foi utilizado page objects, mas sim uma solução melhor que temos no cypress, que são os commands, disponíveis na pasta support/e2e, nesse arquivo é possível criar comandos customizáveis para não precisar duplicar código e facilitar a manutenção.

Foi criado também uma pasta com features, disponível em cypress/features, porém, não é possível rodar os testes direto pela feature, sendo possível somente com os dois comandos acima, que são pelo terminal e pela interface.

Dentro da pasta fixtures ficam os arquivos que são utilizados nos testes, neste caso, existe apenas uma imagem para testar um campo de anexo.

A pasta downloads e node_modules foram incluídas no gitignore para não serem versionadas, a pasta downloads porque não está sendo utilizada e a node_modules por ter um tamanho muito grande, dessa forma, como dito anteriormente, é preciso rodar o comando: npm install.


### Report

O cypress gera screenshots quando os testes pegam algum erro, ele também grava vídeo do teste inteiro quando se roda pelo terminal.

Existem plugins alternartivos que geram relatórios mais sofisticados acerca dos testes realizados, mas não foram utilizados nesse projeto. 

### Considerações Finais 

Aqui está alguns links importantes sobre o cypress: 

Documentação do cypress
https://www.cypress.io/

Grupo do telegram para dúvidas
https://t.me/cypress_br

Fico também a disposição para tirar quaisquer dúvidas sobre o projeto, caso seja necessário uma apresentação, não hesite em contatar.

### ⭐️

Se esse projeto te ajudou de alguma forma deixa uma estrelinha ;) 



