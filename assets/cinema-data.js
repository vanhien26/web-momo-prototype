/**
 * cinema-data.js — shared catalog for cinema.html & cinema-series.html
 * Both pages load this via <script src="../assets/cinema-data.js">
 */

/* ── FILMS NOW PLAYING ── */
const FILMS_NOW = [
  { title:'Spider-Man: Brand New Day',                        img:'https://image-fworker.momocdn.net/momo-external/80e991a3fd9003c6afc835f8775bd667a14ed0d7b604338b3b2c170d7c161ddc?size=M', age:'T13', rating:'9.1', genre:'Hành động', dur:'130 phút', tag:'Hành động', want:'38.4k', badge:'hot',  times:['10:00','12:30','15:00','17:30','20:00','22:30'], box:'28.4 tỷ', trailer:'', formats:['2D','3D','IMAX','4DX'] },
  { title:'Toy Story 5',                                     img:'https://cinema.momocdn.net/convert-webp/img/107954068933179447-postertoystory5.jpg?size=SM',         age:'P',   rating:'9.2', genre:'Hoạt hình', dur:'100 phút', tag:'Hoạt hình', want:'24.8k', badge:'hot',  times:['10:00','13:20','16:50','19:30'],            box:'18.4 tỷ', trailer:'SzMjhBuPx8Q', formats:['2D','3D'] },
  { title:'Hành Trình Của Moana',                            img:'https://image-fworker.momocdn.net/momo-external/23d1f6a008ffde1437ef09febba78608455a8a2d7d538cc983d880b79e9c4e52?size=M', age:'P',   rating:'9.6', genre:'Hoạt hình', dur:'107 phút', tag:'Hoạt hình', want:'31.2k', badge:'hot',  times:['09:30','12:00','14:30','17:00','19:30'],    box:'22.1 tỷ', trailer:'', formats:['2D','3D'] },
  { title:'Doraemon Movie 45: Nobita Và Lâu Đài Dưới Đáy Biển', img:'https://cinema.momocdn.net/convert-webp/img/24268527084304697-4dxdoora.png?size=SM', age:'P',   rating:'9.0', genre:'Hoạt hình', dur:'104 phút', tag:'Hoạt hình', want:'21.5k', badge:'hot',  times:['09:40','12:20','15:00','18:30'],            box:'15.1 tỷ', trailer:'G9FGgwCQ22w', formats:['2D','3D','4DX'] },
  { title:'Detective Conan: Fallen Angel of the Highway',    img:'https://image-fworker.momocdn.net/momo-external/349e75d358913eae8598069eca7f60c1159a745abb0b328681b95212665094bd?size=M', age:'T13', rating:'8.8', genre:'Hoạt hình', dur:'112 phút', tag:'Hoạt hình', want:'19.7k', badge:'new',  times:['10:20','13:00','15:40','18:20','21:00'],    box:'14.3 tỷ', trailer:'', formats:['2D','3D'] },
  { title:'Minions & Quái Vật',                              img:'https://image-fworker.momocdn.net/momo-external/5fc116d01edaafa90852777614981dd9d7e8dec1a00d158fe997533a6ae204c5?size=M', age:'P',   rating:'9.2', genre:'Hoạt hình', dur:'96 phút',  tag:'Hoạt hình', want:'22.3k', badge:'new',  times:['09:00','11:30','14:00','16:30','19:00'],    box:'16.8 tỷ', trailer:'', formats:['2D','3D'] },
  { title:'The Odyssey',                                     img:'https://image-fworker.momocdn.net/momo-external/4a982e1fc6ae9c40f1e2b361877e1c9aa3f5b49480f5329ff5e5a0c21470d81e?size=M', age:'T16', rating:'8.4', genre:'Phiêu lưu', dur:'166 phút', tag:'Hành động', want:'16.2k', badge:'new',  times:['11:00','14:30','18:00','21:30'],            box:'12.7 tỷ', trailer:'', formats:['2D','3D','IMAX'] },
  { title:'Protector',                                       img:'https://image-fworker.momocdn.net/momo-external/c54bf87f9c3bac1776375100b75410ff0750cb45117ac8d6efdf86debc72002d?size=M', age:'T16', rating:'7.9', genre:'Hành động', dur:'108 phút', tag:'Hành động', want:'8.7k',  badge:null,   times:['11:10','14:40','18:10','21:30'],            box:'6.3 tỷ', trailer:'', formats:['2D','3D'] },
  { title:'Ngày Xửa Ngày Xưa 36: Hậu Duệ Mặt Trời',        img:'https://cinema.momocdn.net/convert-webp/img/35415256932515276-NXNX36.jpg?size=SM',                    age:'P',   rating:'7.5', genre:'Hài',      dur:'100 phút', tag:'Hài',       want:'12.1k', badge:null,   times:['10:00','12:40','15:20','18:00'],            box:'9.2 tỷ', trailer:'', formats:['2D'] },
  { title:'Running Man Việt Nam 2026 - Chúa Tể Thời Gian',  img:'https://cinema.momocdn.net/convert-webp/img/35666559403550656-ruuningmanvn26.jpg?size=SM',             age:'P',   rating:'7.8', genre:'Hài',      dur:'110 phút', tag:'Hài',       want:'10.4k', badge:null,   times:['11:00','14:00','17:00','20:00'],            box:'7.8 tỷ', trailer:'', formats:['2D'] },
  { title:'Mẹ Ơi, Về Nhà',                                  img:'https://image-fworker.momocdn.net/momo-external/97fe8f4c02de808ec96c54f05fbe54a1cdb7b9d99c00e5484f8b48309b784a16?size=M', age:'T16', rating:'9.0', genre:'Tình cảm',  dur:'113 phút', tag:'Tình cảm',  want:'13.6k', badge:'new',  times:['10:50','14:10','17:30','20:50'],            box:'6.7 tỷ', trailer:'', formats:['2D'] },
  { title:'Thanh Âm Vượt Đại Dương',                        img:'https://image-fworker.momocdn.net/momo-external/cc8152677724186c4e038dccd9653a7a098e908de9e1f25104a2a77ea0cf751c?size=M', age:'T13', rating:'8.6', genre:'Tình cảm',  dur:'108 phút', tag:'Tình cảm',  want:'9.3k',  badge:null,   times:['11:20','14:50','18:20'],                    box:'5.1 tỷ', trailer:'', formats:['2D'] },
  { title:'Cảm Ơn Người Đã Thức Cùng Tôi',                  img:'https://cinema.momocdn.net/convert-webp/img/70249216814417353-reruncondtct.jpg?size=SM',               age:'K',   rating:'8.9', genre:'Tình cảm',  dur:'105 phút', tag:'Tình cảm',  want:'7.6k',  badge:null,   times:['10:30','13:50','17:10'],                    box:'4.3 tỷ', trailer:'', formats:['2D'] },
  { title:'Trường Hè, 2001',                                 img:'https://image-fworker.momocdn.net/momo-external/00da3be304b24b8bc4ec7cbd5921256945093d36e501328549115e39da75eda4?size=M', age:'C18', rating:'8.8', genre:'Tình cảm',  dur:'118 phút', tag:'Tình cảm',  want:'9.8k',  badge:null,   times:['12:30','16:00','20:15'],                    box:'5.1 tỷ', trailer:'', formats:['2D'] },
  { title:'Mesdames Thanh Sắc',                              img:'https://cinema.momocdn.net/convert-webp/img/115947433721927575-mdts.png?size=SM',                     age:'C18', rating:'8.0', genre:'Tình cảm',  dur:'110 phút', tag:'Tình cảm',  want:'7.2k',  badge:null,   times:['10:20','14:00','17:40'],                    box:'4.5 tỷ', trailer:'JGwWNGJdvx8', formats:['2D'] },
  { title:'Đồng Dao Ma Quái',                                img:'https://cinema.momocdn.net/convert-webp/img/77654494959907436-ddmq.png?size=SM',                      age:'C18', rating:'9.1', genre:'Kinh dị',   dur:'108 phút', tag:'Kinh dị',   want:'12.4k', badge:'hot',  times:['11:20','14:50','18:20','21:30'],            box:'10.3 tỷ', trailer:'', formats:['2D','3D'] },
  { title:'Ám Ảnh',                                         img:'https://image-fworker.momocdn.net/momo-external/17c1f4eaa52eeca2bb15a8ae25121b0256dbffb9f438266899803caf23a90d67?size=M', age:'C18', rating:'8.9', genre:'Kinh dị',   dur:'103 phút', tag:'Kinh dị',   want:'10.7k', badge:null,   times:['12:00','15:30','19:00','21:45'],            box:'7.6 tỷ', trailer:'', formats:['2D'] },
  { title:'Colony: Bầy Xác Sống',                           img:'https://cinema.momocdn.net/convert-webp/img/115606187938743904-conlonyy.png?size=SM',                  age:'C18', rating:'9.4', genre:'Kinh dị',   dur:'112 phút', tag:'Kinh dị',   want:'6.1k',  badge:null,   times:['10:50','15:10','20:30'],                    box:'5.3 tỷ', trailer:'nGMeh6Ve4YE', formats:['2D'] },
  { title:'Ma Nữ Oán Tình',                                 img:'https://cinema.momocdn.net/convert-webp/img/77653061526174131-mnot.png?size=SM',                       age:'C18', rating:'7.8', genre:'Kinh dị',   dur:'97 phút',  tag:'Kinh dị',   want:'8.3k',  badge:null,   times:['11:40','15:00','18:40','21:20'],            box:'6.1 tỷ', trailer:'', formats:['2D'] },
  { title:'Backrooms: Thực Thể Quỷ Quyệt',                  img:'https://image-fworker.momocdn.net/momo-external/f25e9882f3f2ae527619ca767d546d773a0d577885358a36b4169d72bfc85786?size=M', age:'C18', rating:'7.1', genre:'Kinh dị',   dur:'100 phút', tag:'Kinh dị',   want:'5.4k',  badge:null,   times:['13:00','17:20','21:00'],                    box:'3.8 tỷ', trailer:'', formats:['2D'] },
  { title:'Lầu Chú Hỏa',                                    img:'https://cinema.momocdn.net/convert-webp/img/116033739346174952-lch.png?size=SM',                       age:'T16', rating:'8.5', genre:'Kinh dị',   dur:'105 phút', tag:'Kinh dị',   want:'9.4k',  badge:'last', times:['12:00','17:20','21:40'],                    box:'8.1 tỷ', trailer:'dQw4w9WgXcQ', formats:['2D','3D'] },
  { title:'Quỷ Bắt Hồn',                                    img:'https://image-fworker.momocdn.net/momo-external/727aee70358838dad7fc18ebd1998e33b715514b31c3cdec8ba38d4eeef444cf?size=M', age:'T16', rating:'7.3', genre:'Kinh dị',   dur:'93 phút',  tag:'Kinh dị',   want:'5.2k',  badge:null,   times:['14:00','18:20','21:50'],                    box:'2.9 tỷ', trailer:'', formats:['2D'] },
  { title:'Kijsada Paradise',                                img:'https://cinema.momocdn.net/convert-webp/img/70226978613973888-cvtt.png?size=SM',                       age:'T16', rating:'7.6', genre:'Kinh dị',   dur:'98 phút',  tag:'Kinh dị',   want:'4.8k',  badge:null,   times:['13:30','17:50','21:20'],                    box:'3.2 tỷ', trailer:'', formats:['2D'] },
];

/* ── FILMS COMING SOON ── */
const FILMS_SOON = [
  /* ── Tháng 7/2026 ── */
  { title:'Nghỉ Hè Sợ Nghỉ Hưu',                   img:'https://cinema.momocdn.net/convert-webp/img/70679811403674435-nhsnhof.jpg?size=SM',                                                   genre:'Hài · Tình cảm',                  date:'25/07/2026', formats:['2D'] },
  { title:'Người Nhện: Khởi Đầu Mới',               img:'https://image-fworker.momocdn.net/momo-external/80e991a3fd9003c6afc835f8775bd667a14ed0d7b604338b3b2c170d7c161ddc?size=M',            genre:'Hành động · Siêu anh hùng',       date:'31/07/2026', formats:['2D','3D','IMAX','4DX'] },
  /* ── Tháng 8/2026 ── */
  { title:'Thám Tử Kiên 2: Lời Nguyền Hoàng Kim',   img:'https://cinema.momocdn.net/convert-webp/img/154903476143772777-PosterTHAMTUKIEN2compressed.jpg?size=M',                              genre:'Hành động · Bí ẩn',               date:'01/08/2026', formats:['2D','3D'] },
  { title:'Thư Tình Gửi Ngoại',                      img:'https://touchcinema.com/medias/hinhphim2025/thu-tinh-gui-ngoai-500-1784276463437-poster.jpg',                                  genre:'Tình cảm · Gia đình',             date:'07/08/2026', formats:['2D'] },
  { title:'Hoàng Hậu Cuối Cùng',                    img:'https://cinema.momocdn.net/convert-webp/img/27046961537001418-hhccot.png?size=SM',                                                   genre:'Kịch tính · Gia đình',            date:'08/08/2026', formats:['2D'] },
  { title:'PAW Patrol: Phim Khủng Long',             img:'https://image.tmdb.org/t/p/w500/ucma9OplmkRE9AJr1rhFUr7NF59.jpg',                                                                   genre:'Hoạt hình · Phiêu lưu',           date:'14/08/2026', formats:['2D','3D'] },
  { title:'Người Được Chọn',                         img:'https://cinema.momocdn.net/convert-webp/img/154903641510946968-PosterNguoiDuocChoncompressed.jpg?size=M',                            genre:'Tình cảm · Tâm lý',               date:'15/08/2026', formats:['2D'] },
  { title:'Lên Hương',                               img:'https://cinema.momocdn.net/convert-webp/img/35672489440798735-lenhuongg.png?size=SM',                                                genre:'Hài · Hồi hộp',                   date:'22/08/2026', formats:['2D'] },
  { title:'Hộ Linh Tráng Sĩ: Bí Ẩn Mộ Vua Đinh',  img:'https://cinema.momocdn.net/convert-webp/img/77464158911663330-hlts2.jpg?size=SM',                                                    genre:'Hành động · Phiêu lưu',           date:'22/08/2026', formats:['2D','3D'] },
  { title:'He-Man Và Những Chiến Binh Vũ Trụ',      img:null,                                                                                                                                  genre:'Hành động · Phiêu lưu',           date:'29/08/2026', formats:['2D','3D','IMAX'] },
  /* ── Tháng 9/2026 ── */
  { title:'Trại Buôn Người',                         img:'https://image-fworker.momocdn.net/momo-external/11fbf5279c0ac712d2458aa3459916aa82fb111f659d3a851734e9e971e06bf5?size=M',            genre:'Hành động · Tội phạm',            date:'05/09/2026', formats:['2D'] },
  { title:'Dune: Part Three',                        img:'https://image-fworker.momocdn.net/momo-external/fc0eb80f7b11c27bb6eb0a3eb902e3c7f166ca6cd09b1c65e582eaff3887e29b?size=M',            genre:'Khoa học viễn tưởng · Phiêu lưu', date:'12/09/2026', formats:['2D','3D','IMAX','4DX'] },
  { title:'Knives Out 3',                            img:null,                                                                                                                                  genre:'Bí ẩn · Hài hước',                date:'19/09/2026', formats:['2D'] },
  { title:'Jumanji: Thế Giới Tiếp Theo',             img:null,                                                                                                                                  genre:'Hành động · Phiêu lưu · Hài',    date:'26/09/2026', formats:['2D','3D'] },
  /* ── Tháng 10/2026 ── */
  { title:'Avengers: Doomsday',                      img:null,                                                                                                                                  genre:'Hành động · Khoa học viễn tưởng', date:'01/10/2026', formats:['2D','3D','IMAX','4DX'] },
  { title:'The Batman Part II',                      img:null,                                                                                                                                  genre:'Hành động · Tội phạm · Bí ẩn',   date:'02/10/2026', formats:['2D','3D','IMAX'] },
  { title:'Huyền Thoại Aang: Tiết Khí Sư Cuối Cùng', img:null,                                                                                                                                genre:'Hành động · Phiêu lưu · Giả tưởng', date:'16/10/2026', formats:['2D','3D'] },
  /* ── Tháng 11/2026 ── */
  { title:'Wicked: For Good',                        img:null,                                                                                                                                  genre:'Nhạc kịch · Giả tưởng',           date:'20/11/2026', formats:['2D','3D'] },
  { title:'Black Panther: Thiên Hà Mới',             img:null,                                                                                                                                  genre:'Hành động · Siêu anh hùng',       date:'27/11/2026', formats:['2D','3D','IMAX'] },
  /* ── 2027 ── */
  { title:'Avatar 5',                                img:'https://cinema.momocdn.net/convert-webp/img/111912809723526329-61d7ef9c698ea169910803.jpg?size=M',                                   genre:'Khoa học viễn tưởng · Phiêu lưu', date:'01/01/2027', formats:['2D','3D','IMAX','4DX'] },
  { title:'Avengers: Secret Wars',                   img:null,                                                                                                                                  genre:'Hành động · Khoa học viễn tưởng', date:'01/05/2027', formats:['2D','3D','IMAX','4DX'] },
];

/* ── FILM POSTER IMAGE OVERRIDE (MoMo CDN > TMDB) ── */
const FILM_IMG = {
  'Toy Story 5':              'https://cinema.momocdn.net/convert-webp/img/107954068933179447-postertoystory5.jpg?size=SM',
  'Supergirl':                'https://cinema.momocdn.net/convert-webp/img/33968384416504217-spg.png?size=SM',
  'Lầu Chú Hỏa':             'https://cinema.momocdn.net/convert-webp/img/116033739346174952-lch.png?size=SM',
  'Doraemon Movie 45':        'https://cinema.momocdn.net/convert-webp/img/24268527084304697-4dxdoora.png?size=SM',
  'Doraemon Movie 45: Nobita Và Lâu Đài Dưới Đáy Biển': 'https://cinema.momocdn.net/convert-webp/img/24268527084304697-4dxdoora.png?size=SM',
  'Tung Hoành Tứ Hải':       'https://cinema.momocdn.net/convert-webp/img/33894194531231265-470wx700h-thief.jpg?size=SM',
  'Mesdames Thanh Sắc':       'https://cinema.momocdn.net/convert-webp/img/115947433721927575-mdts.png?size=SM',
  'Colony: Bầy Xác Sống':    'https://cinema.momocdn.net/convert-webp/img/115606187938743904-conlonyy.png?size=SM',
  'Bạch Xà: Một Kiếp':       'https://cinema.momocdn.net/convert-webp/img/145819503207552036-bachxxa.png?size=SM',
  'Bạch Xà: Một Kiếp Nhân Gian': 'https://cinema.momocdn.net/convert-webp/img/145819503207552036-bachxxa.png?size=SM',
  'Ma Lu':                    'https://cinema.momocdn.net/convert-webp/img/115456074788690542-malu.png?size=SM',
  'Liêu Trai Lan Nhược Tự':  'https://cinema.momocdn.net/convert-webp/img/33894375987018707-350x495-lieutrai.jpg?size=SM',
  'Hành Trình Của Moana':     'https://image.tmdb.org/t/p/w185/lwqKqiBsGVBtQBZF9ZTunthBCyI.jpg',
  'Minions & Quái Vật':       'https://image.tmdb.org/t/p/w185/amfpWj77Z8x5O76G2EhjquJqzoi.jpg',
  'Cơn Thịnh Nộ':             'https://image.tmdb.org/t/p/w185/pomewNtFVHcox6UIOaNLQLHTaae.jpg',
  'Đồng Dao Ma Quái':         'https://cinema.momocdn.net/convert-webp/img/77654494959907436-ddmq.png?size=SM',
  'Siêu Quậy Marsupilami':    'https://image.tmdb.org/t/p/w185/jlbCaCevS4YHASzW5wVnevbrSy8.jpg',
  'Ma Nữ Oán Tình':           'https://cinema.momocdn.net/convert-webp/img/77653061526174131-mnot.png?size=SM',
  'Ngày Con Sống Lại':        'https://image.tmdb.org/t/p/w185/cFOnIqPNyVqmU1ZtXSsaztCebul.jpg',
  'Mẹ Ơi, Về Nhà':            'https://image.tmdb.org/t/p/w185/pxkavJJuM5zArEGtzvmOLoiICVh.jpg',
  'Ám Ảnh':                   'https://image.tmdb.org/t/p/w185/15qLAM3QM8DoPL9Fps4JOTdqWqt.jpg',
  'Lớp Học Ám Sát':           'https://image.tmdb.org/t/p/w185/zJH7MCwS9c8NJ5gPWI0jtZfJul1.jpg',
};

/* ── FILM SCORES ── */
const FILM_SCORES = {
  'Toy Story 5':                 { c:92, a:88, b:95, presale:2840 },
  'Supergirl':                   { c:78, a:82, b:88, presale:1247 },
  'Colony: Bầy Xác Sống':       { c:62, a:70, b:65, presale:380 },
  'Lầu Chú Hỏa':                { c:74, a:75, b:72, presale:640 },
  'Liêu Trai Lan Nhược Tự':     { c:80, a:74, b:68, presale:520 },
  'Tung Hoành Tứ Hải':          { c:76, a:78, b:82, presale:890 },
  'Mesdames Thanh Sắc':         { c:85, a:80, b:76, presale:720 },
  'Ma Lu':                      { c:68, a:72, b:74, presale:290 },
  'Bạch Xà: Một Kiếp Nhân Gian':{ c:77, a:76, b:70, presale:480 },
  'Doraemon Movie 45':           { c:88, a:84, b:91, presale:2100 },
};

/* ── CINEMAS ── */
const CINEMAS = [
  { name:'CGV Vincom Đồng Khởi', addr:'72 Lê Thánh Tôn, Quận 1', dist:'0.8 km', totalFilms:12, chain:'cgv', label:'CGV',
    shows:[
      { film:'Toy Story 5', dur:'100 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d',   price:80000,  times:[{t:'09:15'},{t:'10:00'},{t:'12:45'},{t:'16:50'},{t:'19:45'},{t:'21:00',few:true}] },
        { fmt:'3D Phụ Đề',     tag:'3d',   price:95000,  times:[{t:'11:00'},{t:'13:20'},{t:'18:00'},{t:'20:30'}] },
        { fmt:'IMAX',          tag:'imax', price:130000, times:[{t:'11:30',few:true},{t:'15:15'},{t:'20:15'}] },
      ]},
      { film:'Supergirl', dur:'130 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề', tag:'2d',   price:85000,  times:[{t:'10:30'},{t:'11:30'},{t:'14:00'},{t:'18:00'},{t:'21:30'}] },
        { fmt:'IMAX',      tag:'imax', price:140000, times:[{t:'12:15'},{t:'14:45',few:true},{t:'17:30'},{t:'21:15'}] },
      ]},
      { film:'Lầu Chú Hỏa', dur:'105 phút', age:'T16', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'10:10'},{t:'12:00'},{t:'15:30'},{t:'18:45'},{t:'21:40'}] },
        { fmt:'3D Phụ Đề',     tag:'3d', price:95000, times:[{t:'13:50'},{t:'17:20',few:true},{t:'20:00'}] },
      ]},
    ]},
  { name:'CGV Aeon Mall Bình Tân', addr:'1 Đường Số 17A, Bình Tân', dist:'9.4 km', totalFilms:11, chain:'cgv', label:'CGV',
    shows:[
      { film:'Spider-Man: Brand New Day', dur:'148 phút', age:'T13', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d',   price:85000,  times:[{t:'09:00'},{t:'11:30'},{t:'14:00'},{t:'17:00'},{t:'20:00'}] },
        { fmt:'3D Phụ Đề',     tag:'3d',   price:100000, times:[{t:'10:15'},{t:'13:00'},{t:'16:00'},{t:'19:00'},{t:'21:45'}] },
        { fmt:'IMAX',          tag:'imax', price:145000, times:[{t:'11:00'},{t:'14:30'},{t:'18:00'},{t:'21:00'}] },
      ]},
      { film:'Toy Story 5', dur:'100 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'09:30'},{t:'12:00'},{t:'15:00'},{t:'17:30'},{t:'20:30'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:95000, times:[{t:'10:00'},{t:'13:15'},{t:'16:30'},{t:'19:30'}] },
      ]},
      { film:'Doraemon Movie 45', dur:'104 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'08:30'},{t:'10:45'},{t:'13:00'},{t:'15:30'},{t:'18:00'},{t:'20:45'}] },
      ]},
    ]},
  { name:'CGV Vincom Thủ Đức', addr:'216 Võ Văn Ngân, TP Thủ Đức', dist:'10.1 km', totalFilms:10, chain:'cgv', label:'CGV',
    shows:[
      { film:'Supergirl', dur:'130 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề',     tag:'2d',   price:85000,  times:[{t:'09:30'},{t:'12:00'},{t:'15:00'},{t:'18:00'},{t:'21:00'}] },
        { fmt:'3D Phụ Đề',     tag:'3d',   price:100000, times:[{t:'10:30'},{t:'13:30'},{t:'16:30'},{t:'19:30'}] },
      ]},
      { film:'Toy Story 5', dur:'100 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'09:00'},{t:'11:15'},{t:'13:45'},{t:'16:15'},{t:'18:45'},{t:'21:15'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:95000, times:[{t:'10:00'},{t:'12:30'},{t:'15:00'},{t:'17:30'},{t:'20:00'}] },
      ]},
      { film:'Lầu Chú Hỏa', dur:'105 phút', age:'T16', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'10:00'},{t:'13:00'},{t:'16:00'},{t:'19:00','few':true},{t:'21:30'}] },
      ]},
    ]},
  { name:'CGV Crescent Mall', addr:'101 Tôn Dật Tiên, Quận 7', dist:'5.6 km', totalFilms:9, chain:'cgv', label:'CGV',
    shows:[
      { film:'Toy Story 5', dur:'100 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d',   price:80000,  times:[{t:'09:15'},{t:'11:30'},{t:'14:00'},{t:'16:30'},{t:'19:00'},{t:'21:30'}] },
        { fmt:'IMAX',          tag:'imax', price:135000, times:[{t:'10:00'},{t:'13:00'},{t:'16:00'},{t:'19:30'}] },
      ]},
      { film:'Spider-Man: Brand New Day', dur:'148 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề',     tag:'2d',   price:85000,  times:[{t:'09:45'},{t:'12:30'},{t:'15:30'},{t:'18:30'},{t:'21:15'}] },
        { fmt:'4DX',           tag:'4dx',  price:150000, times:[{t:'11:00'},{t:'14:00'},{t:'17:15'},{t:'20:30'}] },
      ]},
    ]},
  { name:'CGV Giga Mall Thủ Đức', addr:'240-242 Hương Lộ 2, TP Thủ Đức', dist:'13.2 km', totalFilms:8, chain:'cgv', label:'CGV',
    shows:[
      { film:'Doraemon Movie 45', dur:'104 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:75000, times:[{t:'09:00'},{t:'11:00'},{t:'13:00'},{t:'15:30'},{t:'18:00'},{t:'20:30'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:90000, times:[{t:'10:00'},{t:'12:30'},{t:'14:30'},{t:'17:00'},{t:'19:30'}] },
      ]},
      { film:'Mesdames Thanh Sắc', dur:'110 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:75000, times:[{t:'10:30'},{t:'13:00'},{t:'15:30'},{t:'18:30'},{t:'21:00'}] },
      ]},
      { film:'Supergirl', dur:'130 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề', tag:'2d', price:80000, times:[{t:'09:30'},{t:'12:00'},{t:'16:00'},{t:'20:00'}] },
        { fmt:'3D Phụ Đề', tag:'3d', price:95000, times:[{t:'11:00'},{t:'14:00'},{t:'17:30'},{t:'21:00',few:true}] },
      ]},
    ]},
  { name:'CGV Vincom Mega Mall Grand Park', addr:'18B Nguyễn Xiển, TP Thủ Đức', dist:'16.8 km', totalFilms:10, chain:'cgv', label:'CGV',
    shows:[
      { film:'Spider-Man: Brand New Day', dur:'148 phút', age:'T13', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d',   price:85000,  times:[{t:'09:00'},{t:'12:00'},{t:'15:00'},{t:'18:00'},{t:'21:00'}] },
        { fmt:'3D Phụ Đề',     tag:'3d',   price:100000, times:[{t:'10:30'},{t:'13:30'},{t:'16:30'},{t:'19:30'}] },
        { fmt:'IMAX',          tag:'imax', price:145000, times:[{t:'11:00'},{t:'14:00'},{t:'17:00'},{t:'20:00'}] },
        { fmt:'4DX',           tag:'4dx',  price:150000, times:[{t:'11:30'},{t:'14:30',few:true},{t:'17:30'},{t:'20:30'}] },
      ]},
      { film:'Toy Story 5', dur:'100 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'09:30'},{t:'11:45'},{t:'14:15'},{t:'16:45'},{t:'19:15'},{t:'21:30'}] },
      ]},
    ]},
  { name:'CGV Pearl Plaza', addr:'561A Điện Biên Phủ, Bình Thạnh', dist:'4.3 km', totalFilms:9, chain:'cgv', label:'CGV',
    shows:[
      { film:'Supergirl', dur:'130 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề', tag:'2d',   price:85000,  times:[{t:'09:45'},{t:'12:15'},{t:'15:00'},{t:'17:45'},{t:'20:30'}] },
        { fmt:'3D Phụ Đề', tag:'3d',   price:100000, times:[{t:'10:30'},{t:'13:15'},{t:'16:00'},{t:'18:45'},{t:'21:15'}] },
        { fmt:'IMAX',      tag:'imax', price:140000, times:[{t:'11:15'},{t:'14:00'},{t:'17:00'},{t:'20:15'}] },
      ]},
      { film:'Lầu Chú Hỏa', dur:'105 phút', age:'T16', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:80000, times:[{t:'09:00'},{t:'11:30'},{t:'14:00'},{t:'16:30'},{t:'19:00'},{t:'21:45'}] },
      ]},
    ]},
  { name:'CGV Landmark 81', addr:'772A Điện Biên Phủ, Bình Thạnh', dist:'4.9 km', totalFilms:11, chain:'cgv', label:'CGV',
    shows:[
      { film:'Spider-Man: Brand New Day', dur:'148 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề',     tag:'2d',   price:90000,  times:[{t:'10:00'},{t:'13:00'},{t:'16:00'},{t:'19:00'},{t:'21:30'}] },
        { fmt:'IMAX',          tag:'imax', price:150000, times:[{t:'11:00',few:true},{t:'14:30'},{t:'17:30'},{t:'20:30'}] },
      ]},
      { film:'Toy Story 5', dur:'100 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:85000, times:[{t:'09:00'},{t:'11:15'},{t:'13:30'},{t:'15:45'},{t:'18:00'},{t:'20:15'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:100000, times:[{t:'09:45'},{t:'12:00'},{t:'14:15'},{t:'16:30'},{t:'19:15'},{t:'21:30'}] },
      ]},
      { film:'Doraemon Movie 45', dur:'104 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:85000, times:[{t:'09:30'},{t:'12:00'},{t:'14:30'},{t:'17:00'},{t:'19:30'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:100000, times:[{t:'10:30'},{t:'13:00'},{t:'15:30'},{t:'18:00'},{t:'20:30'}] },
      ]},
    ]},
  { name:'Lotte Cinema Nowzone', addr:'235 Nguyễn Văn Cừ, Quận 1', dist:'1.2 km', totalFilms:10, chain:'lotte', label:'LOTTE',
    shows:[
      { film:'Doraemon Movie 45', dur:'104 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d',  price:75000,  times:[{t:'09:00'},{t:'09:40'},{t:'11:30'},{t:'14:15'},{t:'18:30'},{t:'21:00'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d',  price:90000,  times:[{t:'10:45'},{t:'12:20'},{t:'16:00'},{t:'19:45'}] },
        { fmt:'4DX',           tag:'4dx', price:145000, times:[{t:'13:00'},{t:'15:00',few:true},{t:'17:30'}] },
      ]},
      { film:'Tung Hoành Tứ Hải', dur:'118 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề', tag:'2d',  price:80000,  times:[{t:'10:00'},{t:'11:00'},{t:'13:30'},{t:'17:00'},{t:'20:15'}] },
        { fmt:'4DX',       tag:'4dx', price:145000, times:[{t:'12:15'},{t:'14:30',few:true},{t:'18:45'},{t:'22:00'}] },
      ]},
      { film:'Mesdames Thanh Sắc', dur:'110 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:75000, times:[{t:'09:30'},{t:'10:20'},{t:'13:00'},{t:'17:40'},{t:'20:30'}] },
        { fmt:'3D Phụ Đề',     tag:'3d', price:90000, times:[{t:'11:45'},{t:'14:00'},{t:'19:15'}] },
      ]},
    ]},
  { name:'BHD Star Bitexco', addr:'2 Hải Triều, Quận 1', dist:'1.5 km', totalFilms:8, chain:'bhd', label:'BHD',
    shows:[
      { film:'Colony: Bầy Xác Sống', dur:'112 phút', age:'C18', formats:[
        { fmt:'2D Phụ Đề', tag:'2d', price:70000, times:[{t:'10:50'},{t:'13:15'},{t:'15:10'},{t:'18:30'},{t:'20:30'},{t:'22:45'}] },
      ]},
      { film:'Bạch Xà: Một Kiếp', dur:'120 phút', age:'T13', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:70000, times:[{t:'09:30'},{t:'10:10'},{t:'12:50'},{t:'16:20'},{t:'19:20'}] },
        { fmt:'3D Phụ Đề',     tag:'3d', price:85000, times:[{t:'11:30'},{t:'13:50',few:true},{t:'17:40'},{t:'21:00'}] },
      ]},
      { film:'Liêu Trai Lan Nhược Tự', dur:'105 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề', tag:'2d', price:70000, times:[{t:'10:00'},{t:'12:30'},{t:'14:20'},{t:'16:40'},{t:'19:10'},{t:'21:30'}] },
      ]},
    ]},
  { name:'Galaxy Cinema Nguyễn Du', addr:'116 Nguyễn Du, Quận 1', dist:'1.8 km', totalFilms:9, chain:'galaxy', label:'GALAXY',
    shows:[
      { film:'Mesdames Thanh Sắc', dur:'110 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:65000, times:[{t:'09:15'},{t:'10:00'},{t:'12:30'},{t:'15:00'},{t:'17:30'},{t:'20:00'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:80000, times:[{t:'11:00'},{t:'13:45'},{t:'16:15'},{t:'19:00'},{t:'21:30'}] },
      ]},
      { film:'Đồng Dao Ma Quái', dur:'98 phút', age:'T16', formats:[
        { fmt:'2D Phụ Đề', tag:'2d', price:65000, times:[{t:'10:30'},{t:'11:15'},{t:'13:00'},{t:'15:30'},{t:'18:00'},{t:'20:45'}] },
      ]},
      { film:'Ma Nữ Oán Tình', dur:'100 phút', age:'T16', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:65000, times:[{t:'09:45'},{t:'11:45'},{t:'14:15'},{t:'17:00'},{t:'19:30'},{t:'22:00'}] },
      ]},
    ]},
  { name:'Beta Cinemas Thủ Đức', addr:'18 Võ Văn Ngân, TP Thủ Đức', dist:'8.2 km', totalFilms:7, chain:'beta', label:'BETA',
    shows:[
      { film:'Doraemon Movie 45', dur:'104 phút', age:'P', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:55000, times:[{t:'09:00'},{t:'10:30'},{t:'12:00'},{t:'14:00'},{t:'16:30'},{t:'19:00'},{t:'21:00'}] },
        { fmt:'3D Lồng Tiếng', tag:'3d', price:70000, times:[{t:'11:00'},{t:'13:00'},{t:'15:30'},{t:'18:00'},{t:'20:30'}] },
      ]},
      { film:'Ngày Con Sống Lại', dur:'95 phút', age:'T13', formats:[
        { fmt:'2D Phụ Đề', tag:'2d', price:55000, times:[{t:'10:00'},{t:'12:15'},{t:'14:30'},{t:'17:00'},{t:'19:30'},{t:'22:00'}] },
      ]},
      { film:'Ma Lu', dur:'95 phút', age:'T16', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:60000, times:[{t:'09:30'},{t:'11:15'},{t:'13:00'},{t:'16:00'},{t:'18:30'},{t:'21:00'}] },
      ]},
      { film:'Bạch Xà: Một Kiếp Nhân Gian', dur:'120 phút', age:'T13', formats:[
        { fmt:'2D Lồng Tiếng', tag:'2d', price:60000, times:[{t:'10:15'},{t:'12:45'},{t:'15:30'},{t:'18:00'},{t:'20:45'}] },
        { fmt:'3D Phụ Đề',     tag:'3d', price:75000, times:[{t:'11:30'},{t:'14:00',few:true},{t:'19:15'}] },
      ]},
    ]},
];

/* ── TV SERIES LISTING (used by cinema home + detail page slug→id resolution) ── */
const FEATURED_SERIES = [
  /* ── US ── */
  { title:'The Last of Us S2',      slug:'the-last-of-us',            tmdb_id:100088, poster:'https://image.tmdb.org/t/p/w342/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg', rating:'9.1', seasons:2, platform:'Max',      country:'us', badge:'new' },
  { title:'Andor S2',               slug:'andor',                      tmdb_id:83867,  poster:'https://image.tmdb.org/t/p/w342/khZqmwHQicTYoS7Flreb9EddFZC.jpg', rating:'9.3', seasons:2, platform:'Disney+',  country:'us', badge:'new' },
  { title:'The White Lotus S3',     slug:'the-white-lotus',            tmdb_id:127532, poster:'https://image.tmdb.org/t/p/w342/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg', rating:'8.7', seasons:3, platform:'Max',      country:'us', badge:'hot' },
  { title:'Severance S2',           slug:'severance',                  tmdb_id:99966,  poster:'https://image.tmdb.org/t/p/w342/iT8SBsxhglrWtMatMenmbUbyd2i.jpg', rating:'8.8', seasons:2, platform:'Apple TV+', country:'us', badge:'hot' },
  { title:'The Bear S3',            slug:'the-bear',                   tmdb_id:95403,  poster:'https://image.tmdb.org/t/p/w342/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg', rating:'8.6', seasons:3, platform:'Hulu',      country:'us', badge:null },
  { title:'House of the Dragon S2', slug:'house-of-the-dragon',        tmdb_id:94997,  poster:'https://image.tmdb.org/t/p/w342/z2yahl2uefxDCl0nogcRBstwruJ.jpg', rating:'8.4', seasons:2, platform:'Max',      country:'us', badge:null },
  { title:'Stranger Things S5',     slug:'stranger-things',            tmdb_id:66732,  poster:'https://image.tmdb.org/t/p/w342/3AJr9B1Yn4TyaFeZ4OkaTVP1LNr.jpg', rating:'8.7', seasons:5, platform:'Netflix',  country:'us', badge:'soon' },
  { title:'Breaking Bad',           slug:'breaking-bad',               tmdb_id:1396,   poster:'https://image.tmdb.org/t/p/w342/8Pja0VYeYO56kjaOhVfCmpVmA2v.jpg', rating:'9.5', seasons:5, platform:'Netflix',  country:'us', badge:null },
  { title:'Succession',             slug:'succession',                  tmdb_id:63174,  poster:'https://image.tmdb.org/t/p/w342/e2X6MRwOCEtcBfWXTNLxMWXM1gI.jpg', rating:'8.9', seasons:4, platform:'Max',      country:'us', badge:null },
  { title:'Chernobyl',              slug:'chernobyl',                   tmdb_id:87108,  poster:'https://image.tmdb.org/t/p/w342/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg', rating:'9.4', seasons:1, platform:'Max',      country:'us', badge:null },
  /* ── KR ── */
  { title:'Squid Game S2',          slug:'squid-game',                  tmdb_id:93405,  poster:'https://image.tmdb.org/t/p/w342/uK5GDq2xuRH4TqhOZkKuyRnM85.jpg', rating:'8.0', seasons:2, platform:'Netflix',  country:'kr', badge:'hot' },
  { title:'Queen of Tears',         slug:'queen-of-tears',              tmdb_id:239770, poster:'https://image.tmdb.org/t/p/w342/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg', rating:'8.7', seasons:1, platform:'Netflix',  country:'kr', badge:'hot' },
  { title:'Moving',                 slug:'moving',                      tmdb_id:213974, poster:'https://image.tmdb.org/t/p/w342/iri7K5jjRtCrNwqZpqFlnEPSKsW.jpg', rating:'8.7', seasons:1, platform:'Disney+',  country:'kr', badge:null },
  { title:'Lovely Runner',          slug:'lovely-runner',               tmdb_id:237858, poster:'https://image.tmdb.org/t/p/w342/pte32efUDF2x0xogIYeVm333mG0.jpg', rating:'8.6', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'When the Phone Rings',   slug:'when-the-phone-rings',        tmdb_id:255858, poster:'https://image.tmdb.org/t/p/w342/8ETKxEaPlwzqOof4OsYUBFvaoHv.jpg', rating:'8.3', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'The Glory',              slug:'the-glory',                   tmdb_id:199816, poster:'https://image.tmdb.org/t/p/w342/ldkpYdxPCsiDnl1hwoUQdtjuSHg.jpg', rating:'8.5', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'Vincenzo',               slug:'vincenzo',                    tmdb_id:106222, poster:'https://image.tmdb.org/t/p/w342/enLyvrk3d347sdIHQjglFTwzKQj.jpg', rating:'8.8', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'Extraordinary Atty Woo', slug:'extraordinary-attorney-woo',  tmdb_id:171103, poster:'https://image.tmdb.org/t/p/w342/vGuSNNnuozvVaCJ8BiQDw5y9LUx.jpg', rating:'8.8', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'Crash Landing on You',   slug:'crash-landing-on-you',        tmdb_id:95004,  poster:'https://image.tmdb.org/t/p/w342/b5PTXErp18fzi8e2MQv2HlEiE23.jpg', rating:'8.7', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'My Mister',             slug:'my-mister',                    tmdb_id:70368,  poster:'https://image.tmdb.org/t/p/w342/cJnHKmcaO4fYiCCBm1o8eMwk9L7.jpg', rating:'9.0', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  { title:'Mr. Sunshine',          slug:'mr-sunshine',                  tmdb_id:75006,  poster:'https://image.tmdb.org/t/p/w342/ydBPtWG64mFJsf4Hq1SJwqPSkyZ.jpg', rating:'8.9', seasons:1, platform:'Netflix',  country:'kr', badge:null },
  /* ── JP ── */
  { title:'Attack on Titan S4',    slug:'attack-on-titan',              tmdb_id:1429,   poster:'https://image.tmdb.org/t/p/w342/qDK2qEA5pfUK7Rog8urvgKuaXiP.jpg', rating:'9.1', seasons:4, platform:'Crunchyroll', country:'jp', badge:'hot' },
  { title:'Demon Slayer S4',       slug:'demon-slayer',                 tmdb_id:85937,  poster:'https://image.tmdb.org/t/p/w342/tvVVdUf7GuUGpCYg10Sj5RIz0cf.jpg', rating:'8.8', seasons:4, platform:'Crunchyroll', country:'jp', badge:'new' },
  { title:'Jujutsu Kaisen S2',     slug:'jujutsu-kaisen',               tmdb_id:95479,  poster:'https://image.tmdb.org/t/p/w342/9TCtCKTb03Lm4xzNq4bMenbKUfx.jpg', rating:'8.7', seasons:2, platform:'Crunchyroll', country:'jp', badge:null  },
  { title:'One Piece (2023)',       slug:'one-piece-live',               tmdb_id:37854,  poster:'https://image.tmdb.org/t/p/w342/zuL13RB91w6bssbmSpBiodd8lmC.jpg', rating:'8.4', seasons:1, platform:'Netflix',     country:'jp', badge:'hot' },
  { title:'Vinland Saga S2',       slug:'vinland-saga',                 tmdb_id:91239,  poster:'https://image.tmdb.org/t/p/w342/vUHlpA5c1NXkds59reY3HMb4Abs.jpg', rating:'8.9', seasons:2, platform:'Netflix',     country:'jp', badge:null  },
];

/* slug → tmdb_id lookup (built from FEATURED_SERIES) */
const SERIES_SLUG_TO_ID = Object.fromEntries(
  FEATURED_SERIES.filter(s => s.tmdb_id).map(s => [s.slug, s.tmdb_id])
);

const SERIES_COUNTRY_COLOR = { us:'#1d4ed8', kr:'#be123c', jp:'#9333ea', cn:'#b45309', uk:'#1d4ed8' };

/* ── GENRE TILES ── */
const GENRE_TILES = [
  { label:'Hành động',  icon:'zap',      g1:'#7c1d1d', g2:'#1f1020' },
  { label:'Kinh dị',    icon:'ghost',    g1:'#3f0f1f', g2:'#0f1218' },
  { label:'Tình cảm',   icon:'heart',    g1:'#7a1f4f', g2:'#1b1422' },
  { label:'Hoạt hình',  icon:'sparkles', g1:'#1c4f6d', g2:'#16202f' },
  { label:'Hài hước',   icon:'smile',    g1:'#7b5a11', g2:'#221a12' },
  { label:'Tâm lý',     icon:'brain',    g1:'#2d3a67', g2:'#161b2a' },
  { label:'Khoa học viễn tưởng', icon:'orbit', g1:'#113d57', g2:'#121820' },
  { label:'Phiêu lưu',  icon:'compass',  g1:'#174c3f', g2:'#121d1a' },
];

/* ── TV SERIES DETAIL CATALOG (keyed by TMDB id) ── */
const FALLBACK_SERIES = {
  id: 100088,
  name: 'The Last of Us',
  original_name: 'The Last of Us',
  tagline: "When you're lost in the darkness, look for the light.",
  overview: '20 năm sau khi nền văn minh hiện đại sụp đổ, Joel — một kẻ buôn lậu cứng rắn — được giao nhiệm vụ đưa Ellie, cô bé 14 tuổi có khả năng miễn dịch kỳ lạ, ra khỏi vùng kiểm soát quân sự hà khắc. Chuyến đi ngắn ban đầu trở thành cuộc hành trình xuyên Mỹ đầy nguy hiểm, và cả hai phải dựa vào nhau để tồn tại.',
  poster_path: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
  backdrop_path: '/2BX6gNi7Yr1oHJsm4xHCQu6DBhp.jpg',
  first_air_date: '2023-01-15',
  last_air_date: '2025-05-25',
  number_of_seasons: 2,
  number_of_episodes: 16,
  status: 'Returning Series',
  vote_average: 8.558,
  vote_count: 10244,
  content_ratings_display: 'TV-MA · C18',
  genres: [
    { id: 10759, name: 'Hành động & Phiêu lưu' },
    { id: 18,    name: 'Kịch tính' },
    { id: 27,    name: 'Kinh dị' },
    { id: 10765, name: 'Khoa học viễn tưởng' },
  ],
  networks: [{ id: 49, name: 'HBO' }],
  ext_scores: { imdb: '8.7/10', rt: '96%', meta: '84', tmdb: '85%' },
  seasons: [
    { season_number: 1, name: 'Season 1', episode_count: 9, air_date: '2023-01-15' },
    { season_number: 2, name: 'Season 2', episode_count: 7, air_date: '2025-04-13' },
  ],
  cast: [
    { id: 56322,   name: 'Pedro Pascal',    char: 'Joel Miller',    img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pedro_Pascal_at_the_2025_Cannes_Film_Festival_04.jpg/330px-Pedro_Pascal_at_the_2025_Cannes_Film_Festival_04.jpg' },
    { id: 2267640, name: 'Bella Ramsey',    char: 'Ellie Williams', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bella_Ramsey-3066.jpg/330px-Bella_Ramsey-3066.jpg' },
    { id: 1262984, name: 'Gabriel Luna',    char: 'Tommy Miller',   img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gabriel_Luna_at_CCBP_2025.jpg/330px-Gabriel_Luna_at_CCBP_2025.jpg' },
    { id: 1893516, name: 'Anna Torv',       char: 'Tess',           img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Anna_Torv_headshot.jpg/330px-Anna_Torv_headshot.jpg' },
    { id: 2229617, name: 'Nico Parker',     char: 'Sarah',          img: null },
    { id: 1478383, name: 'Storm Reid',      char: 'Riley Abel',     img: null },
    { id: 3172082, name: 'Keivonn Woodard', char: 'Sam',            img: null },
    { id: 56323,   name: 'Jeffrey Pierce',  char: 'Perry',          img: null },
  ],
  similar: [
    { id: 1396,   name: 'Breaking Bad',       poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: '2008' },
    { id: 60735,  name: 'The Walking Dead',    poster: '/n7PhlMpK6WMNEHkuGfNVAGIQsrA.jpg', year: '2010' },
    { id: 130392, name: 'The Diplomat',        poster: '/2meX1nMdScFOoV4370jsMVMnbHl.jpg', year: '2023' },
    { id: 66732,  name: 'Stranger Things',     poster: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', year: '2016' },
    { id: 94997,  name: 'House of the Dragon', poster: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg', year: '2022' },
    { id: 95403,  name: 'The Bear',            poster: '/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg', year: '2022' },
  ],
};

const FALLBACK_SEASONS = {
  1: { episodes: [
    { n:1, name:"When You're Lost in the Darkness",  date:'2023-01-15', rt:81, still:'/mXzXmjuVBo9DRWJSfN7KO3h7EMV.jpg', ov:'Joel và Tess nhận nhiệm vụ đưa Ellie qua ranh giới trong vành đai kiểm dịch Boston. Câu chuyện về sự sụp đổ của thế giới cũ dần hé lộ.' },
    { n:2, name:'Infected',                          date:'2023-01-22', rt:57, still:'/cxIVHDzSHiKxMmzEMibvkIiQSZH.jpg', ov:'Nhóm phải băng qua khu vực bị nhiễm Cordyceps. Joel đối mặt với quyết định không thể quay đầu khi sự thật về Tess được hé lộ.' },
    { n:3, name:'Long, Long Time',                   date:'2023-01-29', rt:76, still:'/lZuLSzX3tqUANWYb5MHfcGG18Ah.jpg', ov:'Câu chuyện của Bill và Frank — hai người đàn ông xây dựng cuộc sống và tình yêu giữa tận thế. Một trong những tập được đánh giá cao nhất mùa 1.' },
    { n:4, name:'Please Hold to My Hand',            date:'2023-02-05', rt:49, still:'/dxs4EKMKkRrMSWJBDI2O6vlaCHY.jpg', ov:'Joel và Ellie rời vùng đất quen thuộc, tìm đường đến Kansas City. Khoảng cách và sự nghi ngờ giữa hai người dần thay bằng sự thấu hiểu.' },
    { n:5, name:'Endure and Survive',                date:'2023-02-10', rt:59, still:'/pAQMXkVkBaGqDokRLDYFPxOxdvb.jpg', ov:'Henry và Sam gia nhập nhóm trong cuộc tháo chạy khỏi Kansas City. Mối đe dọa từ bên trong và bên ngoài leo thang đến đỉnh điểm bi thảm.' },
    { n:6, name:'Kin',                               date:'2023-02-19', rt:54, still:'/nZ4JFWkrLSAGl4OwOwDyYc49mVB.jpg', ov:'Joel và Ellie đến Wyoming, gặp lại Tommy trong cộng đồng Jackson. Nhưng quá khứ và nỗi sợ không bao giờ rời xa Joel.' },
    { n:7, name:'Left Behind',                       date:'2023-02-24', rt:51, still:'/aKJ8E7s6PjFN9pkSVT1NQIN7Skv.jpg', ov:'Flashback về đêm cuối trong trung tâm thương mại bỏ hoang — Riley và Ellie chia sẻ những giờ phút bình yên ngắn ngủi trước khi mọi thứ thay đổi.' },
    { n:8, name:'When We Are in Need',               date:'2023-03-03', rt:49, still:'/pHMEVNyX0TwHFsRl9JFjxUJMcXd.jpg', ov:'Ellie một mình bảo vệ Joel đang bị thương trong khi đối mặt với kẻ thù tàn bạo nhất từ trước đến nay. Sự dũng cảm và bạo lực đan xen.' },
    { n:9, name:'Look for the Light',                date:'2023-03-12', rt:43, still:'/vJuHm8iukB4MKIO42vx7FBL0Km4.jpg', ov:'Hành trình đến Fireflies đặt Joel trước lựa chọn không thể có đáp án đúng. Cái kết của mùa 1 sẽ ám ảnh người xem mãi mãi.' },
  ]},
  2: { episodes: [
    { n:1, name:'Future Days',                 date:'2025-04-13', rt:57, still:'/dxMDLuEWuVyxnE5gJC4lp6aDqIJ.jpg', ov:'5 năm sau, Ellie và Joel đang cố xây dựng cuộc sống tại Jackson. Nhưng vết thương cũ và mối nguy hiểm mới đang âm thầm hội tụ.' },
    { n:2, name:'Through the Valley',          date:'2025-04-20', rt:62, still:'/wA9xsHKGWRXtbzFwQPvjuyvWpCN.jpg', ov:'Một sự kiện chấn động kéo Ellie ra khỏi Jackson và đẩy cô vào cuộc truy tìm đầy thù hận không có điểm quay lại.' },
    { n:3, name:'The Path',                    date:'2025-04-27', rt:47, still:'/7K1JXs0LMmJBMBNjzXEA3AMEaOh.jpg', ov:'Ellie tiếp tục hành trình đến Seattle — thành phố bị chia cắt giữa WLF và Seraphites. Kẻ thù và đồng minh cũ đan xen khó lường.' },
    { n:4, name:'Day One',                     date:'2025-05-04', rt:51, still:'/sG2HMjJHJ0o1eNhNQgNfBsO5LoH.jpg', ov:'Ellie và Dina khám phá Seattle ngày đầu tiên. Thành phố bị chia cắt bởi hai thế lực đều cực kỳ nguy hiểm theo những cách khác nhau.' },
    { n:5, name:'Measure Twice, Cut Once',     date:'2025-05-11', rt:48, still:'/fJsW0I0kaCxjzrJWJPYarXkJFVk.jpg', ov:'Đêm im lặng nhất trong hành trình, nhưng cũng ẩn chứa nhiều bí ẩn nhất. Ellie và Dina đối mặt với nỗi sợ từ trong ra ngoài.' },
    { n:6, name:'The Price',                   date:'2025-05-18', rt:49, still:'/nG58C4eNMGLhHNQXZFyxVFQ5n5S.jpg', ov:'Ellie tìm thấy manh mối quan trọng nhưng giá phải trả có thể là thứ cô không bao giờ muốn đánh đổi.' },
    { n:7, name:'The Last of Us',              date:'2025-05-25', rt:53, still:'/oGythgqe70e9ufkjPaqN1FMlqh0.jpg', ov:'Tập kết mùa 2. Ellie đối mặt với lựa chọn cuối cùng khi mọi con đường đều hội tụ về một điểm không thể tránh khỏi.' },
  ]},
};

const MOCK_CATALOG = {
  1396: {
    id: 1396, name: 'Breaking Bad', original_name: 'Breaking Bad',
    tagline: 'All Hail the King.',
    color_palette: ['rgba(180,120,0,.55)', 'rgba(40,80,20,.35)', 'rgba(80,50,10,.25)', '#0F0C01 0%, #060A02 60%, #080807 100%'],
    overview: 'Walter White — giáo viên hóa học mắc ung thư phổi giai đoạn cuối — bắt tay với học trò cũ Jesse Pinkman sản xuất methamphetamine để lo tài chính cho gia đình. Từ người đàn ông bình thường, ông biến thành kẻ tội phạm nguy hiểm nhất Albuquerque.',
    poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    backdrop_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
    first_air_date: '2008-01-20', last_air_date: '2013-09-29',
    number_of_seasons: 5, number_of_episodes: 62, status: 'Ended',
    vote_average: 9.5, vote_count: 14200, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 80, name: 'Tội phạm' }, { id: 18, name: 'Kịch tính' }],
    networks: [{ id: 174, name: 'AMC' }],
    ext_scores: { imdb: '9.5/10', rt: '96%', meta: '99', tmdb: '95%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 7,  air_date: '2008-01-20' },
      { season_number: 2, name: 'Season 2', episode_count: 13, air_date: '2009-03-08' },
      { season_number: 3, name: 'Season 3', episode_count: 13, air_date: '2010-03-21' },
      { season_number: 4, name: 'Season 4', episode_count: 13, air_date: '2011-07-17' },
      { season_number: 5, name: 'Season 5', episode_count: 16, air_date: '2012-07-15' },
    ],
    cast: [
      { id: 17419, name: 'Bryan Cranston',   char: 'Walter White',   img: '/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg' },
      { id: 84497, name: 'Aaron Paul',        char: 'Jesse Pinkman',  img: '/5g5UAM4MRSvhMOI6qTwbevuJkGM.jpg' },
      { id: 14329, name: 'Anna Gunn',         char: 'Skyler White',   img: '/adppyeu1a5o5joQMBvqHMAlM2yC.jpg' },
      { id: 36252, name: 'Dean Norris',       char: 'Hank Schrader',  img: '/500eNhWneDTXQuEXg6BR269IjHr.jpg' },
      { id: 52932, name: 'Bob Odenkirk',      char: 'Saul Goodman',   img: '/kBR7tRdoO1OLFpQ4ZbE5iY2PiLd.jpg' },
    ],
    similar: [
      { id: 1408,   name: 'The Wire',         poster: '/4lbclFySvugI51fwsyxBTOm4DqK.jpg', year: '2002' },
      { id: 1984,   name: 'Better Call Saul', poster: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg', year: '2015' },
      { id: 100088, name: 'The Last of Us',   poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
      { id: 63174,  name: 'Succession',       poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
      { id: 87108,  name: 'Chernobyl',        poster: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg', year: '2019' },
      { id: 95403,  name: 'The Bear',         poster: '/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg', year: '2022' },
    ],
  },
  94997: {
    id: 94997, name: 'House of the Dragon', original_name: 'House of the Dragon',
    tagline: 'Fire will reign.',
    color_palette: ['rgba(180,40,0,.6)', 'rgba(80,20,0,.3)', 'rgba(120,60,0,.25)', '#1A0200 0%, #0C0100 60%, #0A0300 100%'],
    overview: 'Câu chuyện về dòng họ Targaryen — 200 năm trước sự kiện Game of Thrones. Cuộc nội chiến khốc liệt giữa các phe phái tranh giành Ngai vàng sắt, với những con rồng hùng mạnh và tham vọng quyền lực không hồi kết.',
    poster_path: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
    backdrop_path: '/suopoADq0k8YZr4yLaOiblpS4h.jpg',
    first_air_date: '2022-08-21', last_air_date: '2024-08-04',
    number_of_seasons: 2, number_of_episodes: 18, status: 'Returning Series',
    vote_average: 8.4, vote_count: 5200, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 18, name: 'Kịch tính' }, { id: 10765, name: 'Khoa học viễn tưởng & Kỳ ảo' }],
    networks: [{ id: 49, name: 'HBO' }],
    ext_scores: { imdb: '8.4/10', rt: '93%', meta: '74', tmdb: '84%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 10, air_date: '2022-08-21' },
      { season_number: 2, name: 'Season 2', episode_count: 8,  air_date: '2024-06-16' },
    ],
    cast: [
      { id: 2467480, name: 'Matt Smith',       char: 'Daemon Targaryen',  img: '/d9BSAiPXm5EQlpRCFkQ3UJAaOMm.jpg' },
      { id: 1713783, name: 'Paddy Considine',  char: 'King Viserys I',    img: '/fj0OoHzjmXH5cMHGeSRfHPPIfNS.jpg' },
      { id: 569457,  name: 'Olivia Cooke',     char: 'Alicent Hightower', img: '/z8C9JN7aBPLFjDMj04zGCUXJKxk.jpg' },
      { id: 2437267, name: "Emma D'Arcy",      char: 'Rhaenyra Targaryen',img: '/m4Hx5T6eMtRdaQ1wWBCN5Dq1wjS.jpg' },
    ],
    similar: [
      { id: 1399,   name: 'Game of Thrones', poster: '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg', year: '2011' },
      { id: 100088, name: 'The Last of Us',  poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
      { id: 63174,  name: 'Succession',      poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
    ],
  },
  66732: {
    id: 66732, name: 'Stranger Things', original_name: 'Stranger Things',
    tagline: 'Every ending has a beginning.',
    color_palette: ['rgba(20,40,160,.55)', 'rgba(140,0,180,.3)', 'rgba(0,20,80,.25)', '#020410 0%, #01020C 60%, #040208 100%'],
    overview: 'Khi cậu bé Will Byers mất tích bí ẩn tại Hawkins, Indiana, nhóm bạn Mike, Dustin, Lucas khám phá ra bí mật đen tối của chính phủ và sinh vật từ chiều không gian khác — Upside Down.',
    poster_path: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    backdrop_path: '/rcA35Vs6Cs1bl5K3VFbS0J7p7Hx.jpg',
    first_air_date: '2016-07-15', last_air_date: null,
    number_of_seasons: 5, number_of_episodes: 42, status: 'Returning Series',
    vote_average: 8.7, vote_count: 18900, content_ratings_display: 'TV-14 · C16',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 27, name: 'Kinh dị' }, { id: 878, name: 'Khoa học viễn tưởng' }],
    networks: [{ id: 213, name: 'Netflix' }],
    ext_scores: { imdb: '8.7/10', rt: '93%', meta: '76', tmdb: '87%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 8, air_date: '2016-07-15' },
      { season_number: 2, name: 'Season 2', episode_count: 9, air_date: '2017-10-27' },
      { season_number: 3, name: 'Season 3', episode_count: 8, air_date: '2019-07-04' },
      { season_number: 4, name: 'Season 4', episode_count: 9, air_date: '2022-05-27' },
      { season_number: 5, name: 'Season 5', episode_count: 8, air_date: null },
    ],
    cast: [
      { id: 880219,  name: 'Millie Bobby Brown', char: 'Eleven',       img: '/gFxgTGlKSXC9f4XC8IDkiAv5Gfe.jpg' },
      { id: 450220,  name: 'Finn Wolfhard',       char: 'Mike Wheeler', img: '/5KX7dU8VqhNSXLCJDIIGfNV6iuK.jpg' },
      { id: 596611,  name: 'Winona Ryder',        char: 'Joyce Byers',  img: '/kNo6HGaqGbNKwGOMPY4MzM0oQAI.jpg' },
      { id: 2099530, name: 'David Harbour',       char: 'Jim Hopper',   img: '/b4gYVcl8pParX9XcIIhMBwqSMsZ.jpg' },
    ],
    similar: [
      { id: 100088, name: 'The Last of Us', poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
      { id: 99966,  name: 'Severance',      poster: '/hLxMFT4hBXMzUm0b7pBVOnBkMde.jpg', year: '2022' },
      { id: 87108,  name: 'Chernobyl',      poster: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg', year: '2019' },
    ],
  },
  93405: {
    id: 93405, name: 'Squid Game', original_name: '오징어 게임',
    tagline: 'Push your luck.',
    overview: '456 người mắc nợ tuyệt vọng được mời tham gia một loạt trò chơi trẻ em để giành 45.6 tỷ won. Cái giá của việc thua cuộc là cái chết.',
    poster_path: '/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    backdrop_path: '/oaGvjB0DvdhXhps5gnRskiuwzMb.jpg',
    first_air_date: '2021-09-17', last_air_date: '2024-12-26',
    number_of_seasons: 2, number_of_episodes: 16, status: 'Returning Series',
    vote_average: 8.0, vote_count: 13400, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 18, name: 'Kịch tính' }, { id: 27, name: 'Kinh dị' }],
    networks: [{ id: 213, name: 'Netflix' }],
    ext_scores: { imdb: '8.0/10', rt: '94%', meta: '69', tmdb: '80%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 9, air_date: '2021-09-17' },
      { season_number: 2, name: 'Season 2', episode_count: 7, air_date: '2024-12-26' },
    ],
    cast: [
      { id: 2977066, name: 'Lee Jung-jae', char: 'Seong Gi-hun', img: '/3kY9HHlLYEjFaxSwVJHfvtVhRCv.jpg' },
      { id: 1663,    name: 'Park Hae-soo', char: 'Cho Sang-woo', img: '/jkqzBWlQ0bLiKlxJMSxEoxdQwmr.jpg' },
    ],
    similar: [
      { id: 1396,   name: 'Breaking Bad', poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: '2008' },
      { id: 71446,  name: 'Money Heist',  poster: '/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', year: '2017' },
      { id: 100088, name: 'The Last of Us', poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
    ],
  },
  63174: {
    id: 63174, name: 'Succession', original_name: 'Succession',
    tagline: 'More. More. More.',
    color_palette: ['rgba(80,60,20,.5)', 'rgba(20,30,60,.35)', 'rgba(40,20,0,.25)', '#0A0800 0%, #060508 60%, #08070A 100%'],
    overview: 'Gia đình Roy — chủ sở hữu tập đoàn truyền thông toàn cầu Waystar RoyCo — đấu đá nội bộ không ngừng khi cha Logan Roy đứng trước quyết định chuyển giao quyền lực.',
    poster_path: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg',
    backdrop_path: '/bkI2GJmA3jCWCzxhpXH4LBcCpMn.jpg',
    first_air_date: '2018-06-03', last_air_date: '2023-05-28',
    number_of_seasons: 4, number_of_episodes: 39, status: 'Ended',
    vote_average: 8.9, vote_count: 6700, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 35, name: 'Hài kịch' }],
    networks: [{ id: 49, name: 'HBO' }],
    ext_scores: { imdb: '8.9/10', rt: '99%', meta: '92', tmdb: '89%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 10, air_date: '2018-06-03' },
      { season_number: 2, name: 'Season 2', episode_count: 10, air_date: '2019-08-11' },
      { season_number: 3, name: 'Season 3', episode_count: 9,  air_date: '2021-10-17' },
      { season_number: 4, name: 'Season 4', episode_count: 10, air_date: '2023-03-26' },
    ],
    cast: [
      { id: 1032,  name: 'Brian Cox',          char: 'Logan Roy',      img: '/kD0aWqDRGSdqnFwNHXvpvwbJnAr.jpg' },
      { id: 3234,  name: 'Jeremy Strong',       char: 'Kendall Roy',    img: '/vWwFCo9fJeQCmFDMGFPxbL5GPZD.jpg' },
      { id: 52932, name: 'Matthew Macfadyen',   char: 'Tom Wambsgans',  img: '/rX35SrAE4BJ9wr3oHMD9W80NNUL.jpg' },
    ],
    similar: [
      { id: 1396,   name: 'Breaking Bad',   poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: '2008' },
      { id: 87108,  name: 'Chernobyl',      poster: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg', year: '2019' },
      { id: 100088, name: 'The Last of Us', poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
    ],
  },
  87108: {
    id: 87108, name: 'Chernobyl', original_name: 'Chernobyl',
    tagline: 'What is the cost of lies?',
    overview: 'Tái hiện thảm họa hạt nhân tồi tệ nhất lịch sử năm 1986 tại nhà máy điện Chernobyl, Ukraine. Series theo dõi những nỗ lực anh hùng của những người lính cứu hỏa, kỹ sư và nhà khoa học dũng cảm đối mặt với thực tế kinh hoàng.',
    poster_path: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg',
    backdrop_path: '/4glc2T0VkMzKLDmvUFTFSRTiDOp.jpg',
    first_air_date: '2019-05-06', last_air_date: '2019-06-03',
    number_of_seasons: 1, number_of_episodes: 5, status: 'Ended',
    vote_average: 9.4, vote_count: 11800, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 36, name: 'Lịch sử' }, { id: 53, name: 'Hồi hộp' }],
    networks: [{ id: 49, name: 'HBO' }],
    ext_scores: { imdb: '9.4/10', rt: '96%', meta: '83', tmdb: '94%' },
    seasons: [
      { season_number: 1, name: 'Miniseries', episode_count: 5, air_date: '2019-05-06' },
    ],
    cast: [
      { id: 60073, name: 'Jared Harris',      char: 'Valery Legasov',  img: '/6SqNNMPMMCBhyVBHrP8YD8YIfMG.jpg' },
      { id: 10204, name: 'Stellan Skarsgård', char: 'Boris Shcherbina', img: '/aEq7R8qIMQCxsNSY2R5qVHJCPaM.jpg' },
      { id: 73457, name: 'Emily Watson',      char: 'Ulana Khomyuk',   img: '/fQzSFPYTpqtplD0ZVHjRk6T7JMu.jpg' },
    ],
    similar: [
      { id: 63174,  name: 'Succession',    poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
      { id: 100088, name: 'The Last of Us',poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
      { id: 1396,   name: 'Breaking Bad',  poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: '2008' },
    ],
  },
  99966: {
    id: 99966, name: 'Severance', original_name: 'Severance',
    tagline: 'Leave work at work.',
    color_palette: ['rgba(20,60,160,.55)', 'rgba(0,30,90,.35)', 'rgba(10,20,60,.25)', '#010208 0%, #010306 60%, #020408 100%'],
    overview: 'Mark Scout và đồng nghiệp tại Lumon Industries trải qua phẫu thuật "tách biệt" — ký ức về công việc và cuộc sống cá nhân được phân ly hoàn toàn. Khi Mark bắt đầu tìm hiểu lý do tại sao mình chọn thủ thuật này, cả "phiên bản văn phòng" bên trong cũng bắt đầu đặt câu hỏi về thực tại của mình.',
    poster_path: '/iT8SBsxhglrWtMatMenmbUbyd2i.jpg',
    backdrop_path: '/pAbfhvKLlMZJN4eEsGqObL4SfTT.jpg',
    first_air_date: '2022-02-18', last_air_date: null,
    number_of_seasons: 2, number_of_episodes: 19, status: 'Returning Series',
    vote_average: 8.8, vote_count: 7400, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 878, name: 'Khoa học viễn tưởng' }, { id: 53, name: 'Hồi hộp' }],
    networks: [{ id: 2552, name: 'Apple TV+' }],
    ext_scores: { imdb: '8.7/10', rt: '97%', meta: '86', tmdb: '88%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 9,  air_date: '2022-02-18' },
      { season_number: 2, name: 'Season 2', episode_count: 10, air_date: '2025-01-17' },
    ],
    cast: [
      { id: 34278, name: 'Adam Scott',          char: 'Mark Scout',              img: '/kFuAIQOcVGe9MJVbbBqfpaqjBBd.jpg' },
      { id: 19278, name: 'Zach Cherry',          char: 'Dylan George',            img: null },
      { id: 56089, name: 'Britt Lower',          char: 'Helly Riggs / Helena',   img: null },
      { id: 84491, name: 'Tramell Tillman',      char: 'Seth Milchick',           img: null },
      { id: 8869,  name: 'John Turturro',        char: 'Irving Bailiff',          img: '/eE3hc3khUMuLHxO72xQ9MNMVN7s.jpg' },
      { id: 4756,  name: 'Christopher Walken',   char: 'Burt Goodman',            img: '/z3dvgsCxNDVLOmVT7MoO7PN9Ld5.jpg' },
      { id: 56785, name: 'Patricia Arquette',    char: 'Harmony Cobel',           img: '/7c4MkDhcN2pqLm0p0VK3OWxpgSH.jpg' },
    ],
    similar: [
      { id: 100088, name: 'The Last of Us', poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
      { id: 1396,   name: 'Breaking Bad',   poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: '2008' },
      { id: 63174,  name: 'Succession',     poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
      { id: 87108,  name: 'Chernobyl',      poster: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg', year: '2019' },
    ],
  },
  95403: {
    id: 95403, name: 'The Bear', original_name: 'The Bear',
    tagline: 'Every second counts.',
    color_palette: ['rgba(180,80,20,.5)', 'rgba(80,30,10,.35)', 'rgba(40,15,5,.25)', '#120600 0%, #0C0300 60%, #0A0400 100%'],
    overview: 'Carmen "Carmy" Berzatto — đầu bếp từng làm việc ở những nhà hàng sang trọng nhất thế giới — trở về Chicago tiếp quản tiệm bánh mì gia đình sau cái chết của anh trai. Giữa sức ép nợ nần, đội ngũ hỗn loạn và ký ức đau buồn, Carmy phải tìm cách biến một cửa hàng lụn bại thành điều gì đó có ý nghĩa.',
    poster_path: '/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg',
    backdrop_path: '/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
    first_air_date: '2022-06-23', last_air_date: null,
    number_of_seasons: 3, number_of_episodes: 28, status: 'Returning Series',
    vote_average: 8.6, vote_count: 5200, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 35, name: 'Hài kịch' }],
    networks: [{ id: 56, name: 'FX' }],
    ext_scores: { imdb: '8.6/10', rt: '99%', meta: '90', tmdb: '86%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 8,  air_date: '2022-06-23' },
      { season_number: 2, name: 'Season 2', episode_count: 10, air_date: '2023-06-22' },
      { season_number: 3, name: 'Season 3', episode_count: 10, air_date: '2024-06-27' },
    ],
    cast: [
      { id: 1429339, name: 'Jeremy Allen White', char: 'Carmen "Carmy" Berzatto', img: '/6MKHdIOiEfkMXpBOlPACikDaVxv.jpg' },
      { id: 1487907, name: 'Ayo Edebiri',         char: 'Sydney Adamu',            img: '/sHXRkknbsZdvNbKI5kvovmFEROA.jpg' },
      { id: 1225346, name: 'Ebon Moss-Bachrach',  char: 'Richard "Richie" Jerimovich', img: null },
      { id: 1726736, name: 'Lionel Boyce',         char: 'Marcus Brooks',          img: null },
      { id: 1890991, name: 'Liza Colón-Zayas',     char: 'Tina',                   img: null },
    ],
    similar: [
      { id: 1396,  name: 'Breaking Bad',   poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: '2008' },
      { id: 63174, name: 'Succession',     poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
      { id: 99966, name: 'Severance',      poster: '/iT8SBsxhglrWtMatMenmbUbyd2i.jpg', year: '2022' },
    ],
  },
  83867: {
    id: 83867, name: 'Andor', original_name: 'Andor',
    tagline: 'Fight for freedom. Find your spark.',
    color_palette: ['rgba(20,50,80,.55)', 'rgba(60,30,80,.3)', 'rgba(10,25,50,.25)', '#020408 0%, #030206 60%, #020306 100%'],
    overview: 'Câu chuyện nguồn gốc của Cassian Andor — gián điệp Liên minh sẽ hy sinh mạng sống trong Rogue One. Series theo dõi cuộc hành trình từ một kẻ sinh tồn tội lỗi trở thành chiến sĩ cách mạng trong thế giới bị Đế chế kiểm soát toàn diện.',
    poster_path: '/khZqmwHQicTYoS7Flreb9EddFZC.jpg',
    backdrop_path: '/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg',
    first_air_date: '2022-09-21', last_air_date: null,
    number_of_seasons: 2, number_of_episodes: 24, status: 'Returning Series',
    vote_average: 9.3, vote_count: 4800, content_ratings_display: 'TV-14 · T16',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 10765, name: 'Khoa học viễn tưởng' }, { id: 18, name: 'Kịch tính' }],
    networks: [{ id: 2739, name: 'Disney+' }],
    ext_scores: { imdb: '8.4/10', rt: '96%', meta: '88', tmdb: '93%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 12, air_date: '2022-09-21' },
      { season_number: 2, name: 'Season 2', episode_count: 12, air_date: '2025-04-22' },
    ],
    cast: [
      { id: 54750,   name: 'Diego Luna',        char: 'Cassian Andor',   img: '/5l3h3WCQmECRcFjUVFfTKIaqPMn.jpg' },
      { id: 10204,   name: 'Stellan Skarsgård', char: 'Luthen Rael',     img: '/aEq7R8qIMQCxsNSY2R5qVHJCPaM.jpg' },
      { id: 1487293, name: 'Adria Arjona',       char: 'Bix Caleen',      img: '/ij2kLMYcXFPLtUNTF9bPcMQf2CJ.jpg' },
      { id: 1100522, name: 'Kyle Soller',        char: 'Syril Karn',      img: null },
      { id: 56089,   name: 'Fiona Shaw',         char: 'Maarva Andor',    img: null },
      { id: 33798,   name: 'Genevieve O\'Reilly', char: 'Mon Mothma',    img: null },
    ],
    similar: [
      { id: 100088, name: 'The Last of Us',   poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: '2023' },
      { id: 63174,  name: 'Succession',       poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
      { id: 99966,  name: 'Severance',        poster: '/iT8SBsxhglrWtMatMenmbUbyd2i.jpg', year: '2022' },
    ],
  },
  127532: {
    id: 127532, name: 'The White Lotus', original_name: 'The White Lotus',
    tagline: 'Paradise isn\'t cheap.',
    color_palette: ['rgba(160,110,20,.5)', 'rgba(20,80,100,.35)', 'rgba(80,50,10,.25)', '#0A0700 0%, #060A06 60%, #080806 100%'],
    overview: 'Mỗi mùa theo dõi một kỳ nghỉ dưỡng tại resort White Lotus danh giá — nơi những du khách giàu có và nhân viên khách sạn đan xen trong những cuộc xung đột giai cấp, tình dục và quyền lực đầy châm biếm sắc sảo.',
    poster_path: '/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg',
    backdrop_path: '/1E8OzV2CPCmzWiOqYFiAhMIriOl.jpg',
    first_air_date: '2021-07-11', last_air_date: null,
    number_of_seasons: 3, number_of_episodes: 21, status: 'Returning Series',
    vote_average: 8.7, vote_count: 5100, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 35, name: 'Hài kịch' }, { id: 53, name: 'Hồi hộp' }],
    networks: [{ id: 49, name: 'HBO' }],
    ext_scores: { imdb: '7.9/10', rt: '93%', meta: '82', tmdb: '87%' },
    seasons: [
      { season_number: 1, name: 'Hawaii (S1)',  episode_count: 6, air_date: '2021-07-11' },
      { season_number: 2, name: 'Sicily (S2)',  episode_count: 7, air_date: '2022-10-30' },
      { season_number: 3, name: 'Thailand (S3)', episode_count: 8, air_date: '2025-02-16' },
    ],
    cast: [
      { id: 40193,   name: 'Jennifer Coolidge', char: 'Tanya McQuoid (S1+S2)', img: '/xoMhSzGp0sGPLSTsU5V5JBymjBE.jpg' },
      { id: 10990,   name: 'Murray Bartlett',   char: 'Armond (S1)',           img: null },
      { id: 22598,   name: 'Connie Britton',    char: 'Nicole Mossbacher (S1)', img: null },
      { id: 10659,   name: 'Walton Goggins',    char: 'Rick (S3)',             img: '/bm4j0n1HFbVqUquIGabAG3wjd2s.jpg' },
    ],
    similar: [
      { id: 63174,  name: 'Succession',    poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', year: '2018' },
      { id: 87108,  name: 'Chernobyl',    poster: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg', year: '2019' },
      { id: 99966,  name: 'Severance',    poster: '/iT8SBsxhglrWtMatMenmbUbyd2i.jpg', year: '2022' },
    ],
  },
  239770: {
    id: 239770, name: 'Queen of Tears', original_name: '눈물의 여왕',
    tagline: 'Khi nước mắt chảy, tình yêu trở lại.',
    color_palette: ['rgba(160,30,60,.5)', 'rgba(20,30,80,.35)', 'rgba(80,20,30,.25)', '#0A0206 0%, #060208 60%, #080405 100%'],
    overview: 'Hong Hyun-woo — chàng trai quê mùa lấy con gái tập đoàn siêu giàu. Sau 3 năm hôn nhân nguội lạnh, vợ anh Hong Hae-in bỗng dưng mắc bệnh hiểm nghèo. Giữa lúc cả hai chuẩn bị ly hôn, họ phát hiện lại tình yêu từng là lý do để sống.',
    poster_path: '/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg',
    backdrop_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
    first_air_date: '2024-03-09', last_air_date: '2024-04-28',
    number_of_seasons: 1, number_of_episodes: 16, status: 'Ended',
    vote_average: 8.7, vote_count: 3900, content_ratings_display: 'TV-14 · C16',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 10749, name: 'Tình cảm' }],
    networks: [{ id: 2419, name: 'tvN' }],
    ext_scores: { imdb: '8.5/10', rt: 'N/A', meta: 'N/A', tmdb: '87%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 16, air_date: '2024-03-09' },
    ],
    cast: [
      { id: 596731, name: 'Kim Soo-hyun',   char: 'Hong Hyun-woo',  img: '/tFqY0FUBr59L6grFcqXVFvJcPFm.jpg' },
      { id: 1418666,name: 'Kim Ji-won',      char: 'Hong Hae-in',    img: '/7fy1OX52kv9wJWwwvyxfVyqEaZ3.jpg' },
      { id: 2124260, name: 'Park Sung-hoon', char: 'Yoon Eun-sung',  img: null },
      { id: 3090254, name: 'Kwak Dong-yeon', char: 'Cheon Da-hye',   img: null },
    ],
    similar: [
      { id: 237858, name: 'Lovely Runner',            poster: '/pte32efUDF2x0xogIYeVm333mG0.jpg', year: '2024' },
      { id: 255858, name: 'When the Phone Rings',     poster: '/8ETKxEaPlwzqOof4OsYUBFvaoHv.jpg', year: '2024' },
      { id: 93405,  name: 'Squid Game',               poster: '/uK5GDq2xuRH4TqhOZkKuyRnM85.jpg',  year: '2021' },
    ],
  },
  213974: {
    id: 213974, name: 'Moving', original_name: '무빙',
    tagline: 'Sức mạnh thừa kế, bí mật không thể lãng quên.',
    color_palette: ['rgba(20,60,140,.55)', 'rgba(60,20,80,.3)', 'rgba(10,30,60,.25)', '#010309 0%, #030108 60%, #020308 100%'],
    overview: 'Ba gia đình có con cái mang năng lực đặc biệt bị che giấu suốt nhiều thập kỷ. Cha mẹ họ — những siêu nhân thế hệ trước từng phục vụ cho tình báo quốc gia — phải đối mặt với bí mật đã chôn vùi khi mối nguy hiểm mới trỗi dậy đe dọa thế hệ tiếp theo.',
    poster_path: '/iri7K5jjRtCrNwqZpqFlnEPSKsW.jpg',
    backdrop_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
    first_air_date: '2023-08-09', last_air_date: '2023-09-20',
    number_of_seasons: 1, number_of_episodes: 20, status: 'Ended',
    vote_average: 8.7, vote_count: 2800, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 18, name: 'Kịch tính' }, { id: 10765, name: 'Khoa học viễn tưởng' }],
    networks: [{ id: 2739, name: 'Disney+' }],
    ext_scores: { imdb: '8.8/10', rt: 'N/A', meta: 'N/A', tmdb: '87%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 20, air_date: '2023-08-09' },
    ],
    cast: [
      { id: 44171,  name: 'Ryu Seung-ryong', char: 'Bong Seok cha (Jang Ju-won)', img: '/p8ckZOBHKoX0mHTFAFHGd5UJCzs.jpg' },
      { id: 72523,  name: 'Han Hyo-joo',     char: 'Lee Mi-hyun',                 img: '/cIHCLJMFN6GXFPXJSXlKbRhJnYb.jpg' },
      { id: 29268,  name: 'Jo In-sung',       char: 'Kim Doo-sik',                 img: null },
      { id: 1289774,name: 'Go Youn-jung',     char: 'Kim Bong-seok',               img: null },
      { id: 3090255,name: 'Lee Jung-ha',      char: 'Jang Hui-soo',                img: null },
    ],
    similar: [
      { id: 93405,  name: 'Squid Game',   poster: '/uK5GDq2xuRH4TqhOZkKuyRnM85.jpg', year: '2021' },
      { id: 239770, name: 'Queen of Tears', poster: '/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg', year: '2024' },
      { id: 106222, name: 'Vincenzo',      poster: '/enLyvrk3d347sdIHQjglFTwzKQj.jpg', year: '2021' },
    ],
  },
  237858: {
    id: 237858, name: 'Lovely Runner', original_name: '선재 업고 튀어',
    tagline: 'Chạy ngược thời gian để cứu anh.',
    color_palette: ['rgba(180,30,80,.5)', 'rgba(20,20,80,.35)', 'rgba(80,20,40,.25)', '#0A0106 0%, #060108 60%, #080305 100%'],
    overview: 'Im Sol — fan cuồng nhiệt của ca sĩ Ryu Sun-jae — đột ngột du hành thời gian về năm 2008, khi thần tượng còn là học sinh trung học. Để ngăn cái chết bi thảm của anh, cô tìm mọi cách bảo vệ Sun-jae — và không ngờ rơi vào một mối tình trải dài qua thời gian.',
    poster_path: '/pte32efUDF2x0xogIYeVm333mG0.jpg',
    backdrop_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
    first_air_date: '2024-04-08', last_air_date: '2024-05-27',
    number_of_seasons: 1, number_of_episodes: 16, status: 'Ended',
    vote_average: 8.6, vote_count: 2400, content_ratings_display: 'TV-14 · C16',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 10749, name: 'Tình cảm' }, { id: 878, name: 'Khoa học viễn tưởng' }],
    networks: [{ id: 2419, name: 'tvN' }],
    ext_scores: { imdb: '8.7/10', rt: 'N/A', meta: 'N/A', tmdb: '86%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 16, air_date: '2024-04-08' },
    ],
    cast: [
      { id: 3090256, name: 'Byeon Woo-seok', char: 'Ryu Sun-jae', img: '/p3hSsS0yiJPqGERRV4P4Vx5reSx.jpg' },
      { id: 1487010, name: 'Kim Hye-yoon',   char: 'Im Sol',       img: '/dzWQ0NeJ6HBXkFdPMiJf7Q8YWXB.jpg' },
    ],
    similar: [
      { id: 239770, name: 'Queen of Tears',      poster: '/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg', year: '2024' },
      { id: 255858, name: 'When the Phone Rings', poster: '/8ETKxEaPlwzqOof4OsYUBFvaoHv.jpg', year: '2024' },
      { id: 171103, name: 'Extraordinary Atty Woo', poster: '/vGuSNNnuozvVaCJ8BiQDw5y9LUx.jpg', year: '2022' },
    ],
  },
  255858: {
    id: 255858, name: 'When the Phone Rings', original_name: '지금 거신 전화는',
    tagline: 'Một cuộc gọi thay đổi tất cả.',
    color_palette: ['rgba(20,40,100,.55)', 'rgba(100,30,60,.3)', 'rgba(10,20,60,.25)', '#020308 0%, #060108 60%, #040208 100%'],
    overview: 'Baek Sa-eon — phát ngôn viên Tổng thống lạnh lùng, xa cách — và vợ Hong Hee-joo sống trong hôn nhân chỉ có trên giấy tờ. Khi Hee-joo bị bắt cóc và kẻ bắt cóc chỉ giao tiếp qua điện thoại với Sa-eon, những cuộc trò chuyện ẩn danh buộc họ phải đối mặt với cảm xúc thật.',
    poster_path: '/8ETKxEaPlwzqOof4OsYUBFvaoHv.jpg',
    backdrop_path: '/1E8OzV2CPCmzWiOqYFiAhMIriOl.jpg',
    first_air_date: '2024-11-22', last_air_date: '2025-01-11',
    number_of_seasons: 1, number_of_episodes: 16, status: 'Ended',
    vote_average: 8.3, vote_count: 1800, content_ratings_display: 'TV-14 · C16',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 10749, name: 'Tình cảm' }, { id: 53, name: 'Hồi hộp' }],
    networks: [{ id: 67, name: 'MBC' }],
    ext_scores: { imdb: '7.8/10', rt: 'N/A', meta: 'N/A', tmdb: '83%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 16, air_date: '2024-11-22' },
    ],
    cast: [
      { id: 1312705, name: 'Yoo Yeon-seok',  char: 'Baek Sa-eon',   img: '/lMxYkEOZkILv2G4WGdW1tFNJMPD.jpg' },
      { id: 3090257, name: 'Chae Soo-bin',   char: 'Hong Hee-joo',  img: null },
    ],
    similar: [
      { id: 239770, name: 'Queen of Tears',  poster: '/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg', year: '2024' },
      { id: 237858, name: 'Lovely Runner',   poster: '/pte32efUDF2x0xogIYeVm333mG0.jpg', year: '2024' },
      { id: 199816, name: 'The Glory',       poster: '/ldkpYdxPCsiDnl1hwoUQdtjuSHg.jpg', year: '2022' },
    ],
  },
  199816: {
    id: 199816, name: 'The Glory', original_name: '더 글로리',
    tagline: 'Trả nợ bằng sự sụp đổ của ngươi.',
    color_palette: ['rgba(20,20,30,.6)', 'rgba(60,10,30,.4)', 'rgba(10,10,20,.3)', '#030206 0%, #060104 60%, #050206 100%'],
    overview: 'Moon Dong-eun bị bắt nạt tàn nhẫn suốt thời học sinh khiến cô phải bỏ học, tàn tật. 18 năm sau, cô trở thành giáo viên để tiếp cận và trả thù những kẻ đã hủy hoại cuộc đời mình — từng người một, một cách có tính toán lạnh lùng.',
    poster_path: '/ldkpYdxPCsiDnl1hwoUQdtjuSHg.jpg',
    backdrop_path: '/oaGvjB0DvdhXhps5gnRskiuwzMb.jpg',
    first_air_date: '2022-12-30', last_air_date: '2023-03-10',
    number_of_seasons: 1, number_of_episodes: 16, status: 'Ended',
    vote_average: 8.5, vote_count: 5300, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 53, name: 'Hồi hộp' }],
    networks: [{ id: 213, name: 'Netflix' }],
    ext_scores: { imdb: '8.2/10', rt: 'N/A', meta: 'N/A', tmdb: '85%' },
    seasons: [
      { season_number: 1, name: 'Part 1', episode_count: 8, air_date: '2022-12-30' },
      { season_number: 2, name: 'Part 2', episode_count: 8, air_date: '2023-03-10' },
    ],
    cast: [
      { id: 12900,   name: 'Song Hye-kyo',  char: 'Moon Dong-eun',  img: '/k5FU5Ts6OfDPWh4CMVxf7CpWqv5.jpg' },
      { id: 1764268, name: 'Lee Do-hyun',   char: 'Joo Yeo-jeong',  img: '/a2fH1eFQn6JV3Fhm8VfFSFTGl6f.jpg' },
      { id: 1437143, name: 'Lim Ji-yeon',   char: 'Park Yeon-jin',  img: null },
    ],
    similar: [
      { id: 93405,  name: 'Squid Game',    poster: '/uK5GDq2xuRH4TqhOZkKuyRnM85.jpg', year: '2021' },
      { id: 106222, name: 'Vincenzo',      poster: '/enLyvrk3d347sdIHQjglFTwzKQj.jpg', year: '2021' },
      { id: 239770, name: 'Queen of Tears', poster: '/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg', year: '2024' },
    ],
  },
  106222: {
    id: 106222, name: 'Vincenzo', original_name: '빈센조',
    tagline: 'Côn đồ Italia trở về Hàn Quốc — và trả nợ theo cách của mình.',
    color_palette: ['rgba(100,30,10,.5)', 'rgba(10,20,60,.35)', 'rgba(60,20,10,.25)', '#080200 0%, #030308 60%, #060200 100%'],
    overview: 'Vincenzo Cassano — luật sư / consigliere mafia gốc Hàn Quốc lớn lên ở Italia — buộc phải trở về Seoul để tìm kho báu bí mật. Tại đây, anh gặp luật sư Hong Cha-young và cùng nhau đối đầu với tập đoàn Babel tham nhũng theo phong cách... không hề hợp pháp.',
    poster_path: '/enLyvrk3d347sdIHQjglFTwzKQj.jpg',
    backdrop_path: '/suopoADq0k8YZr4yLaOiblpS4h.jpg',
    first_air_date: '2021-02-20', last_air_date: '2021-05-02',
    number_of_seasons: 1, number_of_episodes: 20, status: 'Ended',
    vote_average: 8.8, vote_count: 4200, content_ratings_display: 'TV-16 · C16',
    genres: [{ id: 35, name: 'Hài kịch' }, { id: 18, name: 'Kịch tính' }, { id: 80, name: 'Tội phạm' }],
    networks: [{ id: 2419, name: 'tvN' }],
    ext_scores: { imdb: '8.3/10', rt: 'N/A', meta: 'N/A', tmdb: '88%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 20, air_date: '2021-02-20' },
    ],
    cast: [
      { id: 17028,   name: 'Song Joong-ki',  char: 'Vincenzo Cassano / Park Joo-hyung', img: '/xOOPJYC2XXlBTHVH0P0ATYLD4qy.jpg' },
      { id: 1487908, name: 'Jeon Yeo-been',  char: 'Hong Cha-young',                    img: null },
      { id: 1168614, name: 'Ok Taecyeon',    char: 'Jang Han-seok',                     img: null },
    ],
    similar: [
      { id: 93405,  name: 'Squid Game',    poster: '/uK5GDq2xuRH4TqhOZkKuyRnM85.jpg', year: '2021' },
      { id: 199816, name: 'The Glory',     poster: '/ldkpYdxPCsiDnl1hwoUQdtjuSHg.jpg', year: '2022' },
      { id: 239770, name: 'Queen of Tears', poster: '/6X0RhWBfgWWu3jWdTcY3SMaKQmC.jpg', year: '2024' },
    ],
  },
  171103: {
    id: 171103, name: 'Extraordinary Attorney Woo', original_name: '이상한 변호사 우영우',
    tagline: 'Cô ấy bất thường. Nhưng xuất sắc.',
    color_palette: ['rgba(20,100,140,.5)', 'rgba(10,60,100,.35)', 'rgba(10,40,80,.25)', '#010508 0%, #010608 60%, #020508 100%'],
    overview: 'Woo Young-woo — cô gái tự kỷ với trí nhớ siêu việt và niềm đam mê cá voi lưng gù — bắt đầu sự nghiệp luật sư tại công ty Hanbada. Với cách nhìn nhận thế giới độc đáo, cô giải quyết những vụ án tưởng như đơn giản theo những cách không ai ngờ đến.',
    poster_path: '/vGuSNNnuozvVaCJ8BiQDw5y9LUx.jpg',
    backdrop_path: '/rcA35Vs6Cs1bl5K3VFbS0J7p7Hx.jpg',
    first_air_date: '2022-06-29', last_air_date: '2022-08-18',
    number_of_seasons: 1, number_of_episodes: 16, status: 'Ended',
    vote_average: 8.8, vote_count: 3600, content_ratings_display: 'TV-14 · C16',
    genres: [{ id: 18, name: 'Kịch tính' }, { id: 35, name: 'Hài kịch' }],
    networks: [{ id: 3494, name: 'ENA' }],
    ext_scores: { imdb: '8.8/10', rt: 'N/A', meta: 'N/A', tmdb: '88%' },
    seasons: [
      { season_number: 1, name: 'Season 1', episode_count: 16, air_date: '2022-06-29' },
    ],
    cast: [
      { id: 1168615, name: 'Park Eun-bin',    char: 'Woo Young-woo',  img: '/dzWQ0NeJ6HBXkFdPMiJf7Q8YWXB.jpg' },
      { id: 3090258, name: 'Kang Tae-oh',     char: 'Lee Jun-ho',     img: null },
      { id: 3090259, name: 'Kang Ki-young',   char: 'Jung Myung-seok', img: null },
      { id: 3090260, name: 'Ha Yoon-kyung',   char: 'Choi Su-yeon',   img: null },
    ],
    similar: [
      { id: 106222, name: 'Vincenzo',      poster: '/enLyvrk3d347sdIHQjglFTwzKQj.jpg', year: '2021' },
      { id: 237858, name: 'Lovely Runner', poster: '/pte32efUDF2x0xogIYeVm333mG0.jpg', year: '2024' },
      { id: 199816, name: 'The Glory',     poster: '/ldkpYdxPCsiDnl1hwoUQdtjuSHg.jpg', year: '2022' },
    ],
  },
  1429: {
    id: 1429, name: 'Attack on Titan', original_name: '進撃の巨人',
    tagline: 'Tự do hay là chết.',
    color_palette: ['rgba(60,20,10,.55)', 'rgba(20,20,40,.4)', 'rgba(80,40,0,.3)', '#080200 0%, #050205 60%, #060302 100%'],
    overview: 'Trong thế giới bị người khổng lồ (Titan) thống trị, nhân loại co cụm sau những bức tường khổng lồ suốt 100 năm. Eren Yeager — chứng kiến mẹ bị Titan ăn thịt — quyết tâm tiêu diệt chúng. Nhưng sự thật đằng sau những bức tường và nguồn gốc Titan sẽ thay đổi mọi thứ anh từng tin.',
    poster_path: '/qDK2qEA5pfUK7Rog8urvgKuaXiP.jpg',
    backdrop_path: '/ygGmAO60T8oPVPBiHPKgHPkBhLH.jpg',
    first_air_date: '2013-04-07', last_air_date: '2023-11-05',
    number_of_seasons: 4, number_of_episodes: 94, status: 'Ended',
    vote_average: 9.0, vote_count: 25400, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 16, name: 'Hoạt hình' }, { id: 18, name: 'Kịch tính' }],
    networks: [{ id: 1408, name: 'MBS' }],
    ext_scores: { imdb: '9.0/10', rt: '95%', meta: 'N/A', tmdb: '90%' },
    seasons: [
      { season_number: 1, name: 'Season 1',       episode_count: 25, air_date: '2013-04-07' },
      { season_number: 2, name: 'Season 2',       episode_count: 12, air_date: '2017-04-01' },
      { season_number: 3, name: 'Season 3',       episode_count: 22, air_date: '2018-07-23' },
      { season_number: 4, name: 'Final Season',   episode_count: 29, air_date: '2020-12-07' },
    ],
    cast: [
      { id: 1093786, name: 'Yuki Kaji',           char: 'Eren Yeager (tiếng Nhật)',    img: null },
      { id: 1093787, name: 'Yui Ishikawa',        char: 'Mikasa Ackerman (tiếng Nhật)', img: null },
      { id: 1093788, name: 'Marina Inoue',        char: 'Armin Arlert (tiếng Nhật)',   img: null },
      { id: 1093789, name: 'Bryce Papenbrook',    char: 'Eren Yeager (tiếng Anh)',     img: null },
    ],
    similar: [
      { id: 85937, name: 'Demon Slayer',     poster: '/tvVVdUf7GuUGpCYg10Sj5RIz0cf.jpg', year: '2019' },
      { id: 95479, name: 'Jujutsu Kaisen',   poster: '/9TCtCKTb03Lm4xzNq4bMenbKUfx.jpg', year: '2020' },
      { id: 66732, name: 'Stranger Things',  poster: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', year: '2016' },
    ],
  },
  85937: {
    id: 85937, name: 'Demon Slayer', original_name: '鬼滅の刃',
    tagline: 'Chém quỷ để cứu người thân.',
    color_palette: ['rgba(180,20,20,.55)', 'rgba(20,10,40,.4)', 'rgba(80,10,10,.3)', '#0A0101 0%, #060102 60%, #080102 100%'],
    overview: 'Kamado Tanjiro — con trai trưởng của một gia đình đốt than nghèo — trở về nhà và phát hiện gia đình bị quỷ tàn sát. Em gái duy nhất sống sót Nezuko đã biến thành quỷ. Tanjiro gia nhập Đội Tiêu Diệt Quỷ để tìm thuốc cứa em và trả thù.',
    poster_path: '/tvVVdUf7GuUGpCYg10Sj5RIz0cf.jpg',
    backdrop_path: '/ygGmAO60T8oPVPBiHPKgHPkBhLH.jpg',
    first_air_date: '2019-04-06', last_air_date: null,
    number_of_seasons: 4, number_of_episodes: 64, status: 'Returning Series',
    vote_average: 8.8, vote_count: 13700, content_ratings_display: 'TV-14 · C16',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 16, name: 'Hoạt hình' }, { id: 27, name: 'Kinh dị' }],
    networks: [{ id: 1783, name: 'Fuji TV' }],
    ext_scores: { imdb: '8.7/10', rt: '97%', meta: 'N/A', tmdb: '88%' },
    seasons: [
      { season_number: 1, name: 'Tanjiro Kamado Arc',        episode_count: 26, air_date: '2019-04-06' },
      { season_number: 2, name: 'Entertainment District Arc', episode_count: 11, air_date: '2021-12-05' },
      { season_number: 3, name: 'Swordsmith Village Arc',    episode_count: 11, air_date: '2023-04-09' },
      { season_number: 4, name: 'Hashira Training Arc',      episode_count: 8,  air_date: '2024-05-12' },
    ],
    cast: [
      { id: 1093790, name: 'Natsuki Hanae',    char: 'Tanjiro Kamado (tiếng Nhật)',  img: null },
      { id: 1093791, name: 'Akari Kito',       char: 'Nezuko Kamado (tiếng Nhật)',  img: null },
      { id: 1093792, name: 'Hiro Shimono',     char: 'Zenitsu Agatsuma (tiếng Nhật)', img: null },
    ],
    similar: [
      { id: 1429,  name: 'Attack on Titan', poster: '/qDK2qEA5pfUK7Rog8urvgKuaXiP.jpg', year: '2013' },
      { id: 95479, name: 'Jujutsu Kaisen',  poster: '/9TCtCKTb03Lm4xzNq4bMenbKUfx.jpg', year: '2020' },
    ],
  },
  95479: {
    id: 95479, name: 'Jujutsu Kaisen', original_name: '呪術廻戦',
    tagline: 'Nguyền chú tồn tại vì con người.',
    color_palette: ['rgba(60,20,100,.55)', 'rgba(20,10,60,.4)', 'rgba(10,5,40,.3)', '#04010A 0%, #030108 60%, #050108 100%'],
    overview: 'Itadori Yuji — học sinh trung học bình thường nuốt ngón tay của Ryomen Sukuna, vua phù thủy tội lỗi — buộc phải gia nhập trường thuật sĩ bí ẩn. Giữa thế giới nguyền chú và ác linh, anh và đồng đội đối mặt với những kẻ thù ngày càng mạnh hơn.',
    poster_path: '/9TCtCKTb03Lm4xzNq4bMenbKUfx.jpg',
    backdrop_path: '/rcA35Vs6Cs1bl5K3VFbS0J7p7Hx.jpg',
    first_air_date: '2020-10-03', last_air_date: null,
    number_of_seasons: 2, number_of_episodes: 47, status: 'Returning Series',
    vote_average: 8.7, vote_count: 9400, content_ratings_display: 'TV-MA · C18',
    genres: [{ id: 10759, name: 'Hành động & Phiêu lưu' }, { id: 16, name: 'Hoạt hình' }, { id: 27, name: 'Kinh dị' }],
    networks: [{ id: 57, name: 'MBS' }],
    ext_scores: { imdb: '8.6/10', rt: '100%', meta: 'N/A', tmdb: '87%' },
    seasons: [
      { season_number: 1, name: 'Season 1',           episode_count: 24, air_date: '2020-10-03' },
      { season_number: 2, name: 'Season 2 (Shibuya)', episode_count: 23, air_date: '2023-07-06' },
    ],
    cast: [
      { id: 1093793, name: 'Junya Enoki',    char: 'Itadori Yuji (tiếng Nhật)',  img: null },
      { id: 1093794, name: 'Yuma Uchida',    char: 'Megumi Fushiguro (tiếng Nhật)', img: null },
      { id: 1093795, name: 'Asami Seto',     char: 'Nobara Kugisaki (tiếng Nhật)', img: null },
    ],
    similar: [
      { id: 1429,  name: 'Attack on Titan', poster: '/qDK2qEA5pfUK7Rog8urvgKuaXiP.jpg', year: '2013' },
      { id: 85937, name: 'Demon Slayer',    poster: '/tvVVdUf7GuUGpCYg10Sj5RIz0cf.jpg', year: '2019' },
      { id: 91239, name: 'Vinland Saga',    poster: '/vUHlpA5c1NXkds59reY3HMb4Abs.jpg', year: '2019' },
    ],
  },
};

/* ── OTT PARTNER CONFIG (MoMo-controlled, keyed by TMDB provider_id or native key) ── */
const MOMO_OTT_PARTNERS = {
  8: {
    id: 'netflix', name: 'Netflix', color: '#141414', tc: '#E50914', lbl: 'N',
    packages: [
      { name: 'Tiêu chuẩn',    price: 180000, period: 'tháng', featured: false },
      { name: 'Tiêu chuẩn 4K', price: 260000, period: 'tháng', featured: true, save: 'Phổ biến nhất' },
    ],
  },
  native_fptplay: {
    id: 'fptplay', name: 'FPT Play', color: '#E5001C', tc: '#fff', lbl: 'FPT',
    packages: [
      { name: 'FPT Play Basic', price: 75000,   period: 'tháng', featured: false },
      { name: 'FPT Play PLUS',  price: 149000,  period: 'tháng', featured: true, save: 'HBO + Sport' },
      { name: 'FPT Play PLUS',  price: 1190000, period: 'năm',   featured: false, save: 'Tiết kiệm 34%' },
    ],
  },
  native_vieon: {
    id: 'vieon', name: 'VieON', color: '#0065BD', tc: '#fff', lbl: 'Vie',
    packages: [
      { name: 'VieON+',     price: 59000,  period: 'tháng', featured: false },
      { name: 'VieON+ Năm', price: 499000, period: 'năm',   featured: true, save: 'Tiết kiệm 30%' },
    ],
  },
};

const MOCK_WATCH_PROVIDERS = {
  100088: { results: { VN: { flatrate: [] } } },
};

const MOCK_NATIVE_AVAILABILITY = {
  100088: {
    native_fptplay: { avail: true,  content: 'S1 + S2 đầy đủ · Phụ đề Việt · HBO' },
    native_vieon:   { avail: false, content: '' },
  },
};
