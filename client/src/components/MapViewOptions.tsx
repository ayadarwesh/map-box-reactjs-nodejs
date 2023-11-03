
const MapViewOptions = ({valueUpdated}:any ) =>{
  return (<div id="menu">
          <input onChange={ event => valueUpdated(event.target.id) }  id="satellite-streets-v12" type="radio" name="rtoggle" value="satellite" />
              <label htmlFor="satellite-streets-v12">satellite streets</label>
              <input  onChange={ event => valueUpdated(event.target.id) }  id="light-v11" type="radio" name="rtoggle" value="light"/>
                  <label htmlFor="light-v11">light</label>
                  <input  onChange={ event => valueUpdated(event.target.id) }  id="dark-v11" type="radio" name="rtoggle" value="dark"/>
                      <label htmlFor="dark-v11">dark</label>
                      <input  onChange={ event => valueUpdated(event.target.id) }  id="streets-v12" type="radio" name="rtoggle" value="streets"/>
                          <label htmlFor="streets-v12">streets</label>
                          <input  onChange={ event => valueUpdated(event.target.id) }  id="outdoors-v12" type="radio" name="rtoggle" value="outdoors"/>
                              <label htmlFor="outdoors-v12">outdoors</label>
      </div>
  );
}
export default MapViewOptions;
