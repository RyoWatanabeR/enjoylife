document.addEventListener("DOMContentLoaded", () => {
    const acceptButton = document.getElementById("accept-button");
    const declineButton = document.getElementById("decline-button");
    const body = document.body;

    acceptButton.addEventListener("click", () => {
        body.className = "accept-background"; // 背景を変更
        const actionsDiv = document.querySelector(".actions");
        actionsDiv.innerHTML = "<h2>渡邉 凌が彼氏になりました</h2><h2>山下 真莉佳は彼女になりました</h2><h2>これからよろしくお願いします。</h2>"; // メッセージを表示
    });

    declineButton.addEventListener("click", () => {
        const confirmation = confirm("本当に断ってもよろしいですか？");
        if (confirmation) {
            body.className = "decline-background"; // 背景を変更
            alert("告白を断りました。これからも友達としてよろしくお願いします。");
        }
    });
});