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
    { text: "Advanced Database Management", link: "/courses/adv_db/" },
    { text: "Excel", link: "/courses/excel/" },
    // { text: "IS315 Information System Analysis", link: "/courses/is315/" },
    { text: "Information System Design", link: "/courses/is_design/" },
    { text: "Mobile Application Development", link: "/courses/mobile_dev/" },
    { text: "Web Application Development", link: "/courses/web_dev/" },

  ];
}
