<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 Mezcla de mercadeo
    
    p.mb-5 Reúne un conjunto de variables que las empresas utilizan para diseñar estrategias orientadas a satisfacer las necesidades del mercado y alcanzar objetivos comerciales. Estas variables permiten estructurar la oferta de valor de una organización y orientar las decisiones relacionadas con productos, precios, distribución y promoción.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content.align-items
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/t4/1.png', alt='')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg44.mb-0.p-lg-5.p-4
              .bg5.p-2.mb-4
                h4.mb-0.text-white.ps-3.pe-3 Concepto
              p.mb-0 La mezcla de mercadeo, también conocida como #[em marketing mix], es el conjunto de herramientas estratégicas que las empresas utilizan para posicionar sus productos o servicios en el mercado y satisfacer las necesidades de los consumidores. Tradicionalmente se compone de cuatro variables fundamentales conocidas como las 4P: producto, precio, plaza y promoción.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Variables 4P (producto, precio, plaza y promoción)
    
    p.mb-4 Las variables de la mezcla de mercadeo permiten a las empresas diseñar estrategias comerciales integrales para satisfacer las necesidades del mercado.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Variables de la mezcla de mercadeo
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Variable
                th Descripción
            tbody
              tr.bgr
                td Producto
                td Bien o servicio que la empresa ofrece al mercado para satisfacer una necesidad o deseo del consumidor.
              tr
                td Precio
                td Valor monetario que el cliente debe pagar para adquirir el producto o servicio.
              tr.bgr
                td Plaza (distribución)
                td Canales y medios utilizados para que el producto llegue al consumidor final.
              tr
                td Promoción
                td Conjunto de actividades de comunicación utilizadas para informar, persuadir y recordar al consumidor sobre el producto o servicio.
        figcaption #[b Nota.] Adaptada de Kotler y Armstrong (2017).


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
