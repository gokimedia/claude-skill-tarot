# Security policy

## Supported version

Security fixes are applied to the latest release on the `main` branch.

## Architecture

Version 1.x is a skills-only plugin. It:

- reads its bundled JSON and Markdown files;
- optionally runs a dependency-free local Node.js draw script;
- makes no network requests;
- does not request credentials or account access;
- does not collect, transmit, or persist user questions.

Review the source before installation. Do not pass private questions as command-line seeds because process arguments can be visible to local system tools.

## Reporting

Report a suspected vulnerability privately to hello@deckaura.com. Include the affected version, reproduction steps, and potential impact. Please do not open a public issue for an unpatched vulnerability.
