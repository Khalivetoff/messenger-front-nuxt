<template>
    <VRow
        v-if="isActive"
        class="align-center"
    >
        <span>{{ sourceCode }}</span>
        <VTextField
            v-model="internalCode"
            variant="solo"
            :rules="AntiSpamService.getRuleList(sourceCode)"
        />
    </VRow>
</template>

<script lang="ts" setup>
import { AntiSpamService } from '~~/services/antiSpam.service';


const props = defineProps<{
    code: string;
    sourceCode: string;
    isActive: boolean;
}>();

const emits = defineEmits<{
    (e: 'update:code', value: string);
}>();

const internalCode = computed({
    get() {
        return props.code;
    },
    set(code: string) {
        emits('update:code', code);
    },
})
</script>