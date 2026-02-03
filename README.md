# Test-Dominion-Financial-Website

## How to Get Your Code from Visual Studio into GitHub

This guide will help you push your code from Visual Studio to this GitHub repository.

### Option 1: Using Visual Studio (2019/2022)

#### First Time Setup

1. **Clone this repository** (if you haven't already):
   - Open Visual Studio
   - Go to `File` > `Clone Repository`
   - Enter the repository URL: `https://github.com/BRubright/Test-Dominion-Financial-Website.git`
   - Choose a local path and click `Clone`

2. **Or connect an existing local project**:
   - Open your existing project in Visual Studio
   - Go to `Git` > `Create Git Repository`
   - Select `Existing remote` and enter: `https://github.com/BRubright/Test-Dominion-Financial-Website.git`
   - Click `Create and Push`

#### Pushing Changes

1. Make your code changes
2. Go to `Git` > `Commit or Stash`
3. Review your changes in the Git Changes window
4. Enter a commit message describing your changes
5. Click `Commit All`
6. Click `Push` to upload your changes to GitHub

### Option 2: Using Visual Studio Code

#### First Time Setup

1. **Clone this repository**:
   - Open VS Code
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type `Git: Clone` and press Enter
   - Paste the repository URL: `https://github.com/BRubright/Test-Dominion-Financial-Website.git`
   - Choose a folder location

2. **Or initialize an existing folder**:
   - Open your project folder in VS Code
   - Open the terminal (`Ctrl+``)
   - Run the following commands:
     ```bash
     git init
     git remote add origin https://github.com/BRubright/Test-Dominion-Financial-Website.git
     git fetch
     git branch --set-upstream-to=origin/main main
     ```

#### Pushing Changes

1. Make your code changes
2. Click the Source Control icon in the sidebar (or press `Ctrl+Shift+G`)
3. Review your changes
4. Enter a commit message in the text box
5. Click the checkmark (✓) to commit
6. Click the `...` menu > `Push` to upload to GitHub

### Option 3: Using Git Command Line

If you prefer using the command line or are comfortable with Git commands:

#### First Time Setup

```bash
# Navigate to your project folder
cd path/to/your/project

# Initialize Git (if not already initialized)
git init

# Add the remote repository
git remote add origin https://github.com/BRubright/Test-Dominion-Financial-Website.git

# Fetch the latest from GitHub
git fetch

# Set up tracking (if main branch exists on remote)
git branch -M main
git branch --set-upstream-to=origin/main main
```

#### Pushing Changes

```bash
# Check status of your files
git status

# Add all changed files
git add .

# Or add specific files
git add filename.html filename.css

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

### Troubleshooting

**Authentication Issues:**
- You may need to set up a Personal Access Token (PAT) instead of using your password
- Go to GitHub Settings > Developer settings > Personal access tokens
- Generate a new token with `repo` permissions
- Use the token as your password when prompted

**Conflicts:**
- If you get a conflict error, pull the latest changes first:
  ```bash
  git pull origin main
  ```
- Resolve any conflicts, then commit and push again

**Different Branch:**
- If you're working on a different branch (not `main`), replace `main` with your branch name in the commands above

### Need Help?

- Check if Git is installed: Run `git --version` in a terminal
- Visual Studio Git documentation: https://docs.microsoft.com/en-us/visualstudio/version-control/
- GitHub documentation: https://docs.github.com/en/get-started