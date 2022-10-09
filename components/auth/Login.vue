<template>
    <VForm
        v-model="login.isValid"
        :ref="login.formRef"
    >
        <VCard
            class="h-standart-center-card"
            :disabled="login.isProcessActive"
            :loading="login.isProcessActive"
        >
            <VCardTitle>{{ login.titleText }}</VCardTitle>
            <VCardText>
                <VTextField
                    v-model="login.email"
                    :rules="login.emailRuleList"
                    label="Логин"
                    variant="outlined"
                />
                <VTextField
                    v-model="login.password"
                    :rules="login.passwordRuleList"
                    label="Пароль"
                    variant="outlined"
                />
                <AntiSpam
                    v-model:code="login.antispam.code"
                    :source-code="login.antispam.sourceCode"
                    :is-active="login.antispam.isActive"
                />
            </VCardText>
            <VCardActions>
                <Link @click="login.goToMirrorPage">Создать аккаунт</Link>
                <VSpacer />
                <VBtn @click="login.onSubmit">
                    Войти
                </VBtn>
            </VCardActions>
        </VCard>
    </VForm>
</template>

<script lang="ts" setup>
import Link from '../Link.vue';
import { LoginService } from '../../services/auth/login.service';
import AntiSpam from './AntiSpam.vue';
const login = new LoginService();
</script>

<style lang="scss" scoped>
@import 'assets/main';
</style>