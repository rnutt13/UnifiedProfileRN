import { LightningElement, api } from 'lwc';

export default class UnifiedProfileRNContactCard extends LightningElement {
    // API properties that can be configured in Lightning App Builder
    @api customerName = 'Peter Parker';
    @api customerId = 'CUST-001';
    @api customerEmail = 'peter.parker@example.com';
    @api customerPhone = '+1 (555) 123-4567';
    @api customerStreet = '20 Ingram Street';
    @api customerCity = 'Astoria';
    @api customerState = 'NY';
    @api customerPostalCode = '11102';
    @api profileImageUrl = 'https://storm-5674e094d26f8f.lightning.force.com/cms/media/MCLBKRJV5Q5VDONDM6MWPQQXHY4M?version=1.1&fileHash=4acd175e473cfe89a743f1b0a665762b&fileName=spidey1.jpeg';
    
    @api backgroundColor = 'Red';
    
    @api metric1Label = 'Loyalty Tier';
    @api metric1Value = 'Gold';
    @api metric2Label = 'Segment';
    @api metric2Value = 'Enterprise';
    @api metric3Label = 'Lifetime Value';
    @api metric3Value = '$125,000';
    @api metric4Label = 'Propensity to Purchase';
    @api metric4Value = '85%';
    @api purchaseScore = 85;
    @api metric5Label = 'Engagement Score';
    @api engagementScore = 92;
    
    @api showAnalytics = false;
    @api showCommerce = false;
    @api showMarketing = false;
    @api showMulesoft = false;
    @api showSales = false;
    @api showService = false;
    @api showSageMaker = false;
    @api showSnowflake = false;
    
    // Computed properties for dynamic styling
    get backgroundImageUrl() {
        // Match the Aura component's background system
        if (this.backgroundColor === 'White') {
            return '#ffffff';
        }
        // Use the same background image pattern as Aura component
        return `url(/resource/xDO_MDC_Resources/Backgrounds/${this.backgroundColor}.png)`;
    }
    
    get cardBackgroundStyle() {
        return `background-repeat: no-repeat !important; background-size: cover !important; background-position: center !important; background: ${this.backgroundImageUrl}`;
    }
    
    get isDarkBackground() {
        return this.backgroundColor !== 'White';
    }
    
    get customerNameClass() {
        return this.isDarkBackground ? 'slds-text-heading_medium_inverse title-weight' : 'slds-text-heading_medium title-weight';
    }
    
    get locationTextClass() {
        return this.isDarkBackground ? 'slds-text-color_inverse' : 'slds-text-color';
    }
    
    get contactSectionClass() {
        return this.isDarkBackground ? 
            'slds-media slds-m-left_x-large slds-m-right_x-large slds-m-bottom_large slds-border_bottom_inverse slds-p-bottom_medium' :
            'slds-media slds-m-left_x-large slds-m-right_x-large slds-m-bottom_large slds-border_bottom slds-p-bottom_medium';
    }
    
    get metricsSectionClass() {
        return this.contactSectionClass;
    }
    
    get labelTextClass() {
        return this.isDarkBackground ? 'slds-text-color_inverse' : 'slds-text-color';
    }
    
    get valueTextClass() {
        return this.isDarkBackground ? 'contact-info_inverse' : 'contact-info';
    }
    
    get customerLocation() {
        return this.customerCity ? `${this.customerCity}, ${this.customerState}` : null;
    }

    get purchaseProgressBarClass() {
        let colorClass = '';
        if (this.purchaseScore <= 45) {
            colorClass = 'progress-bar-red';
        } else if (this.purchaseScore <= 75) {
            colorClass = 'progress-bar-yellow';
        } else {
            colorClass = 'progress-bar-green';
        }
        return `progress-bar-value ${colorClass}`;
    }
    
    get purchaseProgressStyle() {
        return `width: ${this.purchaseScore}%;`;
    }
    
    get engagementProgressStyle() {
        return `width: ${this.engagementScore}%;`;
    }
    
    // Contact information icon URLs - matching Aura component
    get customerIdIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Contact_${this.isDarkBackground}.png`;
    }
    
    get emailIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Mail_${this.isDarkBackground}.png`;
    }
    
    get phoneIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Phone_${this.isDarkBackground}.png`;
    }
    
    get addressIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Geotag_${this.isDarkBackground}.png`;
    }
    
    // Metric icon URLs - matching Aura component
    get metric1IconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Service_${this.isDarkBackground}.png`;
    }
    
    get metric2IconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Segment_${this.isDarkBackground}.png`;
    }
    
    get metric3IconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Commerce_${this.isDarkBackground}.png`;
    }
    
    get metric4IconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Einstein_${this.isDarkBackground}.png`;
    }
    
    get metric5IconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/type=Einstein_${this.isDarkBackground}.png`;
    }
    
    // Powered by icon URLs - matching Aura component
    get analyticsIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Analytics_${this.isDarkBackground}.png`;
    }
    
    get commerceIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Commerce_${this.isDarkBackground}.png`;
    }
    
    get marketingIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Marketing_${this.isDarkBackground}.png`;
    }
    
    get mulesoftIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Mulesoft_${this.isDarkBackground}.png`;
    }
    
    get salesIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Sales_${this.isDarkBackground}.png`;
    }
    
    get serviceIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Service_${this.isDarkBackground}.png`;
    }
    
    get sageMakerIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=SageMaker_${this.isDarkBackground}.png`;
    }
    
    get snowflakeIconUrl() {
        return `/resource/xDO_MDC_Resources/Icons/icon=Snowflake_${this.isDarkBackground}.png`;
    }
} 