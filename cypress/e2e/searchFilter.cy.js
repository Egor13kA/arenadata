/// <reference types="cypress" />

import DefaultPage from "../PageObject/DefaultPage";
import Form from "../PageObject/Form";


describe('searchFilter', () => {

    const goToForm = new DefaultPage();
    const form = new Form();

    it('all fields are entered', () => {

        goToForm.goForm()
        form.inputTextinField('прогресс', '[id="filter_org_title"]');
        form.inputTextinField('123', '[id="filter_mi_mitnumber"]');
        form.inputTextinField('преобразователи термоэлектрические', '[id="filter_mi_mititle"]');
        form.inputTextinField('ТХК-2088', '[id="filter_mi_mitype"]');
        form.inputTextinField('ADZ-SML-10.0', '[id="filter_mi_modification"]');
        form.inputTextinField('1747301142008', '[id="filter_mi_number"]');
        form.inputTextinField('10.01.2024', '[id="filter_verification_date_start"]');
        form.inputTextinField('10.02.2024', '[id="filter_verification_date_end"]');
        form.inputTextinField('10.01.2026', '[id="filter_valid_date_start"]');
        form.inputTextinField('10.02.2026', '[id="filter_valid_date_end"]');
        form.inputTextinField('С-БРП/30-01-2024/312761193', '[id="filter_result_docnum"]');
        form.inputTextinField('521', '[id="filter_sticker_num"]');
        form.chooseCombobox('Да', '[id="filter_applicability"]');
        form.pressButton('Применить');


        cy.get('[class="data-filter-values"]').should('exist')
        cy.get('[class="data-filter-values"]').contains('прогресс').parent().should('contain', 'Организация-поверитель:')
        cy.get('[class="data-filter-values"]').contains('123').parent().should('contain', 'Регистрационный номер типа СИ:')
        cy.get('[class="data-filter-values"]').contains('преобразователи термоэлектрические').parent().should('contain', 'Наименование типа СИ:')
        cy.get('[class="data-filter-values"]').contains('ТХК-2088').parent().should('contain', 'Тип СИ:')
        cy.get('[class="data-filter-values"]').contains('ADZ-SML-10.0').parent().should('contain', 'Модификация СИ:')
        cy.get('[class="data-filter-values"]').contains('1747301142008').parent().should('contain', 'Заводской номер/ Буквенно-цифровое обозначение:')
        cy.get('[class="data-filter-values"]').contains('от 10.01.2024').parent().should('contain', 'Дата поверки:')
        cy.get('[class="data-filter-values"]').contains('до 10.02.2024').parent().should('contain', 'Дата поверки:')
        cy.get('[class="data-filter-values"]').contains('от 10.01.2026').parent().should('contain', 'Действительна до:')
        cy.get('[class="data-filter-values"]').contains('до 10.02.2026').parent().should('contain', 'Действительна до:')
        cy.get('[class="data-filter-values"]').contains('С-БРП/30-01-2024/312761193').parent().should('contain', 'Номер свидетельства/ Номер извещения:')
        cy.get('[class="data-filter-values"]').contains('521').parent().should('contain', 'Номер наклейки:')
        cy.get('[class="data-filter-values"]').contains('Да').parent().should('contain', 'Пригодность:')

    })
});