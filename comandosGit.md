# Git

git init --> inicia o git nesse projeto

git status --> mostra o status do projeto, se tem algo pra commitar ou algo não adicionado no fluxo do git

git add . --> adiciona todos os arquivos do projeto no fluxo do git (ou pode-se utilizar o local do arquivo para especificar qual vai ser adicionado)

git commit --> commita oque foi adicionado pelo git add, assim como o git add você pode commitar tudo de uma vez, mas usando o comando git commit -a

(e pode passar uma mensagem usando o -m "mensagem")

git remote add origin + url --> conecta o repositório remoto no github com o repositório local do git

git branch -M main --> seta a camada(branch) em que o fluxo git vai ser enviado, o -M pode ser usado pra "mover" e "renomear" uma branch que já existe, que no caso é a main que é padrão de um repositório

git push -u origin main --> origin significa o repositório remoto (pode ser uma url para um outro repositório ou simplesmente enviada para o repositório original, que no caso se chama origin), o "-u" ou "--set-upstream" significa associar um repositório ao outro, ou seja, nesse caso estamos associando a branch "main" do git à branch "main" do github,

Detalhe legal desse comando é que depois que a vinculação(-u) e o repositório remoto é especificado(origin), só precisa fazer "git push" ou "git pull" que vai funcionar perfeitamente

## Branches

Conceito mais avançado de git para trabalhar com múltiplas branches, algo que não é necessário para um projeto de uma pessoa só, mas pra um projeto com contribuintes é muito importante que haja mais de uma branch

git log --> vai mostrar as logs do seu commit, como a data, quem fez esse commit, e o id de identificação daquele commit, que é um hash

git checkout --> esse comando tem múltiplas funções, como trocar de branch, criar uma nova branch, voltar pra versão anterior daquela branch, restaurar um arquivo que foi apagado

git checkout -b --> cria uma nova branch

git checkout <commit> --> dentro desses maior e menor que você pode colocar o hash do seu commit, voltando para uma versão anterior do seu código.

<strong>*E entrando no estado de "detached HEAD" ou seja, fora do seu repositório, então é necessário que execute o "git checkout main" para voltar pro repositório main ou pro repositório desejado*</strong>

