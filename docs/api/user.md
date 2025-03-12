# User API Documentation

## Class: User

The `User` class represents a user in the system and provides methods for user-related operations.

### Constructor

Creates a new User instance.

```javascript
const user = new User(username, email);
```

#### Parameters

- `username` (string): The user's username
- `email` (string): The user's email address

#### Properties

- `username` (string): The user's username
- `email` (string): The user's email address
- `createdAt` (Date): Timestamp when the user was created

### Methods

#### getDisplayName()

Returns the user's display name with @ prefix.

```javascript
const displayName = user.getDisplayName();
// Returns: '@username'
```

**Returns**: `string` - The formatted display name

#### hasValidEmail()

Validates the user's email format.

```javascript
const isValid = user.hasValidEmail();
// Returns: true or false
```

**Returns**: `boolean` - True if the email format is valid

### Example Usage

```javascript
// Create a new user
const user = new User('johndoe', 'john@example.com');

// Get display name
console.log(user.getDisplayName()); // '@johndoe'

// Check email validity
if (user.hasValidEmail()) {
    console.log('Email is valid');
}
```

## Best Practices

1. Always validate user input before creating a new User instance
2. Use the provided methods to access user properties
3. Check email validity before performing email-related operations

## Error Handling

The class currently doesn't throw errors, but invalid inputs may result in:
- Invalid email validation results
- Unexpected display name formats

## Related Utilities

See the validation utilities in `src/utils/validation.js` for additional validation functions.