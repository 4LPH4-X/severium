describe('Teste de login, carrinho e validação de usuários no Demoblaze', () => {
    const url = 'https://www.demoblaze.com';
    
    const userA = { username: 'a', password: 'a' };
    const userB = { username: 'b', password: 'b' };
    
    let itemUserA;
    let itemUserB;
  
    beforeEach(() => {
      cy.visit(url);
    });
  
    it('Usuário A: Login, adicionar item ao carrinho e verificar', () => {
      // Login com usuário A
      cy.get('#login2').click(); // Botão Login
      cy.wait(500); // Espera carregamento
      cy.get('#loginusername').type(userA.username); // Usuário
      cy.get('#loginpassword').type(userA.password); // Senha
      cy.get('button[onclick="logIn()"]').click(); // Botão de login
      cy.wait(1000); // Espera login concluir
  
      // Adicionar item ao carrinho
      cy.contains('Laptops').click(); // Seleciona categoria "Laptops"
      cy.contains('Sony vaio i5').click(); // Seleciona item específico
      cy.get('.btn-success').click(); // Botão "Add to cart"
      cy.wait(500);
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Product added');
      });
  
      // Captura o nome do item para verificar
      cy.get('.name').invoke('text').then((itemName) => {
        itemUserA = itemName.trim(); // Salva o nome do item
      });
  
      // Verifica no carrinho
      cy.get('#cartur').click(); // Botão "Cart"
      cy.get('.success td:nth-child(2)').should('contain', itemUserA); // Valida se o item está no carrinho
  
      // Logout
      cy.get('#logout2').click(); // Botão "Logout"
      cy.wait(1000);
    });
  
    it('Usuário B: Login, adicionar item ao carrinho e verificar', () => {
      // Login com usuário B
      cy.get('#login2').click();
      cy.wait(500);
      cy.get('#loginusername').type(userB.username);
      cy.get('#loginpassword').type(userB.password);
      cy.get('button[onclick="logIn()"]').click();
      cy.wait(1000);
  
      // Adicionar item ao carrinho
      cy.contains('Monitors').click(); // Seleciona categoria "Monitors"
      cy.contains('Apple monitor 24').click(); // Seleciona item específico
      cy.get('.btn-success').click();
      cy.wait(500);
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Product added');
      });
  
      // Captura o nome do item
      cy.get('.name').invoke('text').then((itemName) => {
        itemUserB = itemName.trim(); // Salva o nome do item
      });
  
      // Verifica no carrinho
      cy.get('#cartur').click();
      cy.get('.success td:nth-child(2)').should('contain', itemUserB);
  
      // Logout
      cy.get('#logout2').click();
      cy.wait(1000);
    });
  
    it('Usuário A: Validar carrinho permanece o mesmo', () => {
      // Login com usuário A
      cy.get('#login2').click();
      cy.wait(500);
      cy.get('#loginusername').type(userA.username);
      cy.get('#loginpassword').type(userA.password);
      cy.get('button[onclick="logIn()"]').click();
      cy.wait(1000);
  
      // Verificar se o item no carrinho é o mesmo
      cy.get('#cartur').click();
      cy.get('.success td:nth-child(2)').should('contain', itemUserA); // Valida que o item original do usuário A ainda está no carrinho
    });
  });
  