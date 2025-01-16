import { UnknownAction } from "@reduxjs/toolkit";
interface ISection {
  title: string;
  arrButtons: string[] | number[];
  action: (item: string | number) => UnknownAction;
}
export default ISection;
