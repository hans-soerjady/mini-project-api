"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usersProperties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      referralCode: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profileImage: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      idCardNumber: {
        type: Sequelize.STRING,
      },
      creatorCompany: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      refpoints: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      hasReffed: {
        defaultValue: 0,
        type: Sequelize.BOOLEAN,
      },
    });
    // .then(() =>
    //   queryInterface.addConstraint("usersProperties", {
    //     type: "FOREIGN KEY",
    //     name: "FK_auths_usersProperties",
    //     fields: ["userId"],
    //     references: { table: "auths", field: "id" },
    //     onDelete: "no action",
    //     onUpdate: "no action",
    //   })
    // );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usersProperties");
  },
};
