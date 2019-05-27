import {Subject} from "./subject";

export interface Section {
  id: number;
  name: string;
  subjects: Subject[];
}
