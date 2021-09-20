function autocomplete(input, latInput, lngInput){
    console.log("hola");
    if(!input) return;
    const dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });
    input.on('keydown', (e) => {
        console.log("hola");
        if(e.keycode === 13) e.preventDefault();
    });
}

export default autocomplete;