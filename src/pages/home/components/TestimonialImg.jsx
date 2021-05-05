

export default function TestimonialImg({ source, img }) {
    return (
        <div className="img">
            <picture>
                <source media="(max-width: 767px)" srcSet={source} />
                <img data-flickity-lazyload={img} alt="" />
            </picture>
        </div>
    )
}
