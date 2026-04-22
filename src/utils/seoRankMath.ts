export const replaceSeoRM = (input?: string, type?: string) => {
  if (!input) return "";
  const typePath = type ? `/${type}` : "";
  return input
    .replace(
      `link rel="canonical" href="https://adminthuongthucdoisong.ome.edu.vn`,
      `link rel="canonical" href="https://ome.edu.vn/thuong-thuc-doi-song${typePath}`
    )
    .replace(
      `meta property="og:url" content="https://adminthuongthucdoisong.ome.edu.vn`,
      `meta property="og:url" content="https://ome.edu.vn/thuong-thuc-doi-song${typePath}`
    )
    .replace(
      `"@id":"https://adminthuongthucdoisong.ome.edu.vn/#organization"`,
      `"@id":"https://ome.edu.vn/thuong-thuc-doi-song${typePath}/#organization"`
    )
    .replace(
      `https://adminthuongthucdoisong.ome.edu.vn/#logo`,
      `https://ome.edu.vn/thuong-thuc-doi-song${typePath}/#logo`
    )
    .replace(
      `https://adminthuongthucdoisong.ome.edu.vn/#website`,
      `https://ome.edu.vn/thuong-thuc-doi-song${typePath}/#website`
    )
    .replace(
      `https://adminthuongthucdoisong.ome.edu.vn/#webpage`,
      `https://ome.edu.vn/thuong-thuc-doi-song${typePath}/#webpage`
    )
    .replace(
      `"url":"https://adminthuongthucdoisong.ome.edu.vn"`,
      `"url":"https://ome.edu.vn/thuong-thuc-doi-song${typePath}"`
    )
    .replace(
      `"@type":"WebPage","@id":"https://adminthuongthucdoisong.ome.edu.vn`,
      `"@type":"WebPage","@id":"https://ome.edu.vn/thuong-thuc-doi-song${typePath}`
    )
    .replace(
      `#webpage","url":"https://adminthuongthucdoisong.ome.edu.vn`,
      `#webpage","url":"https://ome.edu.vn/thuong-thuc-doi-song${typePath}`
    )
    .replace(
      `"mainEntityOfPage":{"@id":"https://adminthuongthucdoisong.ome.edu.vn`,
      `"mainEntityOfPage":{"@id":"https://ome.edu.vn/thuong-thuc-doi-song${typePath}/`
    )
    .replace(
      `"worksFor":{"@id":"https://adminthuongthucdoisong.ome.edu.vn/#organization`,
      `"worksFor":{"@id":"https://ome.edu.vn/thuong-thuc-doi-song${typePath}/#organization`
    )
    .replace(
      `"sameAs":["https://adminthuongthucdoisong.ome.edu.vn"]`,
      `"sameAs":["https://ome.edu.vn/thuong-thuc-doi-song${typePath}"]`
    )
    .replace(`noindex`, `index`)
    .replace(`nofollow`, `follow`);
};
