const product = 
{

    fakeDB : [],

    init()
    {
        /*ask how add the images...*/
        this.fakeDB.push({title:'Ottawa',description:`Bright, Clean, Private. In the Heart of Downtown!`,details:'6 guests - 2 bedrooms - 3 beds - 1 bath',price:`$130/night`});
    
        this.fakeDB.push({title:'Calgary',description:`2BR Condo 10-15 Min to Dowmtown`,details:'5 guests - 2 bedrooms - 5 beds - 1 bath',price:`$110/night`});
    
        this.fakeDB.push({title:'Toronto',description:`Awesome New Toronto Experience`,details:'5 guests - 2 bedrooms - 4 beds - 1 bath',price:`$120/night`});

        this.fakeDB.push({title:'Vancouver',description:`Amazing!! Full, 2BR+2BA+Parking+AC`,details:'5 guests - 2 bedrooms - 3 beds - 2 baths',price:`$170/night`});

    },
    getAllProducts()
    {
        return this.fakeDB;
    }


}

product.init();
module.exports=product;