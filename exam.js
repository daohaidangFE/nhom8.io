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

document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử cần thiết
    var startExamButton = document.getElementById("start-exam");
    var examOptions = document.querySelectorAll(".exam-option button");
    var subjectOptions = document.querySelectorAll(".subject-list button");

    // Hàm kiểm tra xem đã chọn exam-option và subject-option chưa
    function checkOptionsSelected() {
        var examOptionSelected = false;
        var subjectOptionSelected = false;

        // Kiểm tra xem đã chọn exam-option chưa
        examOptions.forEach(function(option) {
            if (option.classList.contains("selected")) {
                examOptionSelected = true;
            }
        });

        // Kiểm tra xem đã chọn subject-option chưa
        subjectOptions.forEach(function(option) {
            if (option.classList.contains("selected")) {
                subjectOptionSelected = true;
            }
        });

        // Trả về kết quả kiểm tra
        return examOptionSelected && subjectOptionSelected;
    }

    // Lắng nghe sự kiện click trên nút "Bắt đầu làm bài"
    startExamButton.addEventListener("click", function() {
        // Kiểm tra xem đã chọn exam-option và subject-option chưa
        if (checkOptionsSelected()) {
            // Nếu đã chọn đủ cả exam-option và subject-option, thực hiện hành động bắt đầu làm bài
            window.location.href = 'testPage.html';
            // Thêm mã JS xử lý tiếp theo ở đây...
        } else {
            // Nếu chưa chọn đủ cả exam-option và subject-option, thông báo cho người dùng
            alert("Vui lòng chọn kỳ thi và môn thi trước khi bắt đầu làm bài!");
        }
    });

    // Lắng nghe sự kiện click trên các exam-option
    examOptions.forEach(function(option) {
        option.addEventListener("click", function() {
            // Loại bỏ lớp 'selected' khỏi tất cả các exam-option
            examOptions.forEach(function(opt) {
                opt.classList.remove("selected");
            });

            // Thêm lớp 'selected' vào exam-option được chọn
            option.classList.add("selected");
        });
    });

    // Lắng nghe sự kiện click trên các subject-option
    subjectOptions.forEach(function(option) {
        option.addEventListener("click", function() {
            // Loại bỏ lớp 'selected' khỏi tất cả các subject-option
            subjectOptions.forEach(function(opt) {
                opt.classList.remove("selected");
            });

            // Thêm lớp 'selected' vào subject-option được chọn
            option.classList.add("selected");
        });
    });
});

// const startExamBtn = document.getElementById('start-exam');

// startExamBtn.addEventListener('click', function() {
//     // Chuyển hướng sang trang bài thi khi nhấn vào nút "Bắt đầu làm bài"
    // window.location.href = 'testPage.html';
// });
