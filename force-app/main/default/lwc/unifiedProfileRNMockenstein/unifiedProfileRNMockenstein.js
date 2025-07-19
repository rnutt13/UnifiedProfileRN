import { LightningElement, api } from 'lwc';

export default class UnifiedProfileRNMockenstein extends LightningElement {
    // Component header
    @api componentTitle = 'Einstein Discovery';
    
    // Overall score configuration
    @api scoreLabel = 'OUTCOME SCORE';
    @api scoreValue = '62';
    @api outcomeColor = '0-25,25-75,75-100';
    
    // Section headers
    @api section1Head = 'Leading Causes';
    @api section2Head = 'HOW TO IMPROVE THIS';
    
    // Section 1 - Leading Causes (up to 5 items)
    @api section11Text = 'Response time exceeds SLA by 2 hours';
    @api section11Score = '-15';
    @api section12Text = 'Agent knowledge gaps identified';
    @api section12Score = '-8';
    @api section13Text = 'Customer communication delays';
    @api section13Score = '-12';
    @api section14Text = '';
    @api section14Score = '';
    @api section15Text = '';
    @api section15Score = '';
    
    // Section 2 - How to Improve (up to 5 items)
    @api section21Text = 'Implement automated response system';
    @api section21Score = '+20';
    @api section22Text = 'Provide additional agent training';
    @api section22Score = '+15';
    @api section23Text = 'Enhance communication protocols';
    @api section23Score = '+18';
    @api section24Text = '';
    @api section24Score = '';
    @api section25Text = '';
    @api section25Score = '';
    
    // Background and styling properties
    @api backgroundColor = '#ffffff';
    @api textColor = '#000000';
    @api cardBorderColor = '#dddbda';
    
    // Computed properties for dynamic color coding
    get overallScoreClass() {
        return this.getScoreColorClass(this.scoreValue, true);
    }
    
    get section11ScoreClass() {
        return this.getScoreColorClass(this.section11Score, false);
    }
    
    get section12ScoreClass() {
        return this.getScoreColorClass(this.section12Score, false);
    }
    
    get section13ScoreClass() {
        return this.getScoreColorClass(this.section13Score, false);
    }
    
    get section14ScoreClass() {
        return this.getScoreColorClass(this.section14Score, false);
    }
    
    get section15ScoreClass() {
        return this.getScoreColorClass(this.section15Score, false);
    }
    
    get section21ScoreClass() {
        return this.getScoreColorClass(this.section21Score, false);
    }
    
    get section22ScoreClass() {
        return this.getScoreColorClass(this.section22Score, false);
    }
    
    get section23ScoreClass() {
        return this.getScoreColorClass(this.section23Score, false);
    }
    
    get section24ScoreClass() {
        return this.getScoreColorClass(this.section24Score, false);
    }
    
    get section25ScoreClass() {
        return this.getScoreColorClass(this.section25Score, false);
    }
    
    // Helper method to determine color class based on score
    getScoreColorClass(score, isOverallScore = false) {
        if (!score || score === '') {
            return '';
        }
        
        if (isOverallScore) {
            // For overall score, use the outcome color ranges
            const scoreNum = parseFloat(score);
            const ranges = this.outcomeColor.split(',');
            
            if (ranges.length >= 3) {
                const redRange = ranges[0].split('-');
                const yellowRange = ranges[1].split('-');
                const greenRange = ranges[2].split('-');
                
                if (scoreNum <= parseFloat(redRange[1])) {
                    return 'red';
                } else if (scoreNum > parseFloat(yellowRange[0]) && scoreNum < parseFloat(yellowRange[1])) {
                    return 'yellow';
                } else if (scoreNum >= parseFloat(greenRange[0])) {
                    return 'green';
                }
            }
        } else {
            // For individual scores, check for + or - prefix
            if (score.includes('+')) {
                return 'green';
            } else if (score.includes('-')) {
                return 'red';
            }
        }
        
        return '';
    }
    
    // Computed properties for section visibility
    get showSection11() {
        return this.section11Text && this.section11Text.trim() !== '';
    }
    
    get showSection12() {
        return this.section12Text && this.section12Text.trim() !== '';
    }
    
    get showSection13() {
        return this.section13Text && this.section13Text.trim() !== '';
    }
    
    get showSection14() {
        return this.section14Text && this.section14Text.trim() !== '';
    }
    
    get showSection15() {
        return this.section15Text && this.section15Text.trim() !== '';
    }
    
    get showSection21() {
        return this.section21Text && this.section21Text.trim() !== '';
    }
    
    get showSection22() {
        return this.section22Text && this.section22Text.trim() !== '';
    }
    
    get showSection23() {
        return this.section23Text && this.section23Text.trim() !== '';
    }
    
    get showSection24() {
        return this.section24Text && this.section24Text.trim() !== '';
    }
    
    get showSection25() {
        return this.section25Text && this.section25Text.trim() !== '';
    }
    
    // Computed properties for section content
    get section1Items() {
        const items = [];
        if (this.showSection11) items.push({ score: this.section11Score, text: this.section11Text, class: this.section11ScoreClass });
        if (this.showSection12) items.push({ score: this.section12Score, text: this.section12Text, class: this.section12ScoreClass });
        if (this.showSection13) items.push({ score: this.section13Score, text: this.section13Text, class: this.section13ScoreClass });
        if (this.showSection14) items.push({ score: this.section14Score, text: this.section14Text, class: this.section14ScoreClass });
        if (this.showSection15) items.push({ score: this.section15Score, text: this.section15Text, class: this.section15ScoreClass });
        return items;
    }
    
    get section2Items() {
        const items = [];
        if (this.showSection21) items.push({ score: this.section21Score, text: this.section21Text, class: this.section21ScoreClass });
        if (this.showSection22) items.push({ score: this.section22Score, text: this.section22Text, class: this.section22ScoreClass });
        if (this.showSection23) items.push({ score: this.section23Score, text: this.section23Text, class: this.section23ScoreClass });
        if (this.showSection24) items.push({ score: this.section24Score, text: this.section24Text, class: this.section24ScoreClass });
        if (this.showSection25) items.push({ score: this.section25Score, text: this.section25Text, class: this.section25ScoreClass });
        return items;
    }
} 