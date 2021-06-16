import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-promotion',
  templateUrl: './show-promotion.component.html',
  styleUrls: ['./show-promotion.component.scss'],
})
export class ShowPromotionComponent implements OnInit {
  DanhSachKhuyenMai = [
    {
      TieuDeTinTuc: 'BHD 59K/VÉ CẢ TUẦN !!!',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg',
      MoTa: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc: 'TIX 1K/VÉ NGẠI CHI GIÁ VÉ',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg',
      MoTa: 'Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc: 'ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png',
      MoTa: 'ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
    {
      TieuDeTinTuc: 'BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!',
      HinhAnh:
        'https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
      MoTa: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.',
      Like: '../../../../assets/img/like.png',
      Comment: '../../../../assets/img/comment.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
