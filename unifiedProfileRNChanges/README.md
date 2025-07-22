# Unified Profile RN - Simplified Version

This repository contains Lightning Web Components (LWCs) for Salesforce Data Cloud customer demos. This is the **simplified version** with all XML configuration properties removed.

## Key Changes from UI Config Version

- **No Lightning App Builder Configuration**: All `targetConfigs` sections have been removed from XML files
- **Immediate Updates**: Changes to JavaScript default values are immediately visible after deployment
- **Agent-Friendly**: AI agents can make quick updates without needing to reconfigure in Lightning App Builder
- **Simplified Deployment**: No XML configuration management required

## Repository Structure

- **Current**: `unifiedProfileRN` - Simplified version (this repo)
- **Backup**: `unifiedProfileRNUIConfig` - Original version with full UI configuration

## Components

All components maintain their `@api` properties in JavaScript files with default values, but no longer have XML configuration properties:

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

## Benefits

1. **Faster Development**: No need to manage XML configurations
2. **Immediate Results**: Code changes appear instantly after deployment
3. **Simplified Workflow**: Direct code editing without UI configuration
4. **Agent Compatibility**: AI agents can make changes without UI dependencies

## Usage

1. Edit the default values in the JavaScript files (`.js` files)
2. Deploy the components using SF CLI
3. Changes are immediately visible without Lightning App Builder configuration

## Deployment

```bash
# Deploy all components
sf project deploy start

# Deploy specific component
sf project deploy start --source-dir force-app/main/default/lwc/unifiedProfileRNContactCard
```

## Notes

- All components still work exactly the same way
- Default values are now controlled entirely through JavaScript `@api` properties
- No Lightning App Builder customization is available
- Perfect for rapid prototyping and agent-driven development 