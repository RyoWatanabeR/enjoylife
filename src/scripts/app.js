// このファイルは、ブラウザの現在時刻に基づいてデートプランを表示するロジックを含みます。

const datePlans = [
    { time: "20:00", title: "池袋集合", description: "池袋駅で集合しましょう。", link: "ikebukuro.html" },
    { time: "20:30", title: "カフェ", description: "カフェでリラックスしましょう。", link: "cafe.html" },
    { time: "21:30", title: "秘密の場所", description: "特別な場所に行きましょう。", link: "secret-place.html" },
    { time: "22:00", title: "秘密", description: "最後の秘密を楽しみましょう。", link: "secret.html" }
];

// // テスト用
// const datePlans = [
//     { time: "00:01", title: "池袋集合", description: "池袋駅で集合しましょう。", link: "ikebukuro.html" },
//     { time: "00:01", title: "カフェ", description: "カフェでリラックスしましょう。", link: "cafe.html" },
//     { time: "00:01", title: "秘密の場所", description: "特別な場所に行きましょう。", link: "secret-place.html" },
//     { time: "00:01", title: "秘密", description: "最後の秘密を楽しみましょう。", link: "secret.html" }
// ];

function displayDatePlans() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentFormattedTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

    const plansContainer = document.getElementById('date-plans');
    plansContainer.innerHTML = '';

    datePlans.forEach(plan => {
        const planTime = plan.time;
        const planElement = document.createElement('h5');
        planElement.classList.add('plan');

        if (currentFormattedTime >= planTime) {
            planElement.innerHTML = `
                ${plan.time}： <a href="${plan.link}" style="color: blue;">${plan.title}</a>
            `;
        } else {
            planElement.innerHTML = `
                ${plan.time}： <span style="color: gray;">${plan.title} (未解放)</span>
            `;
        }

        plansContainer.appendChild(planElement);
    });
}

window.onload = displayDatePlans;