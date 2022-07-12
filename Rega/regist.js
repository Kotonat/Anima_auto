
describe('Email registration', function () {
    
    it('Проверка формы поля e-mail в окне регистрации', function () {
        cy.visit('https://account.animarender.com/registration');
        
        cy.get('#email').should("be.empty");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("This is required field");
        cy.reload()

        cy.get('#email').type(" ");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("This is required field");
        cy.contains("Wrong Email");

        cy.reload()

        cy.get('#email').type("01234561789");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#email').type("asdfghjkl");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#email').type("!@#$%^&*)(");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#email').type("asdfghj@qwerty");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        cy.get('#email').type("https://account.animarender.com/login");
        cy.get('#password').type("1Q2w3e4r");
        cy.get('#confirmPassword').type("1Q2w3e4r");
        cy.get(':nth-child(7) > .relative > .flex > .rounded').click();
        cy.get(':nth-child(8) > .relative > .flex > .rounded').click();
        cy.get('.mx-auto').click();
        cy.contains("Wrong Email");
        cy.reload()

        

        
      })
})
