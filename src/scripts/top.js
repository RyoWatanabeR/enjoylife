document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // 月は0から始まるため+1
    const currentDay = currentDate.getDate();

    const comingSoonContainer = document.getElementById("coming-soon-container");

    if (currentYear === 2025 && currentMonth === 7 && currentDay >= 7) {
        // 7月7日以降の場合、リンクを有効化
        comingSoonContainer.innerHTML = `
            <h2>公開中！</h2>
            <a href="index.html" class="btn btn-active">トップ画面へ</a>
        `;
    } else {
        // 7月7日以前の場合、「近日公開」の文字を表示
        comingSoonContainer.innerHTML = `
            <h2>近日公開</h2>
            <span class="btn btn-disabled">トップ画面へ</span>
        `;
    }
});