const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

export const verifyIdToken = (Token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://najmat-b248e-default-rtdb.firebaseio.com/"
        });
        
    }
}

return admin
        .auth()
            .verifyIdToken(token)
                .catch((error) => {
                throw error
}
    );