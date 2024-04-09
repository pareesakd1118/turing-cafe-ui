describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      body: [
        {
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
      },
      {
          "id": 2,
          "name": "Leta",
          "date": "4/5",
          "time": "7:00",
          "number": 2
      },
      {
          "id": 3,
          "name": "Pam",
          "date": "1/21",
          "time": "6:00",
          "number": 4
      },
      {
          "id": 4,
          "name": "Khalid",
          "date": "5/9",
          "time": "7:30",
          "number": 7
      }
      ]
    })
    .visit("http://localhost:3000/")
  });

  it("should display the exisitng reservations on the front page", () => {
    cy.get("h1").should("contain.text", "Turing Cafe Reservations")

    cy.get(".reservation").should("have.length", 4)
    cy.get(".reservation").first().contains("h3", "Christie")
    cy.get(".reservation").first().contains("p", "12/29")
    cy.get(".reservation").first().contains("p", "7:00pm")
    cy.get(".reservation").first().contains("p", "Number of Guests: 12")

    cy.get(".reservation").last().contains("h3", "Khalid")
    cy.get(".reservation").last().contains("p", "5/9")
    cy.get(".reservation").last().contains("p", "7:30pm")
    cy.get(".reservation").last().contains("p", "Number of Guests: 7")
  });

  it("should have a form which adds a new reservation to the page", () => {
    cy.get("form").should("be.visible")
    cy.get("input[name='name']").type("Pareesa").should("have.value", "Pareesa");
    cy.get("input[name='date']").type("11/18").should("have.value", "11/18");
    cy.get("input[name='time']").type("7:30").should("have.value", "7:30");
    cy.get("input[name='guests']").type("5").should("have.value", "5");
    cy.get(".submit-btn").click()
    cy.get(".reservation").should("have.length", 5)
    cy.get(".reservation").last().contains("h3", "Pareesa")
    cy.get(".reservation").last().contains("p", "11/18")
    cy.get(".reservation").last().contains("p", "7:30pm")
    cy.get(".reservation").last().contains("p", "Number of Guests:")
  });
  

})
