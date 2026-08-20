    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getDatabase, ref, set, get, child, goOffline, goOnline } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

    // =====================================================================
    // 🔧 Firebase 설정: 본인 프로젝트 config로 교체하세요
    // Firebase Console → 프로젝트 설정 → 내 앱 → SDK 설정 및 구성
    // =====================================================================
    const firebaseConfig = {
      apiKey: "AIzaSyBaQHnzUeevHKGxj1SAVA6OaxZ4hD_JMR0",
      authDomain: "dsm-guild-cal.firebaseapp.com",
      databaseURL: "https://dsm-guild-cal-default-rtdb.firebaseio.com",
      projectId: "dsm-guild-cal",
      storageBucket: "dsm-guild-cal.firebasestorage.app",
      messagingSenderId: "441941847320",
      appId: "1:441941847320:web:efe3e56f742e9bc82c826d"
    };

    const app = initializeApp(firebaseConfig);
    // getDatabase()는 즉시 호출하지 않음 — 저장/불러오기 시점에만 연결

    // Firebase 유틸 함수를 전역으로 노출
    window._fbApp = app;
    window._fbGetDatabase = getDatabase;
    window._fbRef = ref;
    window._fbSet = set;
    window._fbGet = get;
    window._fbChild = child;
    window._fbGoOffline = goOffline;
    window._fbGoOnline = goOnline;
    window._fbReady = true;
    console.log('[Firebase] SDK 준비 완료 (DB 연결은 사용 시점에)');
