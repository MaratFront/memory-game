import { UnknownAction } from "@reduxjs/toolkit";
export default interface ISection {
  title: string;
  arrButtons: string[] | number[];
  action: (item: string | number) => UnknownAction;
}
