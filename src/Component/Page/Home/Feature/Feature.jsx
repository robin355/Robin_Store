import Subtitle from "../../../Subtitle/Subtitle";
import featre from '../../../../assets/home/featured.jpg'
import './Feature.css'
const Feature = () => {
    return (
        <div>
            <section className="feature-iteam text-white">
                <Subtitle subheading='---cheack it our---' heading='From Your MENU'></Subtitle>
         <p className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featre} alt="" />
                </div>
                <div className="md:ml-8">
                    <h4 className="uppercase">March 20,2023</h4>
                    <h5 className="uppercase">Wher are From Your Menu</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi commodi consequuntur ad repellat dignissimos unde corrupti doloribus quisquam voluptatibus consequatur maiores, tempora a quia, nulla qui vero sapiente ipsam nesciunt.
</p>
<button className="btn btn-outline">Order now</button>
                </div>
        </p>
            </section>
            
        </div>
    );
};

export default Feature;