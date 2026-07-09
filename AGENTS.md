# Project Agent Instructions

## Lavish Feedback Loop

The project-local Lavish skill is installed at `.agents/skills/lavish` from `kunchenguid/lavish-axi`.

Refresh or reinstall it with:

```sh
npx skills add kunchenguid/lavish-axi --skill lavish
```

Use Lavish when a plan, diagram, comparison, table, code review, or structured feedback loop would be easier to review visually than in chat.

Workflow:

1. Read the project-local `lavish` skill when it triggers.
2. Create HTML artifacts under `.lavish/`.
3. Before writing an artifact, run the relevant playbooks, for example:

   ```sh
   npx -y lavish-axi playbook plan
   npx -y lavish-axi playbook diagram
   npx -y lavish-axi playbook input
   ```

4. Open the artifact:

   ```sh
   npx -y lavish-axi .lavish/<artifact>.html
   ```

5. Poll for user annotations and layout warnings:

   ```sh
   npx -y lavish-axi poll .lavish/<artifact>.html
   ```

6. Apply feedback, then poll again with `--agent-reply` when useful.
7. End the session with `npx -y lavish-axi end .lavish/<artifact>.html` when the review is done.

Keep Lavish local-first. Do not run `lavish-axi share` or publish to `ht-ml.app` unless the user explicitly asks.

## Documentation Project

- Docs live in `docs/` and are built with VitePress.
- GitHub Pages deploys from `.github/workflows/deploy.yml`.
- Keep the guide empirical: record printer, material, Bambu Studio version, slicer profile, measurement, and fit result.
- For the Capybara Clicker Keychain example, verify MakerWorld metadata manually in a browser before treating values as final.
- For non-trivial implementation or content plans, provide a diagram-first explanation and prefer Lavish when the user needs to annotate or steer the plan.
- Agent planning diagrams are for dev understanding only. Never put Mermaid, Excalidraw, Lavish, or similar planning diagrams into actual product docs pages unless the user explicitly asks for a reader-facing diagram.
- Keep agent/dev diagrams in chat, `.lavish/`, or an unlinked dev-only diagram file; do not add them to the public docs nav or sidebar by default.
