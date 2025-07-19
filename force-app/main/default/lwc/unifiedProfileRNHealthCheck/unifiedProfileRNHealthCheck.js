import { LightningElement, api, track } from 'lwc';

export default class UnifiedProfileRNHealthCheck extends LightningElement {
    // Theme and appearance properties
    @api darkMode = false;
    @api backgroundColor = '#ffffff';
    @api textColor = '#000000';
    
    // Content properties
    @api title = 'Customer Health Check';
    @api scoreLabel = 'Health Score';
    @api scoreDescription = 'Overall customer health and retention risk assessment';
    @api riskSectionTitle = 'Risk Indicators';
    
    // Score properties
    @api score = 75;
    @api maxScore = 100;
    
    // Risk factors - configurable via Lightning App Builder
    @api riskFactor1 = 'Customer has not logged in for 30+ days';
    @api riskFactor2 = 'Support ticket volume increased by 50% this quarter';
    @api riskFactor3 = 'Contract renewal date approaching with no engagement';
    @api riskFactor4 = 'Usage patterns indicate declining product adoption';
    
    @track displayScore = 0;
    @track isAnimating = false;

    // Computed properties for styling
    get containerClass() {
        const baseClass = 'slds-card';
        return this.darkMode ? `${baseClass} dark-mode` : `${baseClass} light-mode`;
    }

    get progressCircleClass() {
        const baseClass = 'score-progress';
        const riskLevel = this.getRiskLevel();
        
        switch (riskLevel) {
            case 'high':
                return `${baseClass} score-red`;
            case 'medium':
                return `${baseClass} score-yellow`;
            case 'low':
                return `${baseClass} score-green`;
            default:
                return `${baseClass} score-green`;
        }
    }

    get riskIconClass() {
        const riskLevel = this.getRiskLevel();
        
        switch (riskLevel) {
            case 'high':
                return 'slds-icon slds-text-color_error';
            case 'medium':
                return 'slds-icon slds-text-color_warning';
            case 'low':
                return 'slds-icon slds-text-color_success';
            default:
                return 'slds-icon slds-text-color_success';
        }
    }

    get strokeDashArray() {
        const circumference = 2 * Math.PI * 50; // r=50
        return circumference;
    }

    get strokeDashOffset() {
        const circumference = 2 * Math.PI * 50;
        const progress = this.score / this.maxScore;
        return circumference * (1 - progress);
    }

    get riskFactors() {
        const factors = [];
        
        if (this.riskFactor1) {
            factors.push({
                id: 'factor1',
                description: this.riskFactor1
            });
        }
        
        if (this.riskFactor2) {
            factors.push({
                id: 'factor2',
                description: this.riskFactor2
            });
        }
        
        if (this.riskFactor3) {
            factors.push({
                id: 'factor3',
                description: this.riskFactor3
            });
        }
        
        if (this.riskFactor4) {
            factors.push({
                id: 'factor4',
                description: this.riskFactor4
            });
        }
        
        return factors;
    }

    // Risk assessment logic
    getRiskLevel() {
        if (this.score >= 80) {
            return 'low';
        } else if (this.score >= 60) {
            return 'medium';
        } else {
            return 'high';
        }
    }

    // Lifecycle methods
    connectedCallback() {
        this.startScoreAnimation();
    }

    // Animation methods
    startScoreAnimation() {
        this.isAnimating = true;
        this.displayScore = 0;
        
        const targetScore = this.score;
        const duration = 1500; // 1.5 seconds
        const steps = 60;
        const increment = targetScore / steps;
        const stepDuration = duration / steps;
        
        let currentStep = 0;
        
        const animate = () => {
            if (currentStep < steps) {
                this.displayScore = Math.min(
                    Math.round(currentStep * increment), 
                    targetScore
                );
                currentStep++;
                setTimeout(animate, stepDuration);
            } else {
                this.displayScore = targetScore;
                this.isAnimating = false;
            }
        };
        
        animate();
    }
} 