import "./commands";

beforeEach(() => {
  // cy.intercept middleware to remove 'if-none-match' headers from all requests
  // to prevent the server from returning cached responses of API requests
  // cy.intercept(
  //   { url: "https://www.demoblaze.com/**", middleware: true },
  //   (req) => delete req.headers["if-none-match"]
  // );
});
