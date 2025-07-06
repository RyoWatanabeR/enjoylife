document.addEventListener("DOMContentLoaded", () => {
    const acceptButton = document.getElementById("accept-button");
    const declineButton = document.getElementById("decline-button");
    const body = document.body;

    acceptButton.addEventListener("click", () => {
        body.className = "accept-background"; // 背景を変更
        alert("告白を受け入れました！これからもよろしくお願いします。");
    });

    declineButton.addEventListener("click", () => {
        const confirmation = confirm("本当に断ってもよろしいですか？");
        if (confirmation) {
            body.className = "decline-background"; // 背景を変更
            alert("告白を断りました。これからも友達としてよろしくお願いします。");
        }
    });
});