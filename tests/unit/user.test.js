// tests/unit/user.test.js
const User = require('../../src/main/user');

describe('User', () => {
    // Test suite for User constructor
    describe('constructor', () => {
        it('should create a new user with valid properties', () => {
            // Arrange
            const username = 'testuser';
            const email = 'test@example.com';

            // Act
            const user = new User(username, email);

            // Assert
            expect(user.username).toBe(username);
            expect(user.email).toBe(email);
            expect(user.createdAt).toBeInstanceOf(Date);
        });
    });

    // Test suite for getDisplayName method
    describe('getDisplayName', () => {
        it('should return username with @ prefix', () => {
            // Arrange
            const user = new User('testuser', 'test@example.com');

            // Act
            const displayName = user.getDisplayName();

            // Assert
            expect(displayName).toBe('@testuser');
        });
    });

    // Test suite for hasValidEmail method
    describe('hasValidEmail', () => {
        it('should return true for valid email', () => {
            // Arrange
            const user = new User('testuser', 'test@example.com');

            // Act & Assert
            expect(user.hasValidEmail()).toBe(true);
        });

        it('should return false for invalid email', () => {
            // Arrange
            const user = new User('testuser', 'invalid-email');

            // Act & Assert
            expect(user.hasValidEmail()).toBe(false);
        });
    });
});