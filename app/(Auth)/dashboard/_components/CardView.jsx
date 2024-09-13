import Image from 'next/image'

export const CardView = ({tittle, count, image}) => {
  return (
    <div className="col-xl-4 col-sm-12"> 
        <div className="card">
            <div className="card-body student-3 card_wht_bg">
                <div className="d-flex gap-2 align-items-end"> 
                    <div className="flex-grow-1">
                        <p> {tittle}</p>                            
                        <div className="d-flex student-arrow text-truncate">
                        <p className="mb-0 text-truncate">{count} </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <Image src={image} alt="" height={90} width={90} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
