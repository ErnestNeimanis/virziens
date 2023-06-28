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

export type{
    ScheduleDay,
    ScheduleEntry
}