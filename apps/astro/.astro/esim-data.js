(function(){
  const destinations=[
    {
      id:'thailand',slug:'thai-lan',name:'Thái Lan',region:'Châu Á',flag:'🇹🇭',
      network:'AIS / DTAC / TrueMove H',hero:'Bangkok, Chiang Mai, Phuket',accent:'#d12f47',
      heroImg:'https://homepage.momocdn.net/img/thailand-260130095303.png',
      intro:'Kết nối thuận tiện từ Bangkok đến các đảo du lịch mà không cần tìm quầy SIM khi hạ cánh.',
      socialTip:'~1.5GB/ngày',
      merchants:{
        note:'Mock data - cần merchant API từ team Thanh toán Quốc tế trước khi build production',
        categories:['Tất cả','Nhà hàng & Café','Mua sắm','Siêu thị & Tiện lợi','Di chuyển','Làm đẹp'],
        items:[
          {name:'7-ELEVEN SUKHUMVIT',cat:'Siêu thị & Tiện lợi',address:'12, Sukhumvit Soi 11, Khlong Toei, Bangkok',emoji:'🏪',color:'#e8f5e9',rating:null,reviews:null},
          {name:'CENTRAL WORLD',cat:'Mua sắm',address:'4/5 Ratchadamri Rd, Pathum Wan, Bangkok',emoji:'🛍',color:'#f3e5f5',rating:null,reviews:null},
          {name:'STARBUCKS SIAM PARAGON',cat:'Nhà hàng & Café',address:'G Floor, Siam Paragon, Bangkok',emoji:'☕',color:'#e8f5e9',rating:4.9,reviews:28},
          {name:'MK RESTAURANT',cat:'Nhà hàng & Café',address:'3/F CentralWorld, Ratchadamri Rd, Bangkok',emoji:'🍲',color:'#fff3e0',rating:4.8,reviews:45},
          {name:'GRAB THAILAND',cat:'Di chuyển',address:'Đặt xe & Giao đồ ăn toàn Bangkok',emoji:'🚗',color:'#e0f7fa',rating:4.7,reviews:120},
          {name:'BOOTS PHARMACY',cat:'Làm đẹp',address:'BTS Asok, Sukhumvit Rd, Bangkok',emoji:'💊',color:'#e3f2fd',rating:5,reviews:3},
          {name:'FAMILY MART SILOM',cat:'Siêu thị & Tiện lợi',address:'486, Silom Rd, Bang Rak, Bangkok',emoji:'🏪',color:'#fce4ec',rating:null,reviews:null},
          {name:'THE PIZZA COMPANY',cat:'Nhà hàng & Café',address:'79, Ratchadamri Rd, Ratchathewi, Bangkok',emoji:'🍕',color:'#fff3e0',rating:4.5,reviews:8},
          {name:'WATSONS CHATUCHAK',cat:'Làm đẹp',address:'Chatuchak Weekend Market, Bangkok',emoji:'💄',color:'#fce4ec',rating:null,reviews:null},
        ]
      },
      spots:[
        {name:'Grand Palace',type:'Lịch sử',emoji:'🏯'},
        {name:'Wat Arun',type:'Chụp ảnh hoàng hôn',emoji:'🌅'},
        {name:'Maya Bay',type:'Biển đảo',emoji:'🏝'},
        {name:'Chiang Mai Old City',type:'Văn hóa',emoji:'🛕'},
        {name:'Phi Phi Islands',type:'Thiên nhiên',emoji:'🤿'},
        {name:'Chatuchak Market',type:'Ẩm thực & mua sắm',emoji:'🛍'},
      ],
      plans:[
        {id:'th-u3',type:'unlimited',data:'Không giới hạn',days:3,price:110000,originalPrice:171000,discount:36,bestseller:true,tag:'Bán chạy'},
        {id:'th-u7',type:'unlimited',data:'Không giới hạn',days:7,price:204000,originalPrice:null,discount:0,bestseller:false,tag:'Phổ biến'},
        {id:'th-u10',type:'unlimited',data:'Không giới hạn',days:10,price:161000,originalPrice:209000,discount:23,bestseller:false,tag:'Dài ngày'},
        {id:'th-5g5d',type:'limited',data:'5GB',days:5,price:82000,originalPrice:95000,discount:14,bestseller:false,tag:'Tiết kiệm'},
        {id:'th-10g7d',type:'limited',data:'10GB',days:7,price:167000,originalPrice:null,discount:0,bestseller:false,tag:'Nhiều data'},
      ]
    },
    {
      id:'korea',slug:'han-quoc',name:'Hàn Quốc',region:'Châu Á',flag:'🇰🇷',
      network:'SKT / KT / LG U+',hero:'Seoul, Busan, Jeju',accent:'#3157a5',
      intro:'Giữ kết nối tốc độ cao để tra tàu điện, bản đồ, dịch thuật và chia sẻ hành trình tại Hàn Quốc.',
      socialTip:'~1.2GB/ngày',
      spots:[
        {name:'Gyeongbokgung Palace',type:'Hanbok & lịch sử',emoji:'👘'},
        {name:'Bukchon Hanok Village',type:'Kiến trúc truyền thống',emoji:'🏘'},
        {name:'N Seoul Tower',type:'View toàn thành phố',emoji:'🗼'},
        {name:'Jeju Island',type:'Thiên nhiên & biển',emoji:'🌋'},
        {name:'Hongdae',type:'Nghệ thuật đường phố',emoji:'🎨'},
        {name:'Myeongdong',type:'Ẩm thực & mua sắm',emoji:'🛍'},
      ],
      plans:[
        {id:'kr-u5',type:'unlimited',data:'Không giới hạn',days:5,price:149000,originalPrice:189000,discount:21,bestseller:true,tag:'Bán chạy'},
        {id:'kr-u10',type:'unlimited',data:'Không giới hạn',days:10,price:259000,originalPrice:null,discount:0,bestseller:false,tag:'Phổ biến'},
        {id:'kr-3g5d',type:'limited',data:'3GB',days:5,price:89000,originalPrice:null,discount:0,bestseller:false,tag:'Tiết kiệm'},
      ]
    },
    {
      id:'japan',slug:'nhat-ban',name:'Nhật Bản',region:'Châu Á',flag:'🇯🇵',
      network:'KDDI / SoftBank',hero:'Tokyo, Osaka, Kyoto',accent:'#bc3342',
      intro:'Dùng bản đồ, lịch tàu và dịch thuật xuyên suốt chuyến đi Nhật Bản với một gói data được chọn theo số ngày.',
      socialTip:'~1.5GB/ngày',
      spots:[
        {name:'Fushimi Inari',type:'1000 cổng torii đỏ',emoji:'⛩'},
        {name:'Shibuya Crossing',type:'Giao lộ biểu tượng',emoji:'🚦'},
        {name:'Arashiyama Bamboo',type:'Rừng tre',emoji:'🎋'},
        {name:'Mount Fuji',type:'Thiên nhiên',emoji:'🗻'},
        {name:'Dotonbori Osaka',type:'Ẩm thực đường phố',emoji:'🍜'},
        {name:'Osaka Castle',type:'Lịch sử',emoji:'🏯'},
      ],
      plans:[
        {id:'jp-u3',type:'unlimited',data:'Không giới hạn',days:3,price:129000,originalPrice:165000,discount:22,bestseller:true,tag:'Bán chạy'},
        {id:'jp-u7',type:'unlimited',data:'Không giới hạn',days:7,price:229000,originalPrice:null,discount:0,bestseller:false,tag:'Phổ biến'},
        {id:'jp-5g7d',type:'limited',data:'5GB',days:7,price:99000,originalPrice:null,discount:0,bestseller:false,tag:'Tiết kiệm'},
      ]
    },
    {
      id:'singapore',slug:'singapore',name:'Singapore',region:'Châu Á',flag:'🇸🇬',
      network:'Singtel / StarHub',hero:'Marina Bay, Sentosa, Changi',accent:'#d93645',
      intro:'Kích hoạt nhanh cho chuyến đi ngắn ngày, thuận tiện dùng MRT, bản đồ và thanh toán số tại Singapore.',
      socialTip:'~1GB/ngày',
      spots:[
        {name:'Marina Bay Sands',type:'Kiến trúc biểu tượng',emoji:'🏙'},
        {name:'Gardens by the Bay',type:'Thiên nhiên & ánh sáng',emoji:'🌿'},
        {name:'Sentosa Island',type:'Giải trí & biển',emoji:'🎡'},
        {name:'Haji Lane',type:'Phố bích họa',emoji:'🎨'},
        {name:'Merlion Park',type:'Check-in biểu tượng',emoji:'🦁'},
        {name:'Hawker Centre',type:'Ẩm thực đường phố',emoji:'🍛'},
      ],
      plans:[
        {id:'sg-u3',type:'unlimited',data:'Không giới hạn',days:3,price:89000,originalPrice:119000,discount:25,bestseller:true,tag:'Bán chạy'},
        {id:'sg-u7',type:'unlimited',data:'Không giới hạn',days:7,price:159000,originalPrice:null,discount:0,bestseller:false,tag:'Phổ biến'},
        {id:'sg-3g3d',type:'limited',data:'3GB',days:3,price:59000,originalPrice:null,discount:0,bestseller:false,tag:'Tiết kiệm'},
      ]
    },
    {
      id:'china',slug:'trung-quoc',name:'Trung Quốc',region:'Châu Á',flag:'🇨🇳',
      network:'China Unicom',hero:'Thượng Hải, Bắc Kinh, Quảng Châu',accent:'#d32f2f',
      intro:'Chuẩn bị data và giải pháp ứng dụng trước khi bay - một số dịch vụ quen thuộc bị hạn chế tại Trung Quốc.',
      socialTip:'~2GB/ngày (nếu dùng VPN để đăng story)',
      spots:[
        {name:'The Bund - Thượng Hải',type:'Kiến trúc & đêm',emoji:'🌆'},
        {name:'Vạn Lý Trường Thành',type:'Di sản thế giới',emoji:'🏔'},
        {name:'Li River - Quế Lâm',type:'Phong cảnh thiên nhiên',emoji:'⛵'},
        {name:'Yu Garden',type:'Vườn cổ điển',emoji:'🌸'},
        {name:'West Lake - Hàng Châu',type:'Hồ thơ mộng',emoji:'🏞'},
        {name:'Forbidden City',type:'Cung điện hoàng gia',emoji:'🏯'},
      ],
      appRestrictions:{
        blocked:[
          {name:'Google Maps',icon:'🗺',alt:'Dùng Baidu Maps hoặc Apple Maps offline'},
          {name:'YouTube',icon:'▶️',alt:'Tải video trước khi bay'},
          {name:'Instagram',icon:'📸',alt:'Cần VPN để đăng story'},
          {name:'Facebook',icon:'👥',alt:'Cần VPN'},
          {name:'WhatsApp',icon:'💬',alt:'Dùng WeChat hoặc cần VPN'},
          {name:'Twitter / X',icon:'✕',alt:'Cần VPN'},
          {name:'Gmail',icon:'✉️',alt:'Dùng app email khác hoặc cần VPN'},
        ],
        available:[
          {name:'WeChat',icon:'💬',note:'Nhắn tin, thanh toán'},
          {name:'Baidu Maps',icon:'🗺',note:'Bản đồ nội địa'},
          {name:'TikTok / Douyin',icon:'🎵',note:'Phiên bản Douyin nội địa'},
          {name:'Alipay',icon:'💳',note:'Thanh toán phổ biến nhất'},
          {name:'DiDi',icon:'🚗',note:'Gọi xe thay Grab'},
          {name:'Apple Maps',icon:'🍎',note:'Cần tải offline trước'},
        ],
        vpnNote:'Cài VPN (ExpressVPN, NordVPN, Astrill) trên thiết bị trước khi đến Trung Quốc. Sau khi vào lãnh thổ Trung Quốc, tải VPN sẽ không thực hiện được.',
        dataNote:'Dùng VPN tiêu thụ gấp 1.5-2x data thông thường. Nên chọn gói Không giới hạn để không lo hết data.',
      },
      plans:[
        {id:'cn-u5',type:'unlimited',data:'Không giới hạn',days:5,price:179000,originalPrice:null,discount:0,bestseller:true,tag:'Bán chạy'},
        {id:'cn-5g5d',type:'limited',data:'5GB',days:5,price:119000,originalPrice:149000,discount:20,bestseller:false,tag:'Tiết kiệm'},
        {id:'cn-10g10d',type:'limited',data:'10GB',days:10,price:219000,originalPrice:null,discount:0,bestseller:false,tag:'Nhiều data'},
      ]
    },
    {
      id:'sea',slug:'dong-nam-a',name:'Đông Nam Á',region:'Khu vực',flag:'🌏',
      network:'Nhiều nhà mạng',hero:'Phủ sóng 4 quốc gia',accent:'#0d8b77',
      intro:'Một gói cho hành trình qua Thái Lan, Singapore, Malaysia, Indonesia mà không cần đổi SIM ở từng chặng.',
      socialTip:'~1.5GB/ngày',
      spots:[
        {name:'Angkor Wat',type:'Di sản thế giới',emoji:'🏛'},
        {name:'Halong Bay',type:'Vịnh huyền bí',emoji:'⛵'},
        {name:'Bali Rice Terraces',type:'Ruộng bậc thang',emoji:'🌾'},
        {name:'Petronas Towers',type:'Kiến trúc biểu tượng',emoji:'🏙'},
        {name:'Boracay Beach',type:'Bãi biển',emoji:'🏖'},
        {name:'Luang Prabang',type:'Thành phố cổ',emoji:'🛕'},
      ],
      plans:[
        {id:'sea-u7',type:'unlimited',data:'Không giới hạn',days:7,price:249000,originalPrice:320000,discount:22,bestseller:true,tag:'Bán chạy'},
        {id:'sea-5g10d',type:'limited',data:'5GB',days:10,price:169000,originalPrice:null,discount:0,bestseller:false,tag:'Tiết kiệm'},
        {id:'sea-10g15d',type:'limited',data:'10GB',days:15,price:299000,originalPrice:null,discount:0,bestseller:false,tag:'Nhiều data'},
      ]
    },
    {
      id:'europe',slug:'chau-au',name:'Châu Âu',region:'Khu vực',flag:'🇪🇺',
      network:'Nhiều nhà mạng',hero:'Kết nối xuyên biên giới',accent:'#3157a5',
      intro:'Một gói data cho hành trình nhiều quốc gia Châu Âu, giảm thao tác đổi SIM giữa các chặng.',
      socialTip:'~1.5GB/ngày',
      spots:[
        {name:'Eiffel Tower - Paris',type:'Biểu tượng thế giới',emoji:'🗼'},
        {name:'Colosseum - Rome',type:'Di sản La Mã',emoji:'🏛'},
        {name:'Santorini',type:'Đảo xanh trắng',emoji:'⛪'},
        {name:'Prague Old Town',type:'Kiến trúc cổ',emoji:'🏰'},
        {name:'Amsterdam Canals',type:'Kênh đào lãng mạn',emoji:'🚲'},
        {name:'Swiss Alps',type:'Thiên nhiên hùng vĩ',emoji:'🏔'},
      ],
      plans:[
        {id:'eu-u7',type:'unlimited',data:'Không giới hạn',days:7,price:329000,originalPrice:null,discount:0,bestseller:false,tag:'Phổ biến'},
        {id:'eu-5g7d',type:'limited',data:'5GB',days:7,price:189000,originalPrice:239000,discount:21,bestseller:true,tag:'Bán chạy'},
        {id:'eu-10g15d',type:'limited',data:'10GB',days:15,price:299000,originalPrice:null,discount:0,bestseller:false,tag:'Nhiều data'},
      ]
    },
    {
      id:'global',slug:'toan-cau',name:'Toàn cầu',region:'200+ quốc gia',flag:'🌐',
      network:'Global partner',hero:'Một eSIM cho nhiều châu lục',accent:'#a50064',
      intro:'Dành cho hành trình dài hoặc thường xuyên di chuyển qua nhiều khu vực với một profile eSIM.',
      socialTip:'~1.5GB/ngày',
      spots:[
        {name:'New York City',type:'Thành phố không ngủ',emoji:'🗽'},
        {name:'Machu Picchu',type:'Di sản cổ đại',emoji:'🏔'},
        {name:'Maldives',type:'Thiên đường biển',emoji:'🏝'},
        {name:'Dubai',type:'Kiến trúc tương lai',emoji:'🏙'},
        {name:'Safari Kenya',type:'Thiên nhiên hoang dã',emoji:'🦁'},
        {name:'Sydney Opera House',type:'Biểu tượng Úc',emoji:'🎭'},
      ],
      plans:[
        {id:'gl-3g15d',type:'limited',data:'3GB',days:15,price:299000,originalPrice:null,discount:0,bestseller:false,tag:'Tiết kiệm'},
        {id:'gl-5g30d',type:'limited',data:'5GB',days:30,price:449000,originalPrice:549000,discount:18,bestseller:true,tag:'Bán chạy'},
        {id:'gl-10g30d',type:'limited',data:'10GB',days:30,price:699000,originalPrice:null,discount:0,bestseller:false,tag:'Nhiều data'},
      ]
    }
  ];

  const devices={
    Apple:['iPhone XS trở lên','iPhone 14 / 15 / 16','iPad hỗ trợ eSIM'],
    Samsung:['Galaxy S20 trở lên','Galaxy Z Fold / Flip','Galaxy Note 20'],
    Google:['Pixel 3 trở lên','Pixel 7 / 8 / 9'],
    Huawei:['P40 / P40 Pro','P50 Pro','Mate 40 Pro']
  };

  window.ESIM_DESTINATIONS=destinations;
  window.ESIM_DEVICES=devices;
})();
