<template>
    <div><!--Contenedor-->
        <!--<div id="carouselExampleSlidesOnly" class="jumbotron p-4 p-md-5 text-white rounded bg-dark">-->
        <div id="banner" class="banner">
            <div>
                <span class="banner-title">{{texto}}</span>
            </div>
        </div>
    </div><!--Contenedor-->
</template>

<script>

export default {
    name:'Slider',
    props:[
        'texto'
    ]
}
</script>

<style >
.banner{
    background-color: rgb(153, 153, 153);
    background-repeat: no-repeat;
    text-align: center;
    background-size: cover;
    position: relative;
    height: 300px;
    background-position: center;
    background: #304352;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-bottom: 4px solid rgb(185, 185, 185);
    margin-bottom: 20px;
    
}
.banner-title{
    color: #fff;
    font-size: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>