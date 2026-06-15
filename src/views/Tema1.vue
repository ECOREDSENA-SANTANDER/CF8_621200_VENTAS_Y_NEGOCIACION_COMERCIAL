<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 Diagnóstico organizacional
    
    p.mb-5 El diagnóstico organizacional permite evaluar la situación de una empresa y orientar la toma de decisiones estratégicas. En #[em marketing] y gestión comercial, contribuye a identificar factores que afectan el desempeño organizacional, como fortalezas, debilidades, oportunidades y amenazas. A continuación, se presentan el concepto, los tipos, las características y las técnicas del diagnóstico organizacional, así como sus ventajas y limitaciones en el contexto empresarial.
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 #[b Concepto:] el diagnóstico organizacional es un proceso de análisis que permite evaluar la situación actual de una empresa, identificando factores internos y externos que influyen en su funcionamiento y desempeño. Su objetivo es generar información que ayude a la toma de decisiones estratégicas. Para ello, se analizan aspectos como la estructura organizacional, los recursos humanos, los procesos operativos, la situación financiera y el posicionamiento en el mercado, con el fin de identificar fortalezas, debilidades, oportunidades y amenazas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Este diagnóstico permite identificar el nivel de preparación de la empresa para competir en el mercado y desarrollar campañas promocionales efectivas; por ejemplo, muchas empresas reconocidas, antes de implementar una estrategia de promoción de ventas, realizan un análisis de su posicionamiento en el mercado, el comportamiento de los consumidores, las tendencias del sector y su capacidad interna para responder adecuadamente a la demanda generada por la campaña.
        p.mb-0 A continuación, diríjase al siguiente video para comprender, desde un enfoque técnico, qué es el diagnóstico organizacional y cómo se utiliza para analizar la situación interna y externa de una empresa, identificando fortalezas, debilidades y oportunidades que orientan la formulación de estrategias empresariales y comerciales.
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/2.svg", alt="Descripción imagen")

    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/yL5-EKtm0Rs?si=zLtBHs5qirOFWO2Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Diagnóstico empresarial
    
    p.mb-5
      .tit(data-aos="fade-right")
        img(:src="require_src('@/assets/curso/temas/t1/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Tipos de diagnóstico organizacional

    p.mb-4 El diagnóstico organizacional se clasifica en diferentes tipos según el enfoque de análisis utilizado. Cada tipo permite evaluar aspectos específicos de la organización y su relación con el entorno empresarial. A continuación, se presentan los tipos más utilizados en el análisis organizacional.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Tipos de diagnóstico organizacional
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Tipo de diagnóstico
                th Descripción
            tbody
              tr.bgr
                td Diagnóstico interno
                td Analiza los recursos, procesos, estructura organizacional, cultura empresarial y         capacidades de la empresa.
              tr
                td Diagnóstico externo
                td Examina factores del entorno como el mercado, la competencia, las tendencias         económicas, tecnológicas y sociales.
              tr.bgr
                td Diagnóstico estratégico
                td Evalúa la posición competitiva de la organización y su capacidad para alcanzar         objetivos estratégicos.
              tr
                td Diagnóstico funcional
                td Analiza el desempeño de áreas específicas de la empresa, como #[em marketing],         ventas, producción o finanzas.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016); Porter (2009).

    p.mb-5
      .tit(data-aos="fade-right")
        img(:src="require_src('@/assets/curso/temas/t1/sub.svg')" alt='Imagen decorativa')
        h3.mb-0 Características del diagnóstico organizacional
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 El diagnóstico organizacional posee una serie de características que lo convierten en una herramienta fundamental para el análisis empresarial y la formulación de estrategias comerciales; estas características permiten garantizar que el proceso de evaluación sea estructurado, confiable y orientado a la toma de decisiones.
        p.mb-4 Entre las principales características del diagnóstico organizacional se encuentran las siguientes:
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/3.png", alt="Descripción imagen")






















</template>

<script>
export default {
  name: 'Tema1',
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
