const express = require('express');
const router = express.Router();

let locationStorage = {
    location: [],
}

router.post('/add-location',(req, res, next)=>{
    const id = Math.random();
    locationStorage.location.push({
        id: id, 
        address: req.body.address,
        coords: {lat: req.body.lat, lng: req.body.lng}});

    res.json({message: 'Location Stored!', locId: id});
});


router.get('/location/:locId',(req, res, next)=>{
    //to change the location Id to a number rather than default string it comes with
    //we add a plus  + sign
    const locationId = +req.params.locId;
    console.log(locationId);
    const location = locationStorage.location.find(loc =>{
        return loc.id === locationId;
    })
    if(!location){
         res.status(404).json({message:'Not Found'});
        return;
    }
    res.json({address: location.address, coordinates: location.coords});

});

module.exports =router;