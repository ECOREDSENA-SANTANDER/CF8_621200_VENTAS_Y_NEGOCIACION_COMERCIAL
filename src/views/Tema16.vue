<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 16
      h1 Recursos de apoyo

    .row.fondo33.p-5.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-end.mb-0
          .col-lg-8
            p.mb-4 En el contexto de la gestión comercial, los recursos de apoyo pueden incluir materiales publicitarios, herramientas digitales, plataformas tecnológicas, información de mercado o equipos de trabajo que contribuyen al desarrollo de las estrategias de promoción y ventas.
            .bg1.p-4
              h5.mb-3 Concepto
              p.mb-4 Los recursos de apoyo se refieren al conjunto de herramientas, materiales y medios que utilizan las empresas para facilitar la ejecución de estrategias comerciales, campañas de #[em marketing] y actividades de comunicación.
              p.mb-4 Estos recursos permiten mejorar la organización del trabajo, fortalecer la difusión de mensajes y optimizar los procesos relacionados con la promoción de productos o servicios.
              p.mb-0 Por ejemplo, en una campaña promocional una empresa puede utilizar recursos de apoyo como redes sociales, plataformas digitales, material publicitario, #[em software] de #[em marketing] o bases de datos de clientes para mejorar la comunicación con su público objetivo.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t16/1.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Tipos
    
    p.mb-4 Los recursos de apoyo pueden clasificarse según su función dentro de las actividades comerciales y de #[em marketing].

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 27.
          |  Tipos de recursos de apoyo
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Tipo de recurso
                th Descripción
            tbody
              tr.bgr
                td Recursos humanos
                td Personas que participan en el desarrollo de estrategias comerciales, como equipos de #[em marketing] o ventas.
              tr
                td Recursos tecnológicos
                td Herramientas digitales, #[em software], plataformas de comercio electrónico o redes sociales.
              tr.bgr
                td Recursos informativos
                td Datos, investigaciones de mercado, estadísticas y reportes comerciales.
              tr
                td Recursos materiales
                td Material publicitario, folletos, catálogos, afiches o equipos utilizados en campañas.
              tr.bgr
                td Recursos financieros
                td Presupuesto destinado a las actividades comerciales y promocionales.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Beneficios

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t16/2.png', alt='')
      .col-lg-8
        p.mb-4 El uso adecuado de recursos de apoyo ofrece diferentes beneficios para laempresas, ya que facilita la ejecución de estrategias comerciales y mejora lcomunicación con el mercado. Entre los principales beneficios se encuentran:
        .bg1.p-4
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Mejor organización:] permiten planificar y ejecutar las actividades comerciales de forma estructurada.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Mayor alcance:] facilitan que los mensajes lleguen a un mayor número de clientes.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Optimización de recursos:] permiten utilizar de manera eficiente el tiempo, el presupuesto y los materiales.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Mejor comunicación:] ayudan a transmitir información clara y efectiva al público objetivo.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Apoyo a la toma de decisiones:] proporcionan información y herramientas que facilitan la planificación estratégica.
          





</template>

<script>
export default {
  name: 'Tema16',
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
