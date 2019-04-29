var vlSpec =
{
    "$schema": "https://vega.github.io/schema/vega-lite/v3.0.json",
    "description": "A simple bar chart with embedded data.",
    "data": {
        "url": "https://raw.githubusercontent.com/F1Mider/spr2019-adv-project/master/rides.csv"
    },
    "hconcat": [
        {
            "layer": [
                {
                    "data": {
                        "url": "https://raw.githubusercontent.com/F1Mider/spr2019-adv-project/master/N02-17_GML/N02-17_RailroadSection.geojson",
                        "format": { "property": "features" }
                    },
                    "mark": "geoshape",
                    "encoding": { "color": { "value": "gray" } }
                },
                {
                    "selection": {
                        "station_choice": { "fields": ["station_name_x"], "type": "single" },
                        "type_choice": {
                            "fields": ["type"],
                            "type": "single",
                            "bind": {
                                "input": "select",
                                "options": [null, "ＪＲ", "モノレール", "地下鉄", "新交通", "路面電車", "私鉄"]
                            }
                        }
                    },
                    "mark": "circle",
                    "encoding": {
                        "longitude": { "field": "lon_x", "type": "quantitative" },
                        "latitude": { "field": "lat_x", "type": "quantitative" },
                        "tooltip": [
                            { "field": "station_name_x", "type": "nominal" }
                        ]
                    },
                    "width": 900,
                    "height": 1000
                }
            ]
        },
        {
            "vconcat": [
                {
                    "mark": "bar",
                    "transform": [{ "filter": { "selection": "station_choice" } }],
                    "encoding": {
                        "x": { "bin": true, "field": "distance", "type": "quantitative" },
                        "y": { "aggregate": "count", "type": "quantitative" }
                    }
                },
                {
                    "mark": "bar",
                    "transform": [{ "filter": { "selection": "station_choice" } }],
                    "encoding": {
                        "y": { "field": "type", "type": "nominal" },
                        "x": { "aggregate": "count", "type": "quantitative" }
                    }
                },
                {
                    "mark": "bar",
                    "transform": [{ "filter": { "selection": "station_choice" } }],
                    "encoding": {
                        "y": { "field": "seat", "type": "nominal" },
                        "x": { "aggregate": "count", "type": "quantitative" }
                    }
                },
                {
                    "mark": "bar",
                    "transform": [{ "filter": { "selection": "station_choice" } }],
                    "encoding": {
                        "y": { "field": "service", "type": "nominal" },
                        "x": { "aggregate": "count", "type": "quantitative" }
                    }
                }
            ]
        }
    ]
};

var embedded = vegaEmbed('#vis2', vlSpec);