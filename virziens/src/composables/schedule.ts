interface ScheduleDay {
  name?: string;
  title?: string;
  spacesTop?: number;
  spacesBottom?: number;
  entries?: ScheduleEntry[];
  bgColor?: string;
  textColor?: string;
  fontStyle?: string;
}

interface ScheduleEntry {
  name?: string;
  title?: string;
  time?: string;
  bgColor?: string;
  textColor?: string;
  fontStyle?: string;
}

export const schedule = [
  {
    name: "monday",
    title: "pirmdiena",
    bgColor: "#000",
    textColor: "#fff",
    entries: [
      {},

      {},
      {
        title: "JUNIORI I (9+)",
        time: "17:00 - 18:15",
        bgColor: "#ffb6c1",
        textColor: "#000",
      },
      {},
      {
        title: "PIEAUGUŠIE AR  ZINĀŠANĀM",
        time: "18:30 - 21:00",
        bgColor: "#00AAFF",
        textColor: "#000",
      },
      {},
    ],
  },
  {
    name: "tuesday",
    title: "otrdiena",
    bgColor: "#000",
    entries: [
      {},


      {
        title: "JUNIORI II (11+)",
        time: "16:45 - 18:00",
        bgColor: "#FF80B7",
        textColor: "#000",
      },
      {},
      {
        title: "KIDS I (4+)",
        time: "18:00 - 18:45",
        bgColor: "#FFFCA3",
        textColor: "#000",
      },

      {
        title: "TĪŅI (13+)",
        time: "18:45 - 20:00",
        bgColor: "#FFB433",
        textColor: "#000",
      },

      {
        title: "ADULT (16+)",
        time: "20:00 - 21:15",
        bgColor: "#C266FF",
        textColor: "#000",
      },
    ],
  },

  {
    name: "wednesday",
    title: "trešdiena",
    bgColor: "#000",
    entries: [
      {},
      {},
      {
        title: "JUNIORI I (9+)",
        time: "17:00 - 18:15",
        bgColor: "#ffb6c1",
        textColor: "#000",
      },
      {},
      {
        title: "KIDS II (6+)",
        time: "18:15 - 19:15",
        bgColor: "#D6E600",
        textColor: "#000",
      },
      {
        title: "IZLASE",
        time: "19:15 - 20:45",
        bgColor: "#7BE93F",
        textColor: "#000",
      },
    ],
  },

  {
    name: "thursday",
    title: "ceturtdiena",
    bgColor: "#000",
    entries: [
      {},
      {
        title: "JUNIORI II (11+)",
        time: "16:45 - 18:00",
        bgColor: "#FF80B7",
        textColor: "#000",
      },
      {},
      {
        title: "KIDS I (4+)",
        time: "18:00 - 18:45",
        bgColor: "#FFFCA3",
        textColor: "#000",
      },
      {
        title: "TĪŅI (13+)",
        time: "18:45 - 20:00",
        bgColor: "#FFB433",
        textColor: "#000",
      },
      {
        title: "ADULT(16+)",
        time: "20:00 - 21:15",
        bgColor: "#9AFEFF",
        textColor: "#000",
      },

    ],
  },

  {
    name: "friday",
    title: "piektdiena",
    bgColor: "#000",
    entries: [
      {},
      {
        title: "AKROBĀTIKA I",
        time: "16:00 - 17:00",
        bgColor: "#E5E4E2",
        textColor: "#000",
      },
      {
        title: "AKROBĀTIKA II",
        time: "17:00 - 18:00",
        bgColor: "#BFBFBF",
        textColor: "#000",
      },
      {},
      {
        title: "KIDS II (6+)",
        time: "18:15 - 19:15",
        bgColor: "#D6E600",
        textColor: "#000",
      },
      {},
    ],
  },
  {
    name: "saturday",
    title: "sestdiena",
    bgColor: "#000",
    entries: [
      {
        title: "PIEAUGUŠIE IESĀCĒJI",
        time: "10:15 - 11:30",
        bgColor: "#B3D7FF",
        textColor: "#000",
      },
      {},
      {},
      {},
      {},
      {},
    ],
  },

  {
    name: "sunday",
    title: "svētdiena",
    bgColor: "#000",
    entries: [

      {
        time: "",
        title: `SACENSĪBU SOLO DEJAS`,
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        title: "STARTER",
        time: "13:00",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "FREE STYLE STARTER",
        time: "14:00",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "NEWCOMER",
        time: "14:30",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "DUO",
        time: "15:30",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "NOVICE",
        time: "16:30",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "FREE STYLE EXPERIENCED",
        time: "17:30",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "INTERMEDIATE",
        time: "18:00",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "ADVANCED SHOWCASE",
        time: "19:30",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
    ],
  },
];
