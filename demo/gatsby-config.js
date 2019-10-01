module.exports = {
  siteMetadata: {
    title: "Junkie to Sekta",
    description: "Junkie to sekta, chociaż nie było Schizmy ",
    author: "Koniarek",
    social: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/tonciujunkietosekta",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UC3EOoqNeN30lu00ExULB5uA",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/tonciu",
      },
      {
        name: "Email",
        url: "mailto:tedoendoce@gmail.com",
      },
    ],
  },
  plugins: [
    "gatsby-theme-gallery",
    {
      resolve: "gatsby-theme-gallery",
      options: {
        basePath: "/gallery",
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
  ],
};
