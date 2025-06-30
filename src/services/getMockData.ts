export function getLocations() {
  const locations = [
    {
      lat: 40.7128,
      lng: -74.006,
      name: "New York",
      date: "2/10/20",
      link: { href: "https://example.com", label: "Book" },
    },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
    { lat: 41.8781, lng: -87.6298, name: "Chicago" },
  ]; // TODO: Replace with real data input

  return locations;
}

export function getInnovatorPrograms() {
  const innovatorPrograms = [
    {
      name: "Game Development",
      description: "Ages 7-18",
      img: "/assets/navbar/innovator_program/game_dev.webp",
      link: {
        href: "/programs/game-development",
        label: "Learn More",
      },
    },
    {
      name: "Game Development",
      description: "Ages 7-18",
      img: "/assets/navbar/innovator_program/game_dev.webp",
      link: {
        href: "/programs/game-development",
        label: "Learn More",
      },
    },
    {
      name: "Game Development",
      description: "Ages 7-18",
      img: "/assets/navbar/innovator_program/game_dev.webp",
      link: {
        href: "/programs/game-development",
        label: "Learn More",
      },
    },
    {
      name: "Game Development",
      description: "Ages 7-18",
      img: "/assets/navbar/innovator_program/game_dev.webp",
      link: {
        href: "/programs/game-development",
        label: "Learn More",
      },
    },
    {
      name: "Game Development",
      description: "Ages 7-18",
      img: "/assets/navbar/innovator_program/game_dev.webp",
      link: {
        href: "/programs/game-development",
        label: "Learn More",
      },
    },
  ];

  return innovatorPrograms;
}

export function getVideoData() {
  const video_data = [
    {
      category: "Program Highlights",
      items: [
        {
          section: "Tech Program Showcase", // Keep as is, clear and descriptive.
          videos: [],
        },
        {
          section: "Business Skills Showcase", // Keep as is, clear and descriptive.
          videos: [],
        },
        {
          section: "Advanced Math", // Shorter, more common phrasing.
          videos: ["-IXiENvQQQg", "rEmlkTSQZiw", "-IXiENvQQQg", "rEmlkTSQZiw", "-IXiENvQQQg", "rEmlkTSQZiw"],
        },
      ],
    },
    {
      category: "Skills & Innovation", // More active and forward-looking.
      items: [
        {
          section: "Entrepreneurship & Soft Skills", // Keep as is, clear.
          videos: [],
        },
        {
          section: "MoonBattle Pitches", // More concise.
          videos: [],
        },
        {
          section: "Future of Work Insights", // Keep as is, clear.
          videos: [],
        },
        {
          section: "Leadership Insights", // Keep as is, clear.
          videos: [],
        },
      ],
    },
    {
      category: "Our Community", // More welcoming and inclusive.
      items: [
        {
          section: "Meet Our Educators", // More engaging and professional.
          videos: [],
        },
        {
          section: "Meet Our Moonpreneurs", // Keep consistency with "Meet Our Educators".
          videos: [],
        },
        {
          section: "Success Stories", // More impactful and positive.
          videos: [],
        },
        {
          section: "Parent Testimonials", // Keep as is, clear and direct.
          videos: [],
        },
        {
          section: "College Admissions", // More common phrasing.
          videos: [],
        },
      ],
    },
    {
      category: "Engage With Us", // Action-oriented and inviting.
      items: [
        {
          section: "Expert Sessions", // More general and appealing than "Speaker Sessions".
          videos: [],
        },
        {
          section: "Our Partnerships", // Slightly more formal and concise.
          videos: [],
        },
        {
          section: "In-Person Events", // More descriptive and consistent with "Events".
          videos: [],
        },
      ],
    },
  ];
  // TODO: Replace with real video data input

  return video_data;
}

export function getClientsAndPartners() {
  const clientsAndPartners = [
    {
      name: "RGUKT",
      logo: "/assets/partners/rgukt.webp",
      link: "/clients/client1",
      internalLink: "",
    },
    {
      name: "RGUKT",
      logo: "/assets/partners/rgukt.webp",
      link: "/clients/client1",
      internalLink: "",
    },
    {
      name: "RGUKT",
      logo: "/assets/partners/rgukt.webp",
      link: "/clients/client1",
      internalLink: "",
    },
    {
      name: "RGUKT",
      logo: "/assets/partners/rgukt.webp",
      link: "/clients/client1",
      internalLink: "",
    },
    {
      name: "RGUKT",
      logo: "/assets/partners/rgukt.webp",
      link: "/clients/client1",
      internalLink: "",
    },
    {
      name: "RGUKT",
      logo: "/assets/partners/rgukt.webp",
      link: "/clients/client1",
      internalLink: "",
    },
  ];

  return clientsAndPartners;
}

export function getLearningKits() {
  const learningKits = [
    {
      name: "Moonpreneur Board Game",
      description: "Ages 7-18",
      img: "/assets/learning_kits/moonpreneur_board_game.webp",
      link: "/learning-kits/moonpreneur-board-game",
    },
    {
      name: "Moonpreneur Board Game",
      description: "Ages 7-18",
      img: "/assets/learning_kits/moonpreneur_board_game.webp",
      link: "/learning-kits/moonpreneur-board-game",
    },
    {
      name: "Moonpreneur Board Game",
      description: "Ages 7-18",
      img: "/assets/learning_kits/moonpreneur_board_game.webp",
      link: "/learning-kits/moonpreneur-board-game",
    },
  ];

  return learningKits;
}
