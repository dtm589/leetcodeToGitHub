// Add logic to detect correct answer on LeetCode
if (document.querySelector('.text-green-s')) {
    chrome.runtime.sendMessage({ type: 'leetcode_success' })
};