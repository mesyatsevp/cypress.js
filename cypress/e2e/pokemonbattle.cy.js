describe('e2e pokemonbattle.ru', function () {

    it('Покупка аватара', function () {
        cy.visit ('https://pokemonbattle.ru');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD')
        cy.get('.auth__button').click();
        cy.get('.header__container > .header__id').should('be.visible').click();
        cy.get('[href="/shop"]').should('be.visible').click()
        cy.get('.available > button').first().click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible').type('4444 4444 9999 9999');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1228');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVAN IVANOV')
        cy.get('.pay-btn').click()
        cy.get('#cardnumber').should('be.visible').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        cy.get('.payment__adv').should('be.visible').click();
   })
})