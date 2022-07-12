
describe('Email login', function () {
    
    it('Проверка формы поля e-mail в окне логина', function () {
        cy.visit('https://account.animarender.com/login');
        
        cy.get('#login').should("be.empty");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Email is required");
        cy.reload()

        cy.get('#login').type(" ");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Email is required");
        cy.contains("Wrong Email");

        cy.reload()

        cy.get('#login').type("01234561789");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#login').type("asdfghjkl");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#login').type("!@#$%^&*)(");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#login').type("asdfghj@qwerty");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#login').type("https://account.animarender.com/login");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        

        
      })
})
