(lembrando que na pasta de deploy e na pasta baixada do curso tem as chaves SSH e os
comandos do GIT)

# Comandos acessar VM

eval $(ssh-agent)

ssh-add ~/.ssh/id_ed25519

start ~/.ssh

ssh (IP do google cloud) --> quando ja tiver colocado esses comandos

## API rest

Sequelize --> ORM que vai ser utilizada para conectar com o banco de dados

MySQL Workbench --> funciona como o drizzle-studio, onde é possível ver as tabelas e as queries SQL

MariaDB --> O banco de dados SQL que vai ser utilizado

Insomnia --> Onde será possível ver as responses e requests do backend (igual ao postman)

(Vou usar "biome.js" ao invés do eslint pq preferi bem mais o biome)

## Docker

Docker tem a mesma capacidade de uma função, onde a função encapsula código e organiza ele evitando repetição

Mas o docker funciona de forma parecida, mas na verdade ele encapsula o projeto e as versões dos componentes em um container atrelado ao projeto, para evitar grandes problemas de incompatibilidade em outras máquinas como a máquina remota(google cloud aws ou azure) e até a máquina de outras pessoas que acessarem seu projeto

(Funcionando como uma mini máquina)

Porém tem BASTANTE diferença entre essa máquina e uma VM(máquina virtual)

### Docker !== VM

Mesmo que façam coisas semelhantes, funcionam de formas diferentes:

  VM --> pega pra si recursos da sua máquina local(PC || Notebook), não compartilha os recursos com sua máquina, ou seja, tem seu próprio kernel, seu próprio shell e seu próprio gui (Literalmente como se tivesse outro pc dentro do seu pc e usando os recursos dele)

  Docker --> Muito mais leve, compartilha dos mesmo recursos (kernel, shell e gui) do seu sistema operacional, e só tem dentro dele tudo que é necessário para armazenar sua aplicação, em vez de ter um sistema operacional inteiro com diversas funcionalidades inútes para sua aplicação, tem apenas o necessário para fazer o deploy

### Imagem

Imagem --> Tudo que é armazenado dentro do docker é por meio de imagens, as imagens guardam a versão do seu framework, a versão do seu Node.js ou a versão da JVM do java, as dependências do projeto, o front e o backendf

#### Obs.:
Recursos: Hardware(memória RAM, HD, Processador, Placa de vídeo)

O necessário: Seu framework, pacotes externos utilizados no seu código, seu banco de dados, sua ORM caso esteja utilizando, seu código e recursos de hardware

