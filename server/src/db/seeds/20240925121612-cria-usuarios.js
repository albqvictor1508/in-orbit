const bcryptjs = require('bcryptjs');


module.exports = {
  async up (queryInterface) {
     await queryInterface.bulkInsert('users', [{
      nome: 'Benjamin Ahola',
      email: 'benjamin@icloud.com',
      password_hash: await bcryptjs.hash('ahola1234', 8), //1 parametro -> senha, 2 parametro -> tamanho do hash
      created_at: new Date(),
      updated_at: new Date(),
     },
    {
      nome: 'fazol',
      email: 'lulia@gov.com.br',
      password_hash: await bcryptjs.hash('aibolsonaro', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'LEXSA PERFEITA DIVINDADE',
      email: 'lexsadevito@icloud.com',
      password_hash: await bcryptjs.hash('vito12345', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
  }
