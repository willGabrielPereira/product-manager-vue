<template>
    <header>
        <div class="bg-cyan">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
