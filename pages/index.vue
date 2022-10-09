<template>
    <div class="h-screen w-100 d-flex justify-center align-center">
        <Login />
    </div>
</template>

<script lang="ts" setup>
import { ELayout } from '../enums/layout.enum';
import Login from '../components/auth/Login.vue';

definePageMeta({ layout: ELayout.Default });
</script>