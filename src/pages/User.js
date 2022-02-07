import { useParams } from 'react-router-dom';

function UserPage(){
    const params = useParams();
    console.log(params);
    return <p>{Number.parseInt(params.id)}</p>
}

export default UserPage;