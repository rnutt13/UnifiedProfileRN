# Step-by-Step Setup Guide for Unified Profile Demo Components (Windows)

This guide is designed to walk through the steps and provide the commands and setup needed to use AI to quickly push new Unified Profiles to your Salesforce demo orgs on Windows.

## 🎯 What You'll Accomplish

By the end of this guide, you will have:
- Set up all necessary tools on your Windows PC
- Cloned the demo components repository
- Deployed the components to your Salesforce org
- Customized the components for your demos
- Created your own repository to track changes

---

## Step 1: Setup Command Line Tools and Authentication

### 1.1 Install Required Software

#### Install Git for Windows
1. **Download Git for Windows**:
   - Go to https://git-scm.com/download/win
   - Download and run the installer
   - Use all default settings

#### Install GitHub CLI
Download from [GitHub CLI website](https://cli.github.com/)
OR
- Download and run the installer for Windows

#### Install Salesforce CLI
Download from [Salesforce CLI website](https://developer.salesforce.com/tools/salesforcecli)
OR
- Download and run the installer for Windows

### 1.2 Configure Git (One-time setup)

Open Command Prompt and run these commands:

```bash
# Set your name (replace with your actual name)
git config --global user.name "Your Name"

# Set your email (use the same email as your GitHub account)
git config --global user.email "your.email@company.com"
```

### 1.3 Authenticate with GitHub

```bash
# Login to GitHub
gh auth login

# Follow the prompts:
# - Choose "GitHub.com"
# - Choose "HTTPS"
# - Choose "Yes" to authenticate with your GitHub credentials
# - Choose "Login with a web browser"
# - Copy the code shown and press Enter
# - Open the URL in your browser
# - Paste the code and authorize
```

### 1.4 Authenticate with Salesforce

```bash
# Login to your Salesforce org and assign it an alias (replace my-demo-org with any name you like)
sf org login web --alias my-demo-org
```

- This will pop open a web browser for you to log into your org
- The `--alias my-demo-org` part gives your Salesforce org a friendly name ("my-demo-org") so you can easily refer to it in future commands, instead of using a long username or org ID.
- We'll use this alias again when you deploy to Salesforce.

To check your existing aliases:
```bash
sf org list
```

---

## Step 2: Clone the Repository

### 2.1 Navigate to Your Documents Folder

```bash
cd %USERPROFILE%\Documents
```

### 2.2 Clone the Repository

```bash
# Clone the repository (replace with the actual repository URL)
git clone https://github.com/rnutt13/unifiedProfileRN.git

# Navigate into the project folder
cd unifiedProfileRN
```

***Note***: You'll need the actual repository URL from your team. If you already cloned it in GitHub from the template, it will be like:  `https://github.com/your-username/unifiedProfileRN.git`

---

## Step 3: Deploy Components (First Time)

### 3.1 [ONLY DO FOR FIRST TIME DEPLOY OF BASE COMPONENTS] Deploy Everything as-is

For your first deployment, deploy the entire project to your org using the alias you set earlier:

```bash
# First time: Deploy the entire project
sf project deploy start --target-org my-demo-org
```
- This ensures all metadata, including supporting files, is deployed to your org.

For future changes, you can deploy only the LWC folder for faster deployments:

```bash
# For future changes: Deploy only the LWC folder
sf project deploy start --source-dir force-app/main/default/lwc/ --target-org my-demo-org
```
- This is faster and only deploys your Lightning Web Components.

### 3.2 Verify Deployment

```bash
# Open your Salesforce org in the browser
sf org open
```

Once the org opens:
1. Navigate to **Setup** > **Lightning App Builder**
2. Create a new page or edit an existing one
3. Search for components starting with "unifiedProfileRN"
4. You should see all the demo components available
5. Configure the demo components as pleases you

### 3.3 About Peter Parker

The default contact in the demo components is **Peter Parker**. This is just mock data for demonstration purposes.

**Note**: If you want to change this, just ask cursor to update your file first.

---

## Step 4: Rename Components (First Step for Configuring your custom Unified Profile)

If you want to create your own version of the components, you should rename them to avoid conflicts.

### 4.1 Run the Rename Script

```bash
# Run the rename script (Windows users need to use bash)
bash tools/rename-components.sh
```

*Note*: you can just ask the AI agent to do this for you also

### 4.2 Follow the Interactive Prompts

The script will ask you for a prefix. For example:
- If you enter "demo", components will be renamed to "demoUnifiedProfileRN..."
- If you enter "enterprise", components will be renamed to "enterpriseUnifiedProfileRN..."

**Example interaction**:
```
Enter a prefix for your components (e.g., demo, enterprise, acme): demo
Using prefix: demo
Renaming components...
```

---

## Step 5: Customize Components
#### Note:
You can run all of the terminal commands above through cursor. To open the terminal in cursor, type ctrl + `
### 5.1 Open the Project in Cursor
1. Open Cursor
2. File > Open Folder
3. Navigate to your Documents\unifiedProfileRN folder
4. Click "Open"

### 5.2 Customize Content

The easiest way to customize your components is to use the **Cursor AI agent** built into the Cursor editor.

#### How to Use Cursor AI for Customization

1. **Open the project in Cursor** (see previous step).
2. **Describe what you want to change** in plain English using the AI chat (bottom right or via the command palette).
   - Example:  
     > “Change the default contact name to Mary Jane Watson.”  
     > “Update the background color to light blue.”  
     > “Replace the image with this URL: https://example.com/new-image.png”
3. **Let the AI agent make the code changes for you.**  
   - The agent will update the relevant files and explain what it changed.
4. **Review the changes** in the editor before deploying.

#### Tips for Using Cursor AI

- Be as specific as possible in your requests.
- You can ask the agent to explain any part of the codebase.
- If you want to make multiple changes, list them all in one message or do them step by step.

#### About the `cursorrules` File

- This project may include a `cursorrules` file, which provides guidelines and best practices for the AI agent.
- The agent will automatically follow these rules to ensure your changes are consistent with Salesforce and project standards.
- You can review or update the `cursorrules` file if you want to adjust how the AI agent behaves.

#### Customize Images (sometimes you'll want to manually do this)

1. Find the `imageUrl` properties in the `.js` files
2. Replace the URLs with your own image URLs

---
## Step 6: Deploy Your Changes

### First Time Deploy: Retrieve and Deploy Flexipage

After customizing your components for the first time, you should retrieve the flexipage from your org and deploy it along with your components. This ensures your Lightning App Builder page layout is included.

1. **Get the Flexipage API Name:**
   - In Salesforce, go to **Setup > Lightning App Builder**.
   - Find and open your Unified Profile app page (or the Lightning page you want).
   - The API Name will be shown in the page details or in the URL (look for `FlexiPage/<API_NAME>`).

2. **Retrieve the Flexipage metadata:**
   ```bash
   sf project retrieve start --metadata FlexiPage:<YOUR_FLEXIPAGE_API_NAME> --target-org my-demo-org
   ```
   - Replace `<YOUR_FLEXIPAGE_API_NAME>` with the actual API Name you copied.

3. **Deploy the entire project (first time only):**
   ```bash
   sf project deploy start --target-org my-demo-org
   ```

### Successive Deploys: Only Deploy the LWC Folder

For future changes, you only need to deploy the LWC folder:

```bash
sf project deploy start --source-dir force-app/main/default/lwc/ --target-org my-demo-org
```

---

## Step 7: Create Your Own Repository

### 7.1 Create a New Repository on GitHub

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it something like "my-data-cloud-demos"
5. Make it Private (recommended)
6. Don't initialize with README (we'll push our existing code)
7. Click "Create repository"

### 7.2 Connect Your Local Code to the New Repository

```bash
# Remove the connection to the original repository
git remote remove origin

# Add your new repository as the origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
# Example: git remote add origin https://github.com/johndoe/my-data-cloud-demos.git
```

### 7.3 Commit and Push Your Changes

```bash
# Add all your changes
git add .

# Commit the changes with a descriptive message
git commit -m "Initial setup of Data Cloud demo components"

# Push to your repository
git push -u origin main
```

**Note**: If you get an error about the branch name, try:
```bash
git push -u origin master
```

---

## Step 8: Ongoing Development Workflow

### 8.1 Making Changes

1. Edit files in Cursor
2. Test changes in your org
3. Deploy changes:
   ```bash
   sf project deploy start --source-dir force-app/main/default/lwc/
   ```

### 8.2 Saving Changes to GitHub

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

### 8.3 Pulling Updates (if the original repo gets updated)

```bash
# Add the original repository as a remote
git remote add upstream https://github.com/original-repo-url.git

# Fetch updates
git fetch upstream

# Merge updates into your main branch
git merge upstream/main
```

---

## 🚨 Troubleshooting

### Common Issues and Solutions

#### "Command not found" errors
- Make sure you installed the software correctly
- Try closing and reopening Command Prompt
- You may need to restart your computer

#### Authentication errors
- For GitHub: Run `gh auth login` again
- For Salesforce: Run `sf org login web` again
- Make sure you're using the correct credentials

#### Deployment errors
- Check that you're in the correct directory
- Make sure your Salesforce org is accessible
- Verify you have the necessary permissions in your org

#### Git errors
- Make sure you configured Git with your name and email
- Check that you're connected to the internet
- Verify your GitHub credentials

### Getting Help

1. **Check the main README.md** file in the project for more details
2. **Ask your team** for the correct repository URL
3. **Contact your Salesforce admin** if you have org access issues
4. **Use Google** to search for specific error messages

---

## 📚 Next Steps

After completing this setup:

1. **Practice using the components** in Lightning App Builder
2. **Customize the content** for your specific demo scenarios
3. **Create different variations** for different customer types
4. **Document your customizations** so you can recreate them
5. **Share your repository** with your team if needed

## 🎉 Congratulations!

You've successfully set up the Salesforce Data Cloud demo components on Windows! You now have:
- All the necessary tools installed and configured
- A working copy of the demo components in your org
- Your own repository to track changes
- The ability to customize components for your demos

Remember to commit and push your changes regularly to keep your repository up to date. 