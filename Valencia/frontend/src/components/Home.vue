<template>
    <div>
        <Slider texto="Bienvenido a Valencia App"></Slider>
        <div class="container-fluid">
            <div class="row">
                <img src="../assets/img/banner-home.jpg" alt="banner-home" class="banner-img">
            </div>
            <div class="row new-section">
                <div class="col">
                </div>
                <div class="col-5">
                    <h1>La mejor opccion en tiempos de cuarentena</h1>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row new-section">
                <div class="col">
                </div>
                <div class="col-5" style="heigth:400px; margin-right: 20px;">
                    <div class="row text-center text-row">
                        <h3>Variedad infinitas en productos y marcas</h3>
                    </div>
                    <div class="row text-center text-row">
                        <p>
                            Preparáte la puta que te reparió
                            Porque...
                            Los viernes de la jungla se irán a todo ojete
                            Para vivir una noche...
                            Con las mejores putas de la zona
                            No te la puedes perder remíl
                            Porque sino estas así andáte a la reconcha de la lora
                            Te esperamos 
                            Para que vivas una noche....
                            De la puta madre
                            En la jungla
                        </p>
                    </div>
                </div>
                <div class="col-5 full-col">
                    <div class="img-product">
                    </div>
                </div>
            </div>

            <div class="row new-section">
                <div class="col">
                </div>
                <div class="col-5">
                    <h1>Nuestras caracteristicas</h1>
                </div>
                <div class="col">
                </div>
            </div>

            <div class="row new-section">
                <div class="col">

                </div>
                <div class="col-2 card-product">
                    <h3>
                        Las mejores calificaciones
                    </h3>
                    <br>
                    <div class="card-icon">
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="col-2 card-product">
                    <h3>
                        Totalmete seguro en tus compras
                    </h3>
                    <div class="card-icon">
                        <i class="fa fa-shield-alt"></i>
                    </div>
                </div>
                <div class="col-2 card-product">
                    <h3>
                        Siempre con clientes satisfechos
                    </h3>
                    <div class="card-icon">
                        <i class="fa fa-smile-beam"></i>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        <!--<div class="row" style="height: 400px;">
        </div>-->
        
    </div>
</template>

<script>
import Slider from './Slider'

export default {
    name: 'Home',
    components:{
        Slider,
    }
}
</script>

<style>
.container-fluid{
    margin-top: -21px;
}
.banner-img{
    width: 100%;
    height: auto;
}
h1{
    font-size: 2.1rem;
    margin-top: 40px;
    padding: 9px 1px;
    border-bottom: 2px solid #aeafaf;
}
.new-section{
    margin-top: 60px;
}
.text-row{
    display: block;
}
.full-col{
    padding: 0px;
}
.img-product{
    margin-right: 20px;
    border-radius: 30px;
    box-shadow: 0px 9px 7px 0px rgba(0,0,0,0.15);
    height: 400px;
    background-size: cover;
    background-position: center;
    background-image: url(../assets/img/producto-1.jpg);

    animation: product-animation;
    animation-direction: normal;
    animation-timing-function: cubic-bezier();
    animation-duration: 20s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-play-state: running;
	
}

@keyframes product-animation {
    0%{
        background-image: url(../assets/img/producto-1.jpg);
    }
    8%{
        background-image: url(../assets/img/producto-1.jpg);
    }
    20%{
        background-image: url(../assets/img/producto-2.jpg);
    }
    28%{
        background-image: url(../assets/img/producto-2.jpg);
    }
    40%{
        background-image: url(../assets/img/producto-3.jpg);
    }
    48%{
        background-image: url(../assets/img/producto-3.jpg);
    }
    60%{
        background-image: url(../assets/img/producto-4.jpg);
    }
    68%{
        background-image: url(../assets/img/producto-4.jpg);
    }
    80%{
        background-image: url(../assets/img/producto-5.jpg);
    }
    88%{
        background-image: url(../assets/img/producto-5.jpg);
    }
    100%{
        background-image: url(../assets/img/producto-1.jpg);
    }
}
.card-product{
    color: white;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #243B55, #141E30);
    background: linear-gradient(to bottom, #243B55, #141E30);
    box-shadow: 0px 9px 7px 0px rgba(0,0,0,0.15);
    padding: 30px 20px;
    margin: 0px 30px;
    border-radius: 20px;
    transition: 400ms;
}
.card-product:hover{
    box-shadow: 0px 9px 7px 0px rgba(0,0,0,0.5);
    padding: 20px 10px;
    margin: 0px 40px;
}
.card-icon{
    margin-top: 20px;
}
.card-product .svg-inline--fa.fa-w-16, .card-product .svg-inline--fa.fa-w-18 {
    max-width: 80%;
    width: 80%;
    height: auto;
}
</style>