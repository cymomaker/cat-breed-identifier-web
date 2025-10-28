/**
 * CatBreedAI 全局配置文件
 * 存放所有的常量定义和配置项
 * 便于维护和修改
 */

// ============================================================================
// AI 模型配置
// ============================================================================
export const AI_CONFIG = {
    // 模型文件路径
    MODEL_PATH: '/models/catbreed_model.onnx',
    // 类别文件路径
    CLASSES_PATH: '/models/class_index.txt',
    // 模型输入图片尺寸
    IMAGE_SIZE: 224,
    // ImageNet 标准化均值
    MEAN: [0.485, 0.456, 0.406],
    // ImageNet 标准化标准差
    STD: [0.229, 0.224, 0.225]
};

// ============================================================================
// UI 交互配置
// ============================================================================
export const UI_CONFIG = {
    // 滚动触发距离（像素）
    SCROLL_THRESHOLD: 300,
    // 加载进度条动画时长（毫秒）
    PROGRESS_ANIMATION_DURATION: 2000,
    // 邮件弹窗延迟时间（毫秒）
    EMAIL_POPUP_DELAY: 5000,
    // Toast 通知默认持续时间（毫秒）
    TOAST_DURATION: 4000,
    // 分享卡片延迟显示（毫秒）
    SHARE_PROMPT_DELAY: 500
};

// ============================================================================
// 品种展示配置
// ============================================================================
export const BREEDS_CONFIG = {
    // 首页展示的热门品种数量
    POPULAR_BREEDS_COUNT: 8,
    // 结果展示的Top品种数量
    TOP_RESULTS_COUNT: 5
};

// ============================================================================
// 社会证明数据（动态更新）
// ============================================================================
export const SOCIAL_PROOF = {
    // 总用户数
    TOTAL_USERS: '12,846+',
    // 产品评分
    AVERAGE_RATING: '4.8/5',
    // 等待列表人数
    WAITLIST_COUNT: '2,847+'
};

// ============================================================================
// 分享配置
// ============================================================================
export const SHARE_CONFIG = {
    // 基础URL（生产环境需要修改）
    BASE_URL: window.location.origin,
    // 分享文本模板
    TWITTER_TEXT_TEMPLATE: 'I just identified my cat\'s breed using AI! 🐱 {breed}\n\nTry it yourself at catbreedai.com',
    // 分享图片尺寸
    SHARE_CARD_WIDTH: 800,
    SHARE_CARD_HEIGHT: 600
};

// ============================================================================
// 发布配置
// ============================================================================
export const LAUNCH_CONFIG = {
    // 预期发布时间
    EXPECTED_LAUNCH: 'Q1 2025',
    // 产品状态
    PRODUCT_STATUS: 'coming_soon'  // 'available' | 'coming_soon'
};

// ============================================================================
// 错误消息
// ============================================================================
export const ERROR_MESSAGES = {
    MODEL_LOAD_FAILED: '模型加载失败',
    CAMERA_ACCESS_DENIED: '无法访问摄像头，请确保已授予摄像头权限',
    NO_RESULTS: '请先识别一只猫咪',
    GENERATION_FAILED: '生成失败，请重试',
    COPY_FAILED: '复制链接失败'
};

// ============================================================================
// 成功消息
// ============================================================================
export const SUCCESS_MESSAGES = {
    REPORT_DOWNLOADED: '报告已下载成功！请检查您的下载文件夹',
    CARD_DOWNLOADED: '分享卡片已下载！现在可以分享到社交媒体了',
    LINK_COPIED: '链接已复制到剪贴板！',
    WAITLIST_JOINED: '您已加入等待列表。我们会在发布时通知您！'
};

// ============================================================================
// 热门品种列表（按受欢迎程度排序）
// ============================================================================
export const POPULAR_BREEDS = [
    'British Shorthair',
    'Ragdoll',
    'Maine Coon',
    'Persian',
    'Siamese',
    'Bengal',
    'Scottish Fold',
    'American Shorthair'
];

// ============================================================================
// 品种描述数据（可扩展到独立的 JSON 文件）
// ============================================================================
export const BREED_DESCRIPTIONS = {
    'British Shorthair': 'Round-faced, dense-coated cat known for its calm and gentle temperament',
    'Maine Coon': 'Large, gentle giant with tufted ears and a friendly personality',
    'Ragdoll': 'Docile, blue-eyed cat that goes limp when picked up',
    'Persian': 'Long-haired, flat-faced cat with a calm and sweet nature',
    'Siamese': 'Sleek, vocal cat with striking blue eyes and pointed coloration',
    'Bengal': 'Wild-looking spotted cat with high energy and playful nature',
    'Scottish Fold': 'Distinctive folded ears and round face with a sweet disposition',
    'American Shorthair': 'Sturdy, healthy breed with a friendly and easy-going nature',
    'Russian Blue': 'Silver-blue cat with green eyes and a gentle, loyal personality',
    'Sphynx': 'Hairless cat with warm skin and an affectionate, energetic temperament'
};

// ============================================================================
// 导出所有配置
// ============================================================================
export default {
    AI_CONFIG,
    UI_CONFIG,
    BREEDS_CONFIG,
    SOCIAL_PROOF,
    SHARE_CONFIG,
    LAUNCH_CONFIG,
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
    POPULAR_BREEDS,
    BREED_DESCRIPTIONS
};

