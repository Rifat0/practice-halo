import Image from "next/image"

export const OfferCardDesign2 = () => {
  return (
    <div className="d-flex offer-section-wrapper col-xl-12 col-md-12 col-sm-12 justify-content-center align-content-center mt-20 p-3">
      <div className="rt-box ml-20 align-self-center">
        <div className="offer-inner-section-wrapper">
          <h1 className="mb-20 mt-20">Microneedling</h1>
          <p>Regular Price: $299 </p>
          <p>Sale Price: $199</p>
          <button className="btn  btn-primary " type="button" data-bs-toggle="" aria-haspopup="true" aria-expanded="false">Buy and Book</button>
        </div>
      </div>
      <div className="lft-box">
        <Image alt="" src="/assets/images/offer/botox_pic2.png"  width={300} height={300} />
      </div>
    </div>
  )
}
