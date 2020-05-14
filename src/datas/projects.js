const projectsList = [
  {
    projectId: 1,
    projectType: "fixed budget",
    projectName: "Employee management",
    client: "Roy Ravendreen",
    projectDescp:
      "Louis Vuitton Malletier, commonly referred to as Louis Vuitton (French pronunciation: ​[lwi vɥitɔ̃]) or shortened to LV, is a French fashion house and luxury retail company founded in 1854 by Louis Vuitton. The label's LV monogram appears on most of its products, ranging from luxury trunks and leather goods to ready-to-wear, shoes, watches, jewelry, accessories, sunglasses and books. Louis Vuitton is one of the world's leading international fashion houses; it sells its products through standalone boutiques, lease departments in high-end department stores, and through the e-commerce section of its website.",
    estResourceCose: "2,00,000",
    projectBudget: "4,00,000",
    managementCost: "50,000",
    estHrPerManDays: "20",
    startDate: "04-02-2019",
    endDate: "02-02-2019",
    technology: [
      { technologyId: 1, technologyName: "MERN" },
      { technologyId: 2, technologyName: "Mongo DB" },
      { technologyId: 1, technologyName: "Nodejs" },
    ],
    domain: "nirasystems.com",
    sourceCodePath: "www.github.com",
    projectLeaders: [
      {
        leaderName: "waston",
        leaderImg: "avatar-01.jpg",
      },
    ],
    projectTeam: [
      {
        memberName: "Dutch",
        memberImg: "nible.png",
      },
      {
        memberName: "Jerry",
        memberImg: "avatar-06.png",
      },
    ],
    status: "inProgress",
    progress: "50",
  },
  {
    projectId: 2,
    projectType: "fixed budget",
    projectName: "Marriot Resturent management",
    client: "Roy Ravendreen",
    projectDescp:
      "Giorgio Armani (Italian pronunciation: [ˈdʒordʒo arˈmaːni]; born 11 July 1934) is an Italian fashion designer. He first came to notice, working for Cerruti and then for many others, including Allegri, Bagutta and Hilton. He formed his company, Armani, in 1975, which eventually diversified into music, sport and luxury hotels. By 2001 Armani was acclaimed as the most successful designer of Italian origin, and is credited with pioneering red-carpet fashion.",
    estResourceCose: "2,00,000",
    projectBudget: "4,00,000",
    managementCost: "50,000",
    estHrPerManDays: "20",
    startDate: "04-02-2019",
    endDate: "02-02-2019",
    technology: [
      { technologyId: 1, technologyName: "MERN" },
      { technologyId: 2, technologyName: "Mongo DB" },
    ],
    estHour: "80",
    domain: "nirasystems.com",
    sourceCodePath: "www.github.com",
    projectLeaders: [
      {
        leaderName: "Jerry",
        leaderImg: "avatar-06.png",
      },
    ],
    projectTeam: [
      {
        memberName: "Waston",
        memberImg: "avatar-01.jpg",
      },
      {
        memberName: "Dutch",
        memberImg: "nible.png",
      },
    ],
    status: "new",
    progress: "80",
  },
];

let projectNamesOnly = [];
projectsList.map((project) =>
  projectNamesOnly.push({
    value: {
      projectId: project.projectId,
      projectName: project.projectName,
    },
    label: project.projectName,
  })
);

export { projectsList, projectNamesOnly };
