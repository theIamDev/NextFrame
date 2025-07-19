# NextFrame Project

NextFrame is a modern, scalable starter template built with Next.js and TypeScript, designed for high-performance websites and digital experiences.

---

## 🌐 Live Demo

This project is currently deployed at:  
🔗 [https://next-frame-dusky.vercel.app/](https://next-frame-dusky.vercel.app/)

---

## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (if used)
- **Fonts**: [Geist](https://vercel.com/font) via `next/font`
- **Dev Deployment**: [Vercel](https://vercel.com) (Recommended)

---

## 🚀 Getting Started

# Next.js

A modern web application built using [Next.js](https://nextjs.org), bootstrapped with `create-next-app`. This project is structured for scalability, performance, and ease of development.

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🤝 Contributing

We welcome contributions, feature suggestions, and bug reports.  
To maintain consistency and ensure clean integration into `pre-prod` and `production`, please follow the workflow and branch naming standards below.

---

### 🔀 Branching Strategy

- **Base branch for all PRs**: `pre-prod`
- **Production branch**: `production` (protected; only maintainers can merge)

---

### 🌱 Branch Naming Convention

Please name your branches using one of the following formats:

| Type            | Format                           | Example                        |
| --------------- | -------------------------------- | ------------------------------ |
| New feature     | `new/[app-name]/[short-desc]`    | `new/lead-app/search-filter`   |
| Bug fix         | `fix/[app-name]/[short-desc]`    | `fix/vendor-app/null-response` |
| Update/refactor | `update/[app-name]/[short-desc]` | `update/clm-ui/button-styles`  |

---

### 🧩 Contribution Workflow

1. **Fork** the repository (if you're an external contributor)
2. **Checkout the latest `pre-prod`**:
   ```bash
   git checkout pre-prod
   git pull origin pre-prod
   ```
3. **Create a new branch using the naming convention above**:
   ```bash
   git checkout -b new/your-app/feature-name
   ```
4. **Make your changes and commit**:
   ```bash
   git commit -m "feat(your-app): add feature description"
   ```
5. **Push your branch**:
   ```bash
   git push origin new/your-app/feature-name
   ```
6. **Open a Pull Request targeting `pre-prod`**
   - Title: Use clear, descriptive naming
   - Description:
     - Describe the purpose and scope of the change
     - Mention the related issue using a keyword to auto-close it, e.g.: Closes #123
     - Add context if necessary (screenshots, API references, etc.)
   - Assign the PR to the "Review" bucket in project boards
   - Ensure your code passes all CI checks before requesting a review

---

✅ **Notes**

- All merges to `production` happen via `pre-prod` after review and testing
- Only maintainers can merge into `pre-prod` and `production`
- Use meaningful commit messages and keep PRs focused and scoped

Thank you for contributing!

---
