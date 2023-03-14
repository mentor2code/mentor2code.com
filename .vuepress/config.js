module.exports = {
  title: "mentor2code",
  base: "/",
  lastUpdated: "ปรับปรุงล่าสุดเมื่อ ",
  head: [["link", { rel: "icon", href: "/assets/img/logo-small.png" }]],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  updatePopup: true,
  themeConfig: {
    logo: "/assets/img/logo-small.png",
    nav: [
      { text: "หน้าแรก", link: "/" },
      { text: "คอร์ส", items: buildCourseItems() },
      { text: "บทความ", link: '/blogs/' },
    ]
  }
};

function buildBlogItems() {
  return [
    { text: "พฤติกรรมที่แข็งแรง", link: "/blogs/strong-habit/" },
  ];
}

function buildCourseItems() {
  return [
    { text: "IS281 Tools for Empowering End Users", link: "/courses/is281/" },
    // { text: "IS315 Information System Analysis", link: "/courses/is315/" },
    // { text: "IS415 Information System Design", link: "/courses/is415/" },
    { text: "IS322 Application Development Tool (B)", link: "/courses/is322/" },
    { text: "IS457 Advanced Database Management", link: "/courses/is457/" },
    // { text: "IS613 Modern Business Management and Digital Technology", link: "/courses/is613/" },
    // { text: "IS361 Artificial Intelligence", link: "/courses/is361/" },
    // { text: "IS461 Tools for Data Analytics", link: "/courses/is461/" },
    // { text: "IS481 Cloud Application Development", link: "/courses/is481/" }
  ];
}
