<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 5
      h1 #[em Target] (grupo objetivo)

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-8
        p.mb-4 El #[em target] o grupo objetivo corresponde al segmento específico del mercado al que una organización dirige sus productos, servicios o estrategias de comunicación; este grupo se define a partir de características comunes como la edad, el nivel socioeconómico, los intereses, los hábitos de consumo, el estilo de vida o la ubicación geográfica de los consumidores.
        .cajon.color-secundario.p-lg-5.p-4.mb-0(data-aos="fade-left")
          p.mb-0 Identificar el #[em target] permite a las organizaciones diseñar estrategias de mercadeo más efectivas, desarrollar productos acordes con las necesidades del cliente y establecer canales de comunicación adecuados para llegar de manera más precisa al público objetivo.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t5/1.svg', alt='')

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/2.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Por ejemplo, algunas plataformas digitales de entretenimiento orientan sus estrategias hacia jóvenes y adultos que consumen contenido multimedia a través de dispositivos móviles y servicios de transmisión en línea, adaptando sus campañas y contenidos a las preferencias y comportamientos de este tipo de usuarios.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Tipos
    
    p.mb-4(data-aos="fade-right") El público objetivo puede clasificarse de diferentes formas según las características del mercado y los criterios utilizados para segmentarlo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Tipos de público objetivo
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Tipo
                th Descripción
            tbody
              tr.bgr
                td Demográfico
                td Se basa en variables como edad, género, nivel educativo, ingresos u ocupación.
              tr
                td Geográfico
                td Considera la ubicación del consumidor, como país, ciudad o región.
              tr.bgr
                td Psicográfico
                td Analiza estilos de vida, intereses, valores y personalidad de los consumidores.
              tr
                td Conductual
                td Se enfoca en hábitos de compra, frecuencia de consumo y uso del producto.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Métodos

    p.mb-4(data-aos="fade-left") Para identificar el público objetivo, las empresas utilizan diferentes métodos que permiten analizar el mercado y comprender mejor a los consumidores.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 11.
          | Métodos para identificar el #[em target]
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Método
                th Descripción
            tbody
              tr.bgr
                td Investigación de mercados
                td Recolección de información sobre preferencias, comportamientos y necesidades del consumidor.
              tr
                td Encuestas
                td Instrumentos que permiten conocer opiniones y hábitos de los clientes.
              tr.bgr
                td Análisis de datos
                td Estudio de información obtenida de ventas, plataformas digitales o comportamiento del consumidor.
              tr
                td Segmentación de mercado
                td Proceso de dividir el mercado en grupos con características similares.
        figcaption #[b Nota.] Adaptada de Kotler y Armstrong (2017).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Posicionamiento

    p.mb-4(data-aos="fade-right") El posicionamiento es una estrategia de mercadeo orientada a lograr que una marca, producto o servicio ocupe un lugar claro, diferenciador y significativo en la mente de los consumidores. Su propósito es que los clientes identifiquen fácilmente las características, beneficios y valores que distinguen a una organización frente a otras opciones disponibles en el mercado.

    p.mb-4(data-aos="fade-left") Un adecuado posicionamiento contribuye al reconocimiento de la marca, fortalece la relación con los consumidores y favorece la preferencia de compra. Para ello, las organizaciones desarrollan estrategias basadas en aspectos como la calidad, la innovación, el precio, el servicio al cliente, la experiencia de uso o los atributos diferenciadores de sus productos y servicios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content.align-items-center.mb-0
          .col-lg-8.pe-lg-0
            .bg2.p-4.pe-lg-5.mb-0
              p.mb-lg-5.mt-lg-5.pe-lg-5.mb-0 #[b Concepto:] El posicionamiento se entiende como la estrategia mediante la cual una organización busca que su producto, servicio o marca permanezca en la mente del consumidor con una imagen específica y diferenciada frente a la competencia. Por ejemplo, algunas marcas del sector automotriz se han posicionado por la seguridad y confiabilidad de sus vehículos, mientras que otras organizaciones del sector de bebidas energéticas han orientado su posicionamiento hacia el deporte, la energía y el alto rendimiento físico.
          .col-lg-5.mnl-1.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t5/3.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Estrategias

    p.mb-4(data-aos="fade-right") Las empresas pueden aplicar diferentes estrategias para posicionar sus productos o servicios y diferenciarse frente a la competencia. Estas estrategias permiten destacar atributos, beneficios o características que facilitan el reconocimiento de la marca en el mercado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 12.
          |  Estrategias de posicionamiento
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Estrategia
                th Descripción
            tbody
              tr.bgr
                td Por atributo
                td Destaca una característica específica del producto o servicio.
              tr
                td Por beneficio
                td Resalta el beneficio principal que obtiene el consumidor.
              tr.bgr
                td Por precio
                td Se posiciona el producto destacando su costo competitivo.
              tr
                td Por calidad
                td Enfatiza la superioridad o nivel de calidad del producto.
              tr.bgr
                td Por uso o aplicación
                td Se enfoca en la forma en que el producto es utilizado.
              tr
                td Por tipo de usuario
                td Dirige el producto a un grupo específico de consumidores.
              tr.bgr
                td Frente a la competencia
                td Compara el producto con otras marcas del mercado.
        figcaption #[b Nota.] Adaptada de Kotler y Keller (2016).

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Beneficios
    
    p.mb-4(data-aos="fade-right") El posicionamiento genera diferentes beneficios para las organizaciones, ya que permite fortalecer la identidad de marca y mejorar su reconocimiento en el mercado. A continuación, se presentan algunos de los principales beneficios del posicionamiento.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 13.
          | Beneficios del posicionamiento
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Beneficio
                th Descripción
            tbody
              tr.bgr
                td Diferenciación
                td Permite destacar frente a la competencia.
              tr
                td Reconocimiento de marca
                td Facilita que los consumidores identifiquen la empresa.
              tr.bgr
                td Mayor recordación
                td Ayuda a que el producto permanezca en la mente del consumidor.
              tr
                td Confianza del cliente
                td Refuerza la percepción positiva de la marca.
              tr.bgr
                td Ventaja competitiva
                td Permite fortalecer la presencia en el mercado.
        figcaption #[b Nota.] Adaptada de Kotler y Armstrong (2017).


</template>

<script>
export default {
  name: 'Tema5',
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
