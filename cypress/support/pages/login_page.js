/// <reference types="cypress" />

export default {
    clicarEmLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencherEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(internet) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-input')
            .should('be.visible')
            .should('have.text', `Olá ${internet}`)
    }

}