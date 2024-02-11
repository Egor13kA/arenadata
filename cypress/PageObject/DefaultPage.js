class DefaultPage {


    /**
    * Переход к форме фильтра
    */
    goForm() {
        cy.visit('')
        cy.contains('button', 'ОК').click()
        cy.contains('button', 'Настроить фильтр').click()
    };

}

export default DefaultPage;