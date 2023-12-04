--Bai_68
document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện khi nút được nhấn
    document.getElementById('loadTable').addEventListener('click', function() {
      // Sử dụng XMLHttpRequest để tải dữ liệu từ tệp XML
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'cd_catalog.xml', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Khi dữ liệu đã được tải thành công
          var xmlDoc = xhr.responseXML;
          displayMusicData(xmlDoc);
        } else if (xhr.status !== 200) {
          // Xử lý khi có lỗi
          console.error('Failed to load data.');
        }
      };
      xhr.send();
    });
  
    function displayMusicData(xmlDoc) {
      var tableBody = document.getElementById('musicTableBody');
      var cds = xmlDoc.getElementsByTagName('CD');
  
      // Xóa nội dung cũ của bảng trước khi thêm dữ liệu mới
      tableBody.innerHTML = '';
  
      // Duyệt qua mỗi phần tử CD và thêm vào bảng
      for (var i = 0; i < cds.length; i++) {
        var artist = cds[i].getElementsByTagName('ARTIST')[0].textContent;
        var title = cds[i].getElementsByTagName('TITLE')[0].textContent;
  
        var row = '<tr>' +
                  '<td>' + artist + '</td>' +
                  '<td>' + title + '</td>' +
                  '</tr>';
  
        tableBody.innerHTML += row;
      }
    }
  });


--Bai_74
$(document).ready(function() {
    $.ajax({
      url: 'databaseSinhVien.json',
      dataType: 'json',
      success: function(data) {
        // Xử lý dữ liệu khi request thành công
        displayStudentScores(data);
      },
      error: function() {
        // Xử lý lỗi khi request thất bại
        alert('Failed to load data.');
      }
    });
  
    function displayStudentScores(scores) {
      var tableBody = $('#scoreTableBody');
  
      // Duyệt qua mỗi sinh viên và môn học và thêm dữ liệu vào bảng
      $.each(scores, function(index, student) {
        $.each(student.MonHocs, function(index, subject) {
          var row = '<tr>' +
                    '<td>' + student.Ma + '</td>' +
                    '<td>' + student.Ten + '</td>' +
                    '<td>' + subject.TenMH + '</td>' +
                    '<td>' + subject.Diem + '</td>' +
                    '</tr>';
  
          tableBody.append(row);
        });
      });
    }
  });


--Bai_75
document.addEventListener('DOMContentLoaded', function() {
    
    var sinhvien = {
      Ma: 1,
      Ten: 'Trần Duy Thanh',
      Sachs: [
        { Ma: 'S1', Ten: 'Hồng Lâu Mộng', Trang: 100 },
        { Ma: 'S2', Ten: 'Tây Du Ký', Trang: 200 },
        { Ma: 'S3', Ten: 'Tam Quốc Chí', Trang: 90 },
        { Ma: 'S4', Ten: 'Bích Huyết Kiếm', Trang: 70 },
        { Ma: 'S5', Ten: 'Anh Hùng Xạ Điêu', Trang: 1000 },
        { Ma: 'S6', Ten: 'Thần Điêu Đại Hiệp', Trang: 500 },
        { Ma: 'S7', Ten: 'Tần Thủy Hoàng', Trang: 600 },
        { Ma: 'S8', Ten: 'Chiến Quốc', Trang: 400 },
        { Ma: 'S9', Ten: 'Hán Sở Tranh Hùng', Trang: 300 },
        { Ma: 'S10', Ten: 'Bảo Đao', Trang: 700 },
      ],
      ChiTiet: function() {
        return this.Ma + ' ' + this.Ten;
      }
    };
  
    // Hiển thị dữ liệu lên bảng
    function displayBookInformation(sinhvien) {
      var tableBody = document.getElementById('bookTableBody');
  
      sinhvien.Sachs.forEach(function(sach, index) {
        var row = 
                  '<td>' + sach.Ma + '</td>' +
                  '<td>' + sach.Ten + '</td>' +
                  '<td>' + sach.Trang + '</td>' +
                  '</tr>';
  
        tableBody.innerHTML += row;
      });
    }
  
    // Gọi hàm hiển thị dữ liệu
    displayBookInformation(sinhvien);
  });
