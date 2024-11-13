import * as data from "../helpers/default_data.json";
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json";
import * as result_page from "../locators/result_page.json";

describe('Проверка авторизации', function () {

     beforeEach('Открыть сайт', function () {
          cy.visit('/');  
     });
     
     afterEach('Конец теста', function () {
          cy.get(result_page.close).should('be.visible');
         });
    it('Верный логин и пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains('Авторизация прошла успешно');
         cy.get(result_page.close).should('be.visible');
    })

    it('Логика восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click();
        cy.get(recovery_password_page.email).type('mesyatsevp@yandex.ru');
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        cy.get(result_page.close).should('be.visible');
   })

   it('Верный логин и НЕверный пароь', function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('iLoveqastudio2');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).contains('Такого логина или пароля нет');
        cy.get(result_page.close).should('be.visible');
   })

   it('НЕверный логин и верный пароль', function () {
     cy.get(main_page.email).type('german2@dolnikov.ru');
     cy.get(main_page.password).type(data.login);
     cy.get(main_page.login_button).click();
     cy.get(result_page.title).contains('Такого логина или пароля нет');
     cy.get(result_page.close).should('be.visible');
})

it('Авторизация с НЕправильным логином', function () {
     cy.get(main_page.email).type('german2@dolnikov.ru');
     cy.get(main_page.password).type(data.password);
     cy.get(main_page.login_button).click();
     cy.get(result_page.title).contains('Такого логина или пароля нет');
     cy.get(result_page.close).should('be.visible');
})

it('Валидация на наличие @', function () {
     cy.get(main_page.email).type('german1dolnikov.ru');
     cy.get(main_page.password).type(data.password);
     cy.get('#loginButton').click();
     cy.get(result_page.title).contains('Нужно исправить проблему валидации');
     cy.get(result_page.close).should('be.visible');
})

it('Логика приведения логина к строчным буквам', function () {
     cy.get(main_page.email).type('GerMan@Dolnikov.ru');
     cy.get(main_page.password).type(data.password);
     cy.get('#loginButton').click();
     cy.get(result_page.title).contains('Авторизация прошла успешно');
     cy.get(result_page.close).should('be.visible');
})
 }) 