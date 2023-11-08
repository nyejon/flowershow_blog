const config = {
    title: "Uncommon sense",
    description: "My simplified view of the world",
    author: "Jonathan Nye",
    authorLogo: "/images/profile.jpeg",
    logo: "/images/uncommon-sense.png",
    domain: "https://denyed.xyz/",
    defaultAuthor: "Jonathan Nye",
    // links to the pages you want to link to in the navbar and in the footer
    navbarTitle: {
        text: "Uncommon sense",
        logo: "/images/uncommon-sense.png", // optional
    },
    navLinks: [
        { href: "/about", name: "About" },
        { href: "/blog", name: "Blog" }
    ],
    // social: [
    //     { label: "github", href: "https://github.com/nyejon" },
    //     { label: "twitter", href: "https://twitter.com/nyejon" },
    // ],
    showEditLink: false,
    showToc: true,
    showSidebar: false,
    showComments: true,
    analytics: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    nextSeo: {
        titleTemplate: "%s | Uncommon sense",
        description: "My simplified view of the world",
        canonical: "https://denyed.xyz",
        // openGraph: {
        //   title: "Uncommon sense",
        //   images: [
        //     {
        //       url: "https://flowershow.app/assets/images/frontpage-screenshot.jpg",
        //       alt: "Flowershow",
        //       width: 1200,
        //       height: 627,
        //       type: "image/jpg",
        //     },
        //   ],
        // },
        twitter: {
          handle: "@nyejon",
          site: "https://denyed.xyz",
          cardType: "summary_large_image",
        },
      },
    search: {
        // Change to Algolia https://flowershow.app/docs/search
        provider: "kbar",
        kbarConfig: {
            defaultActions: [
                {
                    id: "blog",
                    name: "Blog",
                    keywords: "content",
                    perform: () => (window.location.pathname = "blog"),
                },
            ],
        },
    },
    comments: {
        provider: 'giscus',
        pages: ["blog"],
        config: {
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
        }
    }
};

export default config;
