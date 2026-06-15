<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo #[b Estrategia comercial y gestión de marca] integra el diagnóstico y la estructura organizacional como fundamentos para comprender el funcionamiento de las empresas y su interacción con entornos competitivos. A partir de estos elementos, desarrolla los principios del mercadeo y la mezcla de #[em marketing], junto con el análisis del target o grupo objetivo, el posicionamiento y el uso de plataformas comerciales, permitiendo identificar oportunidades de mercado y orientar la formulación de planes comerciales mediante la definición de objetivos, metas, estrategias, tácticas y actividades articuladas con la estrategia empresarial.
    
    p.mb-4 De igual manera, aborda la comunicación comercial y las estrategias de comunicación como herramientas para transmitir mensajes efectivos a públicos específicos, incorporando la construcción de marca y la identidad corporativa a través del concepto de marca, el ADN de marca, la identidad visual, los símbolos y demás elementos representativos. Asimismo, fortalece el desarrollo del #[em branding] como estrategia para consolidar el reconocimiento y la diferenciación organizacional.

    p.mb-5 Por ello, integra la planificación de campañas promocionales, el diseño de material publicitario, la elaboración de #[em brief,] la gestión de recursos de apoyo y la estructuración presupuestal, incorporando herramientas de #[em marketing] digital, #[em social media marketing y e-business], con el propósito de fortalecer la promoción de ventas, la visibilidad y el posicionamiento estratégico de las organizaciones en entornos comerciales y digitales.
    

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis reúne los principales temas de la estrategia comercial y gestión de marca, incluyendo mercadeo, posicionamiento, comunicación comercial, branding, campañas promocionales y marketing digital, orientados al fortalecimiento de la promoción, la relación con los clientes y el posicionamiento empresarial.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
