
describe("Zootopia Final Quiz", () => {

    beforeEach(() => {
  
      cy.visit("https://zootopia.ge/ka")
      cy.viewport(1500, 1200)
      cy.wait(6000)
  
    })
  
  
  it("რეგისტრაცია ვალიდური მონაცემებით", () => {
    // 1. გახსენი Google chrome-ს ბრაუზერში საიტი "https://zootopia.ge/ka"
    // 2. მარჯვენა ზედა კუთხეში დააჭირე  "შესვლის" აიქონს
    cy.get(".iprof").click()
  
    // 3. დააჭირე "გაიარეთ ავტორიზაციას"
    cy.get(".input-shablon > p > a").click()
  
    /* 4. შეავსე ყველა სავალდებულო ველი: სახელი/გვარი, ელ.ფოსტა,პირადი ნომერი, 
    ტელეფონი, პაროლი, პაროლის განმეორებას და მონიშნე "ვეთანხმები წესებს და პირობებს" აიქონი*/
    let random = Math.random()
    let email = "tatakh" + random + "@gmail.com"
    let ID = Math.floor(Math.random() * 100000000000)
    let phone = Math.floor(Math.random() * 1000000000)
  
    cy.get(":nth-child(1) > .ismile").type("Tata Kh")
  
    cy.get(":nth-child(2) > .imail").type(email)
    cy.get(".ipir").type(ID)
    cy.get(":nth-child(4) > .itel").type(phone)
    cy.get(":nth-child(5) > .ipass").type("Tatushkebi123")
    cy.get(".reg-form-left > :nth-child(6) > .ipass").type("Tatushkebi123")
    cy.get(".etx").click({ force: true })
  
    //დააჭირე ღილაკს "რეგისტრაცია"
    cy.get(".regsub").click()
   //დააჭირე "Go home" ღილაკს
    cy.get(".bg-transparent").click()
  
  })   
  
  

  
  it("რეგისტრაცია ელ.ფოსტის გარეშე", () => {
    // 1. გახსენი Google chrome-ს ბრაუზერში საიტი "https://zootopia.ge/ka"
    // 2. მარჯვენა ზედა კუთხეში დააჭირე  "შესვლის" აიქონს
    cy.get(".iprof").click()
  
  // დააჭირე "გაიარეთ რეგისტრაცია" 
  cy.get('.input-shablon > p > a').click()
  
  /*  შეავსე ყველა სავალდებულო ველი: სახელი/გვარი, პირადი ნომერი, 
  ტელეფონი, პაროლი, პაროლის განმეორებას დატოვე ელ.ფოსტის შესაყვანი ველი ცარიელი */
  let random = Math.random()
  let ID = Math.floor(Math.random() * 100000000000)
  let phone = Math.floor(Math.random() * 1000000000)
  
  cy.get(":nth-child(1) > .ismile").type("Tata Kh")
  cy.get(":nth-child(2) > .imail").clear()
  cy.get(".ipir").type(ID)
  cy.get(":nth-child(4) > .itel").type(phone)
  cy.get(":nth-child(5) > .ipass").type("Tatushkebi123")
  cy.get(".reg-form-left > :nth-child(6) > .ipass").type("Tatushkebi123")
  
  //მონიშნე "ვეთანხმები წესებს და პირობებს" აიქონი
  cy.get(".etx").click({ force: true })
  
  //დააჭირე ღილაკს "რეგისტრაცია"
  cy.get(".regsub").click()
  //  შეავსე ყველა სავალდებულო ველი გარდა "ელ.ფოსტისა" და დააჭირე "ვეთანხმები წესებსა და პირობებს"
  
  })
  


  
  
  it("ავტორიზაცია ვალიდური მონაცემებით", () => {
    // 1. გახსენი Google chrome-ს ბრაუზერში საიტი "https://zootopia.ge/ka"
    // 2. მარჯვენა ზედა კუთხეში დააჭირე  "შესვლის" აიქონს
    cy.get(".iprof").click()
  
  //3.შეიყვანე ვალიდური ელ.ფოსტა 
  cy.get(':nth-child(5) > .imail').type("maritakhinchigashvili@gmail.com")
  
  //4.შეიყვანე ვალიდური  პაროლი 
  cy.get('.ipass').type("Sikvaruli999")
  
  //5. დააჭირე ღილაკს "ავტორიზაცია"
  cy.get('.avtorization > .input-shablon > .form-button').click()
  
  //დარწმუნდი, რომ ავტორიზაციის გავლის შემდეგ ვებგვერდის მრჯვენა ზედა კუთხეში გამოჩნდება გრაფა "ჩემი გვერდი"
  cy.get('.srch-cart-prof > .iprof > p').should("be.visible")
  
  })
  
  
  


  it("კალაში დამატება კალათის აიქონის გამოყენებით", () => {
    // 1. გახსენი Google chrome-ს ბრაუზერში საიტი "https://zootopia.ge/ka"
    /*2. მთავარ გვერდზე არსებული კატალოგიდან აირჩიე კატეგორია ძაღლი
     და დააჭირე ღილაკს “პროდუქციის ნახვა”*/
     cy.get('.pug > .seepro').click()
  
     //აირჩიე სამი ნებისმიერი პროდუქტი “კალათის აიქონის” ღილაკზე დაჭერით 
     cy.get(':nth-child(1) > .price-cart > .product-cart').click()
     cy.get(':nth-child(11) > .price-cart > .product-cart').click()
     cy.get(':nth-child(13) > .price-cart > .product-cart').click()
  
    //	დარწმუნდი რომ  ვებგვერდის მარრჯვენა ზედა კუთხეში მდებარე "კალათის" აღმნიშვნელ აიქონს დაეწერა ციფრი სამი 
    cy.get('.icart > #cart-items-count').should('be.visible')
  
    //	დააკლიკე "კალათის" აღმნიშვნელ აიქონს
    cy.get('.icart').click()
  
     //	დარწმუნდი რომ კალათაში დამატებული პროდუქტების  რაოდენობა ნამდვილად ემთხვევა არჩეული პროდუქტების რაოდენობას
     cy.get('.cart-list > :nth-child(1)').should('be.visible')
     cy.get('.cart-list > :nth-child(2)').should('be.visible')
     cy.get('.cart-list > :nth-child(3)').should('be.visible')
  
  })
  

  
  
  
  it("კალათიდან პროდუქტის წაშლა `წაშლის` აიქონს გამოყენებით", () => {
    // 1. გახსენი Google chrome-ს ბრაუზერში საიტი "https://zootopia.ge/ka"
    /*2. მთავარ გვერდზე არსებული კატალოგიდან აირჩიე კატეგორია ძაღლი
     და დააჭირე ღილაკს “პროდუქციის ნახვა”*/
     cy.get('.pug > .seepro').click()
  
     //აირჩიე სამი ნებისმიერი პროდუქტი “კალათის აიქონის” ღილაკზე დაჭერით 
     cy.get(':nth-child(1) > .price-cart > .product-cart').click()
     cy.get(':nth-child(11) > .price-cart > .product-cart').click()
     cy.get(':nth-child(13) > .price-cart > .product-cart').click()
  
    //	დარწმუნდი რომ  ვებგვერდის მარრჯვენა ზედა კუთხეში მდებარე "კალათის" აღმნიშვნელ აიქონს დაეწერა ციფრი სამი 
    cy.get('.icart > #cart-items-count').should('be.visible')
  
    //	გადადი კალათის გვერდზე "კალათის" აღმნიშვნელ აიქონზე დაკლიკებით
    cy.get('.icart').click()
  
  // პირველი პროდუქტის სურათის მარჯვენა ზედა კუთხეში დააკლიკე "წაშლის" აიქონს
  cy.get(':nth-child(1) > .clear > a').click()
  
  
  // დარწმუნდი, რომ კალათის გვერდი დარეფრეშდება და მხოლოდ ორი ნივთი იქნება დარჩენილი.
  
  cy.get('.cart-list > :nth-child(1)').should('be.visible')
  cy.get('.cart-list > :nth-child(2)').should('be.visible')
  
  })
  
  
  
  
  
  
  })