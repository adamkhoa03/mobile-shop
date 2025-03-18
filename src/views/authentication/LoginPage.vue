<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AuthenticationService } from '@/views/authentication/services/authServices.ts';
import { showSnackbar } from '@/utils/composables/useSnackBar.ts';
import SnackBar from '@/components/base/SnackBar.vue';

const showPassword = ref(false);
const { t } = useI18n();
const router = useRouter();

const schema = object({
  email: string().required().email().label('Email'),
  password: string().required().label('Password')
});
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema)
});

const [email, emailAttr] = defineField('email');
const [password, passwordAttr] = defineField('password');

const onSubmit = handleSubmit(async (value) => {
  try {
    const response = await AuthenticationService.login(value);
    if (response) {
      localStorage.setItem('email', response.email);
      localStorage.setItem('firstName', response.firstName);
      localStorage.setItem('token', response.token);
      await router.push('/dashboard');
    }
  } catch (error) {
    console.log(error);
    showSnackbar('Đăng nhập không thành công!', 'error');
  }
});
</script>

<template>
  <div class="wrap-login d-flex align-center justify-center">
    <v-card class="pa-6" elevation="8" max-width="400">
      <v-card-title class="text-center text-h3">{{ t('login') }}</v-card-title>

      <v-card-text>
        <!-- Email -->
        <v-text-field
          v-model="email"
          v-bind="emailAttr"
          label="Email"
          variant="outlined"
          prepend-inner-icon="mdi-email"
          type="email"
          :error-messages="errors.email"
        />

        <!-- Password -->
        <v-text-field
          class="mt-1"
          v-model="password"
          v-bind="passwordAttr"
          :label="t('password')"
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          :error-messages="errors.password"
        />

        <!-- Login Button -->
        <v-btn block color="primary" class="mt-4" @click="onSubmit">{{ t('login') }}</v-btn>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn variant="text" color="secondary"> {{ t('register') }}</v-btn>
        <v-btn variant="text" color="secondary"> {{ t('forgotPass') }}</v-btn>
      </v-card-actions>
      <div class="d-flex justify-center">
        <base-change-language />
      </div>
    </v-card>
  </div>
  <snack-bar />
</template>

<style scoped lang="scss">
.wrap-login {
  min-height: 100vh;
  background: #2c92cf;
}
</style>
