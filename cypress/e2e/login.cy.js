/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import login_page from "../support/pages/login_page"
import { fa, faker } from '@faker-js/faker';

describe('Login', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        home_page.acessarLogin()
    })

    it('Email em branco', () => {
        login_page.clicarEmLogin()
        login_page.validarMensagemErro('E-mail inválido.')


    })
    it('Email incorreto', () => {
        login_page.preencherEmail(faker.person.fullName()) // Nome invalido para email
        login_page.clicarEmLogin()
        login_page.validarMensagemErro('E-mail inválido.')

    })

    it('Senha em branco', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.clicarEmLogin()
        login_page.validarMensagemErro('Senha inválida.')

    })

    it('Senha incorreta', () => {
        login_page.preencherEmail(faker.internet.email())
        login_page.preencherSenha('123')
        login_page.clicarEmLogin()
        login_page.validarMensagemErro('Senha inválida.')

    })

    it('Login com sucesso', async () => {

        const internet = await faker.internet.email()

        login_page.preencherEmail(internet)
        login_page.preencherSenha('123456')
        login_page.clicarEmLogin()
        login_page.validarMensagemSucesso(internet)

    })
})