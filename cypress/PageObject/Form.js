class Form {

    /**
    * @param {string} text - Текст вводимы в поле
    * @param {string} fieldlocator - Локатор поля
    */
    inputTextinField(text, fieldlocator) {
        return cy.get(fieldlocator).type(text)
    };

    pressButton(textButton) {
        return cy.contains('button', textButton).click();
    };

    /**
    * @param {string} option - Значение комбобокса
    * @param {string} comboboxId - Локатор комбобокса
    */
    chooseCombobox(option, comboboxId){
        cy.get(comboboxId).select(option)
    };
};

export default Form;