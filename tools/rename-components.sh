#!/bin/bash

# Component Renaming Script for Demo-Specific Versions
# This script renames all LWC components to avoid conflicts with existing components
# Usage: ./tools/rename-components.sh [prefix]
# Example: ./tools/rename-components.sh auto

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to capitalize first letter
capitalize() {
    echo "$1" | awk '{print toupper(substr($0,1,1)) substr($0,2)}'
}

# Function to get user input with validation
get_prefix() {
    local prefix=""
    while [[ -z "$prefix" ]]; do
        echo -e "${YELLOW}Please enter a prefix for your components (e.g., 'auto', 'demo', 'test'):${NC}"
        read -r prefix
        prefix=$(echo "$prefix" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')
        
        if [[ -z "$prefix" ]]; then
            print_error "Prefix cannot be empty. Please try again."
        elif [[ ! "$prefix" =~ ^[a-zA-Z][a-zA-Z0-9]*$ ]]; then
            print_error "Prefix must start with a letter and contain only letters and numbers."
            prefix=""
        fi
    done
    echo "$prefix"
}

# Function to backup original files
backup_files() {
    print_status "Creating backup of original components..."
    local backup_dir="backup_$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$backup_dir"
    
    # Copy all LWC directories
    for dir in force-app/main/default/lwc/unifiedProfileRN*; do
        if [[ -d "$dir" ]]; then
            cp -r "$dir" "$backup_dir/"
        fi
    done
    
    print_status "Backup created in: $backup_dir"
}

# Function to rename component files and update content
rename_component() {
    local old_name="$1"
    local new_name="$2"
    local old_dir="force-app/main/default/lwc/$old_name"
    local new_dir="force-app/main/default/lwc/$new_name"
    
    if [[ ! -d "$old_dir" ]]; then
        print_warning "Component directory not found: $old_dir"
        return
    fi
    
    print_status "Renaming $old_name to $new_name..."
    
    # Rename the directory
    mv "$old_dir" "$new_dir"
    
    # Rename files within the directory
    for file in "$new_dir"/*; do
        if [[ -f "$file" ]]; then
            local filename=$(basename "$file")
            local new_filename=$(echo "$filename" | sed "s/$old_name/$new_name/g")
            if [[ "$filename" != "$new_filename" ]]; then
                mv "$file" "$new_dir/$new_filename"
            fi
        fi
    done
    
    # Update content in all files
    update_file_content "$new_dir" "$old_name" "$new_name"
}

# Function to update content in files
update_file_content() {
    local dir="$1"
    local old_name="$2"
    local new_name="$3"
    
    # Update JavaScript files
    for js_file in "$dir"/*.js; do
        if [[ -f "$js_file" ]]; then
            print_status "Updating JavaScript file: $(basename "$js_file")"
            sed -i.bak "s/$old_name/$new_name/g" "$js_file"
            rm -f "$js_file.bak"
        fi
    done
    
    # Update HTML files
    for html_file in "$dir"/*.html; do
        if [[ -f "$html_file" ]]; then
            print_status "Updating HTML file: $(basename "$html_file")"
            sed -i.bak "s/$old_name/$new_name/g" "$html_file"
            rm -f "$html_file.bak"
        fi
    done
    
    # Update CSS files
    for css_file in "$dir"/*.css; do
        if [[ -f "$css_file" ]]; then
            print_status "Updating CSS file: $(basename "$css_file")"
            sed -i.bak "s/$old_name/$new_name/g" "$css_file"
            rm -f "$css_file.bak"
        fi
    done
    
    # Update meta XML files
    for xml_file in "$dir"/*.js-meta.xml; do
        if [[ -f "$xml_file" ]]; then
            print_status "Updating meta XML file: $(basename "$xml_file")"
            sed -i.bak "s/$old_name/$new_name/g" "$xml_file"
            rm -f "$xml_file.bak"
        fi
    done
    
    # Update README files
    for readme_file in "$dir"/README.md; do
        if [[ -f "$readme_file" ]]; then
            print_status "Updating README file: $(basename "$readme_file")"
            sed -i.bak "s/$old_name/$new_name/g" "$readme_file"
            rm -f "$readme_file.bak"
        fi
    done
}

# Function to update main README
update_main_readme() {
    local prefix="$1"
    local capitalized_prefix="$2"
    
    print_status "Updating main README.md..."
    
    # Create a temporary file for the new README content
    cat > README.md << EOF
# Salesforce Data Cloud Demo Components - ${capitalized_prefix} Version

This repository contains Lightning Web Components (LWCs) designed to demonstrate Salesforce Data Cloud identity resolution capabilities in customer demos.

## Quick Start

### 1. Clone the Repository
\`\`\`bash
git clone <repository-url>
cd unifiedProfileLWCs
\`\`\`

### 2. Rename Components (IMPORTANT!)
If you have existing components with the same names in your Salesforce org, you must rename them first:

\`\`\`bash
./tools/rename-components.sh [prefix]
\`\`\`

**Example:**
\`\`\`bash
./tools/rename-components.sh auto
\`\`\`

This will rename all components from \`unifiedProfileRN*\` to \`${prefix}UnifiedProfileRN*\`.

### 3. Deploy Components
\`\`\`bash
sf project deploy start --source-dir force-app/main/default/lwc/
\`\`\`

### 4. Add to Lightning App Builder
- Navigate to Setup > Lightning App Builder
- Create or edit a page
- Search for your renamed components (e.g., \`${prefix}UnifiedProfileRN*\`)
- Drag and drop desired component(s) to the page

## Components Overview

After renaming, your components will be:

- \`${prefix}UnifiedProfileRNActivityFeed\` - Activity timeline display
- \`${prefix}UnifiedProfileRNContactCard\` - Customer profile card
- \`${prefix}UnifiedProfileRNHealthCheck\` - Customer health assessment
- \`${prefix}UnifiedProfileRNIdentityComparison\` - Before/after identity comparison
- \`${prefix}UnifiedProfileRNIdentityFlow\` - Interactive resolution process
- \`${prefix}UnifiedProfileRNIdentityTabs\` - Tabbed data tables
- \`${prefix}UnifiedProfileRNMockenstein\` - Einstein Discovery simulation
- \`${prefix}UnifiedProfileRNNextBestContent\` - Content recommendations
- \`${prefix}UnifiedProfileRNNextBestProduct\` - Product recommendations
- \`${prefix}UnifiedProfileRNPortfolioMetrics\` - Portfolio performance metrics

## Features

- **Mock Data Only**: No Apex controllers or real Salesforce data access
- **Fully Customizable**: All content configurable via Lightning App Builder
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Salesforce Design System**: Follows SLDS guidelines
- **Demo-Ready**: Components work immediately after deployment

## Customization

All components include configurable properties for:
- Background and text colors
- Content customization
- Image URLs
- Mock data values

## Development

This project uses the new Salesforce CLI (\`sf\` commands):
- \`sf project deploy start\` - Deploy components
- \`sf org open\` - Open org in browser
- \`sf project retrieve start\` - Retrieve metadata

## Support

For issues or questions, please refer to the component documentation in the \`force-app/main/default/lwc/\` directory.

EOF
}

# Function to create deployment summary
create_deployment_summary() {
    local prefix="$1"
    local capitalized_prefix="$2"
    
    print_status "Creating deployment summary..."
    
    cat > DEPLOYMENT_SUMMARY.md << EOF
# Deployment Summary - ${capitalized_prefix} Components

## Renamed Components

The following components have been renamed with the prefix "${prefix}":

| Original Name | New Name |
|---------------|----------|
| unifiedProfileRNActivityFeed | ${prefix}UnifiedProfileRNActivityFeed |
| unifiedProfileRNContactCard | ${prefix}UnifiedProfileRNContactCard |
| unifiedProfileRNHealthCheck | ${prefix}UnifiedProfileRNHealthCheck |
| unifiedProfileRNIdentityComparison | ${prefix}UnifiedProfileRNIdentityComparison |
| unifiedProfileRNIdentityFlow | ${prefix}UnifiedProfileRNIdentityFlow |
| unifiedProfileRNIdentityTabs | ${prefix}UnifiedProfileRNIdentityTabs |
| unifiedProfileRNMockenstein | ${prefix}UnifiedProfileRNMockenstein |
| unifiedProfileRNNextBestContent | ${prefix}UnifiedProfileRNNextBestContent |
| unifiedProfileRNNextBestProduct | ${prefix}UnifiedProfileRNNextBestProduct |
| unifiedProfileRNPortfolioMetrics | ${prefix}UnifiedProfileRNPortfolioMetrics |

## Next Steps

1. **Deploy the components:**
   \`\`\`bash
   sf project deploy start --source-dir force-app/main/default/lwc/
   \`\`\`

2. **Add to Lightning App Builder:**
   - Search for components with prefix "${prefix}"
   - Configure properties as needed
   - Test on different screen sizes

3. **Customize for your demo:**
   - Update mock data values
   - Adjust colors and branding
   - Configure content for your specific use case

## Backup

Original components have been backed up in: \`backup_$(date +%Y%m%d_%H%M%S)\`

EOF
}

# Main script execution
main() {
    print_header "Salesforce Data Cloud Demo Components - Renaming Script"
    
    # Get prefix from command line or prompt user
    local prefix=""
    if [[ $# -eq 1 ]]; then
        prefix=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr -d '[:space:]')
        if [[ ! "$prefix" =~ ^[a-zA-Z][a-zA-Z0-9]*$ ]]; then
            print_error "Invalid prefix: $1"
            print_error "Prefix must start with a letter and contain only letters and numbers."
            exit 1
        fi
    else
        prefix=$(get_prefix)
    fi
    
    local capitalized_prefix=$(capitalize "$prefix")
    
    print_status "Using prefix: $prefix (capitalized: $capitalized_prefix)"
    
    # Check if we're in the right directory
    if [[ ! -d "force-app/main/default/lwc" ]]; then
        print_error "This script must be run from the project root directory."
        print_error "Please navigate to the project root and try again."
        exit 1
    fi
    
    # Create backup
    backup_files
    
    # List of components to rename
    local components=(
        "unifiedProfileRNActivityFeed"
        "unifiedProfileRNContactCard"
        "unifiedProfileRNHealthCheck"
        "unifiedProfileRNIdentityComparison"
        "unifiedProfileRNIdentityFlow"
        "unifiedProfileRNIdentityTabs"
        "unifiedProfileRNMockenstein"
        "unifiedProfileRNNextBestContent"
        "unifiedProfileRNNextBestProduct"
        "unifiedProfileRNPortfolioMetrics"
    )
    
    # Rename each component
    for component in "${components[@]}"; do
        local new_name="${prefix}${component}"
        rename_component "$component" "$new_name"
    done
    
    # Update main README
    update_main_readme "$prefix" "$capitalized_prefix"
    
    # Create deployment summary
    create_deployment_summary "$prefix" "$capitalized_prefix"
    
    print_header "Renaming Complete!"
    print_status "All components have been renamed with prefix: $prefix"
    print_status "New component names start with: ${prefix}UnifiedProfileRN"
    print_status "Deployment summary created: DEPLOYMENT_SUMMARY.md"
    print_status ""
    print_status "Next steps:"
    print_status "1. Deploy components: sf project deploy start --source-dir force-app/main/default/lwc/"
    print_status "2. Add to Lightning App Builder using the new component names"
    print_status "3. Configure properties for your specific demo needs"
}

# Run main function with all arguments
main "$@"
