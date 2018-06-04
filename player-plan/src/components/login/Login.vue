<template>
  <div>
    <h2>Login</h2>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>



<script>
// ===
// Imports
// ===
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

// ===
// Component
// ===
export default {
  name: 'login',
  data(){
    return {};
  },
  mounted(){
    this.startFirebaseUI();
  },
  methods: {
    startFirebaseUI(){
      const uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      const ui = new firebaseui.auth.AuthUI(firebase.auth());

      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }
};
</script>



<style scoped>
  @import '../../../node_modules/firebaseui/dist/firebaseui.css';
</style>
