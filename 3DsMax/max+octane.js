describe('Check soft', function () {
    
    it('Проверка полей постановки софта 3DsMax', function () {
        cy.visit('https://account.animarender.com/render');
//вход на сайт
        cy.get('#login').type("E-mail");
        cy.get('#password').type("Password");
        cy.get('.mx-auto').click();
//выбор файла сцены
        cy.get(':nth-child(3) > .render-upload__text').click();
        cy.get('.file-item').dblclick();
        cy.get('.file-listing > :nth-child(5)').dblclick();
        cy.get('.file-listing > :nth-child(9)').dblclick();
//ввод параметров постановки 2016+корона
        /* выбор версии
        cy.get(':nth-child(2) > .relative > .multiselect > .multiselect__tags').click();
        cy.get('div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(2) > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click(); // 2016 and early
        */
        /* выбор рендерера
        cy.get(':nth-child(3) > .relative > .multiselect > .multiselect__tags > .multiselect__single').click();
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(3) > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click(); //выбор Corona
		*/
        /* ввод кадра
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(2) > div.v-hinted-input__container > div > div.relative.v-input-box > div > input').type("0"); //кадры
        */
        /* выбор камеры
        cy.get('.v-hinted-input__container > .v-input-field > .relative > .multiselect > .multiselect__tags > .multiselect__placeholder').click();
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(8) > div.v-hinted-input > div.v-hinted-input__container > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(2)').click();//выбор камеры
        */
        /* Ввод имени результата
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > input').type("test");
        */
        /* выбор формата результата
        cy.get('.multiselect__placeholder').click();
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(10) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click();//выбор jpeg
        */
        /* выбор распреда
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(5) > div.v-hinted-input__container > div > div.relative.v-input-box > div > button').click();
        */
        /* Проверка недоступности ввода разрешения
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(6) > div.v-hinted-input__container > div > div.relative.v-input-box > div > input').should('be.disabled');
        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(7) > div.v-hinted-input__container > div > div.relative.v-input-box > div > input').should('be.disabled');
        */
        // Выбор версии 2016
        cy.get(':nth-child(2) > .relative > .multiselect > .multiselect__tags').click();
                    cy.get('div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(2) > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click(); 
        
        // Выбор рендерера Octane
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(3) > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(3) > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(2)').click(); //выбор Octane
        	// Выбор версии
        		cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(4) > div.relative.v-input-box > div > div.multiselect__tags').click();
        			cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(4) > div.relative.v-input-box > div > div.multiselect__content-wrapper').click();
        

        // Ввод кадра
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(2) > div.v-hinted-input__container > div > div.relative.v-input-box > div > input').type("0"); //кадры
        // Ввод имени результата
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(8) > div > div.relative.v-input-box > div > input').type("test");
        //Выбор формата результата
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click();//выбор jpeg
        
        // Выбор камеры
                cy.get('.v-hinted-input__container > .v-input-field > .relative > .multiselect > .multiselect__tags > .multiselect__placeholder').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(7) > div.v-hinted-input > div.v-hinted-input__container > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(2) > span').click();//выбор камеры
        
         
        // Проверка разных аутпутов для Octane
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click();//выбор jpeg
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(2)').click();//выбор png
				cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(3) > span').should('contain.class', 'multiselect__option multiselect__option--group multiselect__option--disabled').click({force: true});//выбор vrmig
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(4) > span').should('contain.class', 'multiselect__option multiselect__option--group multiselect__option--disabled').click({force: true});//выбор cxr
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(5)').click();//выбор exr
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(6)').click();//выбор tiff
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(7)').click();//выбор tga
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(8)').click();//выбор bmp 
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(9)').click();//выбор vga
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(10)').click();//выбор hdr                            
    
        // Проверка разных аутпутов для Corona при демо

        cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div.v-hinted-input.checkbox > div.v-hinted-input__container > div > div.relative.v-input-box > div > button').click();
                
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(1)').click();//выбор jpeg
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(2)').click();//выбор png
				cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(3) > span').should('contain.class', 'multiselect__option multiselect__option--group multiselect__option--disabled').click({force: true});//выбор vrmig
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(4) > span').should('contain.class', 'multiselect__option multiselect__option--group multiselect__option--disabled').click({force: true});//выбор cxr
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span').should('contain.class', 'multiselect__option multiselect__option--group multiselect__option--disabled').click({force: true});//выбор exr
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(6)').click();//выбор tiff
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(7)').click();//выбор tga
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(8)').click();//выбор bmp 
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(9)').click();//выбор vga
                cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__tags').click();
                    cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(9) > div > div.relative.v-input-box > div > div.multiselect__content-wrapper > ul > li:nth-child(10)').click();//выбор hdr  
  	

  	// Выбор тарифа Remote access
  		cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div:nth-child(3) > div > label:nth-child(2)').click();
  		// Выбор версии
        		cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(4) > div.relative.v-input-box > div > div.multiselect__tags').click();
        			cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(4) > div.relative.v-input-box > div > div.multiselect__content-wrapper').click();

        cy.contains(' Get access ');
  	
  	// Выбор тарифа Longterm rental
  		cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div:nth-child(3) > div > label:nth-child(3)').click();
  		// Выбор версии
        		cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(4) > div.relative.v-input-box > div > div.multiselect__tags').click();
        			cy.get('#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.software-selector > div:nth-child(4) > div.relative.v-input-box > div > div.multiselect__content-wrapper').click();

        cy.contains(' Request rental ');
  		                  	                  
    })
})

//#app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div > div.render-form > div > div:nth-child(1) > div.v-hinted-input__container > div > div.relative.v-input-box > div > input

// #app > div.flex.flex-col.account-wrapper > div.flex.flex-row.account-content > div.content.start-render > div.v-modal-container.select-file-modal > div.v-modal > div > div.v-modal-body > div > section > div.file-listing > div:nth-child(1)