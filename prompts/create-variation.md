# Create Component Variation - AI Prompt

Copy and paste this entire prompt to your AI assistant, replacing `[VARIATION_NAME]` with your desired name:

---

I have a Salesforce project with Lightning Web Components (LWCs) and a flexipage. I want to create a modified version.

## Variation Name
`[VARIATION_NAME]` = [your desired name here]

## What I've Done
- I've already run my rename script to create new LWC components with `[VARIATION_NAME]` appended to their names
- I have the original flexipage file: `force-app/main/default/flexipages/Unified_Profile.flexipage-meta.xml`

## What I Need
Please help me:

1. **Rename the flexipage** from `Unified_Profile` to `Unified_Profile_[VARIATION_NAME]`
2. **Update all component references** in the flexipage to point to the renamed components
3. **Keep the same layout and structure**

## Example
If `[VARIATION_NAME]` = "Enterprise", then:
- Flexipage becomes: `Unified_Profile_Enterprise`
- Component references change from `unifiedProfileRNContactCard` to `unifiedProfileRNContactCardEnterprise`
- And so on for all 10 components

## Files to Modify
- `force-app/main/default/flexipages/Unified_Profile.flexipage-meta.xml`

Please update the flexipage filename, masterLabel, and all component references to use the `[VARIATION_NAME]` versions.

---

**Instructions:** Replace `[VARIATION_NAME]` above with your desired name (e.g., "Enterprise", "Modified", "Custom", etc.) 