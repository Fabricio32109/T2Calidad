describe('LoginTest', () => {
    it('Iniciar sesión', () => {
        cy.visit('https://localhost:44320/');
        cy.get('#boton2').click();
        cy.get('#usuario').type("admin");
        cy.get('#contrasena').type("admin");
        cy.get('#botinicses').click();
    })
});
describe('AddTest', () => {
    it('Agregar libro', () => {
        cy.visit('https://localhost:44320/');
        cy.get('#4').click();
        cy.get('#usuario').type("admin");
        cy.get('#contrasena').type("admin");
        cy.get('#botinicses').click();
        cy.get('#4').click();
    })
});
describe('AddReview', () => {
    it('Calificar libro', () => {
        cy.visit('https://localhost:44320/');
        cy.get('#boton2').click();
        cy.get('#usuario').type("admin");
        cy.get('#contrasena').type("admin");
        cy.get('#botinicses').click();
        cy.get('#img4').click();
        cy.get('#espacio').type("goty");
        cy.get('#calf').type("5");
        cy.get('#botonenv').click();
    })
});
describe('ReadTest', () => {
    it('Leer libro', () => {
        cy.visit('https://localhost:44320/');
        cy.get('#boton2').click();
        cy.get('#usuario').type("admin");
        cy.get('#contrasena').type("admin");
        cy.get('#botinicses').click();
        cy.get('#boton2').click();
        cy.get('#4').click();

    })
});