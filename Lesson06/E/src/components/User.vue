<template>
    <div class="user">
        User {{ $route.params.id}}
        <router-link to='gold'>Gold</router-link>
        <router-link to='soldiers'>Soldiers</router-link>
        <router-view></router-view>
    </div>
</template>