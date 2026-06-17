<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 6
      h1  Plataformas comerciales

    p.mb-5 Las plataformas comerciales son herramientas tecnológicas que permiten a las empresas ofrecer, promocionar y comercializar productos o servicios a través de medios digitales o físicos. Estas plataformas facilitan la interacción entre empresas y clientes, ampliando las oportunidades de negocio y el alcance en el mercado.

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Concepto
    
    p.mb-4 Las plataformas comerciales son sistemas o espacios, físicos o digitales, que permiten a las empresas presentar, promocionar y vender productos o servicios a los consumidores. Estas plataformas facilitan las transacciones comerciales y la comunicación entre vendedores y clientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/temas/t6/1.png', alt='')

    .tit.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/sub.svg')
      h3.mb-0 Importancia

    p.mb-4 Las plataformas comerciales tienen un papel fundamental en el desarrollo de las actividades comerciales, ya que permiten ampliar el alcance de las empresas y facilitar el acceso de los consumidores a productos o servicios.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Tabla 14.
          | Importancia de las plataformas comerciales
        .tabla-a.tab1.mb-3
          table
            thead
              tr
                th Aspecto
                th Descripción
            tbody
              tr.bgr
                td Acceso al mercado
                td Permiten que las empresas lleguen a un mayor número de clientes.
              tr
                td Visibilidad
                td Facilitan la promoción de productos o servicios en diferentes canales.
              tr.bgr
                td Interacción con clientes
                td Permiten la comunicación directa entre empresas y consumidores.
              tr
                td Comercialización digital
                td Favorecen las ventas a través de internet y dispositivos móviles.
        figcaption #[b Nota.] Adaptada de Laudon y Traver (2018).

    .row.justify-content-center.mb-0(data-aos="fade-right") 
      .col-lg-6.col-md-6.mb-lg-0.mb-4.mb-md-0
        .bg6.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/t6/2.svg', alt='')
          .bg8.p-1.mb-4 
            h4.mb-0.text-center Ventajas
          p.mb-0 Las plataformas comerciales ofrecen diferentes beneficios tanto para las empresas como para los consumidores, especialmente en entornos digitales. Entre sus principales ventajas se encuentra el mayor alcance, ya que permiten a las empresas llegar a clientes en diferentes regiones. También brindan disponibilidad, facilitando la compra y venta de productos en cualquier momento. Además, contribuyen a la reducción de costos, al disminuir los gastos asociados a espacios físicos de venta. Finalmente, ofrecen facilidad de promoción, ya que permiten utilizar diversas herramientas de #[em marketing] digital para dar a conocer productos o servicios.
      .col-lg-6.col-md-6.mb-lg-0.mb-0
        .bg7.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/temas/t6/3.svg', alt='')
          .bg9.p-1.mb-4 
            h4.mb-0.text-center Desventajas
          p.mb-0.text-white Aunque las plataformas comerciales ofrecen múltiples beneficios, también presentan algunas limitaciones relacionadas con la competencia y la dependencia tecnológica. Entre las principales desventajas se encuentra la alta competencia, ya que muchas empresas ofrecen productos similares dentro de la misma plataforma. Asimismo, existe dependencia tecnológica, debido a que las ventas están sujetas al funcionamiento de la plataforma digital. También pueden presentarse costos de comisión, porque algunas plataformas cobran tarifas por cada venta realizada. Finalmente, existen riesgos de seguridad, asociados a posibles problemas relacionados con la protección de datos y la información de los usuarios.


</template>

<script>
export default {
  name: 'Tema6',
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
