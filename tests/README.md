# Tests Directory (tests/)

This directory contains all test-related files. Understanding how to organize tests is crucial for maintaining a reliable codebase.

## Directory Structure

```
tests/
├── unit/              # Unit tests
├── integration/       # Integration tests
├── e2e/              # End-to-end tests
└── fixtures/         # Test data and mock files
```

## Best Practices

1. **Test File Naming**
   - Use `.test.js` or `.spec.js` suffix
   - Match test file names to source files
   - Example: `user.js` → `user.test.js`

2. **Test Organization**
   - Group related tests together
   - Use descriptive test suite names
   - Follow the AAA pattern (Arrange-Act-Assert)

3. **Test Data**
   - Keep test data in separate fixture files
   - Use meaningful sample data
   - Avoid hardcoding test values

4. **Test Coverage**
   - Aim for comprehensive coverage
   - Focus on critical paths
   - Include edge cases

## Example Test Structure

```javascript
describe('UserService', () => {
    describe('createUser', () => {
        it('should create a new user with valid data', () => {
            // Arrange
            const userData = {...}
            
            // Act
            const result = createUser(userData)
            
            // Assert
            expect(result).toBeDefined()
        })
    })
})
```

## Exercise

1. Create test files for your source code
2. Implement unit tests following best practices
3. Add test fixtures and mock data
4. Run tests and verify coverage