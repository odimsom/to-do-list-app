<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UserService from '@/core/aplication/user_service'
import type User from '@/core/dominio/user'
defineOptions({
  name: 'RegisterForm',
})

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const userService = new UserService()

const register = async () => {
  const newUser: User = {
    name: name.value,
    email: email.value,
    passwordHash: password.value,
  }

  const validationResult = userService.validateUserCredentials(newUser.email, newUser.passwordHash)

  if (validationResult.IsSuccess) {
    console.log('User with this email already exists')
    return
  }

  const result = userService.createUser(newUser)
  if (result.IsSuccess) {
    router.push('/login')
  } else {
    console.log('Error registering user:', result.Errors)
  }
}
</script>
<template>
  <form @submit.prevent="register" class="section text-center">
    <h4 class="mb-4 pb-3">Sign Up</h4>
    <div class="form-group">
      <input
        v-model="name"
        type="text"
        name="name"
        class="form-style"
        placeholder="Your Full Name"
        id="name"
        autocomplete="off"
      />
      <i class="input-icon uil uil-user"></i>
    </div>
    <div class="form-group mt-2">
      <input
        v-model="email"
        type="email"
        name="email"
        class="form-style"
        placeholder="Your Email"
        id="email"
        autocomplete="off"
      />
      <i class="input-icon uil uil-at"></i>
    </div>
    <div class="form-group mt-2">
      <input
        v-model="password"
        type="password"
        name="password"
        class="form-style"
        placeholder="Your Password"
        id="password"
        autocomplete="off"
      />
      <i class="input-icon uil uil-lock-alt"></i>
    </div>
    <button type="submit" class="btn mt-4">submit</button>
  </form>
</template>
