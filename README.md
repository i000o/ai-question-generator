# 🤖 AI Question Generator

> A smart tool that helps you craft the perfect questions for AI assistance based on your specific needs and project context.

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting started](#-getting-started)
- [How to Use](#how-to-use)
- [Design Philosophy](#design-philosophy)
- [Project Structure](#-project-structure)
- [Authors](#authors)

## 🚀 Overview

The AI Question Generator is an interactive web application that guides users through a structured process to create effective prompts for AI assistants. Instead of struggling with vague questions, users can specify their needs and get tailored questions that yield better AI responses.

## ✨ Features

### 🎯 Smart Question Categories

- **Concept**: Understanding fundamental ideas and principles
- **Structure**: Learning about architecture and organization
- **Details**: Deep-diving into specific implementations
- **Technique**: Getting step-by-step practical guidance

### 🛠️ Project Context

- **Project Types**: Various development projects (tip calculator, rating component, etc.)
- **Technology Selection**: Popular frameworks and tools (React.js, Vue.js, etc.)
- **Dynamic Prompts**: Context-aware question generation

### 💫 User Experience

- **Real-time Feedback**: Instant summaries as you make selections
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Intuitive Interface**: Clean, modern design with smooth transitions
- **Accessibility**: Proper semantic HTML and keyboard navigation

## 🛠️ Technology Stack

### Frontend

- **HTML5**: Semantic structure with proper accessibility
- **Vanilla JavaScript**: Lightweight, dependency-free logic
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

### Development

- **Vite**: Modern build tool with hot module replacement
- **NPM**: Package management and scripts
- **ES Modules**: Modern JavaScript module system

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- NPM (comes with Node.js)

### Installation

1. **Clone the repository**
   After make a fork:

   ```bash
   git clone https://github.com/yourusername/ai-question-generator.git
   cd ai-question-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload on file changes

### Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## 📖 How to Use

### Step 1: Choose Your Question Type

Select what kind of help you need:

- **Concept**: "What are the key principles behind this idea?"
- **Structure**: "How can I plan this project's code?"
- **Details**: "Which key implications do I need to consider?"
- **Technique**: "How do I implement this practically?"

### Step 2: Specify Your Project

- Choose your project type from the dropdown
- Select your preferred technology/framework

### Step 3: Generate & Use

- Click "Generate AI Question" to create your customized prompt
- Copy the generated question and use it with your preferred AI assistant
- Provide feedback to help improve future suggestions

## 🎨 Design Philosophy

### User-Centric Approach

- **Guided Experience**: Step-by-step process eliminates confusion
- **Context Awareness**: Questions adapt to your specific situation
- **Immediate Feedback**: Real-time updates keep users engaged

### Technical Excellence

- **Performance First**: Lightweight vanilla JavaScript for speed
- **Modern Tooling**: Vite for fast development and optimized builds
- **Maintainable Code**: Clean, well-commented, and organized structure

## 📁 Project Structure

```
📁 ai-question-generator/
├── 📄 index.html              # Main application interface
├── 📄 package.json            # NPM configuration and dependencies
├── 📄 package-lock.json       # NPM configuration and dependencies
├── 📄 vite.config.js          # Vite build configuration
├── 📄 .gitignore              # file for git to ignore files
├── 📁 js/
│   └── 📄 script.js           # Application logic and event handling
├── 📁 styles/
│   └── 📄 index.css           # Tailwind CSS imports
├── 📄 README.md               # This file
├── 📄 hello.md                # notes about what i did
├── 📄 vite.md                 # vite guide
└── 📄 project-analysis.md # Detailed project metrics
```

## 👥 Authors

- **Iman Osman** - _Original Creator_ - [GitHub Profile](https://github.com/iman-osman)
- **Ariel** - _Contributor_ - Vite integration, Tailwind migration, and enhancements - [GitHub Profile](https://github.com/Ariel-GonzAguer)
