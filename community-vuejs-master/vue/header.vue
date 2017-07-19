<template>
    <header>
        <nav class="h_nav">
            <a href="./index.html"><img src="img/logo.png" alt=""></a>
            <ul>
                <li v-for="list in lists">
                    <a href="#">{{list}}</a>
                </li>
            </ul>
            <a href="/login.html"></a>
        </nav>
    </header>
</template>
<script>
    module.exports ={
        data: ()=>{
            return {
                lists: ['Questions', 'Know-how', 'Meet']
            }
        }
    }
</script>