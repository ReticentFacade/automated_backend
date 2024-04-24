# CLI Notes

- `Shebang` (or `#! /bin/bash`) is an absolute path to the `bash interpreter`.
- Path of bash program can vary, of course. Use `which bash` to find out the path.

---

- Ask for prompt using `-p` flag. For example:

```bash
echo -e "Enter variable:\n"
read -p variable_input
```

---

## Importing and Exporting in Bash Scripting

1. **Importing:** In Bash, we don't import scripts in the same way we do in other languages. We normally source them using the `source` command or its shorthand, `.`.

- This executes the script in the current shell environment, allowing any variables or functions defined within it to be accessible. For example:

```bash
source script.sh

# or
. script.sh
```

2. **Exporting:** We export variables **to make them available to child processes**. This is useful when we want to pass variables between scripts or to subprocesses. For example:

```bash
export VARIABLE_NAME=value
```

This makes `VARIABLE_NAME` available to any subprocesses created from the current shell.
