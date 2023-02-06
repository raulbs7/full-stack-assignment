import * as path from "path";
import * as mongoose from "mongoose";
import { retrieveData } from "./retrieveData";
import axios from "axios";
var url =
  "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo";

// [DB Connection]

declare var MONGODB_URI: string;

/**
 * connectToDatabase
 * Configures the global MongoDB connection based on the provided secrets.
 *
 * @returns Promise<string>
 */
async function connectToDatabase(connectionUri: string) {
  return new Promise((resolve, reject) => {
    // From mongoose@6.x.x onwards useNewUrlParser, useUnifiedTopology,
    // useCreateIndex are deprecated and default to true
    mongoose
      .connect(connectionUri)
      .then(() => resolve(connectionUri))
      .catch((error: any) => {
        console.log(error);
        reject(`${connectionUri}: ${error}`);
      });
  });
}
connectToDatabase(MONGODB_URI);

// [Script execution]
const retrievedData = retrieveData();
console.debug(retrievedData);

console.log("Executing service...");
process.exit(0);
