export interface detail {
    // data: any[];
    cloud_pct:any;
    temp:any;
    feels_like:any;
    humidity:any;
    min_temp:any;
    max_temp:any;
    wind_speed:any;
    wind_degrees:any;
    sunrise:any;
    sunset:any;
}

export interface fulldetail {
   cloud_pct:any;
    temp:any;
    feels_like:any;
    humidity:any;
    min_temp:any;
    max_temp:any;
    wind_speed:any;
    wind_degrees:any;
    sunrise:any;
    sunset:any;
   data: detail[];
}

//--------------------------------------------------------------------------------------------
export interface current {
   time:any;
   symbol:any;
   symbolPhrase:any;
   temperature:any;
   feelsLikeTemp:any;
   relHumidity:any;
   dewPoint:any;
   windSpeed:any;
   windDirString:any;
   windGust:any;
   precipProb:any;
   precipRate:any;
   cloudiness:any;
   thunderProb:any;
   uvIndex:any;
   pressure:any;
   visibility:any;
}

export interface symbolphrase {
   current: any;
   time:any;
   symbol:any;
   symbolPhrase:any;
   temperature:any;
   feelsLikeTemp:any;
   relHumidity:any;
   dewPoint:any;
   windSpeed:any;
   windDirString:any;
   windGust:any;
   precipProb:any;
   precipRate:any;
   cloudiness:any;
   thunderProb:any;
   uvIndex:any;
   pressure:any;
   visibility:any;
   symb: current[];
}

//--------------------------------------------------------------------------------------------


export interface det2 {
   id:any;
   name:any;
   country:any;
   timezone:any;
   language:any;
   adminArea:any;
   adminArea2:any;
   adminArea3:any;
   lon:any;
   lat:any;
}

export interface det3 {
   id:any;
   name:any;
   country:any;
   timezone:any;
   language:any;
   adminArea:any;
   adminArea2:any;
   adminArea3:any;
   lon:any;
   lat:any;
   locations:det2[];
}

export interface det4 {
   date:[];
   symbol:[];
   symbolPhrase:[];
   maxTemp:[];
   minTemp:[];
   maxFeelsLikeTemp:[];
   minFeelsLikeTemp:[];
   maxRelHumidity:[];
   minRelHumidity:[];
   maxDewPoint:[];
   minDewPoint:[];
   precipAccum:[]
   maxWindSpeed:[];
   windDir:[];
   maxWindGust:[];
   precipProb:[];
   cloudiness:[];
   sunrise:[];
   sunset:[];
   sunriseEpoch:[];
   sunsetEpoch:[];
   moonrise:[];
   moonset:[];
   moonPhase:[];
   uvIndex:[];
   minVisibility:[];
   pressure:[];
   confidence:[];
   solarRadiationSum:[];
}

export interface fullforecast {
   date:any;
   symbol:any;
   symbolPhrase:any;
   maxTemp:any;
   minTemp:any;
   maxFeelsLikeTemp:any;
   minFeelsLikeTemp:any;
   maxRelHumidity:any;
   minRelHumidity:any;
   maxDewPoint:any;
   minDewPoint:any;
   precipAccum:any;
   maxWindSpeed:any;
   windDir:any;
   maxWindGust:any;
   precipProb:any;
   cloudiness:any;
   sunrise:any;
   sunset:any;
   sunriseEpoch:any;
   sunsetEpoch:any;
   moonrise:any;
   moonset:any;
   moonPhase:any;
   uvIndex:any;
   minVisibility:any;
   pressure:any;
   confidence:any;
   solarRadiationSum:any;
   forecast:det4[];
}