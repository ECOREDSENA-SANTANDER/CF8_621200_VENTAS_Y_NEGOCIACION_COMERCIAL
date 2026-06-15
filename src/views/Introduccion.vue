<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El componente formativo Estrategia comercial y gestión de marca aborda la formulación de estrategias comerciales orientadas al desarrollo de campañas promocionales y al posicionamiento de las organizaciones en el mercado. Integra el análisis del entorno organizacional, la estructura empresarial y los fundamentos del mercadeo como bases para comprender la dinámica competitiva y orientar la toma de decisiones comerciales.

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9
        p.mb-lg-3.mb-4 Su importancia radica en que permite identificar variables de mercadeo, definir el público objetivo, estructurar planes comerciales y seleccionar estrategias de comunicación coherentes con los objetivos organizacionales. Asimismo, fortalece la construcción de identidad de marca mediante elementos como el ADN de marca, la identidad visual y el #[em branding], permitiendo generar propuestas de valor diferenciadas y mensajes efectivos dirigidos al mercado.
        .bg1.p-lg-3.p-4
          p.mb-0 El desarrollo temático se abordará de manera progresiva, iniciando con el diagnóstico organizacional, la estructura organizacional y los fundamentos del mercadeo. Posteriormente, se estudiarán la mezcla de mercadeo, el #[em target], el posicionamiento y las plataformas comerciales, para avanzar hacia la formulación del plan comercial y la comunicación estratégica. Finalmente, se profundizará en la construcción de marca, el diseño de campañas, la gestión de materiales publicitarios y el uso de #[em brief] y presupuesto, integrando herramientas de #[em marketing] digital, #[em social media marketing y e-business] para fortalecer la promoción de ventas en entornos comerciales contemporáneos.
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/intro/1.png", alt="Descripción imagen")
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
