const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 解析 JSON 数据
app.use(bodyParser.json());

// 处理注册请求
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // 这里可以添加数据库操作，例如将用户信息保存到数据库
    // 为了简化，我们假设注册成功
    const success = true;
    const message = success ? '注册成功' : '注册失败，请稍后重试';

    res.json({ success, message });
});

// 静态文件服务
app.use(express.static(__dirname));

// 解析 JSON 数据
app.use(bodyParser.json());

// 处理注册请求
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // 这里可以添加数据库操作，例如将用户信息保存到数据库
    // 为了简化，我们假设注册成功
    const success = true;
    const message = success ? '注册成功' : '注册失败，请稍后重试';

    res.json({ success, message });
});

// 处理登录请求
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 这里可以添加数据库查询操作，验证用户信息
    // 为了简化，我们假设用户名和密码都是 "test" 时登录成功
    const success = username === 'test' && password === 'test';
    const message = success ? '登录成功' : '用户名或密码错误';

    res.json({ success, message });
});

// 静态文件服务
app.use(express.static(__dirname));

// 启动服务器
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// 解析 JSON 数据
app.use(bodyParser.json());

// 处理注册请求
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const success = true;
    const message = success ? '注册成功' : '注册失败，请稍后重试';
    res.json({ success, message });
});
function cleanEdgeRelationships() {
  const confirmResult = confirm("确定要开启呼吸模式清理边缘关系吗？");
  if (confirmResult) {
    const relationships = document.querySelectorAll('.relationship');
    relationships.forEach((relationship, index) => {
      setTimeout(() => {
        relationship.style.animation = 'fadeOut 0.8s ease forwards';
        relationship.addEventListener('animationend', function () {
          this.style.display = 'none';
        });
      }, index * 300);
    });
    document.getElementById('clean-message').textContent = "已完成边缘关系清理";
  }
}
function setCoreEmoji(emoji) {
  document.getElementById('emoji-set-message').textContent = `已设置核心圈表情符号：${emoji}`;
  localStorage.setItem('coreEmoji', emoji);
}

// 在页面加载时检查是否有保存的表情符号并显示
window.onload = function () {
  const savedEmoji = localStorage.getItem('coreEmoji');
  if (savedEmoji) {
    document.getElementById('emoji-set-message').textContent = `已设置核心圈表情符号：${savedEmoji}`;
  }
};

// 中间件配置
app.use(bodyParser.json());
app.use(express.static(__dirname));

// 模拟数据库
let users = [];

// 统一注册接口
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    if (users.some(u => u.email === email)) {
        return res.json({ success: false, message: '邮箱已被注册' });
    }
    
    users.push({ username, email, password });
    res.json({ success: true, message: '注册成功' });
});

// 完善登录接口
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        res.json({ 
            success: true, 
            message: '登录成功',
            user: { name: user.username }
        });
    } else {
        res.json({ success: false, message: '用户名或密码错误' });
    }
});

// 密码重置接口
app.post('/reset-password', (req, res) => {
    const { email, code } = req.body;
    // 实际应验证验证码有效性
    res.json({ success: true, message: '密码重置成功' });
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});