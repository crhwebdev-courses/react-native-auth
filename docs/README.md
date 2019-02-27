# OVERVIEW

A React Native project that creates a simple login form. This is for the Udemy course: The Complete React Native and Redux Course

# RUNNING

This project uses Firebase for authentication. To use this app,

1. create an application in Firebase and enable email/password authentication.
2. create a .config.js file in the root directory that exports an object with your configuration keys as follows:

```
export default {  API_KEY: 'your data here',
  AUTH_DOMAIN: 'your data here',
  DATABASE_URL: 'your data here',
  PROJECT_ID: 'your data here',
  STORAGE_BUCKET: 'your data here',
  MESSEGING_SENDER_ID: 'your data  here'
};

```
