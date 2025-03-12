# Source Code Directory (src/)

This directory contains the main source code of the project. Understanding how to organize source code is crucial for maintaining a clean and scalable project.

## Directory Structure

```
src/
├── main/              # Main application code
├── utils/             # Utility functions and helpers
└── types/             # Type definitions (if using typed languages)
```

## Best Practices

1. **File Naming**
   - Use consistent naming conventions
   - Choose between camelCase, kebab-case, or snake_case
   - Be descriptive but concise

2. **Directory Organization**
   - Group related files together
   - Separate concerns into different directories
   - Keep a flat structure when possible
   - Create subdirectories when you have 7+ files in one directory

3. **Module Structure**
   - One primary function/class per file
   - Keep files focused and single-purpose
   - Use index files to expose public APIs

4. **Import/Export**
   - Use clear and consistent import patterns
   - Avoid circular dependencies
   - Consider using barrel files (index.ts/index.js)

## Examples

We'll add example files demonstrating:
- Module organization
- Import/export patterns
- Directory structure
- File naming conventions

## Exercise

1. Create a simple module with multiple files
2. Organize the files following best practices
3. Implement proper import/export patterns
4. Add appropriate documentation