import { useEffect, useState } from "react";
import Subtitle from "../../../Subtitle/Subtitle";
import MenuItem from "../MenuItem/MenuItem";


const PopulerMenu = () => {
    const[menu,setMenu]=useState([]);
    useEffect(()=>{
fetch('menu.json')
.then(res=>res.json())
.then(data=>{
    const menuData=data.filter(item =>item.category=='popular')
    setMenu(menuData)})
},[])
    return (
        <section className='mb-12'>
<Subtitle
heading={'from Your Menu'}
subheading={'Populer Menu'}
></Subtitle>
<div className='grid md:grid-cols-2 grid-cols-1 gap-11'>
    {
        menu.map(iteam =><MenuItem key={iteam?._id} iteam={iteam}></MenuItem>)
    }
</div>
        </section>
    );
};

export default PopulerMenu;