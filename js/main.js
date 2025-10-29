/**
 * ============================================================================
 * CatBreedAI - 主应用程序
 * ============================================================================
 * 
 * 功能说明：
 * - 使用先进的 AI 技术在浏览器中运行深度学习模型
 * - 识别 67+ 种猫咪品种
 * - 100% 客户端处理，保护用户隐私
 * - 支持图片上传和摄像头拍照
 * 
 * 技术栈：
 * - Web-based AI inference engine (AI 推理引擎)
 * - Lightweight deep learning model (轻量级深度学习模型)
 * - Canvas API (图像预处理)
 * 
 * @author CatBreedAI Team
 * @version 2.0
 * @license MIT
 */

// 导入配置常量
import { 
    AI_CONFIG, 
    UI_CONFIG, 
    BREEDS_CONFIG,
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
    POPULAR_BREEDS,
    BREED_DESCRIPTIONS
} from './config.js';

/**
 * 猫咪品种识别器主类
 * 负责整个识别流程的管理和协调
 */
class CatBreedIdentifier {
    /**
     * 构造函数 - 初始化识别器
     * 加载模型、初始化UI元素、绑定事件监听器
     */
    constructor() {
        // AI 模型相关
        this.session = null;                          // AI 模型会话
        this.classes = [];                            // 品种类别列表
        this.modelPath = AI_CONFIG.MODEL_PATH;        // 模型文件路径
        this.classesPath = AI_CONFIG.CLASSES_PATH;    // 类别文件路径
        this.imageSize = AI_CONFIG.IMAGE_SIZE;        // 输入图片尺寸
        
        // 图片预处理参数（ImageNet 标准化）
        this.mean = AI_CONFIG.MEAN;                   // RGB 均值
        this.std = AI_CONFIG.STD;                     // RGB 标准差
        
        // 当前识别结果
        this.currentPredictions = null;               // 存储当前识别结果
        this.currentImage = null;                     // 存储当前上传的图片
        
        // 初始化流程
        this.initElements();                          // 初始化DOM元素引用
        this.initEventListeners();                    // 绑定事件监听器
        this.loadModel();                             // 加载AI模型
        this.loadClasses();                           // 加载品种类别
        this.renderPopularBreeds();                   // 渲染热门品种
        this.handleShareUrlParams();                  // 处理分享URL参数
    }

    /**
     * 初始化DOM元素引用
     * 获取页面中所有需要操作的元素，避免重复查询DOM，提升性能
     */
    initElements() {
        // === 上传功能元素 ===
        this.dropZone = document.getElementById('dropZone');           // 拖拽上传区域
        this.fileInput = document.getElementById('fileInput');         // 文件选择输入框
        this.uploadBtn = document.getElementById('uploadBtn');         // 上传按钮
        this.cameraBtn = document.getElementById('cameraBtn');         // 摄像头按钮
        
        // === 首页Hero区按钮 ===
        this.heroUploadBtn = document.getElementById('heroUploadBtn');             // Hero区上传按钮
        this.heroLogoClickBtn = document.getElementById('heroLogoClickBtn');       // Hero区摄像头按钮
        
        // === 摄像头功能元素 ===
        this.cameraModal = document.getElementById('cameraModal');     // 摄像头模态框
        this.video = document.getElementById('video');                 // 视频流显示元素
        this.canvas = document.getElementById('canvas');               // Canvas元素（截图用）
        this.captureBtn = document.getElementById('captureBtn');       // 拍照按钮
        this.closeCameraBtn = document.getElementById('closeCameraBtn'); // 关闭摄像头按钮
        
        // === 图片预览元素 ===
        this.previewSection = document.getElementById('previewSection');   // 预览区域容器
        this.previewImage = document.getElementById('previewImage');       // 预览图片元素
        this.clearBtn = document.getElementById('clearBtn');               // 清除图片按钮
        this.identifyBtn = document.getElementById('identifyBtn');         // 开始识别按钮
        
        // === 结果展示元素 ===
        this.loadingSection = document.getElementById('loadingSection');       // 加载动画区域
        this.loadingProgress = document.getElementById('loadingProgress');     // 加载进度条
        this.resultsSection = document.getElementById('resultsSection');       // 识别结果区域
        this.resultsContainer = document.getElementById('resultsContainer');   // 结果内容容器
        this.tryAgainBtn = document.getElementById('tryAgainBtn');             // 重新识别按钮
        this.generateReportBtn = document.getElementById('generateReportBtn'); // 生成报告按钮
        
        // === 品种展示网格 ===
        this.breedsGrid = document.getElementById('breedsGrid');        // 热门品种网格容器
        
        // === 数据存储 ===
        this.currentPredictions = null;                                 // 当前识别结果（用于生成报告）
    }

    initEventListeners() {
        // Upload button
        this.uploadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.fileInput.click();
        });
        
        // Hero buttons
        if (this.heroUploadBtn) {
            this.heroUploadBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.fileInput.click();
                // Scroll to upload section
                document.getElementById('dropZone').scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }
        
        if (this.heroLogoClickBtn) {
            this.heroLogoClickBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openCamera();
            });
        }
        
        // File input change - Auto identify after upload
        this.fileInput.addEventListener('change', (e) => {
            this.handleFileSelect(e);
            // Auto-trigger identification after a short delay
            setTimeout(() => {
                if (this.previewImage.src) {
                    this.identifyBreed();
                }
            }, 500);
        });
        
        // Drag and drop
        this.dropZone.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.dropZone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        this.dropZone.addEventListener('drop', (e) => {
            this.handleDrop(e);
            // Auto-trigger identification after drop
            setTimeout(() => {
                if (this.previewImage.src) {
                    this.identifyBreed();
                }
            }, 500);
        });
        this.dropZone.addEventListener('click', (e) => {
            if (e.target.closest('button')) {
                return;
            }
            this.fileInput.click();
        });
        
        // Camera
        this.cameraBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openCamera();
        });
        this.closeCameraBtn.addEventListener('click', () => this.closeCamera());
        this.captureBtn.addEventListener('click', () => {
            this.capturePhoto();
            // Auto-trigger identification after capture
            setTimeout(() => {
                if (this.previewImage.src) {
                    this.identifyBreed();
                }
            }, 500);
        });
        
        // Identify button
        this.identifyBtn.addEventListener('click', () => this.identifyBreed());
        
        // Generate report button
        if (this.generateReportBtn) {
            this.generateReportBtn.addEventListener('click', () => this.generateReport());
        }
        
        // Generate share card button
        const generateShareCardBtn = document.getElementById('generateShareCardBtn');
        if (generateShareCardBtn) {
            generateShareCardBtn.addEventListener('click', () => this.generateShareCard());
        }
        
        // Clear and try again buttons
        this.clearBtn.addEventListener('click', () => this.reset());
        this.tryAgainBtn.addEventListener('click', () => this.reset());
    }

    async loadModel() {
        try {
            console.log('Loading AI model...');
            console.log('Model path:', this.modelPath);
            this.session = await ort.InferenceSession.create(this.modelPath, {
                executionProviders: ['wasm'],
                graphOptimizationLevel: 'all'
            });
            console.log('✅ Model loaded successfully!');
        } catch (error) {
            console.error('❌ Failed to load model:', error);
            console.error('Error details:', error.message);
            console.error('Please ensure:');
            console.error('1. Access through HTTP server (e.g. http://localhost:8000)');
            console.error('2. Model file exists in /models/ directory');
            console.error('3. Browser supports WebAssembly');
            notify.modal({
                title: 'Model Loading Failed',
                message: 'Please ensure:\n1. Access via HTTP server (not file://)\n2. Run: npm start or python -m http.server 8000\n3. Visit: http://localhost:8000\n\nCheck browser console (F12) for details',
                type: 'error',
                confirmText: 'Got it'
            });
        }
    }

    async loadClasses() {
        try {
            const response = await fetch(this.classesPath);
            const text = await response.text();
            this.classes = text.trim().split('\n').map(line => line.trim());
            console.log(`Loaded ${this.classes.length} classes`);
        } catch (error) {
            console.error('Failed to load classes:', error);
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dropZone.classList.add('active');
    }

    handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dropZone.classList.remove('active');
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dropZone.classList.remove('active');
        
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            this.loadImage(files[0]);
        }
    }

    handleFileSelect(e) {
        const files = e.target.files;
        if (files.length > 0) {
            this.loadImage(files[0]);
        }
    }

    loadImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.previewImage.src = e.target.result;
            this.showPreview();
        };
        reader.readAsDataURL(file);
    }

    async openCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'environment' } 
            });
            this.video.srcObject = stream;
            this.cameraModal.classList.remove('hidden');
        } catch (error) {
            console.error('Camera access error:', error);
            notify.error('Cannot access camera. Please grant camera permissions.');
        }
    }

    closeCamera() {
        const stream = this.video.srcObject;
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        this.cameraModal.classList.add('hidden');
    }

    capturePhoto() {
        const context = this.canvas.getContext('2d');
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
        context.drawImage(this.video, 0, 0);
        
        this.canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            this.previewImage.src = url;
            this.showPreview();
            this.closeCamera();
        });
    }

    showPreview() {
        this.dropZone.style.display = 'none';
        this.previewSection.classList.remove('hidden');
        this.resultsSection.classList.add('hidden');
    }

    async identifyBreed() {
        if (!this.session) {
            this.showError('Model not loaded yet, please try again later.\n\nTip: Please ensure you access this page through an HTTP server (e.g. http://localhost:8000), not by opening the HTML file directly.');
            return;
        }

        this.previewSection.classList.add('hidden');
        this.loadingSection.classList.remove('hidden');
        
        // Animate progress bar
        this.animateProgressBar();

        try {
            console.log('Starting identification...');
            
            // Preprocess image
            const tensorData = await this.preprocessImage(this.previewImage);
            console.log('Image preprocessing complete, tensor shape:', tensorData.length);
            
            // Run inference
            const feeds = { input: new ort.Tensor('float32', tensorData, [1, 3, this.imageSize, this.imageSize]) };
            console.log('Running model inference...');
            const results = await this.session.run(feeds);
            console.log('Inference complete, results:', results);
            
            // Dynamically get output tensor name
            const outputNames = Object.keys(results);
            console.log('Output tensor names:', outputNames);
            const outputName = outputNames[0];
            const output = results[outputName].data;

            // Get top 5 predictions
            const predictions = this.getTop5Predictions(output);
            console.log('Top 5 predictions:', predictions);
            
            // Complete progress bar
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
            }
            if (this.loadingProgress) {
                this.loadingProgress.style.width = '100%';
            }
            const loadingPercentage = document.getElementById('loadingPercentage');
            if (loadingPercentage) {
                loadingPercentage.textContent = '100%';
            }
            const loadingText = document.getElementById('loadingText');
            if (loadingText) {
                loadingText.textContent = '✓ Complete!';
            }
            
            // Brief pause to show completion
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Store predictions for report generation
            this.currentPredictions = predictions;
            
            // Show results
            this.displayResults(predictions);
        } catch (error) {
            console.error('Identification error details:', error);
            console.error('Error stack:', error.stack);
            this.showError(error);
        } finally {
            this.loadingSection.classList.add('hidden');
            // Reset progress bar
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
            }
            if (this.loadingProgress) {
                this.loadingProgress.style.width = '0%';
            }
        }
    }
    
    animateProgressBar() {
        if (!this.loadingProgress) return;
        
        const loadingText = document.getElementById('loadingText');
        const loadingPercentage = document.getElementById('loadingPercentage');
        const loadingSubtext = document.getElementById('loadingSubtext');
        
        const messages = [
            { range: [0, 20], text: 'Initializing AI...', subtext: 'Loading neural network' },
            { range: [20, 40], text: 'Analyzing image...', subtext: 'Extracting features' },
            { range: [40, 60], text: 'Identifying patterns...', subtext: 'Comparing with 67 breeds' },
            { range: [60, 80], text: 'Processing results...', subtext: 'Calculating confidence scores' },
            { range: [80, 100], text: 'Almost done...', subtext: 'Finalizing identification' }
        ];
        
        let progress = 0;
        let currentMessageIndex = 0;
        
        const interval = setInterval(() => {
            // Increment progress
            progress += Math.random() * 12 + 5; // 5-17% per step
            if (progress > 95) {
                progress = 95;
            }
            
            // Update progress bar and percentage
            this.loadingProgress.style.width = progress + '%';
            if (loadingPercentage) {
                loadingPercentage.textContent = Math.floor(progress) + '%';
            }
            
            // Update message based on progress
            for (let i = 0; i < messages.length; i++) {
                const msg = messages[i];
                if (progress >= msg.range[0] && progress < msg.range[1]) {
                    if (i !== currentMessageIndex) {
                        currentMessageIndex = i;
                        if (loadingText) loadingText.textContent = msg.text;
                        if (loadingSubtext) loadingSubtext.textContent = msg.subtext;
                    }
                    break;
                }
            }
            
            // Stop at 95%
            if (progress >= 95) {
                clearInterval(interval);
            }
        }, 200);
        
        // Store interval to clear later
        this.progressInterval = interval;
    }

    async preprocessImage(imageElement) {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            canvas.width = this.imageSize;
            canvas.height = this.imageSize;
            const ctx = canvas.getContext('2d');

            // Draw and resize image
            ctx.drawImage(imageElement, 0, 0, this.imageSize, this.imageSize);
            const imageData = ctx.getImageData(0, 0, this.imageSize, this.imageSize);

            // Convert to RGB float array and normalize
            const data = imageData.data;
            const float32Data = new Float32Array(3 * this.imageSize * this.imageSize);
            
            // ImageNet normalization
            const mean = [0.485, 0.456, 0.406];
            const std = [0.229, 0.224, 0.225];

            for (let i = 0; i < this.imageSize * this.imageSize; i++) {
                // R channel
                float32Data[i] = (data[i * 4] / 255.0 - mean[0]) / std[0];
                // G channel
                float32Data[this.imageSize * this.imageSize + i] = (data[i * 4 + 1] / 255.0 - mean[1]) / std[1];
                // B channel
                float32Data[2 * this.imageSize * this.imageSize + i] = (data[i * 4 + 2] / 255.0 - mean[2]) / std[2];
            }

            resolve(float32Data);
        });
    }

    softmax(arr) {
        const max = Math.max(...arr);
        const exp = arr.map(x => Math.exp(x - max));
        const sum = exp.reduce((a, b) => a + b);
        return exp.map(x => x / sum);
    }

    getTop5Predictions(output) {
        const probabilities = this.softmax(Array.from(output));
        const predictions = probabilities.map((prob, idx) => ({
            class: this.classes[idx] || `Class ${idx}`,
            confidence: prob
        }));

        // Sort by confidence and get top 5
        predictions.sort((a, b) => b.confidence - a.confidence);
        return predictions.slice(0, 5);
    }

    displayResults(predictions) {
        try {
            console.log('Displaying results, prediction data:', predictions);
            
            if (!this.resultsContainer) {
                console.error('resultsContainer element not found');
                return;
            }
            
            // Save top result for sharing
            if (predictions.length > 0) {
                const topBreed = predictions[0].class;
                const percentage = (predictions[0].confidence * 100).toFixed(1);
                window.currentBreedResult = `${topBreed} (${percentage}% match)`;
            }
            
            this.resultsContainer.innerHTML = '';
            
            predictions.forEach((pred, index) => {
                const percentage = (pred.confidence * 100).toFixed(1);
                const breedSlug = this.getBreedSlug(pred.class);
                const description = this.getBreedDescription(pred.class);
                const isTopMatch = index === 0;
                
                console.log(`Rank ${index + 1}: ${pred.class} (${percentage}%)`);
                
                const resultCard = document.createElement('div');
                resultCard.className = `result-card bg-white border-2 ${isTopMatch ? 'border-purple-500 shadow-lg' : 'border-gray-200'} rounded-xl p-6 hover:border-purple-500 transition duration-200 relative`;
                resultCard.innerHTML = `
                    ${isTopMatch ? '<div class="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">🎯 Top Match</div>' : ''}
                    <div class="flex items-start justify-between mb-4 ${isTopMatch ? 'mt-2' : ''}">
                        <div class="flex items-start space-x-4 flex-1">
                            <span class="text-4xl font-bold ${isTopMatch ? 'text-purple-600' : 'text-gray-400'}">#${index + 1}</span>
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold text-gray-900 mb-2">${pred.class}</h4>
                                <p class="text-sm text-gray-600 mb-3 leading-relaxed">${description}</p>
                                <a href="/breeds/${breedSlug}.html" class="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline">
                                    Learn more about this breed 
                                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="text-right ml-4">
                            <span class="text-4xl font-bold ${isTopMatch ? 'text-purple-600' : 'text-gray-600'}">${percentage}%</span>
                            <p class="text-xs text-gray-500 mt-1">confidence</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div class="confidence-bar h-full rounded-full transition-all duration-1000" style="width: 0%;" data-width="${percentage}%"></div>
                    </div>
                `;
                
                this.resultsContainer.appendChild(resultCard);
                
                // Animate confidence bar after a short delay
                setTimeout(() => {
                    const bar = resultCard.querySelector('.confidence-bar');
                    if (bar) {
                        bar.style.width = bar.dataset.width;
                    }
                }, 100 * index);
            });

            this.resultsSection.classList.remove('hidden');
            
            // Wait for DOM to fully render before scrolling
            // This ensures we scroll to the correct position (top of results)
            requestAnimationFrame(() => {
                this.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            
            console.log('✅ Results display complete');
        } catch (error) {
            console.error('❌ Error displaying results:', error);
            console.error('Error stack:', error.stack);
        }
    }
    
    getBreedDescription(breedName) {
        // Breed descriptions map
        const descriptions = {
            'British Shorthair': 'Known for their round face, dense coat, and calm temperament. Excellent family companions.',
            'Ragdoll': 'Large, affectionate cats that often go limp when picked up. Very gentle and loving.',
            'American Shorthair': 'Versatile and adaptable breed with a friendly personality. Great for families.',
            'Persian': 'Luxurious long coat and flat face. Requires regular grooming but very gentle.',
            'Maine Coon': 'One of the largest domesticated breeds. Friendly giants with tufted ears.',
            'Siamese': 'Vocal and social breed with striking blue eyes. Very intelligent and active.',
            'Scottish Fold': 'Distinctive folded ears and round face. Sweet-tempered and adaptable.',
            'Sphynx - Hairless Cat': 'Hairless breed known for warmth and affection. Requires special skin care.',
            'Bengal': 'Wild-looking spotted coat with energetic personality. Athletic and playful.',
            'Russian Blue': 'Silver-blue coat and green eyes. Quiet, intelligent, and loyal companion.',
            'Abyssinian': 'Active and playful with a ticked coat pattern. Very curious and intelligent.',
            'Norwegian Forest Cat': 'Large, sturdy breed with long water-resistant coat. Natural climbers.'
        };
        
        return descriptions[breedName] || 'A unique and wonderful cat breed with distinctive characteristics.';
    }

    getBreedSlug(breedName) {
        return breedName.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    showError(error) {
        // Hide loading section
        this.loadingSection.classList.add('hidden');
        
        // Create friendly error card
        const errorCard = document.createElement('div');
        errorCard.className = 'mt-8 max-w-md mx-auto bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center animate-slideIn';
        
        let errorMessage = 'Something went wrong';
        let errorDetails = '';
        let errorIcon = '😿';
        
        if (error && error.message) {
            if (error.message.includes('model') || error.message.includes('session')) {
                errorIcon = '🔌';
                errorMessage = 'AI Model Not Loaded';
                errorDetails = 'Please ensure you\'re accessing through a web server (not opening HTML directly). Try refreshing the page.';
            } else if (error.message.includes('image') || error.message.includes('preprocess')) {
                errorIcon = '🖼️';
                errorMessage = 'Image Processing Failed';
                errorDetails = 'The image format may not be supported. Try a different photo (JPG, PNG, or WebP).';
            } else {
                errorDetails = error.message;
            }
        }
        
        errorCard.innerHTML = `
            <div class="text-6xl mb-4">${errorIcon}</div>
            <h3 class="text-xl font-bold text-red-900 mb-2">${errorMessage}</h3>
            <p class="text-red-700 text-sm mb-4">${errorDetails}</p>
            <div class="bg-red-100 rounded-lg p-3 mb-4 text-left text-xs text-red-800">
                <p class="font-semibold mb-2">💡 Troubleshooting Tips:</p>
                <ul class="space-y-1 list-disc list-inside">
                    <li>Make sure you're using a clear photo</li>
                    <li>Try a different image format</li>
                    <li>Refresh the page and try again</li>
                    <li>Check your internet connection</li>
                </ul>
            </div>
            <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200" onclick="location.reload()">
                🔄 Try Again
            </button>
        `;
        
        // Insert after preview section
        const container = this.previewSection.parentElement;
        container.insertBefore(errorCard, this.loadingSection);
        
        // Auto scroll to error
        errorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove after 10 seconds if user doesn't interact
        setTimeout(() => {
            if (errorCard && errorCard.parentElement) {
                errorCard.style.opacity = '0';
                errorCard.style.transform = 'translateY(-20px)';
                setTimeout(() => errorCard.remove(), 300);
            }
        }, 10000);
    }

    reset() {
        this.dropZone.style.display = 'block';
        this.previewSection.classList.add('hidden');
        this.loadingSection.classList.add('hidden');
        this.resultsSection.classList.add('hidden');
        this.previewImage.src = '';
        this.fileInput.value = '';
    }

    renderPopularBreeds() {
        // Popular breeds data
        const popularBreeds = [
            { name: 'British Shorthair', emoji: '🐱' },
            { name: 'Ragdoll', emoji: '😺' },
            { name: 'American Shorthair', emoji: '🐈' },
            { name: 'Persian', emoji: '😸' },
            { name: 'Maine Coon', emoji: '🦁' },
            { name: 'Siamese', emoji: '😼' },
            { name: 'Scottish Fold', emoji: '😻' },
            { name: 'Sphynx - Hairless Cat', emoji: '🐈‍⬛' },
            { name: 'Bengal', emoji: '🐯' },
            { name: 'Russian Blue', emoji: '💙' },
            { name: 'Abyssinian', emoji: '🦊' },
            { name: 'Norwegian Forest Cat', emoji: '🌲' }
        ];

        popularBreeds.forEach(breed => {
            const breedSlug = this.getBreedSlug(breed.name);
            const card = document.createElement('div');
            card.className = 'breed-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer';
            card.innerHTML = `
                <a href="/breeds/${breedSlug}.html" class="block">
                    <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-6xl">
                        ${breed.emoji}
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-lg text-gray-900">${breed.name}</h3>
                    </div>
                </a>
            `;
            this.breedsGrid.appendChild(card);
        });
    }
    
    generateReport() {
        if (!this.currentPredictions || this.currentPredictions.length === 0) {
            notify.warning('Please identify a cat first before generating a report.');
            return;
        }
        
        try {
            // Create report content
            const date = new Date().toLocaleDateString();
            const topBreed = this.currentPredictions[0].class;
            const topConfidence = (this.currentPredictions[0].confidence * 100).toFixed(1);
            
            let reportContent = `
═══════════════════════════════════════════════════
       🐱 CAT BREED IDENTIFICATION REPORT 🐱
═══════════════════════════════════════════════════

Generated by: CatBreedAI.com
Date: ${date}
AI Technology: On-device processing in browser

───────────────────────────────────────────────────
📊 IDENTIFICATION RESULTS
───────────────────────────────────────────────────

🎯 TOP MATCH: ${topBreed}
   Confidence: ${topConfidence}%
   ${this.getBreedDescription(topBreed)}

───────────────────────────────────────────────────
📈 ALL MATCHES (Top 5)
───────────────────────────────────────────────────

`;

            this.currentPredictions.forEach((pred, index) => {
                const percentage = (pred.confidence * 100).toFixed(1);
                const bars = '█'.repeat(Math.floor(percentage / 5));
                reportContent += `
${index + 1}. ${pred.class}
   Confidence: ${percentage}% ${bars}
   ${this.getBreedDescription(pred.class)}
`;
            });

            reportContent += `
───────────────────────────────────────────────────
ℹ️ ABOUT THIS REPORT
───────────────────────────────────────────────────

This report was generated using advanced AI technology
to identify cat breeds based on visual characteristics.

• 67+ breeds in our database
• 100% private - processed locally in browser
• No photos stored or uploaded to servers
• Powered by advanced AI technology

For more information, visit: https://catbreedai.com

───────────────────────────────────────────────────
🔒 Privacy Notice: Your cat's photo was processed
    entirely on your device and was never uploaded
    to any server.
───────────────────────────────────────────────────

© 2025 CatBreedAI - All Rights Reserved
`;

            // Create and download file
            const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `cat-breed-report-${topBreed.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            // Show success message
            notify.success('Report downloaded successfully! Check your downloads folder.');
        } catch (error) {
            console.error('Error generating report:', error);
            notify.error('Failed to generate report. Please try again.');
        }
    }
    
    generateShareCard() {
        if (!this.currentPredictions || this.currentPredictions.length === 0) {
            notify.warning('Please identify a cat first before generating a share card.');
            return;
        }
        
        try {
            const canvas = document.getElementById('shareCardCanvas');
            const ctx = canvas.getContext('2d');
            
            // Card dimensions (optimized for social media)
            const width = 1200;
            const height = 630;
            
            // Background gradient
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            
            // Add cat image if available
            if (this.previewImage.src) {
                try {
                    const imgSize = 400;
                    const imgX = 50;
                    const imgY = (height - imgSize) / 2;
                    
                    // Draw rounded rectangle for image
                    ctx.save();
                    this.roundRect(ctx, imgX, imgY, imgSize, imgSize, 20);
                    ctx.clip();
                    ctx.drawImage(this.previewImage, imgX, imgY, imgSize, imgSize);
                    ctx.restore();
                    
                    // Add white border
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                    ctx.lineWidth = 4;
                    this.roundRect(ctx, imgX, imgY, imgSize, imgSize, 20);
                    ctx.stroke();
                } catch (e) {
                    console.warn('Could not draw cat image:', e);
                }
            }
            
            // Right side content
            const contentX = 500;
            const topBreed = this.currentPredictions[0].class;
            const topConfidence = (this.currentPredictions[0].confidence * 100).toFixed(1);
            
            // Title
            ctx.fillStyle = 'white';
            ctx.font = 'bold 48px Inter, Arial, sans-serif';
            ctx.fillText('🐱 My Cat Breed', contentX, 150);
            
            // Breed name
            ctx.font = 'bold 72px Inter, Arial, sans-serif';
            ctx.fillText(topBreed, contentX, 250);
            
            // Confidence
            ctx.font = '42px Inter, Arial, sans-serif';
            ctx.fillText(`${topConfidence}% Match`, contentX, 320);
            
            // Top 3 results
            ctx.font = '28px Inter, Arial, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            let yPos = 380;
            for (let i = 0; i < Math.min(3, this.currentPredictions.length); i++) {
                const pred = this.currentPredictions[i];
                const pct = (pred.confidence * 100).toFixed(1);
                ctx.fillText(`${i + 1}. ${pred.class} (${pct}%)`, contentX, yPos);
                yPos += 40;
            }
            
            // Footer
            ctx.font = 'bold 32px Inter, Arial, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.fillText('CatBreedAI.com', contentX, 550);
            
            ctx.font = '24px Inter, Arial, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillText('AI Sees Your Cat\'s Story', contentX, 590);
            
            // Convert canvas to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `my-cat-${topBreed.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                // Show success notification and social share prompt
                notify.success('Share card downloaded! You can now share it on social media.', 3000);
                
                // Show social share prompt after download
                setTimeout(() => {
                    this.showSocialSharePrompt();
                }, 500);
            }, 'image/png');
            
        } catch (error) {
            console.error('Error generating share card:', error);
            notify.error('Failed to generate share card. Please try again.');
        }
    }
    
    // Show social share prompt with pre-filled text
    showSocialSharePrompt() {
        if (!this.currentPredictions || this.currentPredictions.length === 0) return;
        
        const topBreed = this.currentPredictions[0].class;
        const topConfidence = (this.currentPredictions[0].confidence * 100).toFixed(1);
        
        // Create share URL with parameters
        const baseUrl = window.location.origin;
        const shareUrl = `${baseUrl}/?breed=${encodeURIComponent(topBreed)}&conf=${topConfidence}`;
        
        // Pre-filled tweet text
        const tweetText = `My cat is ${topConfidence}% ${topBreed} 🐱 according to #CatBreedAI!\nTry it free: ${shareUrl}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        
        // Facebook share URL
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        
        // Create modal for social share
        const modal = document.createElement('div');
        modal.id = 'socialShareModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
                <div class="text-center mb-6">
                    <div class="text-4xl mb-3">🎉</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Want to share your result?</h3>
                    <p class="text-gray-600">Show your friends your cat's breed!</p>
                </div>
                
                <div class="space-y-3 mb-6">
                    <a href="${twitterUrl}" target="_blank" 
                       class="block w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 text-center">
                        🐦 Share on Twitter
                    </a>
                    <a href="${facebookUrl}" target="_blank"
                       class="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 text-center">
                        📘 Share on Facebook
                    </a>
                    <button id="copyLinkBtn" 
                            class="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200">
                        🔗 Copy Share Link
                    </button>
                </div>
                
                <button id="closeSocialModal" 
                        class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition duration-200">
                    Maybe Later
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal event
        document.getElementById('closeSocialModal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Copy link event
        document.getElementById('copyLinkBtn').addEventListener('click', () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                const btn = document.getElementById('copyLinkBtn');
                btn.textContent = '✅ Link Copied!';
                btn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
                btn.classList.add('bg-green-600');
                setTimeout(() => {
                    if (modal.parentNode) {
                        document.body.removeChild(modal);
                    }
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy:', err);
                notify.error('Failed to copy link.');
            });
        });
    }
    
    // Share to social media directly
    shareToSocial(platform) {
        if (!this.currentPredictions || this.currentPredictions.length === 0) {
            notify.warning('Please identify a cat first before sharing.');
            return;
        }
        
        const topBreed = this.currentPredictions[0].class;
        const topConfidence = (this.currentPredictions[0].confidence * 100).toFixed(1);
        
        const baseUrl = window.location.origin;
        const shareUrl = `${baseUrl}/?breed=${encodeURIComponent(topBreed)}&conf=${topConfidence}`;
        
        let url;
        switch (platform) {
            case 'twitter':
                const tweetText = `My cat is ${topConfidence}% ${topBreed} 🐱 according to #CatBreedAI!\nTry it free: ${shareUrl}`;
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
            default:
                return;
        }
        
        window.open(url, '_blank', 'width=600,height=400');
    }
    
    // Helper function for rounded rectangles
    roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
    
    // Handle URL parameters from shared links
    handleShareUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const breed = urlParams.get('breed');
        const confidence = urlParams.get('conf');
        
        if (breed && confidence) {
            // Show a welcome banner for shared results
            this.showSharedResultBanner(breed, confidence);
            
            // Scroll to upload section
            setTimeout(() => {
                const uploadSection = document.getElementById('upload');
                if (uploadSection) {
                    uploadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }
    
    // Show banner for shared results
    showSharedResultBanner(breed, confidence) {
        const banner = document.createElement('div');
        banner.id = 'sharedResultBanner';
        banner.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full shadow-2xl z-50 animate-bounce';
        banner.innerHTML = `
            <div class="flex items-center space-x-3">
                <span class="text-2xl">🐱</span>
                <div>
                    <p class="font-bold">Someone shared a ${breed} result!</p>
                    <p class="text-sm opacity-90">${confidence}% confidence - Try identifying your own cat below</p>
                </div>
                <button id="closeBanner" class="ml-4 text-white hover:text-gray-200 text-2xl">×</button>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Close button
        document.getElementById('closeBanner').addEventListener('click', () => {
            banner.style.animation = 'fadeOut 0.3s';
            setTimeout(() => {
                if (banner.parentNode) {
                    document.body.removeChild(banner);
                }
            }, 300);
        });
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (banner.parentNode) {
                banner.style.animation = 'fadeOut 0.3s';
                setTimeout(() => {
                    if (banner.parentNode) {
                        document.body.removeChild(banner);
                    }
                }, 300);
            }
        }, 8000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CatBreedIdentifier();
    
    // Setup Back to Top button
    setupBackToTop();
});

// Back to Top Button functionality
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });
}


