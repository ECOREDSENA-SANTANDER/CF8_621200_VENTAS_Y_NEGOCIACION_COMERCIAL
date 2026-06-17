<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 9
      h1 Estrategia de comunicación

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8
        p.mb-4 La estrategia de comunicación es un proceso mediante el cual las organizaciones planifican la forma en que transmitirán información sobre sus productos, servicios o marca al público objetivo. Esta estrategia permite coordinar los mensajes, seleccionar los medios adecuados y establecer acciones que faciliten una comunicación clara y efectiva con los consumidores.
        .cajon.color-secundario.p-lg-5.p-4.mb-0(data-aos="fade-left")
          p.mb-0 Una adecuada estrategia de comunicación contribuye al fortalecimiento de la imagen de la empresa, mejora la relación con los clientes y apoya las actividades de promoción y posicionamiento en el mercado.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t9/1.png', alt='')

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t9/2.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 #[b Concepto]
            br
            br
            p.mb-0 La estrategia de comunicación puede definirse como el conjunto de decisiones y acciones que una organización planifica para transmitir mensajes de manera organizada y coherente a su público objetivo. 
            br
            br
            p.mb-0 Su finalidad es garantizar que la información llegue al consumidor adecuado, utilizando los canales apropiados y con mensajes que permitan informar, persuadir o recordar la presencia de la marca en el mercado.

    p.mb-5 En el contexto comercial, esta estrategia se relaciona directamente con las actividades de marketing, ya que permite comunicar los beneficios de los productos o servicios y fortalecer el posicionamiento de la empresa frente a la competencia.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Tipos

    p.mb-4 Las empresas pueden aplicar diferentes tipos de estrategias de comunicación según los objetivos que desean alcanzar y el público al que se dirigen.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 20.
          | Tipos de estrategia de comunicación
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Tipo de estrategia
                th Descripción
            tbody
              tr.bgr
                td Estrategia informativa
                td Se enfoca en brindar información clara sobre productos, servicios o  características de la empresa.
              tr
                td Estrategia persuasiva
                td Busca influir en la decisión de compra del consumidor mediante argumentos y beneficios del producto.
              tr.bgr
                td Estrategia de recordación
                td Pretende mantener la marca presente en la mente del consumidor mediante mensajes constantes.
              tr
                td Estrategia digital
                td Utiliza plataformas digitales como redes sociales, sitios web o aplicaciones para difundir información comercial.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Componentes
    
    p.mb-4 Para diseñar una estrategia de comunicación efectiva es necesario considerar diversos elementos que permiten organizar el proceso de transmisión del mensaje hacia el público objetivo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 21.
          | Componentes de la estrategia de comunicación
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Componente
                th Descripción
            tbody
              tr.bgr
                td Objetivo de comunicación
                td Resultado que la empresa busca alcanzar mediante la transmisión del mensaje.
              tr
                td Público objetivo
                td Grupo de personas o segmento del mercado al que se dirige la comunicación.
              tr.bgr
                td Mensaje
                td Información o contenido que la empresa desea comunicar al público.
              tr
                td Canal de comunicación
                td Medio utilizado para difundir el mensaje, como redes sociales, medios digitales o publicidad.
              tr.bgr
                td Evaluación
                td Análisis de los resultados obtenidos para determinar la efectividad de la  estrategia.
        figcaption #[b Nota.] Adaptada de Kotler y Armstrong (2017).


</template>

<script>
export default {
  name: 'Tema9',
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
