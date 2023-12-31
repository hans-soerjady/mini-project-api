// CONTOH
// const accountsController = require("./accounts")

// module.exports = {
//     accountsController
// }

const eventsController = require("./events");
const categoriesController = require("./categories");
const authsController = require("./auths");
const postsController = require("./posts");
const forgottenController = require("./forgotten");
const pictureController = require("./picture");
const citiesController = require("./cities")
const transactionController = require("./transactions")
const ticketController = require("./tickets")
const promotorController = require("./promotor")
module.exports = {
  eventsController,
  categoriesController,
  authsController,
  postsController,
  forgottenController,
  pictureController,
  transactionController,
  citiesController,
  promotorController,
  ticketController
}