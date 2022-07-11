import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCU9srkKV3Mf52D6wmLtuuaNE_xRgJVKFA",
  authDomain: "quizmaster-2.firebaseapp.com",
  projectId: "quizmaster-2",
  storageBucket: "quizmaster-2.appspot.com",
  messagingSenderId: "1073865854546",
  appId: "1:1073865854546:web:73df54aed493b0678dd98b"
};

const app = initializeApp(firebaseConfig);

export default app;