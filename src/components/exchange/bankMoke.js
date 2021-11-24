const banks = [
  {
    bankName: "bitstamp",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 80000,
    dailyMax: 80000,
    maxAge: 50,
    jointAccount: true,
    bankStatement: true,
    passport: false,
    id: false,
    driverLicense: false,
    ub: false,
    camera: true,
    image:
      "https://www.blockchainwg.eu/wp-content/uploads/2017/11/Bitstamp-400x200.png",
  },
  {
    bankName: "kraken",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 10000000,
    dailyMax: 100000000,
    maxAge: 55,
    jointAccount: true,
    bankStatement: false,
    passport: false,
    id: false,
    driverLicense: false,
    ub: true,
    camera: false,
    image:
      "https://www.forexmt4indicators.com/wp-content/uploads/2018/03/Kraken-Cryptocurrency-Exchange-Review.jpg",
  },
  {
    bankName: "simplex",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 50000,
    dailyMax: 20000,
    maxAge: 100,
    jointAccount: true,
    bankStatement: true,
    passport: true,
    id: true,
    driverLicense: false,
    ub: false,
    camera: true,
    image:
      "https://www.bitdegree.org/crypto/storage/media/images/simplex-review-logo-big.o.png",
  },
  {
    bankName: "coinmetro",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 5000000,
    dailyMax: 1000000,
    maxAge: 100,
    jointAccount: true,
    bankStatement: true,
    passport: false,
    id: false,
    driverLicense: false,
    ub: false,
    camera: true,
    image:
      "https://d1mjtvp3d1g20r.cloudfront.net/2018/10/14121500/27067605_173246179960686_5284388976462540002_n.png",
  },
  {
    bankName: "ftx",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 1000000,
    dailyMax: 100000,
    maxAge: 100,
    jointAccount: false,
    bankStatement: false,
    passport: false,
    id: false,
    driverLicense: false,
    ub: false,
    camera: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/FTX_log.png",
  },
  {
    bankName: "bitfinex",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 1000000,
    dailyMax: 100000,
    maxAge: 100,
    jointAccount: false,
    bankStatement: false,
    passport: false,
    id: false,
    driverLicense: false,
    ub: true,
    camera: false,
    image: "https://download.logo.wine/logo/Bitfinex/Bitfinex-Logo.wine.png",
  },
  {
    bankName: "btcdirect",
    resFromDE: {
      sparkasse: "sparkasse",
      ing: "ing",
      dkb: "dkb",
      ing: "ing",
      raifeisenbank: "raifeisenbank",
      waiserbank: "waiserbank",
      none: "none",
    },
    gender: {
      male: "male",
      female: "female",
    },
    country: {
      germany: "germany",
      austria: "austria",
    },
    mounthMax: 50000,
    dailyMax: 50000,
    maxAge: 100,
    jointAccount: false,
    bankStatement: false,
    passport: true,
    id: true,
    driverLicense: false,
    ub: true,
    camera: false,
    image:
      "https://airdroplibrary.com/wp-content/uploads/2019/07/btcdirect-exchange-logo.png",
  },
];

export default banks;
