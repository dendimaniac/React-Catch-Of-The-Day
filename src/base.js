import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3f3Lqb-5Hq26RFRC-fvwZ7PVvxPLpT3g",
  authDomain: "catch-of-the-day-2695b.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-2695b.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
