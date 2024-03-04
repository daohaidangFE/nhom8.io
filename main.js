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

    var demoUsername = "";
    var demoPassword = "";

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
        // Xác thực tên người dùng và mật khẩu (đoạn mã demo)
        var username = document.getElementById("Username").value;
        var password = document.getElementById("password").value;
    
        // Xác thực thành công, hiển thị phần nội dung của trang chính
        if (username === demoUsername && password === demoPassword) {
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
        else {
            demoUsername = newUsername;
            demoPassword = newPassword
        }
        // Xử lý đăng ký ở đây (chưa cần gọi đến backend)
        alert("Đăng ký thành công!");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });
});

// Lấy ô tìm kiếm và danh sách các mục trong exam-list
var searchBox = document.getElementById('search');
var examItems = document.querySelectorAll('.exam-list .exam-option');

// Lắng nghe sự kiện khi người dùng nhập vào ô tìm kiếm
searchBox.addEventListener('input', function() {
    var searchTerm = searchBox.value.toLowerCase();

    // Lặp qua từng mục và ẩn/hiện tùy theo từ khóa tìm kiếm
    examItems.forEach(function(item) {
        var examName = item.querySelector('li').textContent.toLowerCase();
        var examStatus = item.querySelector('button').classList.contains('free') ? 'free' : 'scheduled';
        if (examName.includes(searchTerm) || examStatus.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var examOptions = document.querySelectorAll('.exam-option');
    var subjectList = document.getElementById('subject-list');

    examOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            if (subjectList.style.display === 'none') {
                // Nếu đang ẩn, thì hiển thị danh sách môn thi
                subjectList.style.display = 'block';
            } else {
                // Nếu đang hiển thị, thì ẩn danh sách môn thi
                subjectList.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Lấy danh sách các exam-option
    var examOptions = document.querySelectorAll('.exam-option');

    // Lắng nghe sự kiện click trên mỗi exam-option
    examOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Tìm phần tử chứa danh sách môn thi liên quan đến exam-option được nhấp vào
            var subjectList = option.querySelector('.subject-list');
            
            // Kiểm tra xem danh sách môn thi có đang được hiển thị hay không
            if (subjectList.style.display === 'none') {
                // Nếu đang ẩn, thì hiển thị danh sách môn thi
                subjectList.style.display = 'block';
            } else {
                // Nếu đang hiển thị, thì ẩn danh sách môn thi
                subjectList.style.display = 'none';
            }
        });
    });
});