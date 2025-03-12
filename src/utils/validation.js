// src/utils/validation.js
// Example of a utility module with pure functions

/**
 * Validates an email address format
 * @param {string} email - The email address to validate
 * @returns {boolean} True if the email format is valid
 */
const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates a username format
 * @param {string} username - The username to validate
 * @returns {boolean} True if the username format is valid
 */
const isValidUsername = (username) => {
    if (typeof username !== 'string') return false;
    // Username should be 3-20 characters, alphanumeric and underscore only
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
};

/**
 * Checks if a string is empty or only whitespace
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is empty or only whitespace
 */
const isEmpty = (str) => {
    if (typeof str !== 'string') return true;
    return str.trim().length === 0;
};

module.exports = {
    isValidEmail,
    isValidUsername,
    isEmpty
};