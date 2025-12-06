// Configuración de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcFWy2y0GkLi8k1rxXbKtjLzIm1FP3sX8",
  authDomain: "proyectofinal-lopezcamilotto.firebaseapp.com",
  projectId: "proyectofinal-lopezcamilotto",
  storageBucket: "proyectofinal-lopezcamilotto.firebasestorage.app",
  messagingSenderId: "882359253968",
  appId: "1:882359253968:web:f2dbc4c9adb4b7e092d7d5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);