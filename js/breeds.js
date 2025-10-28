/**
 * ============================================================================
 * CatBreedAI - 品种目录页脚本
 * ============================================================================
 * 
 * 功能说明：
 * - 动态渲染所有 67+ 种猫咪品种卡片
 * - 实时搜索过滤功能
 * - 响应式网格布局
 * 
 * @author CatBreedAI Team
 * @version 1.0
 */

import { BREED_DATA, getBreedSlug } from './breed-data.js';

// ============================================================================
// 常量定义
// ============================================================================

/**
 * 所有品种名称列表
 * 从 BREED_DATA 对象中提取所有品种的键
 */
const allBreeds = Object.keys(BREED_DATA);

/**
 * UI配置常量
 */
const UI_CONFIG = {
    MAX_TEMPERAMENT_TAGS: 2,  // 每个卡片最多显示2个性格标签
    ANIMATION_CLASS: 'breed-card',  // 卡片动画类名
};

// ============================================================================
// 核心功能函数
// ============================================================================

/**
 * 渲染品种卡片
 * 根据提供的品种列表动态生成并插入卡片到页面
 * 
 * @param {Array<string>} filteredBreeds - 要渲染的品种名称列表，默认为所有品种
 * 
 * 功能：
 * - 如果没有匹配结果，显示"无结果"提示
 * - 为每个品种生成包含图标、名称、描述、性格标签等信息的卡片
 * - 卡片点击后跳转到对应的品种详情页
 */
function renderBreedCards(filteredBreeds = allBreeds) {
    const container = document.getElementById('breedsGrid');
    const noResults = document.getElementById('noResults');
    
    // 处理空结果情况
    if (filteredBreeds.length === 0) {
        container.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    // 显示结果容器，隐藏"无结果"提示
    container.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    // 清空容器，准备渲染新内容
    container.innerHTML = '';
    
    // 遍历品种列表，为每个品种生成卡片
    filteredBreeds.forEach(breedName => {
        const breed = BREED_DATA[breedName];
        const slug = getBreedSlug(breedName);
        
        // 创建卡片链接元素
        const card = document.createElement('a');
        card.href = `/breeds/${slug}.html`;
        card.className = `${UI_CONFIG.ANIMATION_CLASS} block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl`;
        
        // 构建卡片HTML结构
        card.innerHTML = `
            <div class="aspect-square bg-gradient-to-br ${breed.gradient} flex items-center justify-center">
                <span class="text-8xl">${breed.emoji}</span>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg text-gray-900 mb-2">${breed.name}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">${breed.shortDesc}</p>
                <div class="flex flex-wrap gap-2 mb-3">
                    ${breed.temperament
                        .slice(0, UI_CONFIG.MAX_TEMPERAMENT_TAGS)
                        .map(trait => 
                            `<span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">${trait}</span>`
                        ).join('')}
                </div>
                <div class="flex items-center justify-between text-xs text-gray-500">
                    <span>📍 ${breed.origin}</span>
                    <span class="text-purple-600 font-semibold">Learn More →</span>
                </div>
            </div>
        `;
        
        // 将卡片添加到容器中
        container.appendChild(card);
    });
}

/**
 * 设置搜索功能
 * 监听搜索框输入，实时过滤并重新渲染品种卡片
 * 
 * 搜索范围包括：
 * - 品种名称
 * - 原产地
 * - 性格特点
 * - 简短描述
 */
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        // 获取搜索关键词（转小写、去除首尾空格）
        const query = e.target.value.toLowerCase().trim();
        
        // 如果搜索框为空，显示所有品种
        if (query === '') {
            renderBreedCards();
            return;
        }
        
        // 过滤品种：在多个字段中搜索关键词
        const filtered = allBreeds.filter(breedName => {
            const breed = BREED_DATA[breedName];
            return (
                breed.name.toLowerCase().includes(query) ||
                breed.origin.toLowerCase().includes(query) ||
                breed.temperament.some(t => t.toLowerCase().includes(query)) ||
                breed.shortDesc.toLowerCase().includes(query)
            );
        });
        
        // 重新渲染过滤后的品种
        renderBreedCards(filtered);
    });
}

// ============================================================================
// 辅助功能
// ============================================================================

/**
 * 返回顶部按钮配置常量
 */
const BACK_TO_TOP_CONFIG = {
    SCROLL_THRESHOLD: 300,  // 滚动超过300px时显示按钮
};

/**
 * 设置"返回顶部"按钮功能
 * 
 * 功能：
 * - 监听页面滚动，当滚动超过阈值时显示按钮
 * - 点击按钮平滑滚动回页面顶部
 * 
 * 实现细节：
 * - 使用 window.scrollY 检测滚动位置
 * - 通过添加/移除 'hidden' 类控制按钮显隐
 * - 使用 smooth 滚动行为提升用户体验
 */
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    // 监听滚动事件，控制按钮显示/隐藏
    window.addEventListener('scroll', () => {
        if (window.scrollY > BACK_TO_TOP_CONFIG.SCROLL_THRESHOLD) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });
    
    // 点击按钮，平滑滚动回顶部
    backToTop.addEventListener('click', () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth'  // 平滑滚动效果
        });
    });
}

// ============================================================================
// 初始化
// ============================================================================

/**
 * 页面加载完成后执行初始化
 * 
 * 初始化流程：
 * 1. 渲染所有品种卡片
 * 2. 设置搜索功能
 * 3. 设置返回顶部按钮
 */
document.addEventListener('DOMContentLoaded', () => {
    renderBreedCards();     // 渲染品种卡片
    setupSearch();          // 设置搜索功能
    setupBackToTop();       // 设置返回顶部按钮
});
