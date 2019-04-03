importScripts('https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.2/firebase-messaging.js');

var config = {
  apiKey: '',
  authDomain: 'searchlist-d4c0e.firebaseapp.com',
  databaseURL: 'https://searchlist-d4c0e.firebaseio.com',
  projectId: 'searchlist-d4c0e',
  storageBucket: 'searchlist-d4c0e.appspot.com',
  messagingSenderId: '180307103178'
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Hello World from SW!';
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});
