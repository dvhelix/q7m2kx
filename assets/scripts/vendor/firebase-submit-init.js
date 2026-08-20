// 스탯 제출 세션 전용 Firebase (프로젝트: gvs-helper / Firestore / SDK 11.6.0)
// ⚠️ 계산기 본체의 Firebase(dsm-guild-cal / Realtime DB / SDK 10.12.2)와 완전히 별개다.
//    노출 전역도 겹치지 않는다: 이쪽은 window._db / _doc / _getDoc ... , 계산기는 window._fb*
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, addDoc }
  from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// setDoc은 이미 import됨 — 닉네임 기반 덮어쓰기에 사용

const firebaseConfig = {
  apiKey: "AIzaSyCuQWOLVxFd3As5VrP1c_fwQBStjRSKW14",
  authDomain: "gvs-helper.firebaseapp.com",
  projectId: "gvs-helper",
  storageBucket: "gvs-helper.firebasestorage.app",
  messagingSenderId: "874842430221",
  appId: "1:874842430221:web:17e946067858a3cf9bae44"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

window._db            = db;
window._doc           = doc;
window._getDoc        = getDoc;
window._setDoc        = setDoc;
window._collection    = collection;
window._getDocs       = getDocs;
window._addDoc        = addDoc;
window._firebaseReady = true;
if(window._firebaseResolve) window._firebaseResolve();
