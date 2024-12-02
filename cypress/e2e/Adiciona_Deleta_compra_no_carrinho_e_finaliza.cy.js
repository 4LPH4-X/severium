describe('Adicionar e remover item no carrinho e finalizar compra', () => {

  const url = 'https://www.demoblaze.com';

  beforeEach(() => {
    cy.visit(url);
  });

    it('Adicionar e remover item no carrinho e finalizar compra', () => {

      cy.contains('Laptops').click();
      cy.wait(1000);
      cy.contains('MacBook air').click();

      cy.get('.col-sm-12 > .btn').click();
      cy.get('.col-sm-12 > .btn').click();

      cy.get(':nth-child(4) > .nav-link').click();
      cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click();
      cy.wait(1000);

      cy.get('.col-lg-1 > .btn').click();
      cy.wait(500);
      
      cy.get('#name').type('Bruno Camilo');
      cy.get('#country').type('Brasil');
      cy.get('#city').type('Blumenau');
      cy.get('#card').type('555940032159');
      cy.get('#month').type('12');
      cy.get('#year').type('2024');
      
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait(500);
      cy.get('.confirm').click();
    });
  });
  