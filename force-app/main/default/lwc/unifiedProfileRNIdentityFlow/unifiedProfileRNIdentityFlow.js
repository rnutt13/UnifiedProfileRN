import { LightningElement, api } from 'lwc';

export default class UnifiedProfileRNIdentityFlow extends LightningElement {
    // UI Customization Properties
    @api backgroundColor = '#ffffff';
    @api textColor = '#000000';
    
    // Flow Configuration
    @api currentStepIndex = 0;
    
    // Step Definitions
    steps = [
        {
            id: 1,
            title: 'Step 1: Data Source Discovery',
            description: 'Data Cloud identifies customer data across multiple systems and sources',
            type: 'dataSources'
        },
        {
            id: 2,
            title: 'Step 2: Identity Matching',
            description: 'Advanced algorithms analyze and match customer identities across sources',
            type: 'matchingLogic'
        },
        {
            id: 3,
            title: 'Step 3: Profile Unification',
            description: 'Matching identities are unified into a single customer profile',
            type: 'unifiedResult'
        }
    ];
    
    // Computed properties
    get cardStyle() {
        return `background-color: ${this.backgroundColor}; color: ${this.textColor};`;
    }
    
    get textStyle() {
        return `color: ${this.textColor};`;
    }
    
    get progressStyle() {
        const progress = ((this.currentStepIndex + 1) / this.steps.length) * 100;
        return `width: ${progress}%`;
    }
    
    get currentStep() {
        return this.steps[this.currentStepIndex];
    }
    
    get isFirstStep() {
        return this.currentStepIndex === 0;
    }
    
    get isLastStep() {
        return this.currentStepIndex === this.steps.length - 1;
    }
    
    get showDataSources() {
        return this.currentStep.type === 'dataSources';
    }
    
    get showMatchingLogic() {
        return this.currentStep.type === 'matchingLogic';
    }
    
    get showUnifiedResult() {
        return this.currentStep.type === 'unifiedResult';
    }
    
    get dataSources() {
        return [
            {
                id: '1',
                name: 'Website Analytics',
                icon: 'utility:chart',
                recordCount: '8+'
            },
            {
                id: '2',
                name: 'Finance System',
                icon: 'utility:case',
                recordCount: '2'
            },
            {
                id: '3',
                name: 'Marketing Database',
                icon: 'utility:email',
                recordCount: '3'
            }
        ];
    }
    
    get matchingScore() {
        return 95;
    }
    
    get unifiedData() {
        return [
            {
                id: '1',
                field: 'Customer Name',
                value: 'Robert Hodges'
            },
            {
                id: '2',
                field: 'Primary Email',
                value: 'bhodges@example.com'
            },
            {
                id: '3',
                field: 'Work Email',
                value: 'bhodges@reevesconstruction.com'
            },
            {
                id: '4',
                field: 'Marketing Email',
                value: 'robert.hodges@example.com'
            },
            {
                id: '5',
                field: 'Confidence Score',
                value: '95%'
            },
            {
                id: '6',
                field: 'Unified Profile ID',
                value: 'aBN5f0000008lhP'
            }
        ];
    }
    
    // Event handlers
    nextStep() {
        if (!this.isLastStep) {
            this.currentStepIndex++;
        }
    }
    
    previousStep() {
        if (!this.isFirstStep) {
            this.currentStepIndex--;
        }
    }
} 