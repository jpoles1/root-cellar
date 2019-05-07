<template>
    <div>
        <h2>Login Options:</h2>
        <hr>
        <br>
        <a :href="$store.state.api_url + '/api/auth/google'">
            <img src="/img/google_login.png" />
        </a>
    </div>
</template>
