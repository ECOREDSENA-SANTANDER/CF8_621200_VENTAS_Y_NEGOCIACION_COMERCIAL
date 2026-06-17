<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 14
      h1 Material publicitario
    
    p.mb-4 El material publicitario es el conjunto de recursos y piezas de comunicación que una empresa utiliza para promocionar sus productos, servicios o marca. Su función es transmitir mensajes de forma visual, escrita o audiovisual para informar, persuadir y captar la atención del público. En #[em marketing], puede presentarse en formatos impresos o digitales, según el medio y el objetivo de la campaña.

    .row.fondo3.p-5.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-end.mb-0
          .col-lg-8
            .tit.mb-5(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/sub.svg')
              h3.mb-0 Concepto
            p.mb-4 El material publicitario comprende las piezas que sirven como soporte del mensaje comercial, por ejemplo, folletos, carteles, anuncios digitales, catálogos, videos promocionales o publicaciones para redes sociales. Estos materiales ayudan a comunicar la propuesta de valor de la empresa y a reforzar su identidad visual ante los consumidores.
            .bg1.p-4
              p.mb-3 #[b Tipos]
              p.mb-4 De manera general, el material publicitario puede organizarse en tres grandes tipos:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Impreso:] folletos, volantes, afiches, catálogos, tarjetas o pancartas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Digital:] #[em banners], publicaciones en redes sociales, anuncios web, correos promocionales y piezas para páginas de internet.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Audiovisual:] videos promocionales, anuncios para televisión, #[em reels] o cuñas publicitarias.
              p.mb-0 Esta clasificación permite seleccionar el formato más adecuado según el público, el presupuesto y el canal de difusión. Los materiales impresos siguen siendo comunes en papelería, carteles y catálogos, mientras que los digitales tienen gran utilidad en redes y sitios web.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t14/1.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Clases
    
    p.mb-4 Las clases de material publicitario pueden diferenciarse según su finalidad dentro de la comunicación comercial. En la práctica, una misma campaña puede combinar varias de estas clases para lograr mayor impacto. Algunas de las más utilizadas son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 24.
          | Tipos y clases de material publicitario
        .tabla-a.tab2.mb-3
          table
            thead
              tr
                th Aspecto
                th Descripción
                th Ejemplo
            tbody
              tr.bgr
                td Material impreso
                td Piezas físicas utilizadas para promocionar productos o servicios.
                td Folletos, afiches, volantes, catálogos.
              tr
                td Material digital
                td Piezas publicitarias difundidas por internet o redes sociales.
                td #[em Banners], publicaciones, anuncios web.
              tr.bgr
                td Material audiovisual
                td Recursos que combinan imagen, sonido o video.
                td Videos promocionales, cuñas, #[em reels].
              tr
                td Material informativo
                td Su propósito es brindar información clara al consumidor.
                td Catálogo de productos.
              tr.bgr
                td Material persuasivo
                td Busca influir en la decisión de compra.
                td Anuncio con llamado a la acción.
              tr
                td Material promocional
                td Resalta descuentos o beneficios temporales.
                td Pieza de oferta de temporada.
              tr.bgr
                td Material institucional
                td Refuerza la identidad y valores de la empresa.
                td Video corporativo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Figura 3.
          | Clases de material publicitario
        .bg10.p-4
          img.img-t.img-a(src='@/assets/curso/temas/t14/2.png',alt='Infografía titulada “Clases de material publicitario”. Se presentan cinco tipos de material publicitario: informativo, que ofrece datos sobre productos o servicios; persuasivo, orientado a convencer al consumidor de elegir una marca; recordatorio, que mantiene la marca presente en la mente del público; promocional, que resalta descuentos u ofertas especiales; e institucional, enfocado en fortalecer la imagen y reputación de la empresa. Se incluye además la imagen de una persona utilizando un megáfono como representación de la comunicación publicitaria.')


</template>

<script>
export default {
  name: 'Tema14',
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
