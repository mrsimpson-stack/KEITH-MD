/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VVa2+jOBT9Kyt/bWbDGxKp0hAgCQ3kRUJCV6uVAwZMeBpDSkf57yuadltpdrpdPlnGvvfce885/gHyAtdogTow/gFKgltIUb+kXYnAGEyaMEQEDEAAKQRjsNLsumI3x3iIL/ny2PDBHdw0ksx6yaNhmZeCk9zqFMbp/HIPrgNQNqcU+58ENAJ2f+HunvyySzVvVHL1IVsIuLPD4qD7CTSHUpgTftto5j249hEhJjiPjDJGGSIwXaBuDTH5Gnx7qs7FyvPTOytDwwco6mxBpOGGmcXGTFYsd6U0neXbfOZ/Db6bIEnAlTuXvcKLZ7vDhqSXarjP1o7q7Zfz5zuj8rZbI8L2DX6NoxwFZoByimn35b4jowjtqt0/N/kT8aDg7R5UKeWIFM1spdNInEAVbVf1PvO+Bhwpz57FEdSyArM+i+wqDvhtSSNoOzv4JG+0Q2dKJXXzqPgIfE3euHL+P32Hc0F0aSjbmns4DU+toNfkWKquXZybx+PoYKWiIhxSvTsWX4N/MXN5WE+0IZTn5po91rVfcc1pOpe0iodKlxxGur4oFUv7AB/ShnyGcoR0LWtxeRTK2cL0NGGXuFzuNUa4SPkJnz3mlrVbrw20UZCx2bjech0Wsbm8C2E12+yflWWyPxFGM51jSiwvIew0xpv7l4rOqDMDMGavA0BQhGtKIMVF3u8JzADAoHWQTxB96S6QaCHv22ild3YqLhM27iZa7ATGkCSjLhNDeeQm3T4OYny5BwNQksJHdY2COa5pQTob1TWMUA3Gf7wMqq+ZoKyg6AEHYAw4UZIZRZREnmW+179fYkhrWJa/54iCAQhJkdkIjClp0AC8XBixqq5pmq4q8oSdCgKniYLOTw11yhnyVOf6CrNb0h3OUE1hVoIxK4uMKIgsx17/HIAcPdEbffqieXYAQkxqus+bMi1g8Matt5/Q94smp06X+1q/QASMP2wjSnEe1X1lTQ6JH+MWaX0dYBzCtEbXAQhQi33UxwMFq6/+msDGEaSGbmvdcOvR5NJ3Li7y2xH5dAqhrCjfJMgp34RA4b4pgS9+8xnBF09IVBDLgL4dN+X2d35JJF7yItaJJF5mYaY7ZCUe9UX4oFrKjd43BiCCgrcun6B/bspdcUb5Z2bJ3DFecZDdWbt+VPTQmPDVTFPzR9v8EPfGLDD+8e6WWhH08ZYP3lx/2E1AP60+z09sGEs/8yGH/WHgmPbaWS1/2xnaHAxA+nKX5WROYkSRY0bySObH0vd+//rPnPokAaIQpzUYA81s1e60N4xFnvK2OZupm0jVIhW8z/VNpjcduGy7f95l87nfjAKM3WczCYeNdXCKzhUSvJloOi4TH8Xd+f5fgoAxwAbZNpLAz2w4W5b11sBhIDznJ6dGe3duFna5b811rKk8zJs1vMSI2Q2HQhO3otQekHwUR86iQtTxuoXHZTrP+UO91/Qbvz4ms3JTJMMkTphEq5JYKVNmG53sRV2MZlWnGsZ0mUGRUdeTxLc8yj20fnOcPVBn0j4e1Goh74qnYO09Watdt5RMCbatG78ayIuBpa8PB37V9o2NIUYvPvw6qP+a57sumOvgQ4hXY/8F9yZucGJtRoyfeKs9ekXqdyY/lDF7ruwUmcJZ3URC5fHzwi/BtRd8mUIaFiQDY1BnJwgGgBRNr1ozD4tPMmnq3jSiW9UprKn67gQ/mwujMLdTa1KUc1jHfQPWrBeHPck7tSwdCumbsQC1/6zEANe/AUo73sz6CAAA';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Simpson tech';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '256708565310';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
