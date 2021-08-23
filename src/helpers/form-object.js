export const loginFom = {
  email: {
    type: "email",
    name: "email",
    label: "Email",
    rules: {
      required: true,
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    errorMsg: {
      required: "Email requis!",
      pattern: "Veuillez entrer un email valide!",
    },
  },
  password: {
    type: "password",
    name: "password",
    label: "Mot de passe",
    rules: {
      required: true,
    },
    errorMsg: {
      required: "Mot de passe requis!",
    },
  },
};

export const characterForm = {
  name: {
    type: "text",
    name: "name",
    label: "Nom du personnage",
    rules: {
      required: true,
    },
    errorMsg: {
      required: "Nom du personnage requis!",
    },
  },
  money: {
    type: "number",
    name: "money",
    label: "Septims",
    rules: {
      required: true,
      min: 0,
    },
    errorMsg: {
      required: "Argent requis!",
      min: "Pas de valeur en dessous de 0",
    },
  },
  status: {
    name: "status",
    label: "Status",
    rules: {
      required: true,
      pattern: /1|0/,
    },
    errorMsg: {
      required: "Status requis!",
      pattern: "Seulement une des 2 valeurs possible !",
    },
  },
};

export const meteoForm = {
  channelId: {
    type: "number",
    name: "channelId",
    label: "Channel ID",
    rules: {
      required: true,
    },
    errorMsg: {
      required: "Entrez un channel id!",
    },
  },
  name: {
    type: "text",
    name: "name",
    label: "Nom",
    rules: {
      required: true,
    },
    errorMsg: {
      required: "Champ Nom requis",
    },
  },
  beau: {
    type: "number",
    name: "beau",
    label: "Beau temps",
    rules: {
      required: true,
      min: 0,
      max: 100,
    },
    errorMsg: {
      required: "Champ Beau temp requis!",
      min: "Entrez une valeur positive",
      max: "Entrez une valeur egale ou plus petite que 100",
    },
  },
  humide: {
    type: "number",
    name: "humide",
    label: "Temps humide",
    rules: {
      required: true,
      min: 0,
      max: 100,
    },
    errorMsg: {
      required: "Champ Temps humide requis!",
      min: "Entrez une valeur positive",
      max: "Entrez une valeur egale ou plus petite que 100",
    },
  },
  froid: {
    type: "number",
    name: "froid",
    label: "Temps froid",
    rules: {
      required: true,
      min: 0,
      max: 100,
    },
    errorMsg: {
      required: "Champ Temps froid requis!",
      min: "Entrez une valeur positive",
      max: "Entrez une valeur egale ou plus petite que 100",
    },
  },
};
