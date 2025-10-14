/// <reference types="cypress" />
import commum_pages from '../support/pages/commum_pages'
import cadastro_usuario_pages from '../support/pages/cadastro_usuario_pages'
import { faker } from '@faker-js/faker';


describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_pages.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo nome deve ser prenchido')

    })

    it('Campo E-mail vazio', () => {
        cadastro_usuario_pages.preencheCampoNome(faker.person.fullName())
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo E-mail invalido', () => {
        cadastro_usuario_pages.preencheCampoNome(faker.person.fullName())
        cadastro_usuario_pages.preencherEmail(faker.person.fullName()) // Nome invalido para email  
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo Senha vazio', () => {
        cadastro_usuario_pages.preencheCampoNome(faker.person.fullName())
        cadastro_usuario_pages.preencherEmail(faker.internet.email())
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo Senha invalido', () => {
        cadastro_usuario_pages.preencheCampoNome(faker.person.fullName())
        cadastro_usuario_pages.preencherEmail(faker.internet.email())
        cadastro_usuario_pages.preencherSenha('123')
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it.only('Cadastro com sucesso', async () => {

        const person = await faker.person.fullName()

        cadastro_usuario_pages.preencheCampoNome(person)
        cadastro_usuario_pages.preencherEmail(faker.internet.email())
        cadastro_usuario_pages.preencherSenha('123456')
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemCadastroRealizado(person)
    })

})