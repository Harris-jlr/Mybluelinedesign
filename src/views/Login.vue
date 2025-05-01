<template>
  <section class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input v-model="username" type="text" placeholder="Username" class="w-full border rounded p-2" required>
        <input v-model="password" type="password" placeholder="Password" class="w-full border rounded p-2" required>
        <button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded w-full">Login</button>
      </form>
      <p v-if="error" class="text-red-500 mt-4 text-center">{{ error }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleLogin() {
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.username, password: this.password })
        })
            .then(response => {
            if (response.ok) return response.json();
            throw new Error('Invalid login');
            })
            .then(data => {
            if (data.success) {
                localStorage.setItem('isAuthenticated', 'true');
                this.$router.push('/admin/bookings');
            }
            })
            .catch(error => {
            this.error = 'Invalid username or password.';
            });
    }
  }
}
</script>
