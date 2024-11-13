describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('mesyatsevp@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Верный логин и НЕверный пароь', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('НЕверный логин и верный пароль', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german2@dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Такого логина или пароля нет');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Авторизация с НЕправильным логином', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german2@dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Такого логина или пароля нет');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Валидация на наличие @', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('german1dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

it('Логика приведения логина к строчным буквам', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('GerMan@Dolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.get('#messageHeader').contains('Авторизация прошла успешно');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
 }) 