import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faRing, faShield, faTicket, faTruck } from '@fortawesome/free-solid-svg-icons';
import CustomNumeralNumericFormat from '../../Components/Price/Price';
import { useDispatch } from 'react-redux';

export default function ProductInData({name,price,id,img}) {

    const dispatch = useDispatch();
    
   const HndleAddToCart=()=>{
        dispatch({
            type:"cartslice/addToCart",
            payload:{
                product_name:name,
                product_price:price,
                product_id:id,
                product_img:img,
                product_count:1
            }
        })
    }

  return (
    <div className="row">
    <div className='col-xxl-4 col-xl-4 col-md-12 col-sm-12 col-12'>
             <div>
               <div className='w-50'>
                           <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: `/./assets/p${id}.jpg`
                            },
                            largeImage: {
                              src: `./assets/p${id}.jpg`,
                              width: 800,
                                height: 800
                            }
                        }} />
                </div>
             </div>
     </div>
     <div className='col-xxl-4 col-xl-4 col-md-12 col-sm-12 col-12'>
             <div>
                           <div>
                                <h4 className='inline-block mt-4 mx-5 font-bold text-2xl'>{name}</h4>
                           </div>
                           <hr className='mt-4'/>
                           <div className='mt-3'>
                               <p>اندازه : 1.04 گرم</p>
                           </div>
                           <div className='mt-3'>
                             <ul className='p-0'>
                               <li className='font-bold'><p>  ویژگی ها: </p></li>
                               <li className='mt-3'><p>اقلام ست : گوشواره ، پلاک ، انگشتر</p></li>
                               <li className='mt-3'><p>عیار پلاک : 18 عیار</p></li>
                               <li className='mt-3'><p>نحوه بسته شدن گوشواره : میخی</p></li>
                               <li className='mt-3'><p><b>دسته بندی : </b> گوشواره</p></li>
                                <li className='mt-10'>
                                  <p> <b>توضیحات : </b>
                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                                   و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم 
                                   افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام 
                                   و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سو
                                   الات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                  </p>
                                </li>
                             </ul>
                           </div>
                </div>
        </div>
        <div className='col-xxl-4 col-xl-4 col-md-12 col-sm-12 col-12 text-center'>

            <div className="sm:text-center">
            <div className='mt-5 sm:inline-block'>
                  <div className='rounded-lg w-full bg-white shadow-md py-4'>
                        <ul className='p-0'>
                          <li className='pt-3 px-2'><p> <FontAwesomeIcon className='mx-2' icon={faCheck}/> وضعیت : موجود</p></li>
                          <li className='mt-3 flex justify-center'><hr className=' w-80'/></li>
                          <li className='mt-3 px-2'>
                            <p> <FontAwesomeIcon className='mx-2' icon={faRing}/> نوع محموله : طلا</p>
                          </li>
                          <li className='mt-3 flex justify-center'><hr className=' w-80'/></li>
                          <li className='mt-4 px-2'>
                            <p> <FontAwesomeIcon className='mx-2' icon={faShield}/> گارانتی اصالت و سلامت فیزیکی کالا</p>
                          </li>
                          <li className='mt-3 flex justify-center'><hr className=' w-80'/></li>
                          <li className="mt-4 px-2">
                            <p> <FontAwesomeIcon className='mx-2' icon={faTicket}/> کد تخفیف : اعمال نشده</p>
                          </li>
                          <li className='mt-3 flex justify-center'><hr className=' w-80'/></li>
                          <li className='mx-3 mt-3'>
                            <div className='inline-block'><p>قیمت تمام شده : </p></div>
                            <div className='float-left'><p className='text-amber-400'>
                            <CustomNumeralNumericFormat
                                  value={price}
                                  thousandSeparator=","
                                  suffix={` تومان `}
                                />    
                            </p></div>
                          </li>
                          <li className='text-center'>
                            <div onClick={HndleAddToCart} className='bg-blue-950 cursor-pointer transition hover:bg-amber-400 py-3 mt-5 px-20 rounded-lg inline-block'>
                                      <p className='text-white'>افزودن به سبد خرید</p>
                            </div>
                          </li>
                        </ul>
                   </div>
             </div>
            </div>
         </div>

</div>
  )
}
