<template>
  <div class="blog-container">
    <h1 class="blog-title">Blog Vortia</h1>
    
    <div class="blog-grid">
      <!-- Card 1 -->
      <div class="blog-card" @click="toggleCard(0)" :class="{ 'expanded': expandedCards[0] }">
        <div class="card-preview">
          <div class="card-image" style="background-color: #8430D9;">
            <h2>Artificial Intelligence: Fad or Strategic Necessity?</h2>
          </div>
          <div class="card-content">
            <h3>Artificial Intelligence: Fad or Strategic Necessity?</h3>
            <p class="card-date">
              <i class="fas fa-calendar-alt"></i> march 25, 2025
            </p>
            <p class="card-excerpt">
              We're living in an era where Artificial Intelligence (AI) and related concepts like machine learning, automation, and intelligent virtual assistants have entered everyday business conversations...
            </p>
            <div class="read-more">
              <span v-if="!expandedCards[0]">Read more</span>
              <span v-else>Read less</span>
            </div>
          </div>
        </div>
        
        <!-- Expanded Content -->
        <div class="card-expanded-content" v-if="expandedCards[0]">
          <div class="expanded-container">
            <p>By the VORTIA SRL Team</p>
            <p>We're living in an era where Artificial Intelligence (AI) and related concepts like machine learning, automation, and intelligent virtual assistants have entered everyday business conversations. From tech startups to local businesses, everyone seems to be talking about—and often adopting—some form of AI.</p>
            <p>But in the midst of all this buzz, a very valid and common question arises:</p>
            <p class="highlight">Do I really need to implement AI if my business is already running smoothly?</p>
            <p>The short answer might be "it depends."</p>
            <p>But the more strategic, responsible answer is this:</p>
            <p class="highlight">If you don't seriously consider adopting AI, there's a real risk of losing competitiveness in the medium and long term.</p>
            
            <h4>Beyond the Hype: Efficiency as the Real Driver</h4>
            <p>Adopting emerging technologies shouldn't be about trends—it should serve a clear purpose: operational efficiency. And in this space, AI has proven to be a powerful tool.</p>
            <p>For many businesses, especially small and medium-sized ones, AI still feels like a costly, unnecessary, or complex investment. But properly implemented, it can deliver real, measurable value in areas such as:</p>
            <ul>
              <li>Customer service</li>
              <li>Data management</li>
              <li>Logistics and planning</li>
              <li>Marketing and advertising</li>
              <li>Sales processes</li>
            </ul>
            
            <h4>A Realistic Example</h4>
            <p>Imagine a business automating its customer service channels—WhatsApp, social media, even its website—using AI. What they get is not just a bot that gives basic answers, but a tireless digital teammate that works 24/7, 365 days a year, without breaks or delays.</p>
            <p>This "digital collaborator" doesn't just reply—it understands context, advises the customer, sorts inquiries, and escalates complex issues to human staff. Meanwhile, your real team can focus on what matters: closing deals, coordinating actions, and solving the tough cases.</p>
            
            <h4>AI as a Silent Competitive Advantage</h4>
            <p>Even if your business is already running efficiently, AI won't replace what you do well—it will enhance it, accelerate it, and scale it.</p>
            <p>A competitor who adopts AI smartly can make faster decisions, with better information, and with fewer human resources. Simply put: they'll earn more while spending less.</p>
            <p>This doesn't mean replacing your team—it means empowering them. AI frees your staff from repetitive tasks and allows them to focus on strategic, creative, and impactful roles.</p>
            
            <h4>Numbers That Speak for Themselves</h4>
            <p>According to PwC, the global economic impact of AI could reach $15.7 trillion by 2030, thanks to increased productivity and more personalized services. Of that, $6.6 trillion will come from improved labor efficiency.</p>
            <p>In Latin America, AI adoption is growing fast. Argentine businesses are already using intelligent virtual assistants, product recommendation engines, and predictive models to segment audiences and optimize marketing.</p>
            
            <h4>Accessible AI: Affordable and Simple (When You Know Where to Start)</h4>
            <p>One of the big myths is that AI is only for large corporations—or that it's expensive and hard to implement. But today, scalable solutions exist so that any SME or independent business can start simply and effectively.</p>
            <p>At VORTIA SRL, for example, we help businesses:</p>
            <ul>
              <li>Automate FAQs with intelligent virtual assistants</li>
              <li>Use AI in ad campaigns for better audience targeting</li>
              <li>Create WhatsApp conversation flows that boost conversion rates</li>
              <li>Analyze customer behavior and sales data to forecast trends</li>
            </ul>
            
            <h4>So… Fad or Strategic Necessity?</h4>
            <p>AI is no longer a future promise—it's a present reality. It's not about chasing tech trends; it's about leveraging a strategic opportunity to improve how you work, serve, and sell.</p>
            <p>Ignoring this shift won't ruin your business, but it will slow you down. And in fast-moving markets, that's the difference between growing and falling behind.</p>
            
            <h4>In Conclusion</h4>
            <p>Artificial Intelligence is a tool—not a replacement. It's here to help you work smarter, make better decisions, deliver superior experiences, and scale your business sustainably.</p>
            <p>Is your business running well already? Great.</p>
            <p>AI can help it run even better.</p>
            <p class="highlight">📌 Want to know how to apply AI in your business without overspending or wasting time?</p>
            <p class="call-to-action">Let's talk. At VORTIA SRL, we design real solutions for real businesses.</p>
            <p><a href="https://vortia.com.ar" class="btn-link">👉 https://vortia.com.ar</a></p>
          </div>
        </div>
      </div>
      
      <!-- Card 2 -->
      <div class="blog-card" @click="toggleCard(1)" :class="{ 'expanded': expandedCards[1] }">
        <div class="card-preview">
          <div class="card-image" style="background-color: #5E73E1;">
            <h2>Intelligent Virtual Assistants, Chatbots, and Humans</h2>
          </div>
          <div class="card-content">
            <h3>Intelligent Virtual Assistants, Chatbots, and Humans: Who Do You Trust?</h3>
            <p class="card-date">
              <i class="fas fa-calendar-alt"></i> february 20, 2025
            </p>
            <p class="card-excerpt">
              In today's digital world, where speed is everything, customer service has become a competitive advantage, not just a support area...
            </p>
            <div class="read-more">
              <span v-if="!expandedCards[1]">Read more</span>
              <span v-else>Read less</span>
            </div>
          </div>
        </div>
        
        <!-- Expanded Content -->
        <div class="card-expanded-content" v-if="expandedCards[1]">
          <div class="expanded-container">
            <p>By the VORTIA SRL Team</p>
            <p>In today's digital world, where speed is everything, customer service has become a competitive advantage, not just a support area. More and more businesses are asking:</p>
            <p class="highlight">Should I use a chatbot? Invest in an intelligent virtual assistant (IVA)? Keep relying on my human team?</p>
            <p>In this article, we break down the differences between a basic chatbot, an Intelligent Virtual Assistant (IVA), and traditional support—and explain how these technologies are transforming businesses in Argentina.</p>
            
            <h4>What Is an Intelligent Virtual Assistant?</h4>
            <p>Let's clarify: a chatbot is not the same as an IVA.</p>
            <p>A chatbot is a program that answers frequently asked questions with scripted responses. It works for basic tasks like giving store hours, repeating prices, or sending forms. But it's usually limited and rigid.</p>
            <p>An IVA, on the other hand, goes much further. It uses AI to understand natural language, interpret context, and adapt to different interaction scenarios.</p>
            <p>It doesn't just answer—it guides the customer through their entire journey with your brand.</p>
            
            <h4>How Can It Add Real Value to Your Business?</h4>
            <p>Adopting an IVA isn't just a tech trend—it's a strategic decision that can transform your operations.</p>
            <p>Key benefits include:</p>
            <ul>
              <li><strong>🕐 24/7 Availability</strong><br>
              No matter if it's 3 a.m. on a Sunday or a public holiday—an IVA is always there, handling inquiries, taking orders, and routing requests instantly.</li>
              
              <li><strong>🤝 Improved Customer Experience</strong><br>
              Today's customers want quick, clear, and personalized interactions. An IVA can deliver accurate answers tailored to each user's specific need.</li>
              
              <li><strong>💸 Lower Operating Costs</strong><br>
              Automating repetitive tasks frees up your team to focus on what truly matters: closing sales, solving complex cases, and strategic thinking.</li>
              
              <li><strong>📊 Business Intelligence from Conversations</strong><br>
              Every interaction is data. IVAs can capture and analyze patterns, preferences, and objections—fueling smarter campaigns and business decisions.</li>
              
              <li><strong>📈 Effortless Scalability</strong><br>
              If your contact volume doubles, an IVA can manage it—no need to expand your customer service team. You scale without adding complexity.</li>
            </ul>
            
            <h4>When to Choose an IVA, a Chatbot, or Human Service?</h4>
            <p>The right solution depends on several factors: query volume, service complexity, company culture, and growth expectations.</p>
            <p>A business with few products and limited customer service may start with a chatbot + human team.</p>
            <p>A company aiming to scale, expand offerings, or automate sales and post-sales should invest in an IVA.</p>
            <p>The key is not just meeting today's needs—but preparing for where you want to be tomorrow.</p>
            
            <h4>Real Cases in Argentina: Technology in Action</h4>
            <p>At VORTIA SRL, we work with businesses from many industries already transforming how they communicate using IVAs. For example:</p>
            <ul>
              <li>Insurance: automatic quotes, policy renewals, claims tracking</li>
              <li>Tourism & Hospitality: bookings, FAQs, post-sales support</li>
              <li>Automotive: lead generation, test drive scheduling, buyer intent classification</li>
              <li>Healthcare: appointment scheduling, automated reminders, basic inquiries</li>
              <li>Professional Services & Education: registrations, payments, onboarding</li>
            </ul>
            
            <h4>A Real Example: A Car Dealership That Sells While It Sleeps</h4>
            <p>An Argentine dealership implemented an IVA to assist customers in three key areas:</p>
            <ul>
              <li>Used cars</li>
              <li>Savings plans</li>
              <li>New vehicles</li>
            </ul>
            <p>Results:</p>
            <ul>
              <li>Round-the-clock service, even outside business hours</li>
              <li>Automatic lead qualification by intent level</li>
              <li>Human intervention only when necessary</li>
              <li>Detailed sales team performance insights</li>
              <li>Real-time monitoring of conversations and improvement points</li>
            </ul>
            <p>This kind of solution helps businesses close more deals, save time, and improve the customer journey end to end.</p>
            
            <h4>Is It Time to Invest in AI?</h4>
            <p>Short answer: Yes—if you want your business to grow smart and sustainably.</p>
            <p>This isn't about hype—it's a strategic move. Implementing an IVA doesn't have to be costly or complicated. Today, you have accessible, scalable tools that let you start with a pilot and evolve based on real outcomes.</p>
            <p>At VORTIA SRL, we offer personalized advice to help you choose the right solution—without overspending or overpromising.</p>
            
            <h4>Conclusion: AI Doesn't Replace You—It Empowers You</h4>
            <p>AI isn't here to take control of your business. It's here to boost it.</p>
            <p>An Intelligent Virtual Assistant doesn't replace your team—it enhances it, frees it from repetitive tasks, and lets it focus on what truly moves the needle.</p>
            <p>If you haven't added AI to your business yet, an IVA is the perfect starting point.</p>
            <p>Don't wait for your competitors to move first.</p>
            <p>Invest in efficiency, customer experience, and smart growth.</p>
            <p class="highlight">📞 Want to learn how to implement AI or Intelligent Virtual Assistants in your business—without wasting time or money?</p>
            <p class="call-to-action">Let's talk:</p>
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