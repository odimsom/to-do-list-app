<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserService from '@/core/aplication/user_service'
defineOptions({
  name: 'LoginForm',
})

const router = useRouter()
const email = ref('')
const password = ref('')

const userService = new UserService()

const login = async () => {
  const result = userService.validateUserCredentials(email.value, password.value)
  if (result.IsSuccess) {
    router.push('/home')
  } else {
    console.log('Invalid credentials:', result.Errors)
  }
}
</script>
<template>
  <form @submit.prevent="login" class="section text-center">
    <h4 class="mb-4 pb-3">Log In</h4>
    <div class="form-group">
      <input
        v-model="email"
        type="email"
        name="email"
        class="form-style"
        placeholder="Your Email"
        id="email"
        autocomplete="on"
      />
    </div>
    <div class="form-group mt-2">
      <input
        v-model="password"
        type="password"
        name="password"
        class="form-style"
        placeholder="Your Password"
        id="password"
        autocomplete="on"
      />
    </div>
    <button type="submit" class="btn mt-4">submit</button>
    <p class="mb-0 mt-4 text-center">
      <a href="#0" class="link">Forgot your password?</a>
    </p>
  </form>
</template>
