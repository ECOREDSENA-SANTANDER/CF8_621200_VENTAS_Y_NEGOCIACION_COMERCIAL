<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 18
      h1 #[em Marketing] digital

    p.mb-5(data-aos="fade-right") El #[em marketing] digital integra las estrategias comerciales desarrolladas en entornos digitales con el propósito de atraer, convertir y fidelizar clientes mediante el uso de tecnologías, plataformas #[em online] y análisis de datos. Su principal ventaja radica en la segmentación precisa, la medición en tiempo real y la optimización constante de resultados. En la planeación del contenido digital, el #[em marketing] digital permite articular objetivos organizacionales con acciones comunicacionales medibles y orientadas al rendimiento.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t18/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 #[b Concepto:] El #[em marketing] digital es la aplicación de los principios del #[em marketing] en entornos digitales, utilizando internet y las tecnologías digitales como canales de comunicación, posicionamiento y comercialización. Su enfoque no se limita a vender productos o servicios, sino a construir relaciones sostenibles con los consumidores mediante experiencias digitales personalizadas.
            br
            br
            p.mb-0 En este contexto, la comunicación es bidireccional: las organizaciones emiten mensajes y, al mismo tiempo, reciben retroalimentación inmediata a través de comentarios, interacciones y datos de comportamiento. Por ejemplo, plataformas como Netflix analizan los hábitos de visualización de los usuarios para recomendar contenido personalizado, convirtiendo la experiencia en un elemento estratégico de fidelización. De esta manera, el #[em marketing] digital transforma la relación tradicional empresa–cliente en un proceso dinámico basado en datos, interacción y generación de valor.

    .tit.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Características

    p.mb-4(data-aos="fade-right") El #[em marketing] digital se sostiene en principios que garantizan coherencia estratégica y efectividad operativa:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.justify-content.align-items-center.mb-0
          .col-lg-8.pe-lg-0
            .bg2.p-4.pe-lg-5.mb-0
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Orientación al consumidor digital:] análisis de comportamientos, intereses y recorrido del cliente en línea.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Segmentación avanzada:] clasificación de audiencias según variables demográficas, psicográficas y conductuales.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Medición constante:] uso de indicadores como tasa de clics, conversión y retorno de inversión.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Personalización del mensaje:] adaptación del contenido según perfil y etapa del proceso de compra.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Optimización continua:] ajustes basados en resultados analíticos.
          .col-lg-5.mnl-1.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t18/2.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Estrategias
    
    p.mb-4(data-aos="fade-right") Las estrategias del #[em marketing] digital definen la dirección general de las acciones implementadas en los entornos digitales, alineándolas con metas organizacionales específicas y permitiendo fortalecer la presencia de la marca, atraer clientes y generar relaciones sostenibles con los públicos objetivo.

    p.mb-4(data-aos="fade-left") Entre las principales estrategias se destacan:

    .row.fondo5.p-5.fon.mb-4(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t18/3.png', alt='')
          .col-lg-8
            SlyderF.circl-arrow(columnas="col-md-6 col-xl-6")
              .tarjeta.tarjeta--slyder.b2.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-5
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/t18/4.svg' alt='AvatarTop')
                .row.justify-content-center.align-items-center.mb-3
                  .col-12
                    .bg8.p-1.mb-4 
                      h4.text-center.mb-0.ps-1.pe-1 Atracción
                p.mb-4 Generación de contenido relevante y de valor que responda a las necesidades e intereses del público objetivo, con el fin de captar tráfico cualificado hacia los canales digitales de la organización y aumentar la visibilidad de la marca.
              .tarjeta.tarjeta--slyder.b2.p-4
                .row.justify-content-center.align-items-center.mb-3.mt-5
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/t18/5.svg' alt='AvatarTop')
                .row.justify-content-center.align-items-center.mb-3
                  .col-12
                    .bg8.p-1.mb-4 
                      h4.text-center.mb-0.ps-1.pe-1 Posicionamiento digital
                p.mb-4 Fortalecimiento de la presencia en buscadores y redes sociales mediante optimización de contenido, uso estratégico de palabras clave y coherencia en la identidad digital, con el propósito de mejorar la recordación y autoridad de marca.
              .tarjeta.tarjeta--slyder.b2.p-4
                .row.justify-content-center.align-items-center.mb-3.mt-5
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/t18/6.svg' alt='AvatarTop')
                .row.justify-content-center.align-items-center.mb-3
                  .col-12
                    .bg8.p-1.mb-4 
                      h4.text-center.mb-0.ps-1.pe-1 Conversión
                p.mb-4 Diseño de embudos digitales estructurados que guíen al usuario desde el interés inicial hasta la acción deseada, utilizando llamados a la acción, páginas optimizadas y ofertas específicas para transformar visitantes en clientes.
              .tarjeta.tarjeta--slyder.b2.p-4
                .row.justify-content-center.align-items-center.mb-3.mt-5
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/temas/t18/7.svg' alt='AvatarTop')
                .row.justify-content-center.align-items-center.mb-3
                  .col-12
                    .bg8.p-1.mb-4 
                      h4.text-center.mb-0.ps-1.pe-1 Fidelización
                p.mb-4 Mantenimiento de relaciones a largo plazo mediante comunicación constante, contenido personalizado y beneficios exclusivos que incrementen la satisfacción, recompra y recomendación de la marca.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Figura 4.
          |  Estrategias clave del #[em marketing] digital.
        img.img-t.img-a(src='@/assets/curso/temas/t18/8.svg',alt='Establece las estrategias clave del e-marketing. Atracción: contenido de valor para captar tráfico cualificado. Posicionamiento digital: optimización para fortalecer visibilidad y autoridad. Conversión: acciones que transforman visitantes en clientes.Fidelización: estrategias para mantener relaciones y recompra.')

    p.mb-4(data-aos="fade-right") En cuanto a las tácticas, son las acciones concretas que permiten ejecutar las estrategias definidas. Representan el nivel operativo del #[em e-marketing] y se apoyan en herramientas tecnológicas específicas.

    p.mb-4(data-aos="fade-left") Entre las tácticas más relevantes se encuentran:

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t18/9.png', alt='')
      .col-lg-8  
        .bg11.p-4.mb-4
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Campañas de anuncios segmentados en redes sociales.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Optimización para motores de búsqueda (SEO).
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Publicidad pagada en buscadores (SEM).
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Email marketing automatizado.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Remarketing dirigido a usuarios que previamente interactuaron con la marca.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Gestión estratégica de redes sociales.
        .cajon.color-secundario.p-lg-5.p-4.mb-0
          p.mb-0 #[b Nota:] el #[em remarketing] comprende estrategias orientadas a impactar nuevamente a usuarios que previamente han interactuado con la marca, visitado el sitio web o mostrado interés en productos y servicios, con el propósito de fortalecer la conversión y fidelización.
        
    p.mb-0(data-aos="fade-right") Mientras la estrategia define el rumbo, las tácticas materializan la ejecución mediante herramientas y acciones específicas.


</template>

<script>
export default {
  name: 'Tema18',
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
