import moment from 'moment';

const ListCard = ({note}) => {
  return (
    <div className="general_note_wrapper mb-20">
        <ul>
            <li>Id: <b>{note?.appointment_id}</b></li>
            <li>Date: <b>{moment(note?.created_at).format('MMMM D, YYYY h:mm A')}</b></li>
            <li>Note: { <b dangerouslySetInnerHTML={{ __html: note?.note }} /> }</li>
        </ul>
    </div>
  )
}

export default ListCard;
