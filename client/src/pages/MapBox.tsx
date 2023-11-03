import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import DeckGL from '@deck.gl/react';
import {PolygonLayer} from '@deck.gl/layers';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapViewOptions from "../components/MapViewOptions";
import {getPolygons} from "../redux/actions";
import {IStore} from "../models/IStore";
import {IPolygon} from "../models/IPolygon";
import Loading from "../components/Loader";


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXlhbW9zdCIsImEiOiJjbG9neThkcXUwZG12MnJudmUwemppMnBlIn0.FGUiKTrm6MedAMDoaQqDJQ';


const INITIAL_VIEW_STATE = {
    longitude: 25.255377,
    latitude: 55.3089185,
    zoom: 13
}

function MapBox() {
    const [viewOption, setViewOption] = useState('streets-v9');
    const dispatch = useDispatch();
    const polygons = useSelector((state: IStore) => state.polygons.polygons);
    const isLoading = useSelector((state: IStore) => state.polygons.loading);
    const [layers, setLayers] = useState();
    const [selectedPolygonIdx, setSelectedPolygonIdx] = useState(-1);

    useEffect(() => {
        if (polygons && polygons.length >0 ) {
            setLayers(new PolygonLayer({
                id: polygons[selectedPolygonIdx]?.name,
                data: polygons[selectedPolygonIdx],
                stroked: true,
                filled: true,
                extruded: true,
                wireframe: true,
                lineWidthMinPixels: 1,
                getPolygon: (d: any) => d.contours,
                getLineColor: [80, 80, 80],
                getFillColor: [80, 80, 80],
                getLineWidth: 250
            }));
        }
    }, [polygons,selectedPolygonIdx]);

    useEffect(() => {
        dispatch(getPolygons());
    }, [])
    const Map = ReactMapboxGl({accessToken: MAPBOX_ACCESS_TOKEN});

    const polygonChangeHandler = (event: any) => {
        setSelectedPolygonIdx(event.target.value);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                { (isLoading && polygons?.length && selectedPolygonIdx > -1)  ? <Loading/> : <div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Polygon</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Polygon"
                            defaultValue={0}
                            value={selectedPolygonIdx}
                            onChange={polygonChangeHandler}
                        >
                            {polygons?.map((poly: IPolygon, index: number) => <MenuItem key={index}
                                                                                        value={index}>{poly.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>}
            </Grid>
            <Grid item xs={9}>
                <MapViewOptions valueUpdated={(option: string) => setViewOption(option)}/>
                <div className='map-container'>
                    <DeckGL
                        style={{width: '200px'}}
                        initialViewState={INITIAL_VIEW_STATE}
                        controller={true}
                        layers={layers}
                    >
                        <Map
                            style={`mapbox://styles/mapbox/` + viewOption}
                            containerStyle={{
                                height: '50vh',
                                width: '50vw'
                            }}
                            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}/>
                    </DeckGL>
                </div>
            </Grid>
        </Grid>
    );
}


export default MapBox;
