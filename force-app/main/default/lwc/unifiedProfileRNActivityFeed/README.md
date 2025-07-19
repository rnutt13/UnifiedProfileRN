# Unified Profile RN Activity Feed LWC

## Overview
This Lightning Web Component is a converted version of the original CustomActivityFeed Aura component. It provides a responsive activity timeline display with mock data for Salesforce Data Cloud demos.

## Features
- **Responsive Design**: Optimized for desktop with multi-screen support
- **SLDS Compliance**: Follows Salesforce Design System guidelines
- **Customizable**: All content and styling configurable via Lightning App Builder
- **Mock Data**: Includes sample activity data for demo purposes
- **Accessibility**: Proper focus states and semantic HTML

## Usage

### Lightning App Builder Properties

#### Background & Text Customization
- **Background Color**: Set the card background color (default: #ffffff)
- **Text Color**: Set the text color (default: #000000)
- **Feed Height**: Set the height of the feed container in pixels (default: 400)

#### Content Customization
- **Title**: Customize the header title (default: "Activity Timeline")
- **View All Button Label**: Customize the footer button text (default: "View All")
- **Empty State Title**: Title shown when no activities exist (default: "No Activities Found")
- **Empty State Message**: Message shown when no activities exist

#### Mock Data Customization
- **Activities JSON**: Optional JSON string to override default mock data

### Default Mock Data Structure
```json
[
  {
    "id": "1",
    "title": "Email Sent",
    "message": "Follow-up email sent to customer regarding product inquiry",
    "icon": "utility:email",
    "iconStyle": "--sds-c-icon-color-foreground-default: #0070d2;",
    "timeAgo": "2 hours ago",
    "time": "10:30 AM"
  }
]
```

## Component Structure

### Files
- `unifiedProfileRNActivityFeed.html` - Template with SLDS timeline structure
- `unifiedProfileRNActivityFeed.js` - Controller with mock data and event handlers
- `unifiedProfileRNActivityFeed.css` - Styling with responsive design
- `unifiedProfileRNActivityFeed.js-meta.xml` - Component configuration
- `README.md` - This documentation

### Key Features
1. **Timeline Layout**: Uses SLDS timeline classes for consistent activity display
2. **Responsive Grid**: Adapts to different screen sizes
3. **Custom Icons**: Each activity type has a unique icon and color
4. **Scrollable Content**: Feed container with custom scrollbar styling
5. **Empty State**: Graceful handling when no activities are present

## Responsive Behavior
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted spacing and icon sizes
- **Mobile**: Stacked layout with left-aligned timestamps

## Accessibility
- Proper focus states for interactive elements
- Semantic HTML structure
- ARIA-compliant timeline markup
- Keyboard navigation support

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Custom scrollbar styling for webkit browsers
- Fallback styles for older browsers

## Demo Data
The component includes 5 sample activities:
1. Email Sent (blue icon)
2. Phone Call (green icon)
3. Meeting Scheduled (orange icon)
4. Proposal Sent (gray icon)
5. Contract Signed (green icon)

Each activity includes realistic timestamps and descriptions suitable for sales demos. 