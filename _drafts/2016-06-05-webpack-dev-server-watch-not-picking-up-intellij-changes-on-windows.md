---
layout: single
title: Watch mode not working for IntelliJ
category: JavaScript
tags: [javascript, webpack, tools, angular]
---

The problem: you are using WebPack in watch mode, either directly of via `webpack-dev-server`, editing through IntelliJ IDEA on Windows, and webpack does not pick up the (or trigger) changes you make to the files (and starting the build process).

# The solution

http://stackoverflow.com/questions/33815074/what-is-the-advantage-of-safe-write-in-jetbrains-intellij

Turn IntelliJ's "Safe Write" option off:

- Settings (Ctrl+Alt+S)
- Appearance & Behavior
- System Settings
- Use "safe write" (save changes to a temporary file first)

# The explanation

Webpack watch doesn't work if the file is not saved directly.


Use "safe write" (save changes to a temporary file first)	If this check box is selected, a changed file is first saved in a temporary file. If the save operation succeeds, the file being saved is replaced with the saved file. (Technically, the original file is deleted and the temporary file is renamed.) 
Also, the ownership of such file changes.
If this check box is not selected, the ownership of a file does not change, but all the advantages of safe write will be lost.

https://www.jetbrains.com/help/idea/2016.1/system-settings.html
