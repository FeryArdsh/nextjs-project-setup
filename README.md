# Next.js Project Setup

Welcome to the **Next.js Project Setup repository**! 🎉 This repository is designed to make your Next.js journey as smooth as possible! Whether you're working on a small personal project or diving into a large enterprise application, you’ll find everything you need to hit the ground running. With a well-structured setup and best practices in place, you can focus more on creating and less on configuration.

We believe in the power of community, so feel free to contribute your ideas and improvements! Your insights can help others on their Next.js adventures, too.

So, grab your favorite snack, dive in, and let's build something amazing together! Happy coding! 🚀

## 🛠️ Tech Stack

- Next.js: 14
- React: 18
- Node.js: 20
- Typescript
- Tailwind CSS
- Package Manager: pnpm (recommended)

## 🤸 Quick Start Guide

Follow these steps to get your development environment up and running:

1. **Clone the repository**

   ```
   git clone https://github.com/FeryArdsh/nextjs-project-setup.git
   ```

2. **Install dependencies**

   ```
   pnpm install
   ```

3. **Build the project**

   ```
   pnpm build
   ```

4. **Start the development server**

   ```
   pnpm dev
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000)

## 🔧 Husky Setup

To ensure code quality and consistent commits, we use Husky for Git hooks:

1. Set up Husky

   ```
   pnpm prepare
   ```

2. Verify the setup
   Run a git commit. If Husky is set up correctly, it will run the pre-commit and commit-msg hooks.

3. We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard to maintain consistent and informative commit messages.

## 🔍 Configuration Update

To customize the project configuration:

1. Search for `!CONFIG_UPDATE` in the project files
2. Update the configurations according to your needs
3. Commit your changes

This step allows you to tailor the setup to your specific requirements.

## 🐳 Docker Setup (optional)

To run this project using Docker:

1. **Build the Docker image**

   ```
   docker build -t your-image-name .
   ```

2. **Run the Docker container**

   ```
   docker run -p 3000:3000 your-image-name
   ```

   Your app will be available at [http://localhost:3000](http://localhost:3000)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [pnpm Documentation](https://pnpm.io/motivation)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Husky Documentation](https://typicode.github.io/husky/#/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ If you find this project useful, please consider giving it a star on GitHub! ⭐

Keywords: Next.js, React, Node.js, Web Development, JavaScript, TypeScript, Frontend Framework, SSR, Static Site Generation, pnpm
