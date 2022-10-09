<template>
    <div class="h-screen w-100 d-flex justify-center align-center">
        <Register />
    </div>
</template>

<script lang="ts" setup>
import { ELayout } from '~~/enums/layout.enum';
import Register from '../components/auth/Register.vue';

definePageMeta({ layout: ELayout.Default });
</script>