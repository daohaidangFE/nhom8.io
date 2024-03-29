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

    //đăng xuất
    document.addEventListener('DOMContentLoaded', function() {
        // Lắng nghe sự kiện click vào nút "Đăng xuất"
        document.getElementById('logout-btn').addEventListener('click', function() {
            // Chuyển hướng về trang index
            window.location.href = 'index.html';
        });
    });

        const demoUsers = [
        {
            username: "admin",
            password: "admin"
        },
        {
            username: "user",
            password: "user"
        }
    ];

        // Hàm kiểm tra xem username đã tồn tại hay chưa
    function isUsernameExist(username) {
        // Duyệt qua mỗi đối tượng trong mảng users
        for (var i = 0; i < demoUsers.length; i++) {
            // So sánh username
            if (demoUsers[i].username === username) {
                return true; // Trả về true nếu tìm thấy username
            }
        }
        return false; // Trả về false nếu không tìm thấy username
    }

    // Hàm kiểm tra tài khoản
    function isUserExist(username, password) {
        // Duyệt qua mỗi đối tượng trong mảng users
        for (var i = 0; i < demoUsers.length; i++) {
            // So sánh username và password
            if (demoUsers[i].username === username && demoUsers[i].password === password) {
                return true; // Trả về true nếu tìm thấy tài khoản
            }
        }
        return false; // Trả về false nếu không tìm thấy tài khoản
    }

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
        // Xác thực tên người dùng và mật khẩu (đoạn mã demo)
        var username = document.getElementById("Username").value;
        var password = document.getElementById("password").value;
        
        // Xác thực thành công, hiển thị phần nội dung của trang chính
        if (isUserExist(username, password)) {
            if (username === "admin") {
            window.location.href = "DashboardAdmin";}
            else {
                window.location.href = "exam.html";
            }
        } else {
            alert("Tên người dùng hoặc mật khẩu không đúng!");
        }
    });
    
    // Xử lý sự kiện submit của form đăng ký
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Kiểm tra xem username đã tồn tại hay chưa
        if (isUsernameExist(newUsername)) {
            alert("Tên người dùng đã tồn tại. Vui lòng nhập tên người dùng khác.");
            return;
        }

        // Kiểm tra xác nhận mật khẩu
        if (newPassword !== confirmPassword) {
            alert("Mật khẩu không khớp. Vui lòng nhập lại.");
            return;
        }
        else {
            // Thêm user mới vào danh sách
            demoUsers.push({username: newUsername, password: newPassword});
        }
        // Xử lý đăng ký ở đây (chưa cần gọi đến backend)
        alert("Đăng ký thành công!");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });
});


