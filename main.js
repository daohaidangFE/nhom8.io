document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
        // Xác thực tên người dùng và mật khẩu (đoạn mã demo)
        var username = document.getElementById("Username").value;
        var password = document.getElementById("password").value;
    
        // Xác thực thành công, hiển thị phần nội dung của trang chính
        if (username === "admin" && password === "admin") {
            window.location.href = "exam.html";
        } else {
            alert("Tên người dùng hoặc mật khẩu không đúng!");
        }
    });
    

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Kiểm tra xác nhận mật khẩu
        if (newPassword !== confirmPassword) {
            alert("Mật khẩu không khớp. Vui lòng nhập lại.");
            return;
        }

        // Xử lý đăng ký ở đây (chưa cần gọi đến backend)
        alert("Đăng ký thành công!");
    });
});

// Lấy ô tìm kiếm
var searchBox = document.getElementById('search');

// Lấy danh sách các mục trong exam-list
var examItems = document.querySelectorAll('.exam-list .exam-option');

// Lắng nghe sự kiện khi người dùng nhập vào ô tìm kiếm
searchBox.addEventListener('input', function() {
    var searchTerm = searchBox.value.toLowerCase();

    // Lặp qua từng mục và ẩn hoặc hiện tùy theo từ khóa tìm kiếm
    examItems.forEach(function(item) {
        var examName = item.querySelector('li').textContent.toLowerCase();
        if (examName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});