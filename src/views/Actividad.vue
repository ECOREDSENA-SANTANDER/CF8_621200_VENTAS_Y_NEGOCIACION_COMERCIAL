<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de la estrategia comercial y gestión de marca',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre la estrategia comercial y la gestión de marca para fortalecer el análisis y la planificación de acciones comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar la situación de la organización para apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que el diagnóstico organizacional permite analizar la situación de la empresa para apoyar la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos forma parte del diagnóstico externo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cultura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Procesos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Talento humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competencia y entorno del mercado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que el diagnóstico externo analiza factores del entorno empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué permite identificar el análisis DOFA?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalezas, debilidades, oportunidades y amenazas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organigramas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que la matriz DOFA facilita el análisis estratégico de la organización.        ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo principal del Benchmark?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular utilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar prácticas empresariales para mejorar procesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gestionar proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que el Benchmark permite comparar buenas prácticas para identificar oportunidades de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza una estructura organizacional funcional?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agrupar empleados por regiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar actividades según funciones específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Trabajar únicamente por proyectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar niveles jerárquicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó una característica propia de la estructura funcional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué representa un organigrama dentro de una organización?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El plan comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El presupuesto anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El análisis de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La representación gráfica de la estructura organizacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que el organigrama muestra la estructura y niveles de autoridad de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es una función principal del área de mercadeo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar nómina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar compras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar el mercado y desarrollar estrategias comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar balances contables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó una función fundamental del área de mercadeo dentro de la organización.        ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué busca principalmente una estrategia comercial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Alcanzar objetivos comerciales mediante acciones planificadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la comunicación con clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la gestión empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted comprendió que una estrategia comercial orienta las acciones para alcanzar metas empresariales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento permite diferenciar una marca frente a la competencia?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La propuesta de valor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que la propuesta de valor constituye un factor diferenciador para los clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es el propósito del análisis del entorno empresarial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar nóminas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar factores externos que afectan a la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar organigramas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que el análisis del entorno permite reconocer factores externos que influyen en la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es la finalidad principal de la mezcla de mercadeo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar la estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coordinar las áreas funcionales de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integrar variables comerciales para satisfacer las necesidades del mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que la mezcla de mercadeo integra variables estratégicas para atender las necesidades de los consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes variables pertenece a la mezcla de mercadeo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Talento humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Logística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que el producto es una de las variables tradicionales de la mezcla de mercadeo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué se entiende por target o grupo objetivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El conjunto de proveedores de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El segmento específico de consumidores al que se dirige una organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los competidores directos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El personal administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que el target corresponde al público al que se dirigen las estrategias comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál de los siguientes es un tipo de público objetivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Funcional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estratégico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Psicográfico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Operacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que el público psicográfico se define a partir de estilos de vida, intereses y valores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué busca lograr el posicionamiento de una marca?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ocupar un lugar diferenciado en la mente del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar canales de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted comprendió que el posicionamiento busca diferenciar una marca frente a otras alternativas del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué herramienta facilita la venta y promoción de productos en entornos digitales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plataforma comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagnóstico funcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó la función de las plataformas comerciales en los procesos de   comercialización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es uno de los componentes fundamentales de un plan comercial?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual disciplinario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organigrama empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamento interno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que los objetivos son un componente esencial dentro del plan comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué elemento forma parte del proceso de comunicación comercial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Canal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que el canal es un elemento clave para transmitir mensajes al público objetivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué representa el ADN de marca?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los valores y esencia que identifican una marca.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El presupuesto publicitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El canal de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El organigrama comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted reconoció que el ADN de marca reúne los atributos que definen la identidad de una organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito principal del social media marketing?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir la estrategia comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desarrollar acciones de mercadeo mediante redes sociales y plataformas digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Usted identificó que el social media marketing utiliza medios digitales para fortalecer la comunicación y relación con los consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>
