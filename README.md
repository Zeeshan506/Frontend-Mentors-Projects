# Remote Internships

A collection of tasks done for Frontend Mentors.  
## Contents

**This is colleciton of practice projects done when practicing Frontend at Frontend Mentors**


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
