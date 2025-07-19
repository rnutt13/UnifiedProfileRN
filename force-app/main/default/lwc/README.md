# Identity Resolution Demo Components

This directory contains Lightning Web Components designed to demonstrate Salesforce Data Cloud identity resolution capabilities in customer demos.

## Components Overview

### 1. unifiedProfileRNIdentityTabs
**Purpose**: Comprehensive identity resolution demonstration with tabbed data tables
**Best for**: Authentic Data Cloud interface replication

**Features**:
- Multiple tabs showing different data sources (Website Engagement, Finance Cases, Email Addresses, Sales Orders)
- Data tables with mock records from your screenshots
- Configurable content via Lightning App Builder
- Responsive design for all screen sizes

**Usage**:
- Enable desired tabs via Lightning App Builder properties
- Customize record counts and content
- Perfect for showing how different sources contribute to unified profiles

### 2. unifiedProfileRNIdentityComparison
**Purpose**: Visual before/after comparison of identity resolution
**Best for**: Clear demonstration of the resolution process

**Features**:
- Side-by-side comparison of separate vs unified identities
- Visual indicators for resolution status
- Summary section with confidence scores
- Educational approach for demo audiences

**Usage**:
- Shows the transformation from separate identities to unified profile
- Customizable content for different customer scenarios
- Great for explaining the value proposition

### 3. unifiedProfileRNIdentityFlow
**Purpose**: Interactive step-by-step walkthrough of the resolution process
**Best for**: Educational demonstration of the technical process

**Features**:
- Progress indicator showing completion status
- Three interactive steps: Data Discovery, Identity Matching, Profile Unification
- Different visualizations for each step
- Navigation controls for step-by-step demonstration

**Usage**:
- Walk through the resolution process step by step
- Show confidence scores and matching algorithms
- Educational tool for technical audiences

### 4. unifiedProfileRNContactCard
**Purpose**: Customer profile card with unified data display
**Best for**: Showing unified customer information

**Features**:
- Customer avatar and contact information
- Unified metrics and scores
- Product usage indicators
- Responsive design

### 5. unifiedProfileRNActivityFeed
**Purpose**: Activity timeline display
**Best for**: Showing customer engagement history

**Features**:
- Timeline of customer activities
- Configurable activity types and icons
- Responsive design
- Customizable content

### 6. unifiedProfileRNHealthCheck
**Purpose**: Customer health assessment
**Best for**: Risk evaluation and health scoring

**Features**:
- Circular health score meter
- Risk indicators
- Animated score display
- Dark/light mode support

### 7. unifiedProfileRNPortfolioMetrics
**Purpose**: Portfolio performance metrics
**Best for**: Financial and engagement metrics

**Features**:
- Multiple metric cards
- Progress bars and trends
- Responsive grid layout
- Dark/light mode support

### 8. unifiedProfileRNMockenstein
**Purpose**: Einstein Discovery simulation
**Best for**: AI/ML demonstration

**Features**:
- Outcome score display
- Leading causes analysis
- Improvement recommendations
- Color-coded scoring

### 9. unifiedProfileRNNextBestContent
**Purpose**: Next best content recommendations
**Best for**: Content personalization demo

**Features**:
- Content recommendation cards
- Configurable offers
- Image and description support
- Action buttons

### 10. unifiedProfileRNNextBestProduct
**Purpose**: Next best product recommendations
**Best for**: Product recommendation demo

**Features**:
- Product recommendation cards
- Configurable products
- Image and description support
- Action buttons

## Deployment Instructions

1. **Deploy all components**:
   ```bash
   sf project deploy start --source-dir force-app/main/default/lwc/
   ```

2. **Add to Lightning App Builder**:
   - Navigate to Setup > Lightning App Builder
   - Create or edit a page
   - Search for "unifiedProfileRN" components
   - Drag and drop desired component(s) to the page

3. **Configure Properties**:
   - Background and text colors for theming
   - Content customization for your specific demo
   - Enable/disable tabs or sections as needed

## Demo Scenarios

### Scenario 1: Data Cloud Interface Demo
Use `unifiedProfileRNIdentityTabs` to show the actual Data Cloud interface with:
- Website engagement data
- Finance cases
- Unified email addresses
- Sales orders

### Scenario 2: Value Proposition Demo
Use `unifiedProfileRNIdentityComparison` to demonstrate:
- Before: Fragmented customer data
- After: Unified customer profile
- Business value of resolution

### Scenario 3: Technical Process Demo
Use `unifiedProfileRNIdentityFlow` to explain:
- How Data Cloud discovers data sources
- Matching algorithms and confidence scores
- Profile unification process

## Customization Tips

1. **Content**: All text and data are configurable via `@api` properties
2. **Styling**: Background and text colors can be customized
3. **Responsiveness**: All components work on desktop, tablet, and mobile
4. **Branding**: Uses Salesforce Design System (SLDS) for consistent appearance

## Component Properties

### Common Properties (All Components)
- `backgroundColor`: Background color (default: #ffffff)
- `textColor`: Text color (default: #000000)

### unifiedProfileRNIdentityTabs Specific
- `showWebsiteEngagement`: Enable website engagement tab
- `showFinanceCases`: Enable finance cases tab
- `showEmailAddresses`: Enable email addresses tab
- `showSalesOrders`: Enable sales orders tab
- Various count and content properties

### unifiedProfileRNIdentityComparison Specific
- `beforeTitle`: Title for before section
- `afterTitle`: Title for after section
- `unifiedProfileName`: Name of unified profile
- Various description properties

### unifiedProfileRNIdentityFlow Specific
- `currentStepIndex`: Starting step (0-2)

## Notes

- All components use mock data only - no Apex controllers required
- Designed for demo purposes with real Data Cloud data
- Follow Salesforce Design System guidelines
- Fully responsive and customizable
- Lightweight and performant 