describe('Búsqueda de productos en Amazon', () => {
  it('Debería buscar un producto y mostrar resultados', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('#twotabsearchtextbox').type("auriculares{enter}")
    cy.get('.s-main-slot').should('contain.text', 'auriculares')
  })

  it('Comprobar que los filtros funcionan', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('#twotabsearchtextbox').type('auriculares{enter}')
    cy.get('#s-all-filters-announce').click()
    cy.get('#s-refinements').contains('XIAOMI').click()
    cy.get('.s-main-slot').should('contain.text', 'XIAOMI')
    cy.get('.a-dropdown-prompt').click()
    cy.get('#s-result-sort-select_1').click()
  })
  it('Comprobar que se pueden añadir productos al carrito', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('.nav-search-field').type("auriculares{enter}")
    cy.get('#a-autoid-3 > .a-button-inner > [name="submit.addToCart"]').click()
    cy.get('#nav-cart').click()
  })

  it('Comprobar que se pueden eliminar productos del carrito', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('.nav-search-field').type("auriculares{enter}")
    cy.get('#a-autoid-3 > .a-button-inner > [name="submit.addToCart"]').click()
    cy.get('#nav-cart').click()
    cy.contains('Eliminar', { timeout: 10000 }).click({ force: true })
  })
  it('Comprobar que se puede cambiar la cantidad de producto en el carrito', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('.nav-search-field').type("auriculares{enter}")
    cy.get('#a-autoid-3 > .a-button-inner > [name="submit.addToCart"]').click()
    cy.get('#a-autoid-4 > .a-button-inner > [name="submit.addToCart"]').click()
    cy.get('#nav-cart').click()
    cy.get('[aria-label^="Aumentar la cantidad en uno"]').first().click({ force: true })
  })

  it('Comprobar que se puede navegar por categorias', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('#nav-hamburger-menu').click()
    cy.get('.hmenu-visible').contains('Electrónica').click()
  })

  it('Comprobar la validacion de busqueda sin resultados', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('.nav-search-field').type("asdfgh123456{enter}")
  })

  it('Comprobar la validacion de login incorrecto', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('#nav-link-accountList > .nav-a').click()
    cy.get('[name="email"]').type("QAtester@hotmail.com{enter}")
  })

  it('Comprobar la validacion de campos vacios', () => {
    cy.visit('https://www.amazon.es/')
    cy.get('[data-action="banner-reject-all"]', { timeout: 10000 }).click({ force: true })
    cy.get('#nav-link-accountList > .nav-a').click()
    cy.get('.a-button-input').click()
  })
  


})