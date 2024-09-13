import ListCard from "@/components/ListCard";
import { getGeneralNotes } from "@/lib/getData";
import Image from "next/image";

export const GeneralNotes = async () => {
    const generalNotes = await getGeneralNotes();

    return (
        <div className="col-xl-6 col-md-6 col-sm-12 mb-20">
            <div className="card card-round">
                <div className="card-header"><h4>General Notes</h4></div>
                
                <div className="card-body align-items-center text-center">
                    {
                        (generalNotes.data?.data.length > 0) ? (
                            generalNotes.data.data.map((note, index) => (
                                <ListCard key={index} note={note} />
                            ))
                        ) : (
                            <Image className="img-fluid for-light" src="/assets/images/user/note-remove.png" alt="" height={50} width={50} />
                        )                    
                    }
                </div>
            </div>
        </div>
    )
}
