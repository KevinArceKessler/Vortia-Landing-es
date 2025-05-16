<template>
  <div class="blog-container">
    <h1 class="blog-title">Blog Vortia</h1>
    
    <div class="blog-grid">
      <!-- Card 1 -->
      <div class="blog-card" @click="toggleCard(0)" :class="{ 'expanded': expandedCards[0] }">
        <div class="card-preview">
          <div class="card-image" style="background-color: #8430D9;">
            <h2>Inteligencia Artificial: ¿Moda pasajera o necesidad estratégica?</h2>
          </div>
          <div class="card-content">
            <h3>Inteligencia Artificial: ¿Moda pasajera o necesidad estratégica?</h3>
            <p class="card-date">
              <i class="fas fa-calendar-alt"></i> march 25, 2025
            </p>
            <p class="card-excerpt">
              Vivimos en una era en la que la Inteligencia Artificial (IA) y conceptos relacionados como machine learning, automatización y asistentes virtuales inteligentes se han instalado en la conversación diaria...
            </p>
            <div class="read-more">
              <span v-if="!expandedCards[0]">Lee más</span>
              <span v-else>Lee menos</span>
            </div>
          </div>
        </div>
        
        <!-- Expanded Content -->
        <div class="card-expanded-content" v-if="expandedCards[0]">
          <div class="expanded-container">
            <p>Por el equipo de VORTIA</p>
            <p>Vivimos en una era en la que la Inteligencia Artificial (IA) y conceptos relacionados como machine learning, automatización y asistentes virtuales inteligentes se han instalado en la conversación diaria. Desde startups tecnológicas hasta pequeños comercios barriales, todos parecen estar hablando —y en muchos casos adoptando— alguna forma de IA.</p>
            <p>Pero ante tanto ruido, surge una pregunta tan legítima como frecuente:</p>
            <p class="highlight">¿Es realmente necesario implementar inteligencia artificial si mi empresa ya funciona bien como está?</p>
            <p>La respuesta rápida sería “depende”. </p>
            <p>Pero la respuesta responsable, y estratégicamente más útil, es otra:</p>
            <p class="highlight">si no se evalúa seriamente la incorporación de IA, existe un riesgo real de perder competitividad a mediano y largo plazo.</p>
            
            <h4>Más allá de la moda: la eficiencia como verdadero motor</h4>
            <p>La adopción de tecnologías emergentes no debería responder a una moda, sino a una necesidad concreta: la búsqueda de eficiencia operativa. Y en ese campo, la IA ha demostrado ser una herramienta poderosa.</p>
            <p>En muchas empresas, especialmente en pymes, la IA todavía se percibe como una inversión costosa, innecesaria o difícil de implementar. Pero lo cierto es que, bien aplicada, puede aportar valor real y medible en áreas tan diversas como:</p>
            <ul>
              <li>Atención al cliente</li>
              <li>Administración de datos</li>
              <li>Logística y planificación</li>
              <li>Publicidad y marketing</li>
              <li>Procesos de venta</li>
            </ul>
            
            <h4>Un ejemplo realista</h4>
            <p>Imaginemos una empresa que decide automatizar sus canales de atención al cliente —WhatsApp, redes sociales, e incluso su propio sitio web— utilizando inteligencia artificial. Lo que obtiene no es simplemente un bot que responde preguntas básicas, sino un colaborador incansable que trabaja 24/7, los 365 días del año, sin descansos ni demoras.</p>
            <p>Este “colaborador digital” no solo responde dudas, sino que entiende el contexto de la conversación, asesora al cliente, clasifica las consultas, y deriva los casos complejos al equipo humano, optimizando el tiempo y los recursos del personal. Mientras tanto, los colaboradores reales pueden enfocarse en tareas estratégicas: cerrar ventas, coordinar acciones, resolver casos complejos.</p>
            
            <h4>La IA como ventaja competitiva silenciosa</h4>
            <p>Incluso si tu empresa funciona de forma eficiente, es clave entender que la IA no reemplaza lo que hacés bien: lo mejora, lo acelera y lo escala.</p>
            <p>Un competidor que adopte inteligencia artificial de manera inteligente podrá tomar decisiones más rápido, con mejor información y utilizando menos recursos humanos. En palabras simples: ganará más, gastando menos.</p>
            <p>Esto no implica que debas reemplazar a tu equipo, sino todo lo contrario: vas a darles herramientas para potenciar su rendimiento. La IA no sustituye al humano; lo libera de tareas repetitivas y lo eleva hacia funciones más analíticas, creativas y decisivas.</p>
            
            <h4>Datos que hablan: una mirada global</h4>
            <p>Según un informe de PwC, el impacto económico global de la IA podría alcanzar los 15,7 billones de dólares para 2030, gracias a mejoras en productividad y personalización de servicios. De ese total, $6,6 billones provendrían de aumentos en la eficiencia laboral. Es decir, no solo se trata de vender más, sino de trabajar mejor.</p>
            <p>En Latinoamérica, el uso de IA está creciendo a un ritmo acelerado. Empresas argentinas ya están incorporando asistentes virtuales inteligentes, motores de recomendación de productos, y modelos predictivos para segmentar clientes y optimizar campañas de marketing.</p>
            
            <h4>IA accesible: ni cara ni compleja (si sabés por dónde empezar)</h4>
            <p>Uno de los grandes mitos es que la inteligencia artificial es exclusiva para grandes corporaciones o que su implementación es costosa y lenta. Hoy existen soluciones escalables que permiten a una pyme o negocio independiente dar los primeros pasos de manera simple y efectiva.</p>
            <p>Por ejemplo, en VORTIA SRL ayudamos a empresas a:</p>
            <ul>
              <li>Automatizar respuestas frecuentes con asistentes virtuales inteligentes.</li>
              <li>Integrar IA en sus campañas publicitarias para segmentar audiencias con mayor precisión.</li>
              <li>Implementar flujos conversacionales en WhatsApp que aumenten las tasas de conversión.</li>
              <li>Analizar datos históricos de ventas o comportamiento de clientes para proyectar tendencias.</li>
            </ul>
            
            <h4>Entonces... ¿moda o necesidad?</h4>
            <p>La IA ya no es una promesa futurista: es una realidad presente. No se trata de seguir una moda tecnológica, sino de aprovechar una oportunidad estratégica para mejorar la forma en que trabajás, atendés y vendés.</p>
            <p>Ignorar esta evolución no te condena, pero te atrasa. Y en mercados cada vez más dinámicos, eso puede marcar la diferencia entre crecer o quedarse atrás.</p>
            
            <h4>En conclusión</h4>
            <p>La inteligencia artificial es una herramienta, no un reemplazo. Está para ayudarte a trabajar mejor, tomar decisiones más informadas, brindar una mejor experiencia a tus clientes y prepararte para escalar tu negocio de forma sostenible.</p>
            <p>¿Tu empresa ya funciona bien? Excelente.</p>
            <p>La IA puede ayudarte a que funcione aún mejor.</p>
            <p class="highlight">📌 ¿Querés saber cómo aplicar IA en tu negocio sin gastar de más ni perder tiempo?</p>
            <p class="call-to-action">Hablemos. En VORTIA SRL diseñamos soluciones a medida para empresas reales, con necesidades reales.</p>
            <p><a href="https://vortia.com.ar" class="btn-link">👉 https://vortia.com.ar</a></p>
          </div>
        </div>
      </div>
      
      <!-- Card 2 -->
      <div class="blog-card" @click="toggleCard(1)" :class="{ 'expanded': expandedCards[1] }">
        <div class="card-preview">
          <div class="card-image" style="background-color: #5E73E1;">
            <h2>Asistentes Virtuales Inteligentes, Chatbots y Humanos</h2>
          </div>
          <div class="card-content">
            <h3>Asistentes Virtuales Inteligentes, Chatbots y Humanos: ¿A quién le confiás tu atención al cliente?</h3>
            <p class="card-date">
              <i class="fas fa-calendar-alt"></i> 10 de mayo de 2025
            </p>
            <p class="card-excerpt">
              En la era digital, donde la inmediatez es un valor clave para los consumidores, la atención al cliente...
            </p>
            <div class="read-more">
              <span v-if="!expandedCards[1]">Lee más</span>
              <span v-else>Lee menos</span>
            </div>
          </div>
        </div>
        
        <!-- Expanded Content -->
        <div class="card-expanded-content" v-if="expandedCards[1]">
          <div class="expanded-container">
            <p>Por el equipo de VORTIA SRL</p>
            <p>En la era digital, donde la inmediatez es un valor clave para los consumidores, la atención al cliente se ha convertido en un diferencial competitivo más que en un área de soporte. Frente a este escenario, cada vez más empresas se preguntan:</p>
            <p class="highlight">¿Debo usar un chatbot? ¿Me conviene invertir en un asistente virtual inteligente? ¿Sigo dependiendo solo del equipo humano?</p>
            <p>En este artículo, te explicamos en qué se diferencia un Asistente Virtual Inteligente (AVI) de un chatbot básico o de la atención tradicional, cómo estas tecnologías están transformando negocios reales en Argentina, y por qué elegir bien puede definir el crecimiento de tu empresa.</p>
            
            <h4>¿Qué es un Asistente Virtual Inteligente?</h4>
            <p>Empecemos por lo básico: un chatbot no es lo mismo que un AVI.</p>
            <p>Un chatbot es un programa diseñado para responder de forma automática a preguntas frecuentes. Puede ser útil para tareas simples como informar horarios, repetir precios o enviar formularios. Sin embargo, su lógica suele ser lineal, limitada y rígida.</p>
            <p>En cambio, un Asistente Virtual Inteligente (AVI) va mucho más allá. Utiliza inteligencia artificial para comprender el lenguaje natural, interpretar el contexto de las consultas y adaptarse a diferentes escenarios de interacción.</p>
            <p>No se limita a responder: acompaña al cliente durante toda su experiencia con tu marca.</p>
            
            <h4>¿Cómo puede sumar valor real a tu empresa?</h4>
            <p>La incorporación de un AVI no es una moda tecnológica; es una herramienta estratégica que puede transformar tu operación comercial.</p>
            <p>Estos son algunos beneficios clave:</p>
            <ul>
              <li><strong>🕐 Atención 24/7 sin interrupciones</strong><br>
              No importa si es domingo a la madrugada o feriado nacional. Un AVI está siempre disponible, resolviendo consultas, tomando pedidos o derivando al área correspondiente sin demoras.</li>
              
              <li><strong>🤝 Mejor experiencia para tus clientes</strong><br>
              Hoy las personas valoran la inmediatez, la claridad y el trato personalizado. Un AVI puede guiar al usuario en tiempo real, con respuestas precisas y orientadas a su necesidad específica.</li>
              
              <li><strong>💸 Ahorro en costos operativos</strong><br>
              Automatizar tareas repetitivas libera a tu equipo humano para enfocarse en lo que realmente aporta valor: cerrar ventas, resolver casos complejos, pensar estratégicamente.</li>
              
              <li><strong>📊 Datos que generan inteligencia comercial</strong><br>
              Cada conversación con un cliente es una fuente de información. Los AVIs pueden registrar, segmentar y analizar datos sobre comportamientos, preferencias y objeciones. Eso permite diseñar mejores campañas, ajustar productos y tomar decisiones basadas en evidencia.</li>
              
              <li><strong>📈 Escalabilidad sin fricciones</strong><br>
              Si tu empresa empieza a recibir el doble de contactos, un AVI puede gestionarlos sin que tengas que duplicar tu equipo de atención. Escalás sin sumar estructura.</li>
            </ul>
            
            <h4>¿Cuándo elegir un AVI, un chatbot o atención humana?</h4>
            <p>La decisión depende de múltiples factores: volumen de consultas, complejidad del servicio, cultura organizacional y expectativas de crecimiento.</p>
            <p>Una empresa con pocos productos y una atención acotada puede comenzar con un chatbot combinado con atención humana.</p>
            <p>En cambio, si tu negocio apunta a escalar, ampliar su portafolio o automatizar flujos de ventas y posventa, un AVI es claramente la mejor inversión.</p>
            <p>La clave no está solo en lo que necesitás hoy, sino en dónde querés que esté tu empresa mañana.</p>
            
            <h4>Casos reales en Argentina: tecnología que ya está en marcha</h4>
            <p>En VORTIA SRL trabajamos con empresas de rubros muy diversos que ya están transformando su forma de comunicarse con los clientes mediante AVIs. Algunos sectores donde se destacan:</p>
            <ul>
              <li>Seguros: cotización automática, renovación de pólizas, seguimiento de siniestros.</li>
              <li>Turismo y hotelería: reservas, atención postventa, consultas frecuentes.</li>
              <li>Automotor: generación de leads, gestión de turnos, clasificación de intención de compra.</li>
              <li>Salud: turnos médicos, recordatorios automatizados, atención básica.</li>
              <li>Servicios profesionales y educación: inscripción, pagos, orientación inicial.</li>
            </ul>
            
            <h4>Un ejemplo concreto: una concesionaria que vende mientras duerme</h4>
            <p>Una concesionaria de autos argentina implementó un AVI para asistir a sus prospectos en tres áreas clave:</p>
            <ul>
              <li>Venta de usados</li>
              <li>Planes de ahorro</li>
              <li>Autos 0 km</li>
            </ul>
            <p>¿Resultados?</p>
            <ul>
              <li>Atención permanente, incluso fuera del horario comercial</li>
              <li>Clasificación automática de los leads según nivel de intención de compra</li>
              <li>Intervención humana solo cuando realmente se requiere</li>
              <li>Análisis detallado del desempeño del equipo de ventas</li>
              <li>Monitoreo en tiempo real de conversaciones y puntos de mejora</li>
            </ul>
            <p>Este tipo de soluciones permiten cerrar más operaciones, ahorrar tiempo operativo y mejorar la experiencia del cliente de punta a punta.</p>
            
            <h4>¿Es momento de invertir en inteligencia artificial?</h4>
            <p>La respuesta corta es: sí, si querés que tu empresa crezca de forma inteligente y sostenible.</p>
            <p>No se trata de seguir una moda, sino de tomar una decisión estratégica. La implementación de un AVI no tiene por qué ser costosa ni complicada. Hoy existen herramientas accesibles, integrables y escalables que permiten iniciar con un proyecto piloto y ajustar según resultados reales.</p>
            <p>En VORTIA SRL ofrecemos asesoramiento personalizado para ayudarte a elegir la solución adecuada para tu negocio, sin inversiones desmedidas ni promesas infladas.</p>
            
            <h4>Conclusión: la IA no te reemplaza, te impulsa</h4>
            <p>La inteligencia artificial no vino a quitarte el control de tu empresa. Vino a potenciarte. </p>
            <p>Un Asistente Virtual Inteligente no reemplaza a tu equipo: lo fortalece, lo libera de tareas rutinarias y lo enfoca en lo que verdaderamente hace la diferencia.</p>
            <p>Si todavía no incorporaste IA en tu negocio, un AVI puede ser el mejor punto de partida. </p>
            <p>No esperes a que tus competidores tomen la delantera. </p>
            <p>Invertí en eficiencia, experiencia y escalabilidad.</p>
            <p class="highlight">📞 ¿Querés saber cómo implementar IA o asistentes virtuales inteligentes en tu empresa sin perder tiempo ni dinero?</p>
            <p class="call-to-action">Hablemos!</p>
            <p><a href="https://vortia.com.ar" class="btn-link">👉 https://vortia.com.ar</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      expandedCards: [false, false]
    }
  },
  methods: {
    toggleCard(index) {
      this.expandedCards[index] = !this.expandedCards[index];
      
      // Scroll to the expanded card if it's open
      if (this.expandedCards[index]) {
        this.$nextTick(() => {
          const card = document.querySelectorAll('.blog-card')[index];
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        });
      }
    }
  },
  head() {
    return {
      title: 'Blog | Vortia',
      meta: [
        { hid: 'description', name: 'description', content: 'Blog de Vortia - Artículos, noticias y actualizaciones sobre nuestra empresa y servicios.' }
      ]
    }
  }
}
</script>

<style scoped>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.blog-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  color: #000000;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
}

.blog-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #fff;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.blog-card.expanded {
  grid-column: 1 / -1;
  cursor: default;
}

.card-preview {
  display: flex;
  flex-direction: column;
}

.card-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  position: relative;
  background-color: #94E05A !important;
}

.card-image h2 {
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  z-index: 2;
}

.card-content {
  padding: 25px;
}

.card-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
}

.card-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.card-excerpt {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  color: #61a12f;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  position: relative;
  padding-bottom: 2px;
}

.read-more:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #8acc57;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s;
}

.blog-card:hover .read-more:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Expanded Card Styles */
.card-expanded-content {
  padding: 0 25px 30px;
  max-height: 2000px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.expanded-container {
  max-width: 800px;
  margin: 0 auto;
}

.expanded-container p {
  margin-bottom: 15px;
  line-height: 1.7;
  color: #444;
}

.expanded-container h4 {
  font-size: 22px;
  font-weight: 600;
  margin: 30px 0 15px;
  color: #333;
}

.expanded-container ul {
  margin: 15px 0 20px 20px;
}

.expanded-container li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #444;
}

.highlight {
  font-weight: 600;
  color: #333;
  font-size: 18px;
  padding: 15px;
  background-color: #f7f7f7;
  border-left: 4px solid #B7F38A;
  margin: 20px 0;
}

.call-to-action {
  font-weight: 600;
  font-size: 18px;
  color: #333;
}

.btn-link {
  display: inline-block;
  color: #8430D9;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 0;
  transition: all 0.3s ease;
}

.btn-link:hover {
  color: #6020A0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .blog-title {
    font-size: 36px;
  }
  
  .card-image h2 {
    font-size: 20px;
  }
}
</style>