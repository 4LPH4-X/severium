describe('Captura todos os nomes, preços e IDs dos produtos', () => {
  it('Deve capturar todos os produtos com seus respectivos nomes, preços e IDs', () => {
    cy.visit('https://www.demoblaze.com/');

    // Array para armazenar os produtos com nome, preço e ID
    const produtos = [];

    // Seleciona todos os cards de produto e itera sobre eles
    cy.get('.card').each(($card, index) => {
      const produto = {};

      // Captura o ID do produto a partir do atributo href do link (idp_1, idp_2, ...)
      cy.wrap($card).find('.hrefch')
        .invoke('attr', 'href')
        .then((href) => {
          // Extrai o ID do produto da URL (ex: 'prod.html?idp_=1' => '1')
          const id = href.split('=')[1]; // Extrai o número após o "="
          produto.id = id; // Adiciona ao objeto produto
        });

      // Captura o nome do produto
      cy.wrap($card).find('.hrefch')
        .invoke('text')
        .then((nome) => {
          produto.nome = nome.trim(); // Armazena o nome do produto
        });

      // Captura o preço do produto
      cy.wrap($card).find('.card-block h5')
        .invoke('text')
        .then((preco) => {
          produto.preco = preco.trim(); // Armazena o preço do produto
        });

      // Após capturar o ID, nome e preço, adiciona o objeto ao array de produtos
      cy.wrap($card).then(() => {
        produtos.push(produto);
      });
    });

    // Exibe a lista completa de produtos após capturar todos os dados
    cy.then(() => {
      cy.log('Lista de Produtos:', produtos);
      console.log('Lista de Produtos:', produtos);

      // Verifique se a lista contém pelo menos um produto
      expect(produtos).to.have.length.greaterThan(0);
    });
  });
});

