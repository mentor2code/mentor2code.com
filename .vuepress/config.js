module.exports = {
  title: "mentor2code",
  description: "A mentor who helps people to code.",
  base: "/",
  serviceWorker: true,
  updatePopup: true,
  themeConfig: {
      logo: "/assets/img/logo-small.png",
      nav: [
          { text: "Home", link: "/" },
          { text: "Blogs", link: "/blogs/" },
          { text: "Courses", 
            items: [
                { text: "IS322 Application Development Tool (B)", link: "/courses/is322/" },
                { text: "IS361 Artificial Intelligence", link: "/courses/is361/" },
                { text: "IS461 Tools for Data Analytics", link: "/courses/is461/" },
                { text: "IS481 Cloud Application Development", link: "/courses/is481/" },
            ]
          },
      ]
  }
};
