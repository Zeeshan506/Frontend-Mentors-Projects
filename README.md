# Remote Internships

A collection of tasks done for Frontend Mentors.  
## Contents

**This is colleciton of practice projects done when practicing Frontend at Frontend Mentors**

- [Article-preview-component](./Article-preview-component/README.md)
- [Four-card-feature-section](./Four-card-feature-section/README.md)
- [Interactive-rating-component](./Interactive-rating-component/README.md)
- [Newsletter-sign-up-form](./Newsletter-sign-up-form/README.md)
- [Product-preview-card](./Product-preview-card/README.md)
- [QR-code-component](./QR-code-component/README.md)
- [Recipe-page](./Recipe-page/README.md)
- [Social-links-profile](./Social-links-profile/README.md)
- [Testimonials-grid-section](./Testimonials-grid-section/README.md)
- [Time-tracking-dashboard](./Time-tracking-dashboard/README.md)
- [Tip-Calculator](./Tip-Calculator/README.md)

## Importing projects (subtrees)

This File is intended to take given repo remotes (ssh) and merge their working tree, so that the repos are cleanly organized and stored with the git working tree preserved in orginal state. 

This Script Can be reused, just replace the URLs for the remotes you want to add. 

Projects in this repository are intended to be imported using `git subtree add` without squashing so each project preserves its original commit history.

```bash
chmod +x ./import-subtrees.sh
./import-subtrees.sh --yes
```

Preview without making changes:

```bash
./import-subtrees.sh --dry-run
```
