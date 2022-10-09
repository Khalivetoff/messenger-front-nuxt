<template>
    <a class="h-link">
        <slot></slot>
    </a>
</template>

<style scoped lang="scss">
.h-link {
    color: #1867c0 !important;
    cursor: pointer;
    user-select: none;

    &:hover {
        text-decoration: underline;
    }
}
</style>