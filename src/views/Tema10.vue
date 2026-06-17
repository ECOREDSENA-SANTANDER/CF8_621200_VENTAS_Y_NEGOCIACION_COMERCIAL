<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 10
      h1 Marca y construcción de identidad

    .row.fondo3.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-end.mb-0
          .col-lg-8
            p.mb-4 La marca constituye uno de los activos más importantes de una organización, ya que representa la forma en que una empresa, producto o servicio es percibido por el público. No se limita únicamente al nombre o al logotipo, sino que incluye valores, emociones, experiencias y percepciones que los consumidores asocian con la empresa. La construcción de identidad de marca implica desarrollar elementos visuales, conceptuales y simbólicos que permitan diferenciar a la organización dentro del mercado y fortalecer su posicionamiento. Una identidad de marca sólida facilita el reconocimiento, genera confianza y contribuye a la fidelización de los clientes.
            .bg-white.p-4
              p.mb-2 #[b Concepto]
              p.mb-4 La marca es un signo distintivo que permite identificar y diferenciar un producto, servicio o empresa dentro del mercado. Puede estar compuesta por un nombre, símbolo, diseño, logotipo o una combinación de estos elementos.
              p.mb-4 Además de identificar, la marca cumple funciones importantes como:
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Diferenciar productos frente a la competencia.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Facilitar el reconocimiento por parte del consumidor.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Generar confianza y credibilidad.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Crear valor y posicionamiento en el mercado.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t10/1.png', alt='')


</template>

<script>
export default {
  name: 'Tema10',
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
