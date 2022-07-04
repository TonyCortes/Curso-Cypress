/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //const title = cy.title()
        //console.log(title)

        //cy.title().should('be.equal', 'Campo de Treinamento')
        //cy.title().should('contain','Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain','Campo') //posso usar .and no lugar de repetir .should//
    })
    
    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //cy.get('#buttonSimple').click()
        //cy.get('#buttonSimple').should('have.value', 'Obrigado!') 
        //Da para encadear como no exemplo anterior como mostra abaixo 
        
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})