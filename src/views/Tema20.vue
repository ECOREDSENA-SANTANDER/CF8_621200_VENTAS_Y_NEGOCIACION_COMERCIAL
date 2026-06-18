<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 20
      h1 #[em E-business]

    p.mb-5(data-aos="fade-right") El #[em e-business] o negocio electrónico consiste en el uso de internet y tecnologías digitales para realizar y gestionar actividades empresariales. Incluye no solo la compra y venta de productos en línea, sino también procesos como #[em marketing] digital, comunicación con clientes y gestión de operaciones mediante plataformas tecnológicas. Este modelo permite a las empresas ampliar su alcance, mejorar la eficiencia de sus procesos y adaptarse a las nuevas formas de consumo en entornos digitales.

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/temas/t20/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 #[b Concepto:] El #[em e-business (electronic business)] es el conjunto de actividades empresariales que se realizan mediante el uso de internet y tecnologías digitales. Incluye procesos como comercio electrónico, #[em marketing] digital, atención al cliente en línea, gestión de datos y comunicación empresarial a través de plataformas digitales.
            br
            br
            p.mb-0 A diferencia del comercio electrónico, que se centra principalmente en la compra y venta de productos en línea, el #[em e-business] integra todos los procesos digitales que permiten el funcionamiento de una empresa en el entorno virtual. Por ejemplo, empresas como Amazon y Mercado Libre utilizan plataformas digitales para gestionar inventarios, procesar pagos, analizar el comportamiento de los clientes y coordinar la distribución de productos a nivel global.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Tipos

    p.mb-4(data-aos="fade-right") El #[em e-business] puede clasificarse según los actores que participan en las transacciones comerciales o en los procesos digitales de negocio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 31.
          | Tipos de #[em e-business]
        .tabla-a.tab4.mb-3
          table
            thead
              tr
                th Tipo
                th Descripción
                th Ejemplo
            tbody
              tr.bgr
                td B2B (#[em Business to Business])
                td Transacciones electrónicas entre empresas.
                td Alibaba conecta fabricantes con distribuidores.
              tr
                td B2C (#[em Business to Consumer])
                td Venta directa de empresas a consumidores finales a través de internet.
                td Amazon vende productos directamente a clientes.
              tr.bgr
                td C2C (#[em Consumer to Consumer])
                td Intercambio o venta de productos entre consumidores mediante plataformas digitales.
                td Mercado Libre o eBay.
              tr
                td C2B (#[em Consumer to Business])
                td Consumidores ofrecen productos o servicios a empresas.
                td Plataformas #[em freelance] como Upwork o Fiverr.
        figcaption #[b Nota.] Adaptada de Laudon y Traver, 2018.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4.fd3(titulo="Clases")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-6
                    p.mb-4 Dentro del e-business existen diferentes clases de modelos digitales que las organizaciones utilizan para operar en internet. Entre las principales se encuentran:
                    ul.lista-ul.mb-4
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Tiendas en línea: plataformas digitales que permiten vender productos o servicios directamente a los consumidores.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Marketplaces: plataformas que conectan múltiples vendedores con compradores dentro de un mismo sitio web.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Servicios digitales: empresas que ofrecen productos intangibles a través de internet, como streaming, software o educación en línea.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Plataformas colaborativas: sistemas que facilitan la interacción entre usuarios para compartir bienes o servicios.
                    p.mb-0 Por ejemplo, Netflix ofrece servicios digitales de entretenimiento mediante streaming, mientras que Airbnb funciona como una plataforma colaborativa que conecta anfitriones con viajeros en diferentes países.
                  .col-lg-6.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t20/2.png', alt='')
          .p-lg-5.p-4.fd3(titulo="Beneficios")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items.mb-0
                  .col-lg-6
                    p.mb-4 El e-business ofrece múltiples ventajas para las empresas y los consumidores, especialmente en un entorno económico cada vez más digitalizado. Entre los principales beneficios se encuentran:
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Acceso a mercados globales: las empresas pueden vender productos o servicios a clientes en diferentes regiones del mundo.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Reducción de costos operativos: disminuye gastos relacionados con infraestructura física y procesos administrativos.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Disponibilidad permanente: los negocios digitales pueden operar las 24 horas del día.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Mayor interacción con los clientes: permite comunicación directa mediante plataformas digitales y redes sociales.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 Análisis de datos: las empresas pueden recopilar información sobre el comportamiento de los consumidores para mejorar sus estrategias comerciales.
                  .col-lg-6.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t20/3.png', alt='')


</template>

<script>
export default {
  name: 'Tema20',
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
