import React, { useEffect, useRef } from 'react';
import testImg2 from '../image/bob.jpg';
import exif from 'exif-js';
import * as exirf from 'exifr';
import loadImage from 'blueimp-load-image';
import exifreader from 'exifreader';


const ExifTest = (props) => {

    const imgRef = useRef(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        
        if (imgRef != undefined) {
            // console.log('sdf');
            // console.log(`this : ${this}`);

            // console.log(`imgref : ${imgRef}`);
            // const tt = document.querySelector('.test');
            // console.log(`imggg : ${tt}`);

            // // const output = exif.
            // exif.getData(tt.file,async ()=>{
            //     console.log(`getdata : ${tt}`);
            //     const make = await exif.getTag( tt.file,"Make");
            //     console.log(`make : ${make}`);
    
            //     const allMetaData = exif.getAllTags(tt);
            //     console.log(`allMetaData : `, allMetaData);
            
            // })
            // await getGps();
            // exirf.gps('../image/bbb.jpg').then(console.log).catch(console.error);

        const tag = await exifreader.load(testImg2,{expanded: true})
        .then((data)=>{
            console.log(`tags : `,data);
            console.log("DateTime : ",data.exif.DateTime.description);
            console.log("")
        });
        //    const imageDate = tag['GPSAltitude'];
        

            // console.log(`dateTime : ${tag['DateTime'].description}`);
            // console.log(`gps : ${tag['GPSAltitude']}`);

        }


        console.log('image : ',testImg2)
    },[])

    return (
        <section>
            <h1>dd</h1>
            <img className='test' ref={imgRef} src={testImg2} alt="aa" />
        </section>
    );
};

export default ExifTest;