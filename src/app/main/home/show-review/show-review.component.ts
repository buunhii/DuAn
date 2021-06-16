import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.scss'],
})
export class ShowReviewComponent implements OnInit {
  DanhSachReview = [
    {
      TieuDeTinTuc:
        'Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png',
      MoTa: 'Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc: 'Review: Dinh Thự Oan Khuất (Ghost Of War)',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png',
      MoTa: 'Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png',
      MoTa: 'Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc: 'American Sniper - Chính nghĩa hay phi nghĩa?',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png',
      MoTa: 'American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. ',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
