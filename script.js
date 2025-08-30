document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    // --- Page Elements ---
    const landingPage = document.getElementById('landing-page');
    const monitoringPage = document.getElementById('monitoring-page');
    const reportPage = document.getElementById('report-page');
    const demoBtn = document.getElementById('demo-btn');
    const backToLandingBtn = document.getElementById('back-to-landing-btn');
    const backToMonitoringBtn = document.getElementById('back-to-monitoring-btn');
    const applicantListContainer = document.getElementById('applicant-list');
    const reportContentWrapper = document.getElementById('report-content-wrapper');



    

    // --- Navigation ---
    function showPage(page) {
        landingPage.classList.add('hidden');
        monitoringPage.classList.add('hidden');
        reportPage.classList.add('hidden');
        page.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    demoBtn.addEventListener('click', () => { populateApplicantList(); showPage(monitoringPage); });
    backToLandingBtn.addEventListener('click', () => showPage(landingPage));
    backToMonitoringBtn.addEventListener('click', () => showPage(monitoringPage));

    // --- Populate Applicant List ---
    function populateApplicantList() {
        applicantListContainer.innerHTML = '';
        Object.keys(applicantsData).forEach(applicantId => {
            const applicant = applicantsData[applicantId];
            const latestRecord = applicant.history.length > 0 ? applicant.history.reduce((latest, current) => current.Month_Offset > latest.Month_Offset ? current : latest) : { Predicted_Prob_Default: 0, Risk_Category: 'N/A' };
            const riskPercentage = (latestRecord.Predicted_Prob_Default * 100).toFixed(2);
            const riskCategory = latestRecord.Risk_Category;
            const riskColorClass = riskCategory === 'Low' ? 'text-green-400' : riskCategory === 'Medium' ? 'text-yellow-400' : riskCategory === 'High' ? 'text-red-400' : 'text-green-400';
            
            const item = document.createElement('div');
            item.className = 'glass-card p-4 rounded-lg flex justify-between items-center cursor-pointer transition duration-300 hover:bg-gray-800/50';
            item.innerHTML = `
                <div>
                    <p class="text-slate-400 text-sm">Applicant ID</p>
                    <p class="text-white font-semibold text-lg">${parseInt(applicantId)}</p>
                </div>
                <div class="text-right">
                    <p class="text-slate-400 text-sm">Risk (${riskCategory})</p>
                    <p class="font-semibold text-lg ${riskColorClass}">${riskPercentage}%</p>
                </div>`;
            item.addEventListener('click', () => { createCibilReport(applicantId); showPage(reportPage); });
            applicantListContainer.appendChild(item);
        });
    }
    
    // --- Create CIBIL-Style Report (NOW WITH ANIMATIONS) ---
    function createCibilReport(applicantId) {
        const applicant = applicantsData[applicantId];
        const latestRecord = applicant.history.length > 0 ? applicant.history.reduce((latest, current) => current.Month_Offset > latest.Month_Offset ? current : latest) : { Predicted_Prob_Default: 0, Risk_Category: 'N/A' };
        const today = new Date().toLocaleDateString('en-GB');

        const prob = latestRecord.Predicted_Prob_Default;
        let cibilScore;
        if (prob <= 0.15) { cibilScore = 780 + (1 - prob/0.15) * 120; } 
        else if (prob <= 0.70) { cibilScore = 650 + (1 - (prob - 0.15)/0.55) * 130; } 
        else { cibilScore = 300 + (1 - (prob - 0.70)/0.30) * 350; }
        cibilScore = Math.round(cibilScore);

        const paymentHistoryHTML = applicant.history
            .filter(h => h.Data_Type === "Historical")
            .map(h => `<div class="info-pair"><span class="label">Month ${h.Month_Offset}:</span><span class="value">${h.Payment_Status}</span></div>`)
            .join('');

        const reportHTML = `
            <div id="report-page-container" style="opacity: 0;">
                <div class="header">
                    <h1>RISKON&trade; Credit Report</h1>
                    <div class="report-info">
                        <strong>Control Number:</strong> RKN${applicantId}${new Date().getTime().toString().slice(-4)}<br>
                        <strong>Report Date:</strong> ${today}
                    </div>
                </div>
                <div class="section">
                    <div class="grid-container">
                        <div class="info-box">
                            <h3>RISKON Score</h3>
                            <div class="cibil-gauge">
                                <svg class="cibil-gauge-svg" viewBox="0 0 120 120">
                                    <path class="cibil-gauge-track" d="M 20,100 A 40,40 0 1,1 100,100"></path>
                                    <path id="cibil-gauge-bar" class="cibil-gauge-bar" d="M 20,100 A 40,40 0 1,1 100,100"></path>
                                </svg>
                                <div id="cibil-gauge-text" class="cibil-gauge-text">300</div>
                            </div>
                        </div>
                        <div class="info-box">
                            <h3>Personal Details</h3>
                            <div class="info-pair"><span class="label">Name:</span> <span class="value">${applicant.personal.name}</span></div>
                            <div class="info-pair"><span class="label">Date of Birth:</span> <span class="value">${applicant.personal.dob}</span></div>
                            <div class="info-pair"><span class="label">Gender:</span> <span class="value">${applicant.personal.gender}</span></div>
                        </div>
                    </div>
                </div>
                 <div class="section">
                    <div class="section-title">RISK ANALYSIS</div>
                     <div class="info-box">
                         <div class="grid-container">
                            <div>
                                 <div class="info-pair"><span class="label">RISKON Category:</span> <span class="value font-bold ${latestRecord.Risk_Category === 'Low' ? 'text-green-600' : latestRecord.Risk_Category === 'Medium' ? 'text-yellow-600' :latestRecord.Risk_Category === 'High' ? 'text-red-600' :latestRecord.Risk_Category === 'N/A' ? 'text-green-600' :'text-gray-600'}">${latestRecord.Risk_Category}</span>
</div>
                                 <div class="info-pair"><span class="label">Default Probability:</span> <span class="value">${(latestRecord.Predicted_Prob_Default * 100).toFixed(2)}%</span></div>
                            </div>
                            <div class="graph-container">
                                <img src="${applicant.graphImage}" alt="Risk Trend Graph for Applicant ${applicantId}">
                            </div>
                         </div>
                    </div>
                </div>
                <div class="section">
                    <div class="section-title">CREDIT ACCOUNT DETAILS</div>
                    <div class="account-card">
                        <div class="account-header">
                            <span>Home Credit India - Consumer Loan</span>
                            <span>Acct No: ...${String(applicantId).slice(-6)}</span>
                        </div>
                        <div class="account-body">
                            <h4 style="margin-bottom: 10px; font-size: 14px; font-weight: bold;">Payment History (Recent)</h4>
                            <div class="payment-history">
                                ${paymentHistoryHTML || '<p>No historical payments found.</p>'}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="report-generation-section">
                     <button id="generate-report-btn" onclick="handleGenerateReport('${applicantId}')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                        Generate Full Report
                    </button>
                    <div id="ai-summary-container" class="hidden mt-4">
                        <div class="section-title">AI-POWERED SUMMARY (GEMINI-STYLE)</div>
                        <div class="info-box">
                            <p id="ai-summary-content" class="text-base leading-relaxed"></p>
                        </div>
                        <button id="download-pdf-btn" class="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                            Download as PDF
                        </button>
                    </div>
                </div>
            </div>`;
        
        reportContentWrapper.innerHTML = reportHTML;
        document.getElementById('download-pdf-btn').addEventListener('click', () => downloadReportAsPDF(applicantId));

        // --- GSAP ANIMATIONS FOR THE REPORT ---
        const tl = gsap.timeline();
        const scoreCounter = { value: 300 };
        const gaugeBar = document.getElementById('cibil-gauge-bar');
        const circumference = gaugeBar.getTotalLength();
        const scorePercentage = (cibilScore - 300) / 600;
        const finalOffset = circumference * (1 - scorePercentage);
        
        gaugeBar.style.strokeDasharray = circumference;
        gaugeBar.style.strokeDashoffset = circumference;
        
        tl.to("#report-page-container", { opacity: 1, duration: 0.5 })
          .to(scoreCounter, { 
              value: cibilScore, 
              duration: 1.5, 
              ease: "power2.out",
              onUpdate: () => {
                  document.getElementById("cibil-gauge-text").textContent = Math.round(scoreCounter.value);
              }
          }, "-=0.2")
          .to(gaugeBar, { 
              strokeDashoffset: finalOffset, 
              duration: 1.5, 
              ease: "power2.out" 
          }, "<")
          .from(".section", { opacity: 0, y: 30, stagger: 0.2, duration: 0.6 }, "-=1.2")
          .from(".graph-container img", { scale: 1.2, duration: 1, ease: "power2.out" }, "-=0.8");
    }

    // --- Handle Report Generation Click ---
    window.handleGenerateReport = function(applicantId) {
        const applicant = applicantsData[applicantId];
        const summaryContainer = document.getElementById('ai-summary-container');
        const summaryContent = document.getElementById('ai-summary-content');
        const generateBtn = document.getElementById('generate-report-btn');

        summaryContent.textContent = "Generating summary...";
        summaryContainer.classList.remove('hidden');
        gsap.set(summaryContainer, { height: 'auto', opacity: 1 });
        const autoHeight = gsap.getProperty(summaryContainer, "height");
        gsap.from(summaryContainer, { height: 0, opacity: 0, duration: 0.6, ease: 'power2.out' });
        
        generateBtn.style.display = 'none';

        setTimeout(() => { // Simulate API call delay
            summaryContent.textContent = applicant.geminiSummary;
        }, 800);
    }

    // --- Handle PDF Download ---
    function downloadReportAsPDF(applicantId) {
        const reportElement = document.getElementById('report-page-container');
        const options = { margin: 0.5, filename: `RISKON_Report_${applicantId}.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } };
        
        const genBtn = reportElement.querySelector('#generate-report-btn');
        const pdfBtn = reportElement.querySelector('#download-pdf-btn');
        if(genBtn) genBtn.style.display = 'none';
        if(pdfBtn) pdfBtn.style.display = 'none';

        html2pdf().from(reportElement).set(options).save().then(() => {
            if(pdfBtn) pdfBtn.style.display = 'inline-block';
        });
    }

    // --- Landing Page Animations ---
    let heroScene, heroCamera, heroRenderer, heroParticles;
    function initHeroAnimation() {
       // [The existing, working Three.js hero animation code remains here]
        const container = document.getElementById('hero-animation');
        if (!container) return;
        heroScene = new THREE.Scene();
        heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        heroRenderer = new THREE.WebGLRenderer({ alpha: true });
        heroRenderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(heroRenderer.domElement);

        const particleCount = 8000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const heroTargetPositions = new Float32Array(particleCount * 3);
        const heroInitialPositions = new Float32Array(particleCount * 3);

        const fontLoader = new THREE.FontLoader();
        fontLoader.load('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json', 
            function (font) {
                const textGeometry = new THREE.TextGeometry('RISKON', { font: font, size: 1.5, height: 0.2, curveSegments: 12 });
                textGeometry.center();
                
                const sampler = new THREE.MeshSurfaceSampler(new THREE.Mesh(textGeometry)).build();
                const tempPosition = new THREE.Vector3();
                for (let i = 0; i < particleCount; i++) {
                    sampler.sample(tempPosition);
                    heroTargetPositions[i * 3] = tempPosition.x;
                    heroTargetPositions[i * 3 + 1] = tempPosition.y;
                    heroTargetPositions[i * 3 + 2] = tempPosition.z;
                }

                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    const radius = 10;
                    const theta = 2 * Math.PI * Math.random();
                    const phi = Math.acos(2 * Math.random() - 1);
                    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
                    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                    positions[i3 + 2] = radius * Math.cos(phi);
                }
                heroInitialPositions.set(positions);

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                const material = new THREE.PointsMaterial({ color: 0x3b82f6, size: 0.035, transparent: true, opacity: 0 });
                heroParticles = new THREE.Points(geometry, material);
                heroScene.add(heroParticles);
                
                gsap.to(heroParticles.material, {opacity: 1, duration: 1});
            }
        );

        heroCamera.position.z = 10;
        
        const heroTimeline = gsap.timeline({ scrollTrigger: { trigger: "#hero-section", start: "top top", end: "bottom bottom", scrub: 1 } });
        heroTimeline.to({}, { duration: 1, onUpdate: function() { const progress = this.progress(); if (heroParticles) { const positions = heroParticles.geometry.attributes.position.array; for (let i = 0; i < particleCount; i++) { const i3 = i * 3; positions[i3] = THREE.MathUtils.lerp(heroInitialPositions[i3], heroTargetPositions[i3], progress); positions[i3 + 1] = THREE.MathUtils.lerp(heroInitialPositions[i3+1], heroTargetPositions[i3+1], progress); positions[i3 + 2] = THREE.MathUtils.lerp(heroInitialPositions[i3+2], heroTargetPositions[i3+2], progress); } heroParticles.geometry.attributes.position.needsUpdate = true; } } }, 0);
        heroTimeline.to({}, { duration: 1, onUpdate: function() { const progress = this.progress(); if (heroParticles) { const positions = heroParticles.geometry.attributes.position.array; for (let i = 0; i < particleCount; i++) { const i3 = i * 3; const dismemberedX = heroTargetPositions[i3] * (1 + progress * 5); const dismemberedY = heroTargetPositions[i3+1] * (1 + progress * 5); const dismemberedZ = heroTargetPositions[i3+2] * (1 + progress * 5); positions[i3] = dismemberedX; positions[i3 + 1] = dismemberedY; positions[i3 + 2] = dismemberedZ; } heroParticles.geometry.attributes.position.needsUpdate = true; heroParticles.material.opacity = 1 - progress; } } }, 1);
        heroTimeline.to("#hero-text", { opacity: 1, duration: 0.5 }, 1.5);
        animateHero();
    }
    function animateHero() { requestAnimationFrame(animateHero); if (heroRenderer) { if (heroParticles && !ScrollTrigger.isScrolling) heroParticles.rotation.y += 0.0001; heroRenderer.render(heroScene, heroCamera); } }
    window.addEventListener('resize', () => { if(heroRenderer) { heroCamera.aspect = window.innerWidth / window.innerHeight; heroCamera.updateProjectionMatrix(); heroRenderer.setSize(window.innerWidth, window.innerHeight); } }, false);
    initHeroAnimation();
    
    // --- NEW Interactive Solution Section Animation ---
    const solutionStepsData = [ { title: "Data Engineering", description: "From raw, complex data sources to actionable, time-series insights." }, { title: "Feature Preprocessing", description: "Utilizing Weight of Evidence (WoE) and Information Value (IV) for powerful feature selection." }, { title: "Cohort Discovery", description: "Personalized risk assessment by segmenting borrowers into financial archetypes using K-Means clustering." }, { title: "Dynamic Calibration", description: "Solving Ordinary Differential Equations (ODEs) to model dynamic risk factors." }, { title: "Final Model Training", description: "Training cohort-specific ElasticNet models for maximum accuracy and fairness." } ];
    const stepsContainer = document.getElementById('solution-steps');
    solutionStepsData.forEach((step, i) => { stepsContainer.innerHTML += `<div class="step-content" id="step-${i}"><h3 class="text-3xl font-bold mb-3">${step.title}</h3><p class="text-slate-400">${step.description}</p></div>`; });
    
    let vizScene, vizCamera, vizRenderer, dataOrb, path, nodes = [];
    
    function initSolutionViz() {
        const container = document.getElementById('solution-viz');
        if(!container) return;
        vizScene = new THREE.Scene();
        vizCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        vizRenderer = new THREE.WebGLRenderer({ alpha: true });
        vizRenderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(vizRenderer.domElement);
        vizCamera.position.set(0, 0, 10);

        // Create the motion path
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 6, 0),
            new THREE.Vector3(2, 3, 0),
            new THREE.Vector3(-2, 0, 0),
            new THREE.Vector3(2, -3, 0),
            new THREE.Vector3(0, -6, 0)
        ]);
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.5 });
        path = new THREE.Line(geometry, material);
        vizScene.add(path);

        // Create the nodes for each stage
        const nodeGeo = new THREE.SphereGeometry(0.3, 32, 32);
        for(let i = 0; i < 5; i++) {
            const nodeMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.5 });
            const node = new THREE.Mesh(nodeGeo, nodeMat);
            const pointOnCurve = curve.getPoint(i / 4);
            node.position.copy(pointOnCurve);
            nodes.push(node);
            vizScene.add(node);
        }

        // Create the main data orb
        const orbGeo = new THREE.SphereGeometry(0.2, 32, 32);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
        dataOrb = new THREE.Mesh(orbGeo, orbMat);
        vizScene.add(dataOrb);

        // GSAP ScrollTrigger timeline to move the orb
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#solution-section-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        tl.to(dataOrb.position, {
            motionPath: {
                path: curve.getPoints(50).map(p => ({x: p.x, y: p.y})),
                alignOrigin: [0.5, 0.5]
            },
            duration: 1
        });

        const stepContents = document.querySelectorAll(".step-content");
        stepContents.forEach((step, i) => { 
            ScrollTrigger.create({ 
                trigger: step, 
                start: "top center", 
                end: "bottom center", 
                toggleClass: "is-active",
                onEnter: () => animateNode(i),
                onEnterBack: () => animateNode(i),
            }); 
        });

        animateViz();
    }

    function animateNode(index) {
        nodes.forEach((node, i) => {
            const isActive = i === index;
            gsap.to(node.material, { color: new THREE.Color(isActive ? 0x3b82f6 : 0x94a3b8), duration: 0.5 });
            gsap.to(node.scale, { x: isActive ? 1.5 : 1, y: isActive ? 1.5 : 1, z: isActive ? 1.5 : 1, duration: 0.5, ease: "back.out(1.7)" });
        });
    }

    function animateViz() {
        requestAnimationFrame(animateViz);
        if (vizRenderer) vizRenderer.render(vizScene, vizCamera);
    }
    
    initSolutionViz();
});
