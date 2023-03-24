import { interfacePortraits } from "./interfacePortraits";

import {ReactNode } from "react";
import { interfaceDates } from "./interfaceDates";
export type Props = { 
    children: ReactNode
 }

export type PropsDetails = { 
    children: ReactNode,
    activity: number,
    portraits: Array<interfacePortraits>
 }

 export type PropsDates = { 
    children: ReactNode,
    day: string,
    dates: Array<interfaceDates>
 }