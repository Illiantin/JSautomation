describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://example.cypress.io/todo')
    })
  
    it('testich', () => {
        cy.request({
            method: 'GET',            // HTTP-метод (GET, POST, PUT, DELETE, ін.)
            url: 'https://jsonplaceholder.typicode.com/users/1',        // URL-шлях
            qs: {                     // Параметри запиту (query string)
            page: 1,
            limit: 10,
            },
            headers: {                // Заголовки запиту
            Authorization: 'Bearer your_token',
            },
            body: {                   // Тіло запиту для POST або PUT
            key: 'value',
            },
            form: true,               // Вказує, що тіло запиту має бути оброблене як форма
            failOnStatusCode: true,  // Вимикає автоматичне викидання помилок на невдачу
            timeout: 10000,           // Таймаут на запит (в мілісекундах)
            responseTimeout: 30000,   // Таймаут на отримання відповіді (в мілісекундах)
            retryOnNetworkFailure: true,  // Повторювати запит у разі проблем з мережею
            retryOnStatusCodeFailure: true,  // Повторювати запит у разі невдачі за HTTP-статусом
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            cy.log(response.status)
            // Тут ви можете виконати перевірки на отриману відповідь
        })
    })
})