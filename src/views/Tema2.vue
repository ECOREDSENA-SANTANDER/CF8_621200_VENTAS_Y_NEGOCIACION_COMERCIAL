<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 2
      h1 Estructura organizacional
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/1.svg')
      .col-lg-8
        p.mb-4 La estructura organizacional es la forma en que una empresa organiza, distribuye y coordina sus actividades, responsabilidades y niveles de autoridad para lograr sus objetivos. Define cómo se dividen las tareas, quién toma las decisiones y cómo fluye la comunicación dentro de la organización.
        .cajon.color-secundario.p-lg-5.p-4.mb-0(data-aos="fade-left")
          p.mb-0 #[b Concepto:] la estructura organizacional se refiere al sistema mediante el cual se organizan las funciones, responsabilidades y jerarquías dentro de una empresa. Este sistema establece cómo se agrupan las actividades, cómo se asigna la autoridad y cómo se coordinan las tareas para alcanzar los objetivos empresariales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-11.offset-lg-1
        .row.justify-content-center.align-items-end
          .col-lg-10.ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-lg-1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/temas/t2/2.svg", alt="alt")
                .col
                  p.mb-0 La estructura organizacional define quién hace qué dentro de la empresa, quién toma decisiones y cómo se relacionan las diferentes áreas. 
            .crd.crd--avatarHorizontal.cr1.py-lg-1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/temas/t2/3.svg", alt="alt")
                .col
                  p.mb-0 Una estructura adecuada facilita la planificación, la supervisión del trabajo y el uso eficiente de los recursos.
            .crd.crd--avatarHorizontal.crd--last.py-lg-1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.d-none.d-lg-block(src="@/assets/curso/temas/t2/4.svg", alt="alt")
                .col
                  p.mb-0 Una estructura bien definida permite mejorar la eficiencia, evitar duplicidad de funciones y facilitar la coordinación entre las diferentes áreas de la empresa. Además, contribuye a que cada colaborador conozca su rol, sus responsabilidades y su relación con otros departamentos, lo que favorece el cumplimiento de metas organizacionales.
          .col-lg-3.sob1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t2/5.svg", alt="alt")

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Componentes de la estructura organizacional
    
    p.mb-4 La estructura organizacional se compone de varios elementos que permiten organizar el funcionamiento interno de la empresa, en la siguiente tabla se enuncian al detalle:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Componentes de la estructura organizacional
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Componente
                th Descripción
            tbody
              tr.bgr
                td División del trabajo
                td Distribución de las tareas entre diferentes puestos o departamentos.
              tr
                td Jerarquía
                td Niveles de autoridad y responsabilidad dentro de la empresa.
              tr.bgr
                td Departamentalización
                td Agrupación de actividades similares en áreas o departamentos.
              tr
                td Coordinación
                td Integración de las actividades de diferentes áreas para lograr objetivos comunes.
              tr.bgr
                td Comunicación organizacional
                td Flujo de información entre niveles y departamentos.
        figcaption #[b Nota.] Adaptada de Robbins y Coulter (2005).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content.align-items-center.mb-0
          .col-lg-8.pe-lg-0
            .bg2.p-4.pe-lg-5.mb-0
              p.mb-lg-5.mt-lg-5.pe-lg-5.mb-0 Existen empresas en Colombia dedicadas a la construcción o ensamblaje de vehículos, que se caracterizan por la excelente división del trabajo, ya que existen áreas especializadas como producción, calidad, logística y comercialización, lo que facilita una operación eficiente y coordinada.
          .col-lg-5.mnl-1.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/6.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Tipos de la estructura organizacional
    
    p.mb-4 Las organizaciones pueden adoptar diferentes tipos de estructuras según su tamaño, estrategia y tipo de actividad. A continuación, se presentan algunos de los tipos de estructuras organizacionales más utilizados en las empresas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Tipos de estructura organizacional
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Tipo de estructura
                th Características
            tbody
              tr.bgr
                td Funcional
                td Se organiza por departamentos según funciones (#[em marketing], finanzas, producción).
              tr
                td Divisional
                td Se estructura por productos, mercados o regiones geográficas.
              tr.bgr
                td Matricial
                td Combina la estructura funcional con la estructura por proyectos.
              tr
                td Horizontal
                td Reduce niveles jerárquicos para favorecer la comunicación y la innovación.
        figcaption #[b Nota.] Adaptada de Mintzberg (1989); Robbins y Coulter (2005); Chiavenato (2006).
    
    p.mb-5 Cada estructura presenta ventajas y se selecciona de acuerdo con las necesidades de coordinación, control y toma de decisiones dentro de la empresa.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Áreas funcionales
    
    p.mb-4 Las áreas funcionales son los departamentos en los que se divide una empresa para realizar actividades específicas. Cada área cumple un papel fundamental en el funcionamiento de la organización. La idea es que, cada área funcional trabaje de manera coordinada: el área de diseño desarrolla los productos, producción los fabrica, #[em marketing] los posiciona en el mercado y finanzas gestiona los recursos para su desarrollo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Áreas funcionales de la empresa
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Área
                th Función principal
            tbody
              tr.bgr
                td Dirección o gerencia
                td Planifica, organiza y controla las actividades de la empresa.
              tr
                td #[em Marketing o mercadeo]
                td Analiza el mercado y desarrolla estrategias para vender productos o servicios.
              tr.bgr
                td Finanzas
                td Administra los recursos económicos de la empresa.
              tr
                td Recursos humanos
                td Gestiona el talento humano y el desarrollo del personal.
              tr.bgr
                td Producción u operaciones
                td Se encarga de fabricar productos o prestar servicios.
        figcaption #[b Nota.] Adaptada de Robbins y Coulter (2005); Chiavenato (2006).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Organigrama

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 El organigrama es una representación gráfica de la estructura organizacional de una empresa, en la cual se visualizan los diferentes niveles jerárquicos, las relaciones de autoridad y la distribución de las áreas o departamentos que conforman la organización.
        p.mb-4 Esta herramienta permite identificar de manera clara la jerarquía empresarial, los canales de comunicación y las responsabilidades asignadas a cada área de trabajo. Además, facilita la comprensión de la estructura interna de la empresa, fortalece la coordinación entre dependencias y contribuye a una gestión organizacional más eficiente.
        .cajon.color-secundario.p-lg-5.p-4.mb-0(data-aos="fade-left")
          p.mb-0 Para el complementar toda esta información, lo invitamos a visitar el siguiente pódcast donde analizará la importancia de estudiar las organizaciones y las estrategias comerciales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/7.png', alt='')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/temas/t2/8.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg3.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="pódcast: importancia del análisis organizacional en las estrategias comerciales"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
            ).mb-0
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


</template>

<script>
export default {
  name: 'Tema2',
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
