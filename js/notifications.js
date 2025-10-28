/**
 * ============================================================================
 * CatBreedAI - 自定义通知系统
 * ============================================================================
 * 
 * 功能说明：
 * - 替代原生 alert/confirm/prompt 对话框
 * - 提供一致、美观的通知UI体验
 * - 支持 Toast 轻提示、Modal 模态框、Confirm 确认框
 * - 响应式设计，自动适配移动端和桌面端
 * 
 * 使用方法：
 * - notify.success('操作成功')     // 成功提示
 * - notify.error('操作失败')       // 错误提示
 * - notify.warning('警告信息')     // 警告提示
 * - notify.info('提示信息')        // 普通提示
 * - notify.modal('标题', '内容')   // 模态框
 * - notify.confirm('确认吗?', callback)  // 确认框
 * 
 * @author CatBreedAI Team
 * @version 1.0
 */

/**
 * 通知系统类
 * 管理所有类型的通知展示和交互
 */
class NotificationSystem {
    constructor() {
        this.injectStyles();  // 注入样式表
    }

    /**
     * 注入CSS样式到页面
     * 使用 JavaScript 动态注入，避免额外的 CSS 文件请求
     * 只在首次调用时注入，避免重复
     */
    injectStyles() {
        // 检查是否已经注入过样式
        if (document.getElementById('notification-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            /* Notification Container */
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                pointer-events: none;
            }
            
            /* Toast Notification */
            .toast-notification {
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                padding: 16px 20px;
                margin-bottom: 12px;
                min-width: 320px;
                max-width: 400px;
                pointer-events: auto;
                display: flex;
                align-items: center;
                gap: 12px;
                animation: slideInRight 0.3s ease-out;
                transition: all 0.3s ease;
            }
            
            .toast-notification.removing {
                animation: slideOutRight 0.3s ease-out;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            /* Toast types */
            .toast-notification.success {
                border-left: 4px solid #10b981;
            }
            
            .toast-notification.error {
                border-left: 4px solid #ef4444;
            }
            
            .toast-notification.info {
                border-left: 4px solid #3b82f6;
            }
            
            .toast-notification.warning {
                border-left: 4px solid #f59e0b;
            }
            
            /* Toast icon */
            .toast-icon {
                flex-shrink: 0;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
            }
            
            .toast-notification.success .toast-icon {
                background: #d1fae5;
                color: #10b981;
            }
            
            .toast-notification.error .toast-icon {
                background: #fee2e2;
                color: #ef4444;
            }
            
            .toast-notification.info .toast-icon {
                background: #dbeafe;
                color: #3b82f6;
            }
            
            .toast-notification.warning .toast-icon {
                background: #fef3c7;
                color: #f59e0b;
            }
            
            /* Toast content */
            .toast-content {
                flex: 1;
                color: #1f2937;
            }
            
            .toast-title {
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 2px;
            }
            
            .toast-message {
                font-size: 13px;
                color: #6b7280;
                line-height: 1.4;
            }
            
            /* Toast close button */
            .toast-close {
                flex-shrink: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: none;
                background: #f3f4f6;
                color: #6b7280;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                font-size: 16px;
                line-height: 1;
            }
            
            .toast-close:hover {
                background: #e5e7eb;
                color: #374151;
            }
            
            /* Modal Overlay */
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(4px);
                z-index: 9998;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                animation: fadeIn 0.2s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            /* Modal Dialog */
            .modal-dialog {
                background: white;
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                max-width: 400px;
                width: 100%;
                animation: scaleIn 0.3s ease-out;
                overflow: hidden;
            }
            
            @keyframes scaleIn {
                from {
                    transform: scale(0.9);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            /* Modal header */
            .modal-header {
                padding: 24px 24px 16px;
                text-align: center;
            }
            
            .modal-icon {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                margin: 0 auto 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 28px;
            }
            
            .modal-dialog.success .modal-icon {
                background: #d1fae5;
                color: #10b981;
            }
            
            .modal-dialog.error .modal-icon {
                background: #fee2e2;
                color: #ef4444;
            }
            
            .modal-dialog.info .modal-icon {
                background: #dbeafe;
                color: #3b82f6;
            }
            
            .modal-dialog.warning .modal-icon {
                background: #fef3c7;
                color: #f59e0b;
            }
            
            .modal-title {
                font-size: 20px;
                font-weight: 700;
                color: #111827;
                margin: 0 0 8px;
            }
            
            .modal-message {
                font-size: 14px;
                color: #6b7280;
                line-height: 1.6;
                white-space: pre-line;
            }
            
            /* Modal body */
            .modal-body {
                padding: 0 24px 24px;
            }
            
            /* Modal footer */
            .modal-footer {
                padding: 16px 24px;
                background: #f9fafb;
                display: flex;
                gap: 12px;
                justify-content: flex-end;
            }
            
            .modal-btn {
                padding: 10px 20px;
                border-radius: 8px;
                border: none;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.2s;
            }
            
            .modal-btn-primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            
            .modal-btn-primary:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
            }
            
            .modal-btn-secondary {
                background: white;
                color: #6b7280;
                border: 1px solid #e5e7eb;
            }
            
            .modal-btn-secondary:hover {
                background: #f9fafb;
                color: #374151;
            }
            
            /* Mobile responsive */
            @media (max-width: 640px) {
                .notification-container {
                    left: 20px;
                    right: 20px;
                }
                
                .toast-notification {
                    min-width: auto;
                    max-width: none;
                }
                
                .modal-dialog {
                    max-width: 100%;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Create notification container if it doesn't exist
    getContainer() {
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
        return container;
    }

    // Show toast notification
    toast(message, type = 'info', duration = 4000) {
        const container = this.getContainer();
        
        const icons = {
            success: '✓',
            error: '✕',
            info: 'ℹ',
            warning: '⚠'
        };
        
        const titles = {
            success: '成功',
            error: '错误',
            info: '提示',
            warning: '警告'
        };
        
        const toast = document.createElement('div');
        toast.className = `toast-notification ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-content">
                <div class="toast-title">${titles[type] || titles.info}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">×</button>
        `;
        
        container.appendChild(toast);
        
        // Close button
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            this.removeToast(toast);
        });
        
        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                this.removeToast(toast);
            }, duration);
        }
        
        return toast;
    }

    // Remove toast with animation
    removeToast(toast) {
        toast.classList.add('removing');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    // Show modal dialog
    modal(options) {
        const {
            title = '提示',
            message = '',
            type = 'info',
            confirmText = '确定',
            cancelText = '取消',
            showCancel = false,
            onConfirm = () => {},
            onCancel = () => {}
        } = options;
        
        const icons = {
            success: '✓',
            error: '✕',
            info: 'ℹ',
            warning: '⚠'
        };
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        // Create dialog
        const dialog = document.createElement('div');
        dialog.className = `modal-dialog ${type}`;
        dialog.innerHTML = `
            <div class="modal-header">
                <div class="modal-icon">${icons[type] || icons.info}</div>
                <h3 class="modal-title">${title}</h3>
                <p class="modal-message">${message}</p>
            </div>
            <div class="modal-footer">
                ${showCancel ? `<button class="modal-btn modal-btn-secondary" data-action="cancel">${cancelText}</button>` : ''}
                <button class="modal-btn modal-btn-primary" data-action="confirm">${confirmText}</button>
            </div>
        `;
        
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        
        // Handle button clicks
        dialog.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action]');
            if (!btn) return;
            
            const action = btn.dataset.action;
            if (action === 'confirm') {
                onConfirm();
            } else if (action === 'cancel') {
                onCancel();
            }
            
            this.closeModal(overlay);
        });
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                onCancel();
                this.closeModal(overlay);
            }
        });
        
        return overlay;
    }

    // Close modal with animation
    closeModal(overlay) {
        overlay.style.animation = 'fadeOut 0.2s ease-out';
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 200);
    }

    // ================================================================
    // 便捷方法 - 快速调用不同类型的通知
    // ================================================================
    
    /**
     * 显示成功提示 Toast
     * @param {string} message - 提示消息内容
     * @param {number} duration - 显示时长（毫秒），默认 4000ms
     * @returns {HTMLElement} Toast 元素
     */
    success(message, duration) {
        return this.toast(message, 'success', duration);
    }

    /**
     * 显示错误提示 Toast
     * @param {string} message - 错误消息内容
     * @param {number} duration - 显示时长（毫秒），默认 4000ms
     * @returns {HTMLElement} Toast 元素
     */
    error(message, duration) {
        return this.toast(message, 'error', duration);
    }

    /**
     * 显示信息提示 Toast
     * @param {string} message - 信息内容
     * @param {number} duration - 显示时长（毫秒），默认 4000ms
     * @returns {HTMLElement} Toast 元素
     */
    info(message, duration) {
        return this.toast(message, 'info', duration);
    }

    /**
     * 显示警告提示 Toast
     * @param {string} message - 警告消息内容
     * @param {number} duration - 显示时长（毫秒），默认 4000ms
     * @returns {HTMLElement} Toast 元素
     */
    warning(message, duration) {
        return this.toast(message, 'warning', duration);
    }

    /**
     * 显示确认对话框
     * 返回 Promise，用户点击确认时 resolve(true)，取消时 resolve(false)
     * 
     * @param {Object} options - 配置选项
     * @param {string} options.title - 对话框标题
     * @param {string} options.message - 对话框内容
     * @param {string} options.confirmText - 确认按钮文本，默认"确认"
     * @param {string} options.cancelText - 取消按钮文本，默认"取消"
     * @returns {Promise<boolean>} 用户是否确认
     * 
     * @example
     * const confirmed = await notify.confirm({
     *     title: '删除确认',
     *     message: '确定要删除这张图片吗？'
     * });
     * if (confirmed) {
     *     // 执行删除操作
     * }
     */
    confirm(options) {
        return new Promise((resolve) => {
            this.modal({
                ...options,
                showCancel: true,
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            });
        });
    }

    // Alert dialog (modal style)
    alert(message, type = 'info', title) {
        return new Promise((resolve) => {
            this.modal({
                title: title || (type === 'success' ? '成功' : type === 'error' ? '错误' : '提示'),
                message,
                type,
                onConfirm: resolve
            });
        });
    }
}

// Create global instance
window.notify = new NotificationSystem();

// Add fadeOut animation if not exists
if (!document.querySelector('style[data-notify-fade]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notify-fade', '');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NotificationSystem;
}

