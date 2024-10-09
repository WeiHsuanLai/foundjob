function countdown(initialTime) {
  let remainingTime = initialTime;
  const timerElement = document.getElementById('timer');
  
  function updateTimer() {
    // 計算剩餘時間的時、分、秒
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    // 將時間格式化為 HH:MM:SS
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // const formattedTime = `${String(hours)}:${String(minutes)}:${String(seconds)}`;

    // 更新顯示
    timerElement.textContent = formattedTime;

    // 減少剩餘時間
    remainingTime -= 1; // 每秒減少 1 秒

    // 如果時間到達零，停止計時器
    if (remainingTime < 0) {
      clearInterval(intervalId);
      timerElement.textContent = "00:00:00";
    }
  }

  const intervalId = setInterval(updateTimer, 1000); // 每秒更新一次
}

// 使用示例：從 10 分鐘開始倒數
countdown(600); // 600 秒 = 10 分鐘
