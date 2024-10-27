const fullPath = window.location.href;
const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1); // 獲取文件名稱
document.title = fileName; // 設置標題