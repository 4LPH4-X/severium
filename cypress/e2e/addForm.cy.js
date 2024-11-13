describe('Teste que usa produtos de outra spec', () => {
    it('Deve acessar e exibir todos os produtos de uma spec anterior', () => {
      // Acessa a lista de produtos armazenada
      const produtos = Cypress.env('produtos');
  
      // Verifica se a lista de produtos está disponível
      expect(produtos).to.be.an('array');
      expect(produtos).to.have.length.greaterThan(0);
  
      // Exibe todos os produtos usando cy.log()
      produtos.forEach((produto, index) => {
        cy.log(`Produto ${index + 1}:`, produto.nome);
      });
    });
  });
  