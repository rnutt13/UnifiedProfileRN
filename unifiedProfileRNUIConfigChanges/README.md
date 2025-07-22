# Unified Profile RN - UI Configuration Version

This repository contains Lightning Web Components (LWCs) for Salesforce Data Cloud customer demos. This is the **original version** with full Lightning App Builder configuration capabilities.

## Repository Structure

- **Current**: `unifiedProfileRNUIConfig` - Original version with full UI configuration (this repo)
- **Simplified**: `unifiedProfileRN` - Simplified version without XML configurations

## Key Features

- **Full Lightning App Builder Support**: All components have extensive `targetConfigs` for UI customization
- **User-Friendly Configuration**: Non-developers can customize components through Lightning App Builder
- **Flexible Deployment**: Components can be configured differently for different pages/contexts
- **Professional Setup**: Complete configuration options for production use

## Components

All components include comprehensive XML configuration properties:

- `unifiedProfileRNContactCard` - Customer contact information and metrics
- `unifiedProfileRNHealthCheck` - Customer health assessment
- `unifiedProfileRNIdentityComparison` - Before/after identity resolution
- `unifiedProfileRNIdentityFlow` - Identity resolution process flow
- `unifiedProfileRNIdentityTabs` - Unified profile data tabs
- `unifiedProfileRNMockenstein` - Einstein Discovery insights
- `unifiedProfileRNNextBestContent` - Content recommendations
- `unifiedProfileRNNextBestProduct` - Product recommendations
- `unifiedProfileRNPortfolioMetrics` - Portfolio performance metrics
- `unifiedProfileRNActivityFeed` - Customer activity timeline

## Configuration Options

Each component includes configurable properties for:

- **Content**: Titles, descriptions, labels, values
- **Styling**: Background colors, text colors, themes
- **Data**: Mock data values, counts, scores
- **Behavior**: Show/hide sections, default states
- **Images**: URLs for profile pictures, icons, backgrounds

## Usage

1. Deploy components to Salesforce org
2. Add components to Lightning pages through Lightning App Builder
3. Configure properties through the Lightning App Builder interface
4. Customize appearance and content without code changes

## Deployment

```bash
# Deploy all components
sf project deploy start

# Deploy specific component
sf project deploy start --source-dir force-app/main/default/lwc/unifiedProfileRNContactCard
```

## When to Use This Version

- **Production Demos**: When you need professional, configurable components
- **Non-Technical Users**: When business users need to customize components
- **Multiple Configurations**: When different pages need different component settings
- **Client Deliverables**: When providing components to clients who need customization options

## Notes

- All XML `targetConfigs` sections are preserved
- Components can be fully customized through Lightning App Builder
- Changes require Lightning App Builder reconfiguration after code updates
- Ideal for professional demo environments and client presentations 