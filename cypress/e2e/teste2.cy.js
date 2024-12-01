describe('Adiciona um item ao carrinho', () => {
    it('Deve adicionar o primeiro produto listado ao carrinho', () => {
      cy.visit('https://www.demoblaze.com/');
  
      // Seleciona o primeiro produto da lista e adiciona ao carrinho
      cy.get('.active > .d-block').first().within(() => {
        // Clica no link do produto para abrir a página de detalhes
        cy.get('.hrefch').click();
      });
  
      // Aguarda o carregamento da página do produto
      cy.url().should('include', 'prod.html?idp_'); // Verifica que está na página de detalhes do produto
  
      // Clica no botão "Add to cart"
      cy.get('.btn-success').click();
  
      // Aguarda o alerta de confirmação e o fecha
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('Product added');
      });
  
      // Verifica se a navegação permanece na página do produto
      cy.url().should('include', 'prod.html?idp_');
    });
  });
  