//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

// Function to apply saved preferences
function applyPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Set CSS variables and save preferences in cookies
  document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColor);
  setCookie('fontsize', fontSize, 30);
  setCookie('fontcolor', fontColor, 30);
});

// Apply preferences on page load
applyPreferences();
