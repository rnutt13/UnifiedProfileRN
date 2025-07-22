import { LightningElement, api, track } from 'lwc';

export default class UnifiedProfileRNActivityFeed extends LightningElement {
    // Fixed properties for dark mode
    @api title = 'Activity Timeline';
    @api viewAllLabel = 'View All';
    @api emptyStateTitle = 'No Activities Found';
    @api emptyStateMessage = 'There are no activities to display at this time.';
    @api heightPixels = 400;

    // Mock data properties
    @api activitiesJson = '';
    
    // Default activities data - expanded for scrolling with smaller, colored icons
    defaultActivities = [
        {
            id: '1',
            title: 'Email Sent',
            message: 'Follow-up email sent to customer regarding product inquiry',
            icon: 'utility:email',
            iconClass: 'icon-blue',
            timeAgo: '2 hours ago',
            time: '10:30 AM'
        },
        {
            id: '2',
            title: 'Phone Call',
            message: 'Product demonstration call completed successfully',
            icon: 'utility:call',
            iconClass: 'icon-green',
            timeAgo: '1 day ago',
            time: '2:15 PM'
        },
        {
            id: '3',
            title: 'Meeting Scheduled',
            message: 'Discovery meeting scheduled for next week',
            icon: 'utility:event',
            iconClass: 'icon-orange',
            timeAgo: '3 days ago',
            time: '11:00 AM'
        },
        {
            id: '4',
            title: 'Proposal Sent',
            message: 'Custom proposal delivered to client',
            icon: 'utility:file',
            iconClass: 'icon-gray',
            timeAgo: '1 week ago',
            time: '4:45 PM'
        },
        {
            id: '5',
            title: 'Contract Signed',
            message: 'Service agreement signed and executed',
            icon: 'utility:approval',
            iconClass: 'icon-green',
            timeAgo: '2 weeks ago',
            time: '3:20 PM'
        },
        {
            id: '6',
            title: 'Follow-up Call',
            message: 'Post-sale follow-up call to ensure satisfaction',
            icon: 'utility:call',
            iconClass: 'icon-green',
            timeAgo: '3 weeks ago',
            time: '1:30 PM'
        },
        {
            id: '7',
            title: 'Product Demo',
            message: 'Technical demonstration of advanced features',
            icon: 'utility:video',
            iconClass: 'icon-blue',
            timeAgo: '1 month ago',
            time: '9:00 AM'
        },
        {
            id: '8',
            title: 'Requirements Gathering',
            message: 'Initial requirements discovery session completed',
            icon: 'utility:task',
            iconClass: 'icon-orange',
            timeAgo: '1 month ago',
            time: '3:45 PM'
        },
        {
            id: '9',
            title: 'Quote Delivered',
            message: 'Detailed pricing proposal sent to client',
            icon: 'utility:file',
            iconClass: 'icon-gray',
            timeAgo: '1 month ago',
            time: '11:20 AM'
        },
        {
            id: '10',
            title: 'Initial Contact',
            message: 'First contact made through website inquiry',
            icon: 'utility:email',
            iconClass: 'icon-blue',
            timeAgo: '2 months ago',
            time: '2:00 PM'
        },
        {
            id: '11',
            title: 'Reference Call',
            message: 'Reference check call with existing customer',
            icon: 'utility:call',
            iconClass: 'icon-green',
            timeAgo: '2 months ago',
            time: '10:15 AM'
        },
        {
            id: '12',
            title: 'Technical Review',
            message: 'Technical architecture review meeting',
            icon: 'utility:knowledge_base',
            iconClass: 'icon-blue',
            timeAgo: '3 months ago',
            time: '1:00 PM'
        }
    ];

    // Computed property to get activities
    get activities() {
        if (this.activitiesJson) {
            try {
                return JSON.parse(this.activitiesJson);
            } catch (error) {
                console.error('Error parsing activities JSON:', error);
                return this.defaultActivities;
            }
        }
        return this.defaultActivities;
    }

    // Computed properties
    get feedHeightStyle() {
        return `height: ${this.heightPixels}px;`;
    }

    // Event handlers
    handleCreateActivity() {
        // Mock create activity functionality
        console.log('Create activity clicked');
        // In a real implementation, this would open a modal or navigate to create page
    }

    handleRefresh() {
        // Mock refresh functionality
        console.log('Refresh clicked');
        // In a real implementation, this would reload the data
    }

    handleViewAll() {
        // Mock view all functionality
        console.log('View all clicked');
        // In a real implementation, this would navigate to a list view
    }

    // Lifecycle hooks
    connectedCallback() {
        // Component initialization logic
        console.log('UnifiedProfileRNActivityFeed component initialized');
    }
} 