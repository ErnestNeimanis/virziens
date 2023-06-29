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
        time: "16:30 - 17:45",
        bgColor: "#ffb6c1",
        textColor: "#000",
      },
      {},
      {
        title: "PIEAUGUŠIE AR LABĀM ZINĀŠANĀM",
        time: "18:30 - 20:00",
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
      {},
      {
        title: "JUNIORI II (11+)",
        time: "16:00 - 17:15",
        bgColor: "#FF80B7",
        textColor: "#000",
      },
      {
        title: "TĪŅI (13+)",
        time: "17:15 - 18:30",
        bgColor: "#FFB433",
        textColor: "#000",
      },
      {
        title: "KIDS I (4+)",
        time: "18:30 - 19:15",
        bgColor: "#FFFCA3",
        textColor: "#000",
      },
      {
        title: "ADULT (16+)",
        time: "19:15 - 20:30",
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
        time: "16:30 - 17:45",
        bgColor: "#ffb6c1",
        textColor: "#000",
      },
      {},
      {
        title: "KIDS II (6+)",
        time: "18:00 - 19:00",
        bgColor: "#D6E600",
        textColor: "#000",
      },
      {
        title: "ADVANCED IZLASE",
        time: "19:15 - 20:30",
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
      {},
      {
        title: "JUNIORI II (11+)",
        time: "16:00 - 17:15",
        bgColor: "#FF80B7",
        textColor: "#000",
      },
      {
        title: "TĪŅI (13+)",
        time: "17:15 - 18:30",
        bgColor: "#FFB433",
        textColor: "#000",
      },
      {
        title: "PIEAUGUŠIE AR NELIELĀM ZINĀŠANĀM",
        time: "18:30 - 20:00",
        bgColor: "#9AFEFF",
        textColor: "#000",
      },
      {},
    ],
  },

  {
    name: "friday",
    title: "piekdiena",
    bgColor: "#000",
    entries: [
      {},
      {
        title: "AKROBĀTIKA I",
        time: "15:30 - 16:30",
        bgColor: "#E5E4E2",
        textColor: "#000",
      },
      {
        title: "AKROBĀTIKA II",
        time: "16:30 - 17:30",
        bgColor: "#BFBFBF",
        textColor: "#000",
      },
      {},
      {
        title: "KIDS II (6+)",
        time: "18:00 - 19:00",
        bgColor: "#D6E600",
        textColor: "#000",
      },
      {
        title: "ADULT (16+)",
        time: "19:15 - 20:30",
        bgColor: "#C266FF",
        textColor: "#000",
      },
    ],
  },
  {
    name: "saturday",
    title: "setdiena",
    bgColor: "#000",
    entries: [
      {
        title: "PIAUGUŠIE IESĀCĒJI",
        time: "10:15 - 11:30",
        bgColor: "#B3D7FF",
        textColor: "#000",
      },
      {
        title: "KIDS I (4+)",
        time: "12:00 - 12:45",
        bgColor: "#FFFCA3",
        textColor: "#000",
      },
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
        title: "STARTER",
        time: "14:00",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "FREE STYLE STARTER",
        time: "15:00",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "NEWCOMER",
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
        title: "FREE STYLE EXPERIECED",
        time: "17:30",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
      {
        title: "INTERMEDIATE ADVANCED",
        time: "18:00",
        bgColor: "#2EFFAF",
        textColor: "#000",
      },
    ],
  },
];
