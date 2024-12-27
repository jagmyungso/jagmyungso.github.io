import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

export default {
  app: {},
  db: {},
  init: function(){
    if(!document.firebaseManager){
      const firebaseConfig = {
        apiKey: "AIzaSyADpVZ4q9gjJYQFXtNg_GcrYXuozwbx4A4",
        authDomain: "baby-name-generator-4e813.firebaseapp.com",
        projectId: "baby-name-generator-4e813",
        storageBucket: "baby-name-generator-4e813.firebasestorage.app",
        messagingSenderId: "1014560435384",
        appId: "1:1014560435384:web:12168329069c440ed2984d",
        measurementId: "G-GW3VH10VBP",
        databaseURL: "https://baby-name-generator-4e813-default-rtdb.firebaseio.com/",
      };

      this.app = initializeApp(firebaseConfig);
      this.db.db = getDatabase(this.app);
      this.db.ref = ref;
      this.db.set = set;
      this.db.onValue = onValue;
      document.firebaseManager = this;
    }
  },
}