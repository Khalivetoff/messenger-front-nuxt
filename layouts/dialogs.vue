<template>
    <slot />
</template>

<script lang="ts" setup>
import { useGuard } from '~~/guards/guard';
import { AuthStoreService } from '~~/services/auth/authStore.service';
import { EGuard } from '~/enums/guard.enum';

const authStore = inject<AuthStoreService>(AuthStoreService.serviceName);
authStore.onAuthComplete(null);

!await useGuard(EGuard.Dialogs) && navigateTo('/');
</script>