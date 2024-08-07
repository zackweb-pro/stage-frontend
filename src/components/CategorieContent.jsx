import Title from "./Title";
import "../css/dashboard-content.css";
import Logo from './Logo';
import Demandes from './Demandes'
import Categories from "./Categories"
import SearchBar from "./SearchBar"
import AchatsCategorie from "./AchatsCategorie"
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

export default function DashboardContent(){
    function options(){
        let c = [];
        for(let i = 1; i<16; i++){
            c.push(<option value={i}>{i}</option>)
             
        }
        return c;
    }
    return(
        <main className='dashboard-content traitement-demande'>
            <div className="searching-title">
            <Title content="Les achats par categorie" fontsize="30px"/> 
            <SearchBar></SearchBar>
            </div>
            <Logo/>
            <Categories></Categories>
            <AchatsCategorie></AchatsCategorie>
            <div className="control-achat-non-confirmee">
                <div className="arrow-control-sec">
                <LuArrowLeft className="arrow-control"></LuArrowLeft>
                <div className="page-number">1</div>
                <div className="all-pages">/14</div>
                <LuArrowRight className="arrow-control"></LuArrowRight>
                </div>
                <div className="confirmation-buttons">
                    <form action="">
                    <button className="confirm-btn">confirmer</button>
                    <span style={{display: "inline-block", margin: "0 10px"}}></span>
                    <button className="cancel-btn"> <div className="cancel-text-container">non confirmer</div></button>
                    </form>
                </div>
                <div className="control-per-line">
                    <p>lignes par page</p>
                    <select className="select-pages" name="" id="">
                        {...options()}
                    </select>
                </div>
            </div>
        </main>
    );
}