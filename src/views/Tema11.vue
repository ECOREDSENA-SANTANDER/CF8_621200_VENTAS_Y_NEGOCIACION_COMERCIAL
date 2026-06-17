<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 11
      h1 ADN de marca
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t11/1.svg', alt='')
      .col-lg-8
        p.mb-4 El ADN de marca representa la esencia que define la identidad y personalidad de una marca. Está compuesto por los valores, principios y características que guían todas las acciones de comunicación y #[em marketing] de la empresa. Por ejemplo, la marca Nike se caracteriza por asociar su ADN con la superación, el rendimiento y la inspiración deportiva.
        p.mb-4 El ADN de marca permite mantener coherencia en la forma en que la organización se presenta ante sus públicos. Entre sus principales elementos se encuentran:
        .bg1.p-4.mb-0
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Propósito:] razón de ser de la marca.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Misión:] actividad principal que desarrolla la empresa en la actualidad.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Visión:] proyección futura de la organización.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Valores:] principios que orientan las acciones y decisiones de la marca.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Personalidad:] forma en que la marca se expresa y se comunica.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Identidad visual

    p.mb-5 La identidad visual corresponde al conjunto de elementos gráficos que representan visualmente a la marca. Estos elementos permiten que los consumidores reconozcan fácilmente una empresa o producto.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t11/2.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-4 Entre los principales componentes de la identidad visual se encuentran:
            br
            br
            ul.lista-ul.mb-0
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Logotipo.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Colores corporativos.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Tipografía.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Imágenes y estilos gráficos.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Diseño de materiales de comunicación.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Manual de identidad
    
    p.mb-4 El manual de identidad corporativa es un documento que establece las normas y lineamientos para el uso correcto de los elementos visuales de la marca.
    
    p.mb-4 Este manual garantiza coherencia en todos los materiales de comunicación de la empresa, como publicidad, redes sociales, empaques o documentos institucionales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 22.
          | Contenido de un manual de identidad
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Elemento
                th Función
            tbody
              tr.bgr
                td Uso del logotipo
                td Define la forma correcta en que debe aplicarse el logotipo de la marca, incluyendo sus versiones, tamaños permitidos, proporciones y espacios de seguridad para garantizar su correcta visualización.
              tr
                td Colores corporativos
                td Establece la paleta de colores oficiales de la marca y los códigos específicos (RGB, CMYK o HEX) que deben utilizarse para mantener coherencia visual en todos los materiales.
              tr.bgr
                td Tipografía
                td Determina las fuentes tipográficas oficiales que representan la identidad de la marca y que deben utilizarse en documentos, publicidad, medios digitales y comunicación institucional.
              tr
                td Aplicaciones gráficas
                td Presenta ejemplos de cómo se deben aplicar los elementos de la marca en diferentes soportes como papelería corporativa, redes sociales, publicidad, empaques y material promocional.
              tr.bgr
                td Normas de uso
                td Indica las reglas y restricciones sobre el uso de los elementos de la marca, mostrando ejemplos de aplicaciones correctas e incorrectas para evitar alteraciones que afecten la identidad visual.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Símbolos y emblemas
    
    p.mb-4 Los símbolos y emblemas son representaciones gráficas que forman parte de la identidad visual de una marca y permiten identificarla fácilmente ante el público. Pueden estar representados por logotipos, íconos o figuras asociadas con la empresa, los cuales ayudan a transmitir su personalidad y valores.

    p.mb-5 Su principal función es facilitar el reconocimiento visual de la marca y fortalecer su posicionamiento en la mente de los consumidores, ya que estos elementos se convierten en referentes visuales fáciles de recordar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/temas/t11/3.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Etiqueta

    .row.justify-content-center.align-items-end.mb-0
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t11/4.png', alt='')
      .col-lg-8
        p.mb-3 La etiqueta es el elemento informativo que se coloca en los productos para comunicar información relevante al consumidor.
        p.mb-3 La etiqueta puede incluir datos como:
        .bg1.p-4.mb-0
          ul.lista-ul.mb-3
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Nombre de la marca.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Ingredientes o componentes.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Fecha de vencimiento.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Instrucciones de uso.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Información legal o normativa.
          p.mb-0 Además de informar, la etiqueta también cumple una función comercial y visual, ya que puede influir en la decisión de compra.

</template>

<script>
export default {
  name: 'Tema11',
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
