describe('Registro de usuário e login com o usuário registrado', () => {

  const user = { username: 'Username_test_1', password: 'test1' };
  const url = 'https://www.demoblaze.com';


  beforeEach(() => {
    cy.visit(url);
  });

  it('Bloco do registro do usuário', () => {
    
    cy.get('#signin2').click(); // Botão para registrar
    cy.wait(500);

    cy.get('#sign-username').type(user.username); // Usuário
    cy.get('#sign-password').type(user.password); // Senha

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(500);

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
    cy.wait(500);

  });

  it('Bloco de login do usuário registrado', () => {

    cy.get('#login2').click();
    cy.wait(500);

    cy.get('#loginusername').type(user.username); // Usuário
    cy.get('#loginpassword').type(user.password); // Senha

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

  })
})