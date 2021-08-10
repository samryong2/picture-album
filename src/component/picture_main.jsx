import React, { useEffect, useRef } from 'react';
import testImg from '../image/test.jpg';
import testImg2 from '../image/bbb.jpg';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';

const PictureMain = (props) => {

    const imgRef = useRef(null);

    // const coco = cocoSsd.load();

    useEffect(()=>{
        if (imgRef.current != undefined) {   
            cocoSsd.load().then(model =>{
                // console.log(`img : ${imgRef}`);
                const test = document.querySelector('.test');
                model.detect(test).then(detection =>{
                    console.log(`detection : `,detection);
                })
            })
        }
    },[])


    return (
        <section>

            <img className='test' ref={imgRef} src={testImg2} alt="aa" />

        </section>
    );
};

export default PictureMain;