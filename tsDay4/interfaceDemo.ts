export{}
interface Laptop{   // act like as a template for my objects
 brandName : String,
 cost:number,
 ramSize:number
};

let hpDevice:Laptop={ // A laptop object based on above interface Laptop
    brandName:'HP',
    cost:2000,
    ramSize:16
}
let dellDevice:Laptop={
    brandName:'HP',
    cost:3000,
    ramSize:8
}

let arr:Laptop[] = [hpDevice,dellDevice];

let appleDevice:Laptop={
    brandName:'Apple',
    cost:3500,
    ramSize:8
}

arr.push(appleDevice);

console.log(arr);

doThis(arr);
function doThis(arr2:Laptop[]):void
{
    console.log('inside doThis---');
    arr2.forEach((device)=>{
        console.log(device);
        if(device.brandName == 'Apple')
        {
            console.log(device);
        }
    })
}


