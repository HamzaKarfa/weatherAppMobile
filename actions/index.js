export const updateForecast = (forecast) => {
    return {type:'ADD_FORECAST', data: forecast}
};
  
export const toggleLoader = (status) => {
  return {type:'UPDATE_LOADER', data:status}
};
export const getBackgroungImg = (url) => {
  return {type:'ADD_BACKGROUNG_IMAGE', data:url}
};

export const fetchForecast = (city) => {
  return async (dispatch)=>{

    dispatch(toggleLoader(true))

    let urlForecast  = `http://api.weatherstack.com/current?access_key=49046740218a1a80219f916ff27b8b7e&query=${city}&units=m`
    let urlImageBackground  = 'https://api.teleport.org/api/urban_areas/slug:'+city.toLowerCase()+'/images/'
    
    let responseForecast = await fetch(urlForecast)
    if (responseForecast.status == 200) {
      let dataForecast =  await responseForecast.json()
      dispatch(updateForecast(dataForecast))
      dispatch(toggleLoader(false))
      
    }else{
      dispatch(updateForecast(null))
      dispatch(toggleLoader(false))
      
    }
    
    city  = city.replace(/\s/g, '-')
    let responseImage = await fetch('https://api.teleport.org/api/urban_areas/slug:'+city.toLowerCase()+'/images/')
    if (responseImage.status == 200) {
      let dataImage = await responseImage.json()
      dispatch(getBackgroungImg(dataImage.photos[0].image.mobile))
      dispatch(toggleLoader(false))

    }else{
      dispatch(getBackgroungImg(null))
      dispatch(toggleLoader(false))
    }


  }
};
