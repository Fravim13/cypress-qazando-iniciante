/// <reference types="cypress" />

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    validarMensagemErro(mensagem) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencheCampoNome(person) {
        cy.get('#user')
            .type(person)
    },
    preencherEmail(email) {
        cy.get('#email')
            .type(email)
    },
    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },
    validarMensagemCadastroRealizado(person) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${person}`)
    }

}
