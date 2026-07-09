# Perfect Clicker Fitting Guide

This repo is the working source of truth for teaching people how to get better fit, movement, and feel from printed clickers.

The first worked example is the MakerWorld [Capybara Clicker Keychain](https://makerworld.com/en/models/3029730-capybara-clicker-keychain#profileId-3405004), using Bambu Studio as the slicer.

## Status

Bootstrapped. The repo has a documentation scaffold, a first guide outline, a worked-example page, and GitHub Pages deployment workflow.

## Local workflow

```sh
npm install
npm run docs:dev
npm run check
```

The docs dev server starts at `http://localhost:5174/perfect-clicker-fitting-guide/`. If that port is busy, VitePress will print the next available port in the terminal.

## Tooling

- Docs live in `docs/`.
- VitePress builds the site into `docs/.vitepress/dist`.
- GitHub Actions deploys the built site to GitHub Pages.
- The VitePress `base` is configured for `https://jakecastelli.github.io/perfect-clicker-fitting-guide/`.
- Lavish is installed as a project-local agent skill at `.agents/skills/lavish` from `kunchenguid/lavish-axi`. See `AGENTS.md`.

## Lavish feedback sessions

Use Lavish for visual plans and annotation-driven feedback:

```sh
npm run lavish -- .lavish/project-plan.html
npm run lavish -- poll .lavish/project-plan.html
```

Refresh the skill with:

```sh
npx skills add kunchenguid/lavish-axi --skill lavish
```

## Next content passes

- Open the example model in Bambu Studio and capture the exact print profile values.
- Add screenshots for each Bambu Studio step.
- Print and record the first baseline fit test.
- Turn the fit-test notes into a repeatable tuning table.
