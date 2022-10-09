<template>
    <VForm
        v-model="register.isValid"
        :ref="register.formRef"
    >
        <VCard
            class="h-standart-center-card"
            :disabled="register.isProcessActive"
            :loading="register.isProcessActive"
        >
            <VCardTitle>{{ register.titleText }}</VCardTitle>
            <VCardText>
                <VTextField 
                    v-model="register.nickname"
                    :rules="register.nicknameRuleList"
                    label="Никнейм"
                    variant="outlined"
                />
                <VTextField
                    v-model="register.email"
                    :rules="register.emailRuleList"
                    label="Логин"
                    variant="outlined"
                />
                <VTextField
                    v-model="register.password"
                    :rules="register.passwordRuleList"
                    label="Пароль"
                    variant="outlined"
                />
                <AntiSpam
                    :code="register.antispam.code"
                    :source-code="register.antispam.sourceCode"
                    :is-active="register.antispam.isActive"
                />
            </VCardText>
            <VCardActions>
                <Link @click="register.goToMirrorPage">Уже есть аккаунт</Link>
                <VSpacer />
                <VBtn @click="register.onSubmit">
                    Создать аккаунт
                </VBtn>
            </VCardActions>
        </VCard>
    </VForm>
</template>

<script lang="ts" setup>
import Link from '../Link.vue';
import { RegisterService } from '../../services/auth/register.service';
const register = new RegisterService();
</script>

<style lang="scss" scoped>
@import 'assets/main';
</style>