import Image from 'next/image'
import Link from 'next/link'

export const SingleCard = () => {
  return (
    <div className="col-lg-4">
        <div className="blog-grid">
            <div className="blog-img">                
                <Link href="#">
                    <Image src="/assets/images/news and events/iStock-1171697897.jpg" title="" alt="" height={280} width={200} />
                </Link>
            </div>
            <div className="blog-info mt-20 mb-20">
                <div className="text-center">MSK Ultrasound Injection</div>
            </div>
        </div>
    </div>
  )
}
