'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {


        //  ----------   Authorization   ----------
    await queryInterface.createTable('Authorization', {  //  название таблицы
      id: { // надо или нет | где надо
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING(125),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(125),
        allowNull: false
      }
    });

    //  ----------   Registration  ----------
    await queryInterface.createTable('Registration', {  //  название таблицы
      id: { // надо или нет | где надо
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING(125),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      middleName: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      family: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: { // надо или нет | где надо
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: { // надо или нет | где надо
        allowNull: false,
        type: Sequelize.DATE
      }
    });

       //  ----------  User data gettings   ----------
    await queryInterface.createTable('serDataGettings', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING(125),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(125),
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      middleName: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      family: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(125),
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      workingPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logotype_link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: { // надо или нет | где надо
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


        //  ----------  WebSocket exchange description  ----------
    await queryInterface.createTable('webSocketExchangeDescription', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      targetUser: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

       //  ----------  User subscription х3  ----------
    await queryInterface.createTable('userSubscription', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      targetUser: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      roomID: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('userSubscription2', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      targetUser: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('userSubscription3', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      targetUser: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


      //  ----------  Sending message to room   ----------
    await queryInterface.createTable('sendingMessageToRoom', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


     //  ----------  Sending message From server   ----------
    await queryInterface.createTable('sendingMessageFromServer1', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      messageID: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('sendingMessageFromServer2', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      messageID: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('sendingMessageFromServer3', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      messageID: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('sendingMessageFromServer4', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      messageID: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    //  ----------  Initiate call  From client ----------

    await queryInterface.createTable('initiateCallFromClient1', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('initiateCallFromClient2', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('initiateCallFromClient3', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });



//  ----------  Initiate call  From server ----------

    await queryInterface.createTable('initiateCallFromServer1', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('initiateCallFromServer2', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      user: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('initiateCallFromServer3', {  //  название таблицы
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
       content: {
         type: Sequelize.STRING(125),
         allowNull: false,
      },
      user: {
        type: Sequelize.STRING(125),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};

// https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types