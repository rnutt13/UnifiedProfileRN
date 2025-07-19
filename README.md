# Salesforce Data Cloud Demo Components

This repository contains Lightning Web Components (LWCs) designed to demonstrate Salesforce Data Cloud identity resolution capabilities in customer demos.

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd unifiedProfileLWCs
```

### 2. Rename Components (IMPORTANT!)
If you have existing components with the same names in your Salesforce org, you must rename them first:

```bash
./tools/rename-components.sh [prefix]
```

**Examples:**
```bash
# With prefix provided
./tools/rename-components.sh auto

# Interactive mode (script will prompt for prefix)
./tools/rename-components.sh
```

This will rename all components from `unifiedProfileRN*` to `[prefix]UnifiedProfileRN*`.

### 3. Deploy Components
```bash
sf project deploy start --source-dir force-app/main/default/lwc/
```

### 4. Add to Lightning App Builder
- Navigate to Setup > Lightning App Builder
- Create or edit a page
- Search for your renamed components (e.g., `autoUnifiedProfileRN*`)
- Drag and drop desired component(s) to the page

## 📋 Components Overview

### Core Identity Resolution Components
- **unifiedProfileRNIdentityTabs** - Comprehensive identity resolution with tabbed data tables
- **unifiedProfileRNIdentityComparison** - Visual before/after comparison of identity resolution
- **unifiedProfileRNIdentityFlow** - Interactive step-by-step walkthrough of the resolution process

### Customer Profile Components
- **unifiedProfileRNContactCard** - Customer profile card with unified data display
- **unifiedProfileRNActivityFeed** - Activity timeline display
- **unifiedProfileRNHealthCheck** - Customer health assessment with risk indicators

### Analytics & Recommendations
- **unifiedProfileRNPortfolioMetrics** - Portfolio performance metrics
- **unifiedProfileRNMockenstein** - Einstein Discovery simulation
- **unifiedProfileRNNextBestContent** - Next best content recommendations
- **unifiedProfileRNNextBestProduct** - Next best product recommendations

## ✨ Features

- **Mock Data Only**: No Apex controllers or real Salesforce data access
- **Fully Customizable**: All content configurable via Lightning App Builder
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Salesforce Design System**: Follows SLDS guidelines
- **Demo-Ready**: Components work immediately after deployment
- **Dark/Light Mode**: Built-in theme support
- **Accessibility**: Proper focus states and semantic HTML

## 🎨 Customization

All components include configurable properties for:
- Background and text colors
- Content customization
- Image URLs
- Mock data values
- Dark/light mode toggle

## 🛠️ Development

This project uses the new Salesforce CLI (`sf` commands):
- `sf project deploy start` - Deploy components
- `sf org open` - Open org in browser
- `sf project retrieve start` - Retrieve metadata

## 📖 Component Documentation

Detailed documentation for each component is available in the `force-app/main/default/lwc/` directory.

## 🔧 Renaming Script Details

The `tools/rename-components.sh` script:

1. **Creates a backup** of all original components
2. **Renames directories** and files with your chosen prefix
3. **Updates all content** in JavaScript, HTML, CSS, and XML files
4. **Updates the main README** with your new component names
5. **Creates a deployment summary** with next steps

### Script Features:
- Interactive prefix input with validation
- Colored output for better readability
- Automatic backup creation
- Comprehensive file content updates
- Error handling and validation

### Example Output:
```
================================
Salesforce Data Cloud Demo Components - Renaming Script
================================
[INFO] Using prefix: auto (capitalized: Auto)
[INFO] Creating backup of original components...
[INFO] Backup created in: backup_20241201_143022
[INFO] Renaming unifiedProfileRNActivityFeed to autoUnifiedProfileRNActivityFeed...
[INFO] Updating JavaScript file: autoUnifiedProfileRNActivityFeed.js
[INFO] Updating HTML file: autoUnifiedProfileRNActivityFeed.html
...
================================
Renaming Complete!
================================
[INFO] All components have been renamed with prefix: auto
[INFO] New component names start with: autoUnifiedProfileRN
[INFO] Deployment summary created: DEPLOYMENT_SUMMARY.md
```

## 🚨 Important Notes

- **Always rename components** before deployment if you have existing components with the same names
- **Test components** on different screen sizes after deployment
- **Customize content** for your specific demo needs
- **Use the new SF CLI** commands instead of the older `sfdx` commands

## 📞 Support

For issues or questions:
1. Check the component documentation in `force-app/main/default/lwc/`
2. Review the deployment summary created by the renaming script
3. Ensure you're using the latest Salesforce CLI

## 📄 License

This project is for demo purposes only. All components use mock data and are designed for educational demonstrations of Salesforce Data Cloud capabilities.
