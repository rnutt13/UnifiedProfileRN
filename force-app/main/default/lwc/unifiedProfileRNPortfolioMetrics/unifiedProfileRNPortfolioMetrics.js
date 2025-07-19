import { LightningElement, api } from 'lwc';

export default class UnifiedProfileRNPortfolioMetrics extends LightningElement {
    // Content properties
    @api headerTitle = 'Portfolio Metrics';
    @api title1 = 'Lifetime Value';
    @api Subtitle1 = '$82,620';
    @api title2 = 'Repayments Made';
    @api Subtitle2 = '12';
    @api title3 = 'Engagements';
    @api Subtitle3 = '25';
    
    // Theme properties
    @api darkMode = false;
    
    // Computed properties for theme classes
    get headerThemeClass() {
        const baseClass = 'slds-card__header';
        return this.darkMode ? `${baseClass} header-dark` : `${baseClass} header-light`;
    }
    
    get bodyThemeClass() {
        const baseClass = 'slds-card__body slds-card__body_inner';
        return this.darkMode ? `${baseClass} body-dark` : `${baseClass} body-light`;
    }
    
    get cardThemeClass() {
        const baseClass = 'slds-card';
        return this.darkMode ? `${baseClass} card-all-dark` : `${baseClass} card-all-light`;
    }
    
    // Format numbers for display
    formatCash(n) {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    }
}