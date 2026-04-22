export type TMenuItem = {
  path: string;
  title: string;
  childs?: TMenuItem[];
};

export type TMenus = TMenuItem[];

export const menus: TMenus = [
  {
    path: "/thu-cung",
    title: "Thú cưng",
    childs: [
      {
        path: "/thu-cung/huan-luyen-thu-cung",
        title: "Huấn luyện thú cưng"
      },
      {
        path: "/thu-cung/cham-soc-thu-cung",
        title: "Chăm sóc thú cưng"
      }
    ]
  },
  {
    path: "/lam-dep",
    title: "Làm đẹp",
    childs: [
      {
        path: "/lam-dep/cham-soc-da",
        title: "Chăm sóc da"
      },
      {
        path: "/lam-dep/phoi-do",
        title: "Phối đồ"
      },
      {
        path: "/lam-dep/trang-diem",
        title: "Trang điểm"
      },
      {
        path: "/lam-dep/cham-soc-toc",
        title: "Chăm sóc tóc"
      },
      {
        path: "/lam-dep/cham-soc-mong",
        title: "Chăm sóc móng"
      }
    ]
  },
  {
    path: "/cham-soc-nha-cua",
    title: "Chăm sóc nhà cửa",
    childs: [
      {
        path: "/cham-soc-nha-cua/noi-that",
        title: "Nội thất"
      },
      {
        path: "/cham-soc-nha-cua/ngoai-that",
        title: "Ngoại thất"
      },
      {
        path: "/cham-soc-nha-cua/phong-thuy",
        title: "Phong thủy"
      }
    ]
  },
  {
    path: "/nghe-thuat-sang-tao",
    title: "Nghệ thuật - Sáng tạo",
    childs: [
      {
        path: "/nghe-thuat-sang-tao/am-nhac",
        title: "Âm nhạc"
      },
      {
        path: "/nghe-thuat-sang-tao/cam-hoa",
        title: "Cắm hoa"
      },
      {
        path: "/nghe-thuat-sang-tao/dieu-khac",
        title: "Điêu khắc"
      },
      {
        path: "/nghe-thuat-sang-tao/my-thuat",
        title: "Mỹ thuật"
      },
      {
        path: "/nghe-thuat-sang-tao/nhiep-anh-dung-phim",
        title: "Nhiếp ảnh - Dựng phim"
      },
      {
        path: "/nghe-thuat-sang-tao/handmade",
        title: "Handmade"
      },
      {
        path: "/nghe-thuat-sang-tao/chu-viet",
        title: "Chữ viết"
      },
      {
        path: "/nghe-thuat-sang-tao/phat-trien-tu-duy",
        title: "Phát triển tư duy"
      }
    ]
  },
  {
    path: "/am-thuc",
    title: "Ẩm thực",
    childs: [
      {
        path: "/am-thuc/pha-che",
        title: "Pha chế"
      },
      {
        path: "/am-thuc/mon-an",
        title: "Món ăn"
      }
    ]
  },
  {
    path: "/lien-he",
    title: "Liên hệ"
  }
];
