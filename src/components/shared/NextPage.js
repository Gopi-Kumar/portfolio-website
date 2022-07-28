import '../../styles/css/NewPage.css';
import display from '../../scripts/displayPage'
const NextPage = (props) => {

    return (
       <div className="next_page" onClick={e => display(props.page)}>
            <i className="fa-solid fa-arrow-right"></i>
       </div>
    )

}

export default NextPage;
