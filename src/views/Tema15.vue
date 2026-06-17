<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 15
      h1 #[em Brief] (documento resumen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t15/1.svg', alt='')
      .col-lg-8
        p.mb-4 El #[em brief] facilita la coordinación entre las áreas de #[em marketing], diseño, ventas y comunicación, ya que permite comprender de forma clara los objetivos de la campaña, el público al que se dirige, el mensaje que se desea transmitir y los recursos disponibles para su ejecución. En el contexto de las campañas promocionales y estrategias de marca, el #[em brief] funciona como una guía que orienta la planificación y el desarrollo de las actividades comerciales.
        .bg1.p-4.mb-0
          h5.mb-3 Concepto
          p.mb-3 El #[em brief] es un documento estratégico que resume la información fundamental de un proyecto de #[em marketing], publicidad o comunicación comercial. Su propósito es proporcionar a los equipos de trabajo una visión clara de los objetivos, el público objetivo, el mensaje y las acciones que se deben desarrollar dentro de una campaña o estrategia.
          p.mb-0 Este documento sirve como punto de partida para el desarrollo creativo y estratégico de una campaña, ya que permite organizar la información necesaria para diseñar mensajes, seleccionar medios de comunicación y definir las actividades promocionales.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Estructura

    p.mb-4 El #[em brief] se compone de diferentes elementos que permiten organizar la información clave de un proyecto o campaña promocional. Estos elementos facilitan la planificación de las estrategias de #[em marketing] y comunicación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 25.
          | Estructura de un #[em brief]
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr.bgr
                td Información del proyecto
                td Nombre del proyecto o campaña y descripción general.
              tr
                td Objetivo
                td Resultado que la empresa desea alcanzar con la campaña.
              tr.bgr
                td Público objetivo
                td Segmento de consumidores al que se dirige la campaña.
              tr
                td Mensaje principal
                td Idea o concepto central que se quiere comunicar.
              tr.bgr
                td Medios o canales
                td Plataformas o medios utilizados para difundir el mensaje.
              tr
                td Presupuesto
                td Recursos económicos disponibles para la campaña.
              tr.bgr
                td Cronograma
                td Fechas y etapas de desarrollo de la campaña.
              tr
                td Indicadores de evaluación
                td Criterios utilizados para medir los resultados de la campaña.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-lg-5.p-4.mb-0
          p.mb-0 Una estructura clara del #[em brief] permite que todos los participantes del proyecto comprendan los objetivos y la estrategia de comunicación que se desea implementar.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Métodos

    p.mb-4 La elaboración de un #[em brief] requiere recopilar información relevante sobre la empresa, el mercado y los consumidores. Para ello se utilizan diferentes métodos que facilitan la organización de la información.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 26.
          | Métodos para elaborar un #[em brief]
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Método
                th Descripción
            tbody
              tr.bgr
                td Entrevistas
                td Conversaciones con directivos, clientes o responsables del proyecto para   identificar objetivos y necesidades.
              tr
                td Investigación de mercado
                td Análisis del comportamiento del consumidor, tendencias del mercado y competencia.
              tr.bgr
                td Análisis de información interna
                td Revisión de reportes de ventas, datos comerciales y estrategias previas de la empresa.
              tr
                td Reuniones de planificación
                td Encuentros entre los equipos de #[em marketing], comunicación y ventas para definir estrategias.
              tr.bgr
                td Síntesis de información
                td Organización de los datos más importantes en un documento breve y estructurado.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).


</template>

<script>
export default {
  name: 'Tema15',
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
