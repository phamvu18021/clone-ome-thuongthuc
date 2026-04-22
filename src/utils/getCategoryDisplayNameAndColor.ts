export const getCategoryDisplayName = (slug?: string): string => {
  if (!slug) return "Thú cưng";
  const categoryMap: { [key: string]: string } = {
    // Main categories
    "thu-cung": "Thú cưng",
    "lam-dep": "Làm đẹp",
    "cham-soc-nha-cua": "Chăm sóc nhà cửa",
    "nghe-thuat-sang-tao": "Nghệ thuật - Sáng tạo",
    "am-thuc": "Ẩm thực",
    "lien-he": "Liên hệ",

    // Thú cưng children
    "huan-luyen-thu-cung": "Huấn luyện thú cưng",
    "cham-soc-thu-cung": "Chăm sóc thú cưng",

    // Làm đẹp children
    "cham-soc-da": "Chăm sóc da",
    "phoi-do": "Phối đồ",
    "trang-diem": "Trang điểm",
    "cham-soc-toc": "Chăm sóc tóc",
    "cham-soc-mong": "Chăm sóc móng",

    // Chăm sóc nhà cửa children
    "noi-that": "Nội thất",
    "ngoai-that": "Ngoại thất",
    "phong-thuy": "Phong thủy",

    // Nghệ thuật - Sáng tạo children
    "am-nhac": "Âm nhạc",
    "cam-hoa": "Cắm hoa",
    "dieu-khac": "Điêu khắc",
    "my-thuat": "Mỹ thuật",
    "nhiep-anh-dung-phim": "Nhiếp ảnh - Dựng phim",
    handmade: "Handmade",
    "chu-viet": "Chữ viết",
    "phat-trien-tu-duy": "Phát triển tư duy",

    // Ẩm thực children
    "pha-che": "Pha chế",
    "mon-an": "Món ăn"
  };

  const displayName = categoryMap[slug] || "Thú cưng";
  return displayName;
};

export const getCategoryColor = (slug: string): string => {
  const colorMap: { [key: string]: string } = {
    "thu-cung": "bg-blue-600",
    "lam-dep": "bg-pink-500",
    "cham-soc-nha-cua": "bg-green-600",
    "nghe-thuat-sang-tao": "bg-purple-600",
    "am-thuc": "bg-orange-600"
  };

  return colorMap[slug] || "bg-blue-500";
};
