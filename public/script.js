const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The new Industries section
const newIndustries = \
    <!-- Industries We Serve -->
    <div class="industries-pin-wrapper" id="indPinWrapper">
      <section id="industries" class="industries-scroll-section">

        <!-- Split body: left timeline + right content -->
        <div class="industries-inner">

          <!-- LEFT: Curved timeline pinned to left edge -->
          <div class="industries-timeline" id="industriesTimeline">
            <svg class="timeline-svg" viewBox="0 0 300 600" preserveAspectRatio="none">
              <path class="timeline-path" d="M 0 0 A 300 300 0 0 1 0 600" stroke="#d0edd5" stroke-width="2" fill="none"/>
            </svg>

            <div class="ind-node" data-index="0">
              <div class="ind-circle active">
                <img src="assets/images/ConstructMP.svg" alt="Construction" style="width: 50%; height: 50%;">
              </div>
            </div>
            <div class="ind-node" data-index="1">
              <div class="ind-circle">
                <img src="assets/images/RailEngineering.svg" alt="Rail" style="width: 50%; height: 50%;">
              </div>
            </div>
            <div class="ind-node" data-index="2">
              <div class="ind-circle">
                <i class="fa-solid fa-handshake"></i>
              </div>
            </div>
          </div>

          <!-- RIGHT: Content panels -->
          <div class="industries-content">

            <div class="ind-head">
                <h2>Industries We Serve</h2>
                <p>Specialized manpower supply for Singapore's core sectors.</p>
            </div>

            <!-- Panel 0: Manufacturing -->
            <div class="ind-panel active" data-index="0">
              <h3 class="industry-title">Manufacturing &amp; Logistics</h3>
              <p class="industry-desc">Manufacturing and logistics forms the backbone of Singapore's industrial sector. The industry relies on efficient supply chain management, operational precision, and compliance-driven production capabilities.</p>
              <p class="industry-desc">Our dedicated workforce is trained in warehouse management systems and safety protocols to handle complex industrial operational workflows reliably and meet stringent project deadlines.</p>
              <h4 class="industry-subheader">What It Includes</h4>
              <ul class="industry-bullets">
                <li>Warehouse packing and storage staff</li>
                <li>Supply chain operations support</li>
                <li>Forklift operators and logistics drivers</li>
                <li>Inventory and distribution management</li>
                <li>Port container handling</li>
                <li>Production line workers</li>
                <li>Safety compliance and inspections</li>
              </ul>
            </div>

            <!-- Panel 1: Rail Engineering -->
            <div class="ind-panel" data-index="1">
              <h3 class="industry-title">Rail Engineering</h3>
              <p class="industry-desc">Rail engineering focuses on the design, construction, maintenance, and operation of railway systems. It ensures safe, efficient, and reliable transportation for passengers and goods across urban and national networks.</p>
              <p class="industry-desc">Rail engineers work on critical infrastructure such as tracks, signaling systems, electrical networks, and rolling stock. From building new rail lines to maintaining existing systems, their role is essential in keeping transportation running smoothly and safely.</p>
              <h4 class="industry-subheader">What It Includes</h4>
              <ul class="industry-bullets">
                <li>Track workers, maintenance staff</li>
                <li>Engineering support roles</li>
                <li>Specialized technical positions</li>
                <li>Signaling and control systems</li>
                <li>Electrical and power supply systems</li>
                <li>Rail infrastructure development</li>
                <li>Safety inspections and compliance</li>
              </ul>
            </div>

            <!-- Panel 2: Compliance -->
            <div class="ind-panel" data-index="2">
              <h3 class="industry-title">Manpower Compliance (MOM)</h3>
              <p class="industry-desc">Full handling of Work Permits, S-Pass, Levy Management, and Payroll — ensuring every deployment is fully compliant with Singapore's Ministry of Manpower regulations to eliminate legal risks for your business.</p>
              <p class="industry-desc">We take full responsibility for the administrative and regulatory burden so your business can focus entirely on project delivery. From onboarding to repatriation, we handle every compliance checkpoint smoothly.</p>
              <h4 class="industry-subheader">What It Includes</h4>
              <ul class="industry-bullets">
                <li>Work Permit &amp; S-Pass applications</li>
                <li>MOM levy management and payment</li>
                <li>Payroll processing and CPF contributions</li>
                <li>Dormitory and accommodation logistics</li>
                <li>Medical insurance and WICA coverage</li>
                <li>Repatriation and permit cancellations</li>
                <li>Ongoing MOM compliance audits</li>
              </ul>
            </div>

          </div><!-- /.industries-content -->
        </div><!-- /.industries-inner -->
      </section>
    </div><!-- /.industries-pin-wrapper -->
\;

const newScript = \
    <!-- Industries Scroll Script -->
    <script>
    (function() {
        const wrapper = document.getElementById('indPinWrapper');
        if (!wrapper) return;
        const section = document.getElementById('industries');
        const panels = document.querySelectorAll('.ind-panel');
        const nodes = document.querySelectorAll('.ind-node');
        const circles = document.querySelectorAll('.ind-circle');

        function activate(idx) {
            panels.forEach((p, i) => p.classList.toggle('active', i === idx));
            circles.forEach((c, i) => c.classList.toggle('active', i === idx));
        }

        function onScroll() {
            const wrapperTop = wrapper.offsetTop;
            const wrapperH = wrapper.offsetHeight;
            const scrollY = window.scrollY;
            const windowH = window.innerHeight;

            const start = wrapperTop;
            const end = wrapperTop + wrapperH - windowH;
            
            let progress = 0;
            if (scrollY > start) {
                progress = (scrollY - start) / (end - start);
            }
            if (scrollY >= end) progress = 1;
            if (scrollY <= start) progress = 0;

            section.style.setProperty('--ind-progress', (progress * 100) + '%');

            const floatIndex = progress * (nodes.length - 1);
            const idx = Math.round(floatIndex);
            activate(idx);

            const angleStep = Math.PI / 4; // 45 degrees spacing
            const radius = window.innerWidth <= 900 ? 0 : 300; 
            
            nodes.forEach((node, i) => {
                let relIndex = (i - floatIndex) % nodes.length;
                if (relIndex > 1.5) relIndex -= nodes.length;
                if (relIndex < -1.5) relIndex += nodes.length;
                
                const angle = relIndex * angleStep;
                
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                if (window.innerWidth > 900) {
                    node.style.transform = \\\	ranslate(\\\px, \\\px)\\\;
                } else {
                    node.style.transform = 'none';
                }
            });
        }

        nodes.forEach((node, i) => {
            node.addEventListener('click', () => {
                const trackH = wrapper.offsetHeight - window.innerHeight;
                const target = wrapper.offsetTop + (i / (nodes.length - 1)) * trackH;
                window.scrollTo({ top: target, behavior: 'smooth' });
            });
        });

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        onScroll(); 
    })();
    </script>
\;

const oldIndStartStr = '    <!-- Industries Section (Slider) -->';
const oldIndEndStr = '            </div>\\n        </div>\\n    </section>';

const startIndex = html.indexOf(oldIndStartStr);
const endIndex = html.indexOf(oldIndEndStr, startIndex) + oldIndEndStr.length;

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + html.substring(endIndex);
}

const heroEndStr = '    </section>\\n';
let heroIndex = html.indexOf('<!-- Hero Section -->');
heroIndex = html.indexOf(heroEndStr, heroIndex) + heroEndStr.length;

html = html.substring(0, heroIndex) + newIndustries + html.substring(heroIndex);

const bodyEndIndex = html.indexOf('</body>');
html = html.substring(0, bodyEndIndex) + newScript + '\\n' + html.substring(bodyEndIndex);

fs.writeFileSync('index.html', html);
console.log('Update successful');
