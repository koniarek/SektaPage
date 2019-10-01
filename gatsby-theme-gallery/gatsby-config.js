module.exports = options => {
  const { galleryPath = "content/gallery" } = options;

  return {
    siteMetadata: {
      title: "Junkie to sekta, chociaż nie było Schizmy",
      description: "",
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
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: galleryPath,
          path: galleryPath,
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-typescript",
    ],
  };
};
