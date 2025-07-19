# Node

## Install Node with NVM

* Install nvm with Homebrew: `brew install nvm`
* Create the NVM directory: `mkdir ~/.nvm`
* Add NVM to your `.zshrc` by opening .zshrc in your editor: `code ~/.zshrc`
* Add the following lines at the bottom:

```bash
# NVM Setup
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"

# Auto-switch Node versions using .nvmrc
autoload -U add-zsh-hook

load-nvmrc() {
  local node_version
  if [[ -f .nvmrc ]]; then
    node_version=$(nvm version "$(cat .nvmrc)")
    if [[ "$node_version" == "N/A" ]]; then
      echo "Installing Node.js $(cat .nvmrc)..."
      nvm install
    elif [[ "$node_version" != "$(nvm current)" ]]; then
      echo "Switching to Node.js $(cat .nvmrc)..."
      nvm use
    fi
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

* Apply changes: `source ~/.zshrc`
*  Install Node.js versions via nvm

```bash
nvm install 22        # Latest Node.js version
nvm install 18        # Node.js version for Firebase compatibility
nvm alias default 22  # Set global default version
```

* Create `.nvmrc` in a Firebase project:

```bash
cd ~/path/to/firebase-project
echo "18" > .nvmrc
```

### Result

* Globally: Your terminal runs the latest `Node.js` version.
* In Firebase Project: Terminal auto-switches to `Node.js` 18.
* Everything is managed cleanly with `nvm`.

## Install Node Directly (Deprecated)

```shell
# Uninstall if you have already have any installed version
brew list
brew uninstall --force node
rm -rf ~/.npm

# Install latest version
brew install node

# Install a specific or LTS version
# Install
brew install node@22

# Link the newly installed version: After installing, you might need to link node@22 to make it the default version.
brew link --overwrite --force node@22

# Test
node -v
npm -v

# If you do not get any resutl with `node -v`, you need to have node@22 first in your PATH, run:
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc

# Optional: For compilers to find node@22 you may need to set:
export LDFLAGS="-L/opt/homebrew/opt/node@22/lib"
export CPPFLAGS="-I/opt/homebrew/opt/node@22/include"
```

## Delete `node_modules` and Reinstall Dependencies

```shell
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

npm cache clean --force

npm install
```

## TypeScript

```shell
npm install -g typescript
```
### Generate Configuration File

```shell
tsc --init
```

### Important Configuration for `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    
    "rootDir": "./src",
    "sourceMap": true,
    "outDir": "./dist",
    
    "removeComments": true,
    "noEmitOnError": true,
    
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

### Compile and Run

```shell
# Compile
tsc

# Run
node fileName.js
```

#### ts-node

* This package is used to run TypeScript files directly.

```shell
npm install -g ts-node
```

##### Create Alias

* `code ~/.zshrc`
* Add at the bottom of the file:

```shell
# Aliases
alias ts="ts-node"
```

##### Test

```shell
ts -v
```

##### Run

```shell
ts fileName.ts
```

## Create React Project with Vite

* Syntax: `npm init vite@latest <projectName> --template react`
* `npm init vite@latest core --template react`
  * `Select a framework: › React` 
  * `Select a variant: › TypeScript + SWC`
* Install dependencies: `npm install`.
* Run server: `npm run dev`.

### Install Redux with Redux-Toolkit

* `npm install react-redux @reduxjs/toolkit`

> Redux core is included in `@reduxjs/toolkit`.

## Bootstrap in React

> Go to https://getbootstrap.com/ and grab the installation command with latest version.

```shell
npm i bootstrap@5.3.2
```

### Configure Bootstrap in React Project

* Remove css code from the project file like `index.css` and `App.css`.
* Go to main.tsx and add the following lines above `import './index.css'`.
* Clean up `App.tsx`.

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
```
