/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('TextFileds', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test') // é preciso usar o "have.value" inves do "have.text"
        
        cy.get('#elementosForm\\:sugestoes') // por causa dos ":" é precisso colocar "\\" para não ser interpretado o ":" e funcionar
            .type('TestArea')
            .should('have.value', 'TestArea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')    
            .clear()
            .type('Erro{selectall}acerto', { delay: 200})
            .should('have.value', 'acerto')
    })

    
})