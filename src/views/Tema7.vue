<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 7
      h1 Plan comercial

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t7/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El plan comercial es una herramienta de gestión que permite organizar y orientar las acciones de una empresa para alcanzar sus objetivos de ventas y posicionamiento en el mercado. A través de este plan se establecen estrategias, metas y actividades que guían las decisiones comerciales de la organización.
    
    .row.fondo1.p-5.fon.mb-5(data-aos="fade-down")
      .col-lg-12

        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-10
            PasosA.color-primario.mb-0(tipo="n")
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-8
                  h4 Concepto
                  p.mb-0 El plan comercial es un documento estratégico que define las acciones que una empresa desarrollará para comercializar sus productos o servicios, alcanzar sus objetivos de ventas y fortalecer su presencia en el mercado. Este plan integra información sobre el mercado, los clientes, las estrategias de venta y los recursos necesarios para ejecutar las actividades comerciales.
                .col-lg-4.cel
                  figure
                    img(src='@/assets/curso/temas/t7/2.svg', alt='')
              .row.justify-content-center.align-items.mb-0
                .col-lg-4.cel
                  figure
                    img(src='@/assets/curso/temas/t7/3.svg', alt='')
                .col-lg-8.text-start
                  h4 Estructura
                  p.mb-4 La estructura de un plan comercial organiza los elementos necesarios para planificar y ejecutar las actividades comerciales de manera ordenada. Generalmente incluye el análisis del mercado, la definición de objetivos, la formulación de estrategias y la programación de actividades orientadas a la venta de productos o servicios.
                  p.mb-4 Entre los componentes más comunes de un plan comercial se encuentran:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Análisis del mercado.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Definición del público objetivo.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Objetivos comerciales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Estrategias y tácticas de ventas.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Plan de actividades comerciales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Recursos y presupuesto.
              .row.justify-content-center.align-items.mb-0
                .col-lg-8
                  h4 Objetivos
                  p.mb-4 Los objetivos del plan comercial establecen los resultados que la empresa desea alcanzar a través de sus actividades de ventas y mercadeo. Estos objetivos orientan las estrategias comerciales y facilitan la evaluación del desempeño de las acciones implementadas.
                  p.mb-4 Algunos ejemplos de objetivos comerciales son:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Incrementar las ventas de un producto o servicio.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Ampliar la participación en el mercado.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Fortalecer el posicionamiento de la marca.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Captar nuevos clientes.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Fidelizar a los clientes actuales.
                .col-lg-4.cel
                  figure
                    img(src='@/assets/curso/temas/t7/4.svg', alt='')
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-4.cel
                  figure
                    img(src='@/assets/curso/temas/t7/5.svg', alt='')
                .col-lg-8.text-start
                  h4 Metas
                  p.mb-4 Las metas representan resultados específicos y medibles que permiten evaluar el cumplimiento de los objetivos del plan comercial. Estas metas suelen definirse en términos de cantidad, tiempo o porcentaje de crecimiento.
                  p.mb-0 Por ejemplo, una empresa puede establecer metas como aumentar las ventas en un 15 % durante un año, captar un número determinado de nuevos clientes o incrementar la participación en el mercado en un periodo específico.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Estrategias
    
    p.mb-4(data-aos="fade-right") Las estrategias comerciales corresponden a las acciones generales que la empresa implementa para alcanzar los objetivos definidos en el plan comercial. Estas estrategias orientan la forma en que la organización competirá en el mercado y cómo ofrecerá valor a los clientes.

    p.mb-4(data-aos="fade-left") Entre las estrategias más utilizadas se encuentran la diferenciación de productos, el desarrollo de promociones, el fortalecimiento de canales de distribución y la implementación de estrategias de #[em marketing] digital.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 15.
          | Estrategias comerciales
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Estrategia
                th Descripción
            tbody
              tr.bgr
                td Diferenciación de producto
                td Consiste en destacar características o beneficios que hacen único al producto o servicio frente a la competencia.
              tr
                td Promociones comerciales
                td Include descuentos, ofertas especiales, paquetes promocionales o incentivos para estimular la compra.
              tr.bgr
                td Fortalecimiento de canales de distribución
                td Busca mejorar los medios a través de los cuales el producto llega al cliente, como tiendas físicas, plataformas digitales o distribuidores.
              tr
                td #[em Marketing] digital
                td Utiliza herramientas digitales como redes sociales, sitios web y publicidad en línea para promocionar productos o servicios.
              tr.bgr
                td Fidelización de clientes
                td Implementa programas o estrategias orientadas a mantener relaciones duraderas con los clientes y fomentar compras repetidas.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content.align-items
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/temas/t7/6.png', alt='')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg4.mb-0.p-4
              .bg5.p-2.mb-4.mx-lg-3
                h4.mb-0.text-white.ps-3.pe-3 Tácticas
              p.mb-4.mx-lg-3 Las tácticas son acciones específicas que se desarrollan para implementar las estrategias comerciales. A diferencia de las estrategias, las tácticas se enfocan en actividades concretas y de corto plazo que contribuyen al logro de los objetivos.
              p.mb-0.mx-lg-3 Por ejemplo, algunas tácticas pueden incluir campañas publicitarias, promociones de ventas, participación en eventos comerciales, publicaciones en redes sociales o programas de fidelización de clientes.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Actividades

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 Las actividades corresponden a las tareas operativas que se ejecutan dentro del plan comercial para llevar a cabo las estrategias y tácticas definidas. Estas actividades se programan dentro de un cronograma y pueden involucrar diferentes áreas de la empresa.
        p.mb-4 Entre las actividades más comunes se encuentran la elaboración de material promocional, la realización de campañas publicitarias, el contacto con clientes potenciales, el seguimiento de ventas y la evaluación de resultados comerciales.
        .cajon.color-secundario.p-lg-5.p-4.mb-0(data-aos="fade-left")
          p.mb-0 Para elaborar un plan comercial es necesario seguir un proceso organizado que permita analizar el mercado, definir los objetivos de la empresa y planificar las acciones comerciales. Este proceso facilita la toma de decisiones y orienta la implementación de estrategias que contribuyan al logro de los resultados comerciales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t7/7.svg', alt='')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 16.
          | Proceso para la elaboración de un plan comercial
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Paso
                th Descripción
            tbody
              tr.bgr
                td Análisis del entorno y del mercado
                td Consiste en estudiar el contexto del mercado, la competencia y las necesidades de los clientes para identificar oportunidades comerciales.
              tr
                td Definición del público objetivo
                td Identificar el segmento de clientes al que se dirigirán los productos o servicios de la empresa.
              tr.bgr
                td Formulación de objetivos comerciales
                td Establecer los resultados que se desean alcanzar, como incremento de ventas o posicionamiento de marca.
              tr
                td Diseño de estrategias comerciales
                td Determinar los lineamientos generales que permitirán alcanzar los objetivos planteados.
              tr.bgr
                td Definición de tácticas
                td Definir las acciones tácticas que implementarán para ejecutar las estrategias comerciales, como campañas publicitarias, promociones o actividades de #[em marketing] digital.
              tr
                td Programación de actividades
                td Organizar las tareas que se desarrollarán y los tiempos de ejecución necesarios para implementar las estrategias y tácticas comerciales.
              tr.bgr
                td Asignación de recursos
                td Determinar los recursos humanos, tecnológicos y financieros necesarios para ejecutar el plan.
              tr
                td Seguimiento y evaluación
                td Analizar los resultados obtenidos para verificar el cumplimiento de los objetivos y realizar ajustes cuando sea necesario.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).


</template>

<script>
export default {
  name: 'Tema7',
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
