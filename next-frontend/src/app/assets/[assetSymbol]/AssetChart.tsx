"use client";

import { AssetShow } from "@/components/AssetShow";
import { Chart, ChartComponentRef } from "@/components/Chart";
import { Asset } from "@/models";
import { useRef } from "react";

export function AssetChart(props: {
    asset: Asset
}) {
    const chartRef = useRef<ChartComponentRef>(null)
    // websocket
    return (
        <Chart ref={chartRef} header={<AssetShow asset={props.asset}/>}/>
    );
}