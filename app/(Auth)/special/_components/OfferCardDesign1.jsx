import Image from "next/image"

export const OfferCardDesign1 = () => {
  return (
    <div className="d-flex offer-section-wrapper col-xl-12 col-md-12 col-sm-12 justify-content-center align-content-center mt-20 p-3">
        <div className="lft-box">
            <Image alt="" src="/assets/images/offer/botox_pic1.png" width={300} height={300} />
        </div>
        <div className="rt-box ml-20">
            <div className="offer-inner-section-wrapper align-self-center">
            <h1 className="mb-20 mt-20">Botox</h1>
            <p>Regular Price: $15  </p>
            <p>Sale Price: $9.99</p>

            <p>New Patient Special</p>
            <p>20 Units of Botox for $179. (Limit 2)</p>

            <p>**Minimum purchase of 20 units, <br />maximum purchase of 50 units at this price** </p>
            <button className="btn  btn-primary " type="button" data-bs-toggle="" aria-haspopup="true" aria-expanded="false">Buy and Book</button>
            </div>
            
        </div>
    </div>
  )
}
