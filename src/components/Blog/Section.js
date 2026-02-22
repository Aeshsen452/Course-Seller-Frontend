import BlogImage1 from "../../assets/images/BlogBanner1.png"
import BlogImage2 from "../../assets/images/BlogBanner2.png"
import BlogImage3 from "../../assets/images/BlogBanner3.png"
import BlogImage4 from "../../assets/images/Program-info/2.png"
import BlogImage5 from "../../assets/images/Program-info/3.png"
import CardComponent from "../Program-Teaching/CardComponent"


const Section = () => {
    const cardcontent = [
        {
            image: BlogImage1,
            ref: "/blog/create-account",
            subheading: "How to Create An account?",
            title: "Read Now >>"

        },
        {
            image: BlogImage2,
            ref: "/blog/4",
            subheading: "Copyright Information",
            title: "Read Now >>"

        },
        {
            image: BlogImage3,
            ref: "/blog/1",
            subheading: "Plurals of Nouns",
            title: "Read Now >>"

        },
        {
            image: BlogImage4,
            ref: "/blog/2",
            subheading: "Syllables",
            title: "Read Now >>"

        }, {
            image: BlogImage5,
            ref: "/blog/3",
            subheading: "Suffixes",
            title: "Read Now >>"

        }
    ];
    return (
        <>
            <h1 className="text-center font-bold text-3xl">Blogs</h1>
            <p className="text-center my-5">No matter your age, we can help you learn the basics of written and spoken English through phonics.</p>
            <div className="flex flex-wrap gap-10 justify-center items-center py-24">
                {cardcontent.map((item, index) => (
                    <CardComponent
                        key={index}
                        img={item.image}
                        ref={item.ref}
                        title={item.title}
                        subheading={item.subheading}
                    />
                ))}
            </div>
        </>
    )
}

export default Section