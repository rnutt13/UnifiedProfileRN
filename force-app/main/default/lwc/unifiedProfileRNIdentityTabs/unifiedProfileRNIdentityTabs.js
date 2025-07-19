import { LightningElement, api } from 'lwc';

export default class UnifiedProfileRNIdentityTabs extends LightningElement {
    // UI Customization Properties
    @api backgroundColor = '#ffffff';
    @api textColor = '#000000';
    
    // Content Properties
    @api unifiedProfileTitle = 'Unified Customer Profile';
    @api unifiedProfileDescription = 'Data from multiple sources unified into a single customer identity';
    @api viewAllText = 'View All';
    
    // Tab Configuration
    @api showWebsiteEngagement = false;
    @api showFinanceCases = false;
    @api showEmailAddresses = false;
    @api showSalesOrders = false;
    
    // Data Customization
    @api websiteEngagementCount = '8+';
    @api financeCasesCount = '2';
    @api emailAddressesCount = '3';
    @api salesOrdersCount = '7';
    
    // Computed properties
    get cardStyle() {
        return `background-color: ${this.backgroundColor}; color: ${this.textColor};`;
    }
    
    get textStyle() {
        return `color: ${this.textColor};`;
    }
    
    get tabs() {
        const tabs = [];
        
        if (this.showWebsiteEngagement) {
            tabs.push({
                id: 'website',
                label: 'Website Engagement',
                count: this.websiteEngagementCount,
                icon: 'utility:chart',
                isActive: tabs.length === 0,
                tabClass: tabs.length === 0 ? 'slds-tabs_default__link slds-is-active' : 'slds-tabs_default__link',
                description: '8+ items • Sorted by Created Date • Filtered by Created Date • Updated 23 minutes ago',
                data: [
                    {
                        id: '1',
                        engagementDateTime: '12/8/2024, 10:00 PM',
                        domainName: 'parts.badgerequipment.com',
                        pageviewTitle: 'Subcategory: Filters',
                        recordId: 'q4d000009365736AAA',
                        createdDate: '12/8/2024, 10:00 PM'
                    },
                    {
                        id: '2',
                        engagementDateTime: '12/5/2024, 2:30 PM',
                        domainName: 'parts.badgerequipment.com',
                        pageviewTitle: 'Subcategory: Skid Steers',
                        recordId: 'q4d000008965432AAA',
                        createdDate: '12/5/2024, 2:30 PM'
                    },
                    {
                        id: '3',
                        engagementDateTime: '11/20/2024, 10:00 PM',
                        domainName: 'parts.badgerequipment.com',
                        pageviewTitle: 'Subcategory: Bulldozers',
                        recordId: 'q4d000004615263AAA',
                        createdDate: '11/20/2024, 10:00 PM'
                    },
                    {
                        id: '4',
                        engagementDateTime: '11/15/2024, 3:45 PM',
                        domainName: 'parts.badgerequipment.com',
                        pageviewTitle: 'Subcategory: Engine Parts',
                        recordId: 'q4d000003987654AAA',
                        createdDate: '11/15/2024, 3:45 PM'
                    }
                ],
                columns: [
                    { label: 'Engagement Date Time', fieldName: 'engagementDateTime', type: 'text' },
                    { label: 'Domain Name', fieldName: 'domainName', type: 'text' },
                    { label: 'Pageview Title', fieldName: 'pageviewTitle', type: 'text' },
                    { label: 'Record ID', fieldName: 'recordId', type: 'text' },
                    { label: 'Created Date', fieldName: 'createdDate', type: 'text' }
                ]
            });
        }
        
        if (this.showFinanceCases) {
            tabs.push({
                id: 'finance',
                label: 'Finance Org Cases',
                count: this.financeCasesCount,
                icon: 'utility:case',
                isActive: tabs.length === 0,
                tabClass: tabs.length === 0 ? 'slds-tabs_default__link slds-is-active' : 'slds-tabs_default__link',
                description: '2 items • Sorted by Created Date • Filtered by Created Date, Data Source • Updated a few seconds ago',
                data: [
                    {
                        id: '1',
                        caseNumber: '00003335',
                        createdDate: '10/21/2023, 7:25 AM',
                        subject: 'Badger Finance - Credit Limit Increase Request',
                        caseStatus: 'Working',
                        caseCreator: 'Website',
                        dataSource: 'Salesforce_001',
                        recordId: 'q30000001003715EAA'
                    },
                    {
                        id: '2',
                        caseNumber: '00003334',
                        createdDate: '10/21/2023, 7:24 AM',
                        subject: 'Badger Finance - autoPay Assistance Request',
                        caseStatus: 'Waiting on Customer',
                        caseCreator: 'Phone',
                        dataSource: 'Salesforce_001',
                        recordId: 'q30000006277193EAA'
                    }
                ],
                columns: [
                    { label: 'Case Number', fieldName: 'caseNumber', type: 'text' },
                    { label: 'Created Date', fieldName: 'createdDate', type: 'text' },
                    { label: 'Subject', fieldName: 'subject', type: 'text' },
                    { label: 'Case Status', fieldName: 'caseStatus', type: 'text' },
                    { label: 'Case Creator', fieldName: 'caseCreator', type: 'text' },
                    { label: 'Data Source', fieldName: 'dataSource', type: 'text' },
                    { label: 'Record ID', fieldName: 'recordId', type: 'text' }
                ]
            });
        }
        
        if (this.showEmailAddresses) {
            tabs.push({
                id: 'email',
                label: 'Unified Email Address',
                count: this.emailAddressesCount,
                icon: 'utility:email',
                isActive: tabs.length === 0,
                tabClass: tabs.length === 0 ? 'slds-tabs_default__link slds-is-active' : 'slds-tabs_default__link',
                description: '3 items • Updated a few seconds ago',
                data: [
                    {
                        id: '1',
                        email: 'bhodges@example.com',
                        unifiedEmailName: 'aBN5f0000008lhP',
                        createdDate: '12/4/2023, 10:11 AM'
                    },
                    {
                        id: '2',
                        email: 'bhodges@reevesconstruction.com',
                        unifiedEmailName: 'Finance Org',
                        createdDate: '12/31/2023, 5:07 AM'
                    },
                    {
                        id: '3',
                        email: 'robert.hodges@example.com',
                        unifiedEmailName: 'DWH - Snowflake',
                        createdDate: '12/31/2023, 5:07 AM'
                    }
                ],
                columns: [
                    { label: 'Email', fieldName: 'email', type: 'text' },
                    { label: 'Unified Email Name', fieldName: 'unifiedEmailName', type: 'text' },
                    { label: 'Created Date', fieldName: 'createdDate', type: 'text' }
                ]
            });
        }
        
        if (this.showSalesOrders) {
            tabs.push({
                id: 'orders',
                label: 'Sales Orders - ERP, E-Commerce',
                count: this.salesOrdersCount,
                icon: 'utility:orders',
                isActive: tabs.length === 0,
                tabClass: tabs.length === 0 ? 'slds-tabs_default__link slds-is-active' : 'slds-tabs_default__link',
                description: '7 items • Sorted by Created Date • Filtered by Created Date • Updated 23 minutes ago',
                data: [
                    {
                        id: '1',
                        orderNumber: '239592',
                        createdDate: '1/2/2024, 6:45 AM',
                        salesStore: '2245',
                        grandTotalAmount: '15,785.0000',
                        salesOrderStatus: 'Completed',
                        recordId: 'q4U000003079580EAA'
                    },
                    {
                        id: '2',
                        orderNumber: '239593',
                        createdDate: '1/1/2024, 12:55 PM',
                        salesStore: '2245',
                        grandTotalAmount: '4,299.0000',
                        salesOrderStatus: 'Completed',
                        recordId: 'q4U000003079590EAA'
                    },
                    {
                        id: '3',
                        orderNumber: '239587',
                        createdDate: '12/5/2023, 11:17 AM',
                        salesStore: '5545',
                        grandTotalAmount: '180,242.0000',
                        salesOrderStatus: 'Completed',
                        recordId: 'q4U000003079320EAA'
                    }
                ],
                columns: [
                    { label: 'Order Number', fieldName: 'orderNumber', type: 'text' },
                    { label: 'Created Date', fieldName: 'createdDate', type: 'text' },
                    { label: 'Sales Store', fieldName: 'salesStore', type: 'text' },
                    { label: 'Grand Total Amount', fieldName: 'grandTotalAmount', type: 'text' },
                    { label: 'Sales Order Status', fieldName: 'salesOrderStatus', type: 'text' },
                    { label: 'Record ID', fieldName: 'recordId', type: 'text' }
                ]
            });
        }
        
        return tabs;
    }
    
    handleTabClick(event) {
        const tabId = event.currentTarget.dataset.id;
        
        // Update active tab
        this.tabs.forEach(tab => {
            if (tab.id === tabId) {
                tab.isActive = true;
                tab.tabClass = 'slds-tabs_default__link slds-is-active';
            } else {
                tab.isActive = false;
                tab.tabClass = 'slds-tabs_default__link';
            }
        });
    }
} 