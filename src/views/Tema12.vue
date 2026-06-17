<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 12
      h1 #[em Branding]

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t12/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-4 El #[em branding] es el proceso mediante el cual una empresa construye y gestiona su marca con el objetivo de crear una identidad clara y diferenciada en el mercado. A través del branding se desarrollan elementos visuales, comunicativos y emocionales que permiten que los consumidores identifiquen, recuerden y confíen en una marca.
            br
            br
            p.mb-0 El #[em branding] no se limita únicamente al logotipo o al diseño visual, sino que también incluye la forma en que la marca se comunica, los valores que transmite y la experiencia que ofrece a sus clientes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4.fd3(titulo="Concepto")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                p.mb-4 El #[em branding] se refiere al conjunto de estrategias y acciones orientadas a construir, posicionar y fortalecer una marca en la mente de los consumidores. Su objetivo es generar reconocimiento, confianza y una conexión emocional con el público.
                p.mb-lg-4.mb-0 Una estrategia de #[em branding] busca que la marca sea fácilmente identificable y que se diferencie de sus competidores dentro del mercado. 
                img.d-none.d-lg-block(src='@/assets/curso/temas/t12/2.png', alt='')
          .p-lg-5.p-4.fd3(titulo="Diseño")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.mb-0
                  .col-lg-6.mb-0
                    p.mb-4 El diseño de marca corresponde al desarrollo de los elementos visuales que representan a una empresa. Estos elementos permiten transmitir la personalidad de la marca y facilitar su reconocimiento. Entre los aspectos más importantes del diseño de marca se encuentran:
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
                  .col-lg-6.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t12/3.png', alt='')
          .p-lg-5.p-4.fd3(titulo="Elementos")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                p.mb-4 El #[em branding] se compone de varios elementos que permiten construir una identidad sólida. Estos elementos permiten construir una identidad de marca coherente y facilitar el reconocimiento de la empresa por parte de los consumidores.
                .titulo-sexto.mb-4
                  h5 Tabla 23.
                  | Elementos del #[em branding]
                .tabla-a.tab1.mb-3
                  table
                    thead
                      tr
                        th Elemento
                        th Función
                    tbody
                      tr.bgr
                        td Nombre de marca
                        td Permite identificar y diferenciar una empresa o producto dentro del mercado.
                      tr.bg-white
                        td Logotipo
                        td Representación visual que facilita el reconocimiento inmediato de la marca.
                      tr.bgr
                        td Colores corporativos
                        td Conjunto de colores que identifican visualmente la marca y generan recordación.
                      tr.bg-white
                        td Tipografía
                        td Estilo de letra utilizado para representar el nombre de la marca y transmitir su personalidad.
                      tr.bgr
                        td Mensaje o eslogan
                        td Frase que comunica el propósito o valores de la marca.
                figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Estructura

    p.mb-4 La estructura del #[em branding] se refiere a la forma en que se organizan y relacionan los diferentes elementos de la marca para crear una identidad coherente. Esta estructura suele incluir:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content.align-items-center.mb-0
          .col-lg-8.pe-lg-0
            .bg2.p-4.pe-lg-5.mb-0
              ul.lista-ul.mb-lg-5.mt-lg-5.pe-lg-5.mx-lg-2.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Identidad de marca.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Valores y propósito.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Comunicación de marca.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Experiencia del cliente.
          .col-lg-5.mnl-1.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t12/4.png', alt='')

    .titulo-linea.mb-4(data-aos="fade-right")
      h3.mb-0.ps-2.pe-2 Posicionamiento en el mercado

    p.mb-5 Cuando estos elementos se integran correctamente, la marca logra transmitir un mensaje claro y consistente.

    .row.fondo33.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .tit.mb-5(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/sub.svg')
              h3.mb-0 Beneficios
            p.mb-4 El #[em branding] aporta múltiples beneficios para las empresas y organizaciones, entre ellos:
            .bg1.p-4
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Mejora el reconocimiento de la marca.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Genera confianza y credibilidad en los consumidores.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Permite diferenciarse de la competencia.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Favorece la fidelización de clientes.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Contribuye al posicionamiento en el mercado.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t12/5.png', alt='')


</template>

<script>
export default {
  name: 'Tema12',
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
