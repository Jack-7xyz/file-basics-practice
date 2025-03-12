// src/main/user.js
// This is an example of a well-structured module file

/**
 * Represents a user in the system
 * @class User
 */
class User {
    /**
     * Create a new user
     * @param {string} username - The user's username
     * @param {string} email - The user's email
     */
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
    }

    /**
     * Get user's display name
     * @returns {string} The user's display name
     */
    getDisplayName() {
        return `@${this.username}`;
    }

    /**
     * Validate user's email format
     * @returns {boolean} True if email is valid
     */
    hasValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }
}

// Export the class for use in other modules
module.exports = User;