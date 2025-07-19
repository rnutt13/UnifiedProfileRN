import { LightningElement, api } from 'lwc';

export default class UnifiedProfileRNIdentityComparison extends LightningElement {
    // UI Customization Properties
    @api backgroundColor = '#ffffff';
    @api textColor = '#000000';
    
    // Content Properties
    @api beforeTitle = 'Before: Separate Identities';
    @api beforeDescription = 'Customer data exists in multiple systems with different identifiers';
    @api afterTitle = 'After: Unified Identity';
    @api afterDescription = 'Data Cloud resolves identities into a single customer profile';
    @api unifiedProfileName = 'Robert Hodges - Unified Profile';
    @api resolutionSummaryTitle = 'Identity Resolution Complete';
    @api resolutionSummaryDescription = 'Successfully unified 3 separate identities from different data sources into a single customer profile with 95% confidence score.';
    
    // Computed properties
    get cardStyle() {
        return `background-color: ${this.backgroundColor}; color: ${this.textColor};`;
    }
    
    get textStyle() {
        return `color: ${this.textColor};`;
    }
    
    get separateIdentities() {
        return [
            {
                id: '1',
                source: 'Website Analytics',
                email: 'bhodges@example.com'
            },
            {
                id: '2',
                source: 'Finance System',
                email: 'bhodges@reevesconstruction.com'
            },
            {
                id: '3',
                source: 'Marketing Database',
                email: 'robert.hodges@example.com'
            }
        ];
    }
    
    get unifiedEmails() {
        return [
            {
                id: '1',
                source: 'Primary Email',
                address: 'bhodges@example.com'
            },
            {
                id: '2',
                source: 'Work Email',
                address: 'bhodges@reevesconstruction.com'
            },
            {
                id: '3',
                source: 'Marketing Email',
                address: 'robert.hodges@example.com'
            }
        ];
    }
} 