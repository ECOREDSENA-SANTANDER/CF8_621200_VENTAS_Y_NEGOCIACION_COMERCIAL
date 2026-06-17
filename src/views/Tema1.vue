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
    
    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
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

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Características del diagnóstico organizacional
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8
        p.mb-4 El diagnóstico organizacional posee una serie de características que lo convierten en una herramienta fundamental para el análisis empresarial y la formulación de estrategias comerciales; estas características permiten garantizar que el proceso de evaluación sea estructurado, confiable y orientado a la toma de decisiones.
        p.mb-4 Entre las principales características del diagnóstico organizacional se encuentran las siguientes:
        ul.lista-ul.mb-0.lista-ul--separador
          li.d-flex.mb-3
            i.fas.fa-circle-check
            p.mb-0 #[b Integral:] analiza diferentes áreas de la organización para obtener una visión completa de su funcionamiento.
          li.d-flex.mb-3
            i.fas.fa-circle-check
            p.mb-0 #[b Sistemático:] sigue un proceso estructurado de recolección y análisis de información.
          li.d-flex.mb-3
            i.fas.fa-circle-check
            p.mb-0 #[b Analítico:] interpreta datos y evidencias para comprender la situación de la empresa.
          li.d-flex.mb-3
            i.fas.fa-circle-check
            p.mb-0 #[b Estratégico:] orienta la planificación de acciones que permitan mejorar el desempeño organizacional.
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Participativo:] puede involucrar a diferentes áreas y niveles de la organización en el proceso de análisis.
          li.d-flex.mb-0
      .col-lg-4.d-none.d-lg-block
        img.mb-lg-1(src="@/assets/curso/temas/t1/3.png", alt="Descripción imagen")

    p.mb-5 Estas características permiten que el diagnóstico organizacional se convierta en una herramienta clave para el desarrollo de estrategias comerciales y la planificación de campañas promocionales alineadas con la realidad empresarial.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Elementos del diagnóstico organizacional

    p.mb-4 Estos elementos permiten evaluar de manera estructurada la situación de la empresa, mediante la recopilación y organización de la información relevante. Su análisis facilita la comprensión del funcionamiento de la organización y su relación con el entorno.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Elementos del diagnóstico organizacional
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr.bgr
                td Análisis interno
                td Evaluación de recursos, capacidades, procesos y estructura organizacional.
              tr
                td Análisis externo
                td Estudio del entorno económico, social, tecnológico y competitivo.
              tr.bgr
                td Identificación de fortalezas
                td Factores internos que representan ventajas para la organización.
              tr
                td Identificación de debilidades
                td Aspectos internos que limitan el desempeño empresarial.
              tr.bgr
                td Identificación de oportunidades
                td Situaciones externas que pueden favorecer el crecimiento de la empresa.
              tr
                td Identificación de amenazas
                td Factores del entorno que pueden afectar negativamente a la organización.
        figcaption #[b Nota.] Adaptada de Porter (2009); Kotler y Armstrong (2017).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Técnicas del diagnóstico organizacional 

    p.mb-4 Permiten recolectar, examinar e interpretar información relacionada con el funcionamiento de la empresa y su relación con el entorno, lo cual facilita el análisis sistemático de la organización y contribuyen a obtener una comprensión más precisa de su situación actual.
    
    p.mb-4 Entre las técnicas más utilizadas para realizar este tipo de diagnóstico se encuentran las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/4.png", alt="Descripción imagen")
      .col-lg-8
        ul.lista-ul.mb-0.lista-ul--separador
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Análisis DOFA:] herramienta que permite identificar los factores internos y externos que influyen en la organización, como fortalezas, debilidades, oportunidades y amenazas.
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Análisis PESTEL:] método que examina variables del macroentorno, como factores políticos, económicos, sociales, [SM4.1]tecnológicos, ecológicos y legales, que pueden afectar el desempeño empresarial.
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Entrevistas organizacionales:] consisten en conversaciones estructuradas con directivos, empleados o colaboradores que permiten obtener información directa sobre procesos, cultura organizacional y percepciones internas.
          li.d-flex.mb-1
            i.fas.fa-circle-check
            p.mb-0 #[b Encuestas internas:] instrumentos de recolección de datos que permiten conocer opiniones, experiencias y percepciones de los miembros de la organización sobre su funcionamiento.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 #[b Análisis de la competencia:] estudio de las estrategias, productos, posicionamiento y acciones comerciales de otras empresas que participan en el mismo mercado.
          li.d-flex.mb-0
    p.mb-4 La aplicación conjunta de estas técnicas permite obtener una visión más completa de la realidad empresarial, lo cual facilita la formulación de estrategias comerciales y el diseño de planes de #[em marketing] alineados con las condiciones del mercado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Herramientas de diagnóstico estratégico
        img(src='@/assets/curso/temas/t1/5.svg',alt='Se describen herramientas de mayor uso en el diagnóstico estratégico: Matriz DOFA: analiza las Debilidades, Oportunidades, Fortalezas y Amenazas internas y externas. Análisis PESTEL: examina factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales. Benchmarking: compara prácticas de la organización con las mejores del sector. Análisis de brechas: identifica las diferencias entre la situación actual y los objetivos.')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Ventajas del diagnóstico organizacional 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 El diagnóstico organizacional representa una herramienta importante para las empresas, ya que proporciona información valiosa para comprender la situación actual de la organización y orientar la planificación estratégica. El conocimiento de sus ventajas contribuye a fortalecer los procesos de toma de decisiones y a mejorar la gestión empresarial.
        p.mb-4 Entre los principales beneficios que ofrece el diagnóstico organizacional se encuentran:
        ul.lista-ul.mb-0.lista-ul--separador
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Proporcionar una visión clara del estado actual de la organización.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Identificar áreas que requieren mejora o fortalecimiento.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Apoyar la toma de decisiones estratégicas basadas en información analizada.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Facilitar la identificación de riesgos potenciales y cambios en el entorno.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Favorecer el diseño de estrategias comerciales más coherentes y efectivas.
          li.d-flex.mb-0
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/6.png", alt="Descripción imagen")

    p.mb-5 Por ello, el diagnóstico organizacional se convierte en una herramienta fundamental para incrementar la competitividad y mejorar la capacidad de adaptación de las empresas frente a los cambios del mercado.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Desventajas del diagnóstico organizacional

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8
        p.mb-4 Aunque el diagnóstico organizacional ofrece múltiples beneficios, también puede presentar ciertas limitaciones si no se desarrolla de manera adecuada; estas dificultades suelen relacionarse con el proceso de recolección de información, la interpretación de los datos o los recursos necesarios para llevar a cabo el análisis.
        p.mb-4 Entre las principales desventajas se pueden mencionar:
        ul.lista-ul.mb-4.lista-ul--separador
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Su elaboración puede demandar tiempo y recursos organizacionales significativos.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Parte de la información recopilada puede estar influenciada por percepciones personales o subjetivas.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Una interpretación incorrecta de los resultados puede generar decisiones poco acertadas.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Requiere personal con conocimientos y habilidades para realizar un análisis riguroso.
          li.d-flex.mb-0
        p.mb-0 Por esta razón, el diagnóstico organizacional debe aplicarse mediante metodologías estructuradas y herramientas adecuadas que permitan garantizar la calidad de la información obtenida y su utilidad en la toma de decisiones estratégicas.
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/7.png", alt="Descripción imagen")


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
