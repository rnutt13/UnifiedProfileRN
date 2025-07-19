# Tools Directory

This directory contains utility scripts for managing the Salesforce Data Cloud Demo Components.

## Files

### `rename-components.sh`
A comprehensive bash script for renaming all LWC components to avoid naming conflicts with existing components in Salesforce orgs.

## Usage

### Renaming Components

The `rename-components.sh` script allows you to rename all components with a custom prefix:

```bash
# From the project root directory
./tools/rename-components.sh [prefix]
```

**Examples:**
```bash
# Rename with prefix "auto"
./tools/rename-components.sh auto

# Interactive mode (script prompts for prefix)
./tools/rename-components.sh
```

### What the Script Does

1. **Validates Input**: Ensures the prefix is valid (starts with letter, alphanumeric only)
2. **Creates Backup**: Backs up all original components with timestamp
3. **Renames Directories**: Renames all component directories with the new prefix
4. **Renames Files**: Renames all files within each component directory
5. **Updates Content**: Updates all references in JavaScript, HTML, CSS, and XML files
6. **Updates Documentation**: Updates the main README with new component names
7. **Creates Summary**: Generates a deployment summary with next steps

### Component Renaming Examples

| Original Name | New Name (with prefix "auto") |
|---------------|-------------------------------|
| unifiedProfileRNActivityFeed | autoUnifiedProfileRNActivityFeed |
| unifiedProfileRNContactCard | autoUnifiedProfileRNContactCard |
| unifiedProfileRNHealthCheck | autoUnifiedProfileRNHealthCheck |
| unifiedProfileRNIdentityComparison | autoUnifiedProfileRNIdentityComparison |
| unifiedProfileRNIdentityFlow | autoUnifiedProfileRNIdentityFlow |
| unifiedProfileRNIdentityTabs | autoUnifiedProfileRNIdentityTabs |
| unifiedProfileRNMockenstein | autoUnifiedProfileRNMockenstein |
| unifiedProfileRNNextBestContent | autoUnifiedProfileRNNextBestContent |
| unifiedProfileRNNextBestProduct | autoUnifiedProfileRNNextBestProduct |
| unifiedProfileRNPortfolioMetrics | autoUnifiedProfileRNPortfolioMetrics |

### Script Features

- **Interactive Mode**: Prompts for prefix if not provided
- **Input Validation**: Ensures valid prefix format
- **Colored Output**: Easy-to-read status messages
- **Error Handling**: Graceful error handling and validation
- **Backup Creation**: Automatic backup of original components
- **Comprehensive Updates**: Updates all file types and content

### Output Files

After running the script, you'll find:

1. **Backup Directory**: `backup_YYYYMMDD_HHMMSS/` containing original components
2. **Updated README.md**: Main README with new component names
3. **DEPLOYMENT_SUMMARY.md**: Summary of renamed components and next steps

### Requirements

- Bash shell (Linux, macOS, or Windows with WSL/Git Bash)
- Must be run from the project root directory
- Components must be in `force-app/main/default/lwc/` directory

### Troubleshooting

**Script won't run:**
- Ensure the script is executable: `chmod +x tools/rename-components.sh`
- Run from the project root directory
- Check that you have bash available

**Components not found:**
- Verify you're in the correct directory
- Check that components exist in `force-app/main/default/lwc/`

**Permission errors:**
- Ensure you have write permissions in the project directory
- Check that the tools directory is not read-only

## Notes

- This directory is excluded from Salesforce deployment via `.forceignore`
- The script is designed to be run once per project setup
- Original components are always backed up before renaming
- The script handles capitalization automatically (prefix is lowercase, component names maintain proper case) 