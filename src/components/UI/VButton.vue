<template>
    <button 
        class="v-button"
        :class="{
            'v-button--wide': wide,
            'v-button--plain': plain,
            [`v-button--size-${size}`]: size,
            [`v-button--theme-${theme}`]: theme
        }"
        :disabled="disabled"
    >
        <slot/>
    </button>
</template>

<script setup>
    defineProps({
        theme: {
            type: String
        },
        size: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        wide: {
            type: Boolean
        },
        plain: {
            type: Boolean
        }
    });
</script>

<style>
    .v-button {
    appearance: auto;
    font-family: "Aqum";
    color: #224D93;
    border: 2px solid #224D93; 
    text-align: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #FCF6EB;
    height: 40px;
    width: 200px ;
}

    .v-button--wide {
        display: block;
        width: 100%;
    }

    .v-button:disabled {
        cursor: not-allowed;
        opacity: .6;
    }

    .v-button--theme-danger {
        background-color: #224D93;
        border-color: #224D93;

        color: #224D93;
    }

    .v-button--theme-primary {
        background-color: #FCF6EB;
        border-color: #224D93;

        color: #224D93;
    }

    .v-button--theme-primary:hover {
        background-color:#FCF6EB;
        border-color: #224D93;

        color: #224D93;
    }

    .v-button--theme-secondary {
        background-color:#FCF6EB;
        border-color: #224D93;

        color:#224D93;
    }

    .v-button--size-small {
        padding: 4px 6px;
        border-radius: 5%;
    }

    .v-button--size-medium {
        padding: 6px 8px;
    }

    .v-button--size-large {
        padding: 8px 10px;
    }

    .v-button--plain {
        background-color: transparent;
    }
</style>