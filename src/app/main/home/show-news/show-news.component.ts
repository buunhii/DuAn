import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss'],
})
export class ShowNewsComponent implements OnInit {
  DanhSachDienAnh = [
    {
      TieuDeTinTuc:
        'Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất ',
      HinhAnh: '../../../../assets/img/lat-mat.png',
      MoTa: 'Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc:
        '[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM',
      HinhAnh: '../../../../assets/img/mortal-kombat.png',
      MoTa: 'Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.  ',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc:
        'PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời',
      HinhAnh: '../../../../assets/img/promising-young-woman.png',
      MoTa: 'Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). ',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc:
        'VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM',
      HinhAnh: '../../../../assets/img/ban-tay-diet.png',
      MoTa: 'Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới.',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
