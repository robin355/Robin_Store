

const Subtitle = ({heading,subheading}) => {
    return (
        <div className="mx-auto text-center my-8 md:w-4/12">
<p className="text-yellow-600 mb-2">--- {subheading} ---</p>
<p className="text-3xl  border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default Subtitle;