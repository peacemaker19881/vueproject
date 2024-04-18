<template>
    <div id="Login">
      <h2>Login</h2>
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" required v-model="username">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" required v-model="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" required v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
      <p>username:{{ username }}</p>
      <p>Email:{{ email }}</p>
      <p>Password:{{ password }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        // Make API call to backend for login
        // Example using axios:
        // axios.post('/api/login', this.formData)
        //   .then(response => {
        //     // Handle successful login
        //   })
        //   .catch(error => {
        //     // Handle login error
        //   });
      }
    }
  };
  </script>
  
  <style>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #329c36;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .btn-login:hover {
    background-color: #0056b3;
  }
  </style>
